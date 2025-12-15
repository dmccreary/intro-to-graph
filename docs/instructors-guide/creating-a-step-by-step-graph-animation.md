# Creating a Step-by-Step Graph Animation

This guide provides comprehensive standards and patterns for creating interactive step-by-step graph algorithm visualizations using p5.js. These MicroSims allow students to understand algorithms by watching them execute one step at a time or running automatically at a controlled speed.

## Overview

Step-by-step graph animations are powerful teaching tools that help students:

- Visualize how graph algorithms make decisions
- Understand the order of operations
- See which elements are being considered, accepted, or rejected
- Track algorithm progress through a visual log
- Control the pace of learning through manual stepping or auto-run

## Standard Layout

The recommended layout divides the canvas into distinct functional areas:

```
┌─────────────────────────────────────────────────────────────┐
│                         Title                                │
├────────────────────────────────┬────────────────────────────┤
│                                │                            │
│                                │        Step Log            │
│       Graph Visualization      │                            │
│       (Left 2/3 of canvas)     │    (Right 1/3 of canvas)   │
│                                │                            │
│                                │                            │
├────────────────────────────────┴────────────────────────────┤
│                      Control Panel                           │
│  [Algorithm Select] [Step] [Auto Run] [Reset]               │
│  Animation Speed: ___ms    Slower ═══════════════ Faster    │
│  Status: Current step description                           │
│  Progress: X/Y edges  |  Total Weight: Z                    │
└─────────────────────────────────────────────────────────────┘
```

### Layout Proportions

| Area | Position | Size |
|------|----------|------|
| Graph Center | `canvasWidth * 0.34` | Left portion |
| Step Log | `canvasWidth * 0.67` | Right 30% |
| Drawing Area | Top | `drawHeight` (500px default) |
| Control Panel | Bottom | `controlHeight` (150px default) |

## Canvas Structure

### Dimension Variables

```javascript
// Canvas dimensions - REQUIRED structure
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 210;
let defaultTextSize = 16;
```

### Setup Function

```javascript
function setup() {
  updateCanvasSize();  // Get container width first
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  initializeGraph();
  createControls();

  describe('Description for accessibility', LABEL);
}
```

### Draw Function Structure

```javascript
function draw() {
  updateCanvasSize();

  // Drawing area (light background)
  fill('aliceblue');
  rect(0, 0, width, drawHeight);

  // Control area (white background)
  fill('white');
  rect(0, drawHeight, width, controlHeight);

  // Draw border
  stroke('silver');
  noFill();
  rect(0, 0, width, drawHeight);

  // Draw title
  fill('black');
  textSize(28);
  textAlign(CENTER, TOP);
  noStroke();
  text('Algorithm Name Visualizer', canvasWidth/2, 10);

  // Reset to default settings
  stroke(0);
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Draw components
  drawEdges();
  drawNodes();
  drawStepLog();

  // Auto-run animation
  if (isRunning && !isComplete) {
    if (millis() - lastStepTime > animationSpeed) {
      executeNextStep();
      lastStepTime = millis();
    }
  }

  drawControlLabels();
}
```

## Data Structures

### Graph Representation

```javascript
// Graph data structures
let nodes = [];
let edges = [];
let resultEdges = [];  // Edges in the result (e.g., MST)
let nodeCount = 8;
let nodeRadius = 15;

// Node structure
{
  id: 0,
  x: 100,
  y: 200,
  label: 'A'
}

// Edge structure
{
  from: 0,      // Source node ID
  to: 1,        // Target node ID
  weight: 75,   // Edge weight (if applicable)
  state: 'available'  // available, considering, accepted, rejected
}
```

### Algorithm State Variables

```javascript
// Algorithm state
let currentAlgorithm = 'algorithm1';
let animationSpeed = 500;  // milliseconds between steps
let isRunning = false;     // Auto-run enabled
let isComplete = false;    // Algorithm finished

// Execution tracking
let stepIndex = 0;
let consideredElement = null;
let rejectedElements = [];
let stepDescription = '';
let lastStepTime = 0;
let stepLog = [];  // Log of all steps taken
```

## UI Controls

### Control Creation

```javascript
function createControls() {
  // Algorithm selector (if multiple algorithms)
  algorithmSelect = createSelect();
  algorithmSelect.option('Algorithm 1', 'algo1');
  algorithmSelect.option('Algorithm 2', 'algo2');
  algorithmSelect.position(10, drawHeight + 15);
  algorithmSelect.changed(() => {
    currentAlgorithm = algorithmSelect.value();
    resetAlgorithm();
  });

  // Step button - advances one step
  stepButton = createButton('Step Forward');
  stepButton.position(180, drawHeight + 15);
  stepButton.mousePressed(() => {
    if (!isComplete) {
      executeNextStep();
    }
  });

  // Auto Run button - toggles automatic execution
  autoRunButton = createButton('Auto Run');
  autoRunButton.position(290, drawHeight + 15);
  autoRunButton.mousePressed(toggleAutoRun);

  // Reset button - restarts with new random graph
  resetButton = createButton('Reset');
  resetButton.position(380, drawHeight + 15);
  resetButton.mousePressed(() => {
    initializeGraph();
  });

  // Speed slider (inverted: left=slow, right=fast)
  speedSlider = createSlider(100, 2000, 1600, 100);
  speedSlider.position(sliderLeftMargin, drawHeight + 60);
  speedSlider.size(canvasWidth - sliderLeftMargin - margin);
  speedSlider.input(() => {
    // Invert: slider 100 = 2000ms (slow), slider 2000 = 100ms (fast)
    animationSpeed = 2100 - speedSlider.value();
  });
  animationSpeed = 2100 - speedSlider.value();
}
```

### Auto-Run Toggle

```javascript
function toggleAutoRun() {
  if (isComplete) return;

  isRunning = !isRunning;
  autoRunButton.html(isRunning ? 'Pause' : 'Auto Run');

  if (isRunning) {
    lastStepTime = millis();
  }
}
```

### Control Labels

```javascript
function drawControlLabels() {
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  noStroke();

  // Speed slider label
  text('Animation Speed: ' + animationSpeed + 'ms', 10, drawHeight + 70);

  // Slower/Faster labels above the slider
  textSize(defaultTextSize - 4);
  fill(100);
  textAlign(LEFT, BOTTOM);
  text('Slower', sliderLeftMargin, drawHeight + 57);
  textAlign(RIGHT, BOTTOM);
  text('Faster', canvasWidth - margin, drawHeight + 57);

  // Reset alignment for status information
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(14);
  text('Status: ' + stepDescription, 10, drawHeight + 100);
  text(`Progress: ${resultEdges.length}/${nodeCount - 1}`, 10, drawHeight + 120);
}
```

## Step Execution Pattern

### Main Execution Function

```javascript
function executeNextStep() {
  if (isComplete) return;

  // Dispatch to appropriate algorithm
  if (currentAlgorithm === 'algo1') {
    executeAlgo1Step();
  } else {
    executeAlgo2Step();
  }

  // Check for completion
  if (isAlgorithmComplete()) {
    isComplete = true;
    isRunning = false;
    stepDescription = 'Complete! Final result achieved.';
    stepLog.push({ type: 'complete', text: '★ Complete!' });
    autoRunButton.html('Auto Run');
  }
}
```

### Algorithm Step Function Template

```javascript
function executeAlgorithmStep() {
  // Get next element to consider
  let element = getNextElement();
  if (!element) {
    isComplete = true;
    return;
  }

  // Evaluate the element
  if (shouldAccept(element)) {
    // Accept the element
    resultEdges.push(element);
    element.state = 'accepted';
    stepDescription = `Accepted: ${describeElement(element)}`;
    stepLog.push({
      type: 'accepted',
      text: `✓ ${shortDescription(element)}`
    });
  } else {
    // Reject the element
    rejectedElements.push(element);
    element.state = 'rejected';
    stepDescription = `Rejected: ${describeElement(element)} - reason`;
    stepLog.push({
      type: 'rejected',
      text: `✗ ${shortDescription(element)} - reason`
    });
  }

  stepIndex++;
}
```

### Reset Function

```javascript
function resetAlgorithm() {
  isRunning = false;
  isComplete = false;
  resultEdges = [];
  rejectedElements = [];
  stepIndex = 0;
  consideredElement = null;
  stepLog = [];
  stepDescription = 'Click "Step Forward" or "Auto Run" to begin';

  // Reset element states
  edges.forEach(e => e.state = 'available');

  // Initialize algorithm-specific data structures
  initializeAlgorithmState();

  if (autoRunButton) {
    autoRunButton.html('Auto Run');
  }
}
```

## Visual Styling

### Node Drawing

```javascript
function drawNodes() {
  textAlign(CENTER, CENTER);
  textSize(16);

  for (let node of nodes) {
    // Color based on state
    if (isNodeVisited(node)) {
      fill(100, 200, 100);  // Light green for visited
    } else {
      fill(70, 130, 180);   // Steel blue default
    }

    stroke(0);
    strokeWeight(2);
    ellipse(node.x, node.y, nodeRadius * 2, nodeRadius * 2);

    fill(255);  // White text
    noStroke();
    text(node.label, node.x, node.y);
  }
}
```

### Edge Drawing

```javascript
function drawEdges() {
  for (let edge of edges) {
    let fromNode = nodes[edge.from];
    let toNode = nodes[edge.to];

    // Determine color and width based on state
    let edgeColor, edgeWidth;
    if (edge.state === 'accepted') {
      edgeColor = color(255, 215, 0);  // Gold
      edgeWidth = 4;
    } else if (edge.state === 'rejected') {
      edgeColor = color(200, 200, 200);  // Light gray
      edgeWidth = 1;
    } else if (edge === consideredElement) {
      edgeColor = color(255, 255, 0);  // Yellow (considering)
      edgeWidth = 3;
    } else {
      edgeColor = color(128, 128, 128);  // Gray default
      edgeWidth = 2;
    }

    stroke(edgeColor);
    strokeWeight(edgeWidth);
    line(fromNode.x, fromNode.y, toNode.x, toNode.y);

    // Draw weight label (fitted rectangle)
    let midX = (fromNode.x + toNode.x) / 2;
    let midY = (fromNode.y + toNode.y) / 2;
    textSize(12);
    let weightText = String(edge.weight);
    let textW = textWidth(weightText);
    let padding = 4;
    fill(240, 248, 255);  // Aliceblue background
    noStroke();
    rectMode(CENTER);
    rect(midX, midY, textW + padding * 2, 18, 3);
    rectMode(CORNER);
    fill(0);
    textAlign(CENTER, CENTER);
    text(weightText, midX, midY);
  }
}
```

### Color Standards

| Element State | Color | RGB Value |
|---------------|-------|-----------|
| Node default | Steel blue | `(70, 130, 180)` |
| Node visited | Light green | `(100, 200, 100)` |
| Edge default | Gray | `(128, 128, 128)` |
| Edge accepted | Gold | `(255, 215, 0)` |
| Edge rejected | Light gray | `(200, 200, 200)` |
| Edge considering | Yellow | `(255, 255, 0)` |
| Edge label bg | Aliceblue | `(240, 248, 255)` |

## Step Log

The step log provides a running history of algorithm decisions, helping students trace the execution.

### Log Data Structure

```javascript
let stepLog = [];

// Log entry structure
{
  type: 'accepted',  // 'accepted', 'rejected', or 'complete'
  text: '✓ A-B (75)'
}
```

### Drawing the Step Log

```javascript
function drawStepLog() {
  // Position on right side
  let logX = canvasWidth * 0.67;
  let logY = 50;
  let logWidth = canvasWidth * 0.30;
  let logHeight = drawHeight - 70;
  let lineHeight = 22;

  // Draw background
  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(logX, logY, logWidth, logHeight, 8);

  // Draw title
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  text('Step Log', logX + logWidth / 2, logY + 10);

  // Draw entries (auto-scroll to show recent)
  textAlign(LEFT, TOP);
  textSize(14);

  let maxVisible = floor((logHeight - 50) / lineHeight);
  let startIndex = max(0, stepLog.length - maxVisible);

  for (let i = startIndex; i < stepLog.length; i++) {
    let entry = stepLog[i];
    let yPos = logY + 40 + (i - startIndex) * lineHeight;

    // Color by type
    if (entry.type === 'accepted') {
      fill(34, 139, 34);      // Forest green
    } else if (entry.type === 'complete') {
      fill(184, 134, 11);     // Dark goldenrod
    } else {
      fill(178, 34, 34);      // Firebrick red
    }

    text(`${i + 1}. ${entry.text}`, logX + 15, yPos);
  }

  // Empty state message
  if (stepLog.length === 0) {
    fill(128);
    textAlign(CENTER, CENTER);
    text('No steps yet', logX + logWidth / 2, logY + logHeight / 2);
  }
}
```

### Log Entry Types and Symbols

| Type | Symbol | Color | Usage |
|------|--------|-------|-------|
| Accepted | ✓ | Forest green | Element added to result |
| Rejected | ✗ | Firebrick red | Element skipped/rejected |
| Complete | ★ | Dark goldenrod | Algorithm finished |

## Responsive Design

### Window Resize Handler

```javascript
function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Reposition nodes proportionally
  let graphCenterX = canvasWidth * 0.34;
  for (let node of nodes) {
    let angle = (TWO_PI / nodeCount) * node.id - HALF_PI;
    let radius = min(canvasWidth * 0.5, drawHeight - 100) * 0.35;
    node.x = graphCenterX + cos(angle) * radius;
    node.y = drawHeight / 2 + sin(angle) * radius;
  }
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;

    // Resize slider
    if (typeof speedSlider !== 'undefined') {
      speedSlider.size(canvasWidth - sliderLeftMargin - margin);
    }
  }
}
```

## Best Practices

### 1. Clear Visual Feedback
- Use distinct colors for different states
- Animate transitions between states when possible
- Highlight the currently considered element

### 2. Informative Status Messages
- Explain what happened in each step
- Include relevant values (weights, counts)
- State why elements were rejected

### 3. Accessible Controls
- Place frequently used controls prominently
- Use intuitive labels ("Slower" / "Faster" not just values)
- Provide both manual and automatic modes

### 4. Educational Value
- Show intermediate state, not just final result
- Log all decisions for review
- Allow students to control the pace

### 5. Consistent Layout
- Follow the standard layout across all algorithm visualizations
- Use consistent color schemes
- Maintain the same control positions

## Example: Adapting for Different Algorithms

This pattern can be adapted for various graph algorithms:

- **Minimum Spanning Tree**: Kruskal's, Prim's
- **Shortest Path**: Dijkstra's, Bellman-Ford
- **Graph Traversal**: BFS, DFS
- **Network Flow**: Ford-Fulkerson
- **Matching**: Hungarian algorithm

For each algorithm, modify:

1. The `executeAlgorithmStep()` function with algorithm logic
2. The acceptance/rejection criteria
3. The step log messages
4. Any algorithm-specific state variables
5. Node/edge coloring based on algorithm state

## Reference Implementation

See the complete Minimum Spanning Tree MicroSim at:
`docs/sims/minimum-spanning-tree/minimum-spanning-tree.js`

This implementation demonstrates all the patterns described in this guide with both Kruskal's and Prim's algorithms.
