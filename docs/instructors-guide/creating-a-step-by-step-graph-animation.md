# Creating a Step-by-Step Graph Animation

This guide provides comprehensive standards and patterns for creating interactive step-by-step graph algorithm visualizations using p5.js. These MicroSims allow students to understand algorithms by watching them execute one step at a time or running automatically at a controlled speed.

## Overview

Step-by-step graph animations are powerful teaching tools that help students:

- Visualize how graph algorithms make decisions
- Understand the order of operations
- See which elements are being considered, accepted, or rejected
- Track algorithm progress through a visual log
- Control the pace of learning through manual stepping or auto-run

The key insight behind these visualizations is that algorithms are easier to understand when you can see each decision being made. Rather than showing only the final result, we reveal the process—showing students *why* certain edges are chosen and others rejected.

## Standard MicroSim Layout



The recommended layout divides the canvas into distinct functional areas. This consistent structure helps students quickly orient themselves when using different algorithm visualizations.

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

The **graph visualization** occupies the left portion where students can see nodes and edges change state as the algorithm progresses. The **step log** on the right provides a textual record of each decision, allowing students to review the algorithm's history. The **control panel** at the bottom gives students complete control over execution.

### Layout Proportions

These proportions have been tested to provide good visual balance across different screen sizes:

| Area | Position | Size |
|------|----------|------|
| Graph Center | `canvasWidth * 0.34` | Left portion |
| Step Log | `canvasWidth * 0.67` | Right 30% |
| Drawing Area | Top | `drawHeight` (500px default) |
| Control Panel | Bottom | `controlHeight` (150px default) |

## Canvas Structure

### Dimension Variables

We begin by defining global variables that control the canvas layout. Keeping these as variables (rather than hard-coded values) makes the visualization responsive and easy to adjust.

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

The `drawHeight` separates the visualization area from the controls. The `controlHeight` provides space for buttons, sliders, and status text. The `margin` and `sliderLeftMargin` ensure consistent spacing throughout the interface.

### Setup Function

The `setup()` function runs once when the page loads. It's responsible for creating the canvas, initializing the graph data, and creating the UI controls.

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

Notice that we call `updateCanvasSize()` *before* creating the canvas. This ensures our canvas matches the container width for responsive design. The `describe()` function provides accessibility support for screen readers.

### Draw Function Structure

The `draw()` function is called repeatedly by p5.js (typically 60 times per second). It's responsible for rendering the current state of the visualization and checking if it's time to execute the next algorithm step during auto-run mode.

```javascript
function draw() {
  updateCanvasSize();

  // Drawing area (light background)
  fill('aliceblue');
  // draw a light gray border around both drawing region and control region
  stroke('silver');
  rect(0, 0, width, drawHeight);
  // Control area (white background)
  fill('white');
  rect(0, drawHeight, width, controlHeight);

  // Draw title
  fill('black');
  textSize(28);
  textAlign(CENTER, TOP);
  noStroke();
  text('Algorithm Name Visualizer', canvasWidth/2, margin*.5);

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

The draw function follows a consistent pattern:

1. **Clear and set up backgrounds** - We draw the aliceblue drawing area and white control area fresh each frame
2. **Draw the title** - Centered at the top of the canvas
3. **Reset drawing settings** - Ensure consistent defaults before drawing components
4. **Draw graph components** - Edges first (so they appear behind nodes), then nodes, then the step log
5. **Handle auto-run timing** - Check if enough time has passed to execute the next step
6. **Draw control labels** - Status text and slider labels in the control area

## Data Structures

### Graph Representation

The graph is stored using simple JavaScript arrays and objects. This approach is easy to understand and manipulate, making it ideal for educational purposes.

```javascript
// Graph data structures
let nodes = [];
let edges = [];
let resultEdges = [];  // Edges in the result (e.g., MST)
let nodeCount = 8;
let nodeRadius = 15;
```

Each **node** contains its position, identifier, and display label:

```javascript
// Node structure
{
  id: 0,
  x: 100,
  y: 200,
  label: 'A'
}
```

The `id` is used internally to reference nodes in edges. The `x` and `y` coordinates determine where the node is drawn. The `label` (typically a letter A-H) is displayed to the user.

Each **edge** connects two nodes and tracks its current state in the algorithm:

```javascript
// Edge structure
{
  from: 0,      // Source node ID
  to: 1,        // Target node ID
  weight: 75,   // Edge weight (if applicable)
  state: 'available'  // available, considering, accepted, rejected
}
```

The `state` property is crucial for visualization. As the algorithm runs, edges transition through states: they start as `'available'`, may briefly be `'considering'` while being evaluated, and end up either `'accepted'` (included in the result) or `'rejected'` (excluded). Each state is rendered with a different color.

### Algorithm State Variables

Beyond the graph data, we need variables to track the algorithm's execution state:

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

These variables serve different purposes:

- **`currentAlgorithm`** - Allows switching between multiple algorithms (e.g., Kruskal's vs. Prim's)
- **`animationSpeed`** - Controls the delay between steps during auto-run (in milliseconds)
- **`isRunning`** - True when auto-run is active, false when paused or stepping manually
- **`isComplete`** - True when the algorithm has finished (prevents further steps)
- **`stepIndex`** - Tracks progress through the algorithm's work queue
- **`consideredElement`** - The edge currently being evaluated (highlighted in yellow)
- **`stepDescription`** - Human-readable text explaining the current/last step
- **`stepLog`** - Array of all steps for display in the log panel

## UI Controls

### Control Creation

The control panel provides four buttons and a slider. Each control is created using p5.js DOM functions and positioned absolutely within the canvas.

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

**Algorithm Selector**: A dropdown that lets users choose between algorithms. When changed, it resets the visualization to start fresh with the new algorithm.

**Step Forward Button**: Executes exactly one step of the algorithm. This is essential for detailed study—students can carefully examine each decision.

**Auto Run Button**: Toggles between automatic execution and paused state. The button label changes to "Pause" when running.

**Reset Button**: Generates a new random graph and resets all algorithm state. This lets students see the algorithm work on different inputs.

**Speed Slider**: Controls the delay between auto-run steps. Notice the inversion logic: we want "Slower" on the left (intuitive), but higher delay values mean slower animation. The formula `2100 - sliderValue` converts the slider's 100-2000 range into a 2000-100ms delay range.

### Auto-Run Toggle

The auto-run toggle function manages the running state and updates the button label to reflect the current mode:

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

When starting auto-run, we record the current time in `lastStepTime`. This ensures the first step doesn't execute immediately—it waits for the full `animationSpeed` delay, giving students time to observe the initial state.

### Control Labels

The control panel needs text labels to explain the slider and show current status. This function draws those labels, being careful to reset text alignment after drawing positioned labels.

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

**Important**: After drawing the right-aligned "Faster" label, we must reset `textAlign` back to `LEFT, CENTER`. Forgetting this will cause the status text to render off-screen. This is a common p5.js pitfall—drawing state persists between calls.

## Step Execution Pattern

The step execution pattern is the heart of the visualization. It separates the concerns of *when* to execute (timing/UI) from *what* to execute (algorithm logic).

### Main Execution Function

This function acts as a dispatcher, routing to the appropriate algorithm and checking for completion:

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

The early return on `isComplete` prevents any action after the algorithm finishes. After executing a step, we check if the algorithm is now complete (e.g., MST has n-1 edges). If so, we update the UI state and log the completion.

### Algorithm Step Function Template

Each algorithm step follows a consistent pattern: get the next element to consider, evaluate it, and either accept or reject it. This template can be adapted for any greedy graph algorithm:

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

The key educational value comes from the branching logic. Students see clearly that the algorithm makes a binary decision for each element: accept or reject. The `stepDescription` provides detailed context, while the `stepLog` entry provides a concise record.

For **Kruskal's algorithm**, the acceptance criterion is "does this edge create a cycle?" (using union-find). For **Prim's algorithm**, it's "does this edge connect a visited node to an unvisited node?"

### Reset Function

The reset function restores all state to initial values, preparing for a fresh run:

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

Notice that we reset both the general state (arrays, flags) and the visual state (edge states back to 'available'). The `initializeAlgorithmState()` call handles algorithm-specific setup—for Kruskal's, this sorts edges by weight and initializes union-find; for Prim's, it marks the starting node as visited and populates the priority queue.

## Visual Styling

### Node Drawing

Nodes are drawn as colored circles with letter labels. The color indicates state—particularly useful for algorithms like Prim's where "visited" status matters.

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

We draw nodes *after* edges so they appear on top, covering the edge lines where they connect. The steel blue default color provides good contrast with the white labels and distinguishes nodes from edge weight labels.

### Edge Drawing

Edges require more complex rendering: the line itself, and a label showing the weight. The visual treatment varies dramatically based on edge state, providing immediate feedback about the algorithm's decisions.

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

The visual hierarchy is important:

- **Gold (accepted)**: Bright and thick—these edges are the result
- **Yellow (considering)**: Draws attention to the current decision
- **Gray (available)**: Neutral, waiting to be evaluated
- **Light gray (rejected)**: Faded and thin—de-emphasized but still visible

For weight labels, we use a fitted rectangle rather than a fixed-size circle. This accommodates different weight values (single digits vs. three digits) and provides a cleaner look.

### Color Standards

Consistent colors across all algorithm visualizations help students transfer their understanding:

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

The step log provides a running history of algorithm decisions. This is valuable for several reasons:

1. Students can review earlier decisions without having to restart
2. The log makes the algorithm's decision pattern visible
3. Color coding reinforces which actions were accepts vs. rejects
4. The completion marker provides clear feedback when done

### Log Data Structure

Each log entry is a simple object with a type (for coloring) and display text:

```javascript
let stepLog = [];

// Log entry structure
{
  type: 'accepted',  // 'accepted', 'rejected', or 'complete'
  text: '✓ A-B (75)'
}
```

The text includes Unicode symbols (✓, ✗, ★) for quick visual scanning. Keep the text concise—the log panel has limited width.

### Drawing the Step Log

The log panel is drawn as a semi-transparent white rectangle with a list of entries. When there are more entries than fit, it automatically scrolls to show the most recent.

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

The auto-scroll logic (`startIndex = max(0, stepLog.length - maxVisible)`) ensures that when the log fills up, older entries scroll off the top while the most recent entries remain visible. Entry numbers are preserved so students can reference specific steps.

### Log Entry Types and Symbols

| Type | Symbol | Color | Usage |
|------|--------|-------|-------|
| Accepted | ✓ | Forest green | Element added to result |
| Rejected | ✗ | Firebrick red | Element skipped/rejected |
| Complete | ★ | Dark goldenrod | Algorithm finished |

## Responsive Design

The visualization should adapt to different screen sizes, particularly for embedding in course materials or viewing on tablets.

### Window Resize Handler

When the browser window resizes, we need to update the canvas and reposition elements:

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
```

Nodes are arranged in a circle, so we recalculate their positions using polar coordinates. The center point and radius are based on the new canvas width, keeping the graph properly positioned in the left portion of the canvas.

```javascript
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

The `updateCanvasSize()` function reads the container width and updates the slider to stretch accordingly. This function is called both on resize and at the start of each `draw()` frame to handle container changes.

## Best Practices

### 1. Clear Visual Feedback

Students should never wonder "what just happened?" Use distinct colors for different states, make transitions visible, and always highlight the element currently being considered.

- Use distinct colors for different states
- Animate transitions between states when possible
- Highlight the currently considered element

### 2. Informative Status Messages

The status text should tell a complete story. Don't just say "edge rejected"—explain *why*. For Kruskal's: "would create cycle." For Prim's: "both nodes already visited."

- Explain what happened in each step
- Include relevant values (weights, counts)
- State why elements were rejected

### 3. Accessible Controls

Place frequently used controls (Step, Auto Run) prominently. Use intuitive labels—"Slower/Faster" communicates better than raw millisecond values. Provide both manual and automatic modes to accommodate different learning styles.

- Place frequently used controls prominently
- Use intuitive labels ("Slower" / "Faster" not just values)
- Provide both manual and automatic modes

### 4. Educational Value

The goal is learning, not just demonstration. Show intermediate states so students can pause and think. Log all decisions so students can review. Let students control the pace—some need more time than others.

- Show intermediate state, not just final result
- Log all decisions for review
- Allow students to control the pace

### 5. Consistent Layout

When students use multiple algorithm visualizations, consistency reduces cognitive load. They can focus on the algorithm differences rather than relearning the interface.

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

1. **The `executeAlgorithmStep()` function** - Implement the algorithm's core logic for selecting and evaluating elements
2. **The acceptance/rejection criteria** - Define what makes an element valid for inclusion
3. **The step log messages** - Write clear, educational explanations for each decision
4. **Any algorithm-specific state variables** - Add data structures the algorithm needs (priority queues, distance arrays, etc.)
5. **Node/edge coloring based on algorithm state** - Decide what states are meaningful to visualize

## Reference Implementation

See the complete Minimum Spanning Tree MicroSim at:
`docs/sims/minimum-spanning-tree/minimum-spanning-tree.js`

This implementation demonstrates all the patterns described in this guide with both Kruskal's and Prim's algorithms. Study the code to see how the abstract patterns translate into working visualization code.
