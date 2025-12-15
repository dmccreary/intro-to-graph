// Minimum Spanning Tree MicroSim
// Educational simulation demonstrating Kruskal's and Prim's algorithms

// Canvas dimensions - REQUIRED structure
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 210;
let defaultTextSize = 16;

// Graph data structures
let nodes = [];
let edges = [];
let mstEdges = [];
let nodeCount = 8;
let nodeRadius = 15;

// Algorithm state
let currentAlgorithm = 'kruskal'; // 'kruskal' or 'prim'
let animationSpeed = 500; // milliseconds
let isRunning = false;
let isComplete = false;

// Algorithm execution state
let sortedEdges = [];
let edgeIndex = 0;
let consideredEdge = null;
let rejectedEdges = [];
let parent = []; // For union-find (Kruskal's)
let visited = []; // For Prim's
let priorityQueue = []; // For Prim's
let stepDescription = '';
let totalMSTWeight = 0;
let lastStepTime = 0;
let stepLog = []; // Log of all steps taken

// UI controls
let algorithmSelect;
let stepButton;
let autoRunButton;
let resetButton;
let speedSlider;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Initialize the graph
  initializeGraph();

  // Create UI controls
  createControls();

  describe('Interactive visualization of Minimum Spanning Tree algorithms (Kruskal\'s and Prim\'s) showing step-by-step how to find the minimum cost network connecting all nodes', LABEL);
}

function createControls() {
  // Algorithm selector
  algorithmSelect = createSelect();
  algorithmSelect.option('Kruskal\'s Algorithm', 'kruskal');
  algorithmSelect.option('Prim\'s Algorithm', 'prim');
  algorithmSelect.value('kruskal');
  algorithmSelect.position(10, drawHeight + 15);
  algorithmSelect.changed(() => {
    currentAlgorithm = algorithmSelect.value();
    resetAlgorithm();
  });

  // Step button
  stepButton = createButton('Step Forward');
  stepButton.position(180, drawHeight + 15);
  stepButton.mousePressed(() => {
    if (!isComplete) {
      executeNextStep();
    }
  });


  // Auto Run button
  autoRunButton = createButton('Auto Run');
  autoRunButton.position(290, drawHeight + 15);
  autoRunButton.mousePressed(toggleAutoRun);

  // Reset button
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
  // Set initial animation speed
  animationSpeed = 2100 - speedSlider.value();
}

function draw() {
  updateCanvasSize();

  // Drawing area (light blue background)
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
  text('Minimum Spanning Tree Algorithm Visualizer', canvasWidth/2, 10);

  // Reset to default settings
  stroke(0);
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Draw graph
  drawEdges();
  drawNodes();

  // Draw step log on the right side
  drawStepLog();

  // Auto-run animation
  if (isRunning && !isComplete) {
    if (millis() - lastStepTime > animationSpeed) {
      executeNextStep();
      lastStepTime = millis();
    }
  }

  // Draw control labels and status
  drawControlLabels();
}

// Initialize graph with nodes and edges
function initializeGraph() {
  nodes = [];
  edges = [];
  mstEdges = [];
  rejectedEdges = [];

  // Create nodes in a circular layout (centered at 30% from left)
  // the center x position is at 35% to leave room for the log on the right
  let graphCenterX = canvasWidth * 0.34;

  for (let i = 0; i < nodeCount; i++) {
    let angle = (TWO_PI / nodeCount) * i - HALF_PI;

    // This determines how big the circle of nodes is
    let radius = min(canvasWidth * 0.65, drawHeight - 40) * 0.41;
    let x = graphCenterX + cos(angle) * radius;
    let y = drawHeight / 2 + sin(angle) * radius;
    nodes.push({
      id: i,
      x: x,
      y: y,
      label: String.fromCharCode(65 + i) // A, B, C, etc.
    });
  }

  // Create edges - connect some nodes with random weights
  let edgeSet = new Set();
  let edgeCount = 15;

  // Ensure connectivity - create a spanning tree first
  for (let i = 0; i < nodeCount - 1; i++) {
    let weight = floor(random(50, 200));
    edges.push({
      from: i,
      to: i + 1,
      weight: weight,
      state: 'available' // available, considering, accepted, rejected
    });
    edgeSet.add(`${i}-${i+1}`);
  }

  // Add random additional edges
  while (edges.length < edgeCount) {
    let from = floor(random(nodeCount));
    let to = floor(random(nodeCount));
    if (from !== to) {
      let key = from < to ? `${from}-${to}` : `${to}-${from}`;
      if (!edgeSet.has(key)) {
        let weight = floor(random(50, 200));
        edges.push({
          from: from,
          to: to,
          weight: weight,
          state: 'available'
        });
        edgeSet.add(key);
      }
    }
  }

  // Initialize algorithm state
  resetAlgorithm();
}

function resetAlgorithm() {
  isRunning = false;
  isComplete = false;
  mstEdges = [];
  rejectedEdges = [];
  edgeIndex = 0;
  consideredEdge = null;
  totalMSTWeight = 0;
  stepLog = []; // Clear the step log
  stepDescription = 'Click "Step Forward" or "Auto Run" to begin';

  // Reset edge states
  edges.forEach(e => e.state = 'available');

  if (currentAlgorithm === 'kruskal') {
    // Sort edges by weight for Kruskal's
    sortedEdges = [...edges].sort((a, b) => a.weight - b.weight);

    // Initialize union-find
    parent = [];
    for (let i = 0; i < nodeCount; i++) {
      parent[i] = i;
    }
  } else {
    // Prim's algorithm initialization
    visited = new Array(nodeCount).fill(false);
    visited[0] = true; // Start from node 0

    // Add all edges from node 0 to priority queue
    priorityQueue = edges
      .filter(e => e.from === 0 || e.to === 0)
      .map(e => ({...e}))
      .sort((a, b) => a.weight - b.weight);
  }

  if (autoRunButton) {
    autoRunButton.html('Auto Run');
  }
}

function executeNextStep() {
  if (isComplete) return;

  if (currentAlgorithm === 'kruskal') {
    executeKruskalStep();
  } else {
    executePrimStep();
  }

  // Check if complete
  if (mstEdges.length === nodeCount - 1) {
    isComplete = true;
    isRunning = false;
    stepDescription = `Complete! Minimum spanning tree found with total weight: ${totalMSTWeight}`;
    stepLog.push({ type: 'complete', text: `★ Complete! Total: ${totalMSTWeight}` });
    if (autoRunButton) {
      autoRunButton.html('Auto Run');
    }
  }
}

function executeKruskalStep() {
  if (edgeIndex >= sortedEdges.length) {
    isComplete = true;
    return;
  }

  let edge = sortedEdges[edgeIndex];
  consideredEdge = edge;

  // Find sets of both nodes
  let set1 = find(edge.from);
  let set2 = find(edge.to);

  if (set1 !== set2) {
    // No cycle - accept edge
    mstEdges.push(edge);
    union(edge.from, edge.to);
    edge.state = 'accepted';
    totalMSTWeight += edge.weight;
    stepDescription = `Accepted edge ${nodes[edge.from].label}-${nodes[edge.to].label} (weight ${edge.weight}). Total: ${totalMSTWeight}`;
    stepLog.push({ type: 'accepted', text: `✓ ${nodes[edge.from].label}-${nodes[edge.to].label} (${edge.weight})` });
  } else {
    // Cycle detected - reject edge
    rejectedEdges.push(edge);
    edge.state = 'rejected';
    stepDescription = `Rejected edge ${nodes[edge.from].label}-${nodes[edge.to].label} (weight ${edge.weight}) - would create cycle`;
    stepLog.push({ type: 'rejected', text: `✗ ${nodes[edge.from].label}-${nodes[edge.to].label} (${edge.weight}) - cycle` });
  }

  edgeIndex++;
  consideredEdge = null;
}

function executePrimStep() {
  if (priorityQueue.length === 0) {
    isComplete = true;
    return;
  }

  // Get minimum weight edge from priority queue
  let edge = priorityQueue.shift();
  consideredEdge = edge;

  // Check if both nodes are already visited
  let fromVisited = visited[edge.from];
  let toVisited = visited[edge.to];

  if (fromVisited && toVisited) {
    // Both visited - reject
    rejectedEdges.push(edge);
    edge.state = 'rejected';
    stepDescription = `Rejected edge ${nodes[edge.from].label}-${nodes[edge.to].label} (weight ${edge.weight}) - both nodes visited`;
    stepLog.push({ type: 'rejected', text: `✗ ${nodes[edge.from].label}-${nodes[edge.to].label} (${edge.weight}) - visited` });
    consideredEdge = null;
    return;
  }

  // Accept edge
  mstEdges.push(edge);
  edge.state = 'accepted';
  totalMSTWeight += edge.weight;

  // Mark new node as visited
  let newNode = fromVisited ? edge.to : edge.from;
  visited[newNode] = true;
  stepDescription = `Accepted edge ${nodes[edge.from].label}-${nodes[edge.to].label} (weight ${edge.weight}). Added node ${nodes[newNode].label}. Total: ${totalMSTWeight}`;
  stepLog.push({ type: 'accepted', text: `✓ ${nodes[edge.from].label}-${nodes[edge.to].label} (${edge.weight}) +${nodes[newNode].label}` });

  // Add new edges to priority queue
  let newEdges = edges.filter(e => {
    if (e.state !== 'available') return false;
    let connectsNew = (e.from === newNode || e.to === newNode);
    let oneVisited = (visited[e.from] && !visited[e.to]) || (!visited[e.from] && visited[e.to]);
    return connectsNew && oneVisited;
  });

  priorityQueue.push(...newEdges);
  priorityQueue.sort((a, b) => a.weight - b.weight);

  consideredEdge = null;
}

// Union-Find helper functions for Kruskal's
function find(node) {
  if (parent[node] !== node) {
    parent[node] = find(parent[node]); // Path compression
  }
  return parent[node];
}

function union(node1, node2) {
  let root1 = find(node1);
  let root2 = find(node2);
  parent[root1] = root2;
}

function drawEdges() {
  // Draw all edges
  for (let edge of edges) {
    let fromNode = nodes[edge.from];
    let toNode = nodes[edge.to];

    // Determine color based on state
    let edgeColor, edgeWidth;
    if (edge.state === 'accepted' || mstEdges.includes(edge)) {
      edgeColor = color(255, 215, 0); // Gold
      edgeWidth = 4;
    } else if (edge.state === 'rejected' || rejectedEdges.includes(edge)) {
      edgeColor = color(200, 200, 200); // Light gray
      edgeWidth = 1;
    } else if (edge === consideredEdge) {
      edgeColor = color(255, 255, 0); // Yellow
      edgeWidth = 3;
    } else {
      edgeColor = color(128, 128, 128); // Gray
      edgeWidth = 2;
    }

    stroke(edgeColor);
    strokeWeight(edgeWidth);
    line(fromNode.x, fromNode.y, toNode.x, toNode.y);

    // Draw weight label
    let midX = (fromNode.x + toNode.x) / 2;
    let midY = (fromNode.y + toNode.y) / 2;
    textSize(12);
    let weightText = String(edge.weight);
    let textW = textWidth(weightText);
    let padding = 4;
    fill(240, 248, 255); // Aliceblue for edge labels
    noStroke();
    rectMode(CENTER);
    rect(midX, midY, textW + padding * 2, 18, 3);
    rectMode(CORNER);
    fill(0);
    textAlign(CENTER, CENTER);
    text(weightText, midX, midY);
  }
}

function drawNodes() {
  textAlign(CENTER, CENTER);
  textSize(16);

  for (let node of nodes) {
    // Highlight visited nodes in Prim's algorithm
    if (currentAlgorithm === 'prim' && visited[node.id]) {
      fill(100, 200, 100); // Light green for visited
    } else {
      fill(70, 130, 180); // Steel blue for nodes
    }

    stroke(0);
    strokeWeight(2);
    ellipse(node.x, node.y, nodeRadius * 2, nodeRadius * 2);

    fill(255); // White text
    noStroke();
    text(node.label, node.x, node.y);
  }
}

function toggleAutoRun() {
  if (isComplete) return;

  isRunning = !isRunning;
  autoRunButton.html(isRunning ? 'Pause' : 'Auto Run');

  if (isRunning) {
    lastStepTime = millis();
  }
}

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
  text(`MST Edges: ${mstEdges.length}/${nodeCount - 1}  |  Total Weight: ${totalMSTWeight}`, 10, drawHeight + 120);
}

function drawStepLog() {
  // Draw log panel on the right side
  // start at 2/3 of canvas width
  let logX = canvasWidth * 0.67;
  let logY = 50;
  let logWidth = canvasWidth * .30;
  let logHeight = drawHeight - 70;
  let lineHeight = 22;

  // Draw log background
  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(logX, logY, logWidth, logHeight, 8);

  // Draw log title
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  text('Step Log', logX + logWidth / 2, logY + 10);

  // Draw log entries
  textAlign(LEFT, TOP);
  textSize(14);

  let maxVisibleEntries = floor((logHeight - 50) / lineHeight);
  let startIndex = max(0, stepLog.length - maxVisibleEntries);

  for (let i = startIndex; i < stepLog.length; i++) {
    let entry = stepLog[i];
    let yPos = logY + 40 + (i - startIndex) * lineHeight;

    // Color based on type
    if (entry.type === 'accepted') {
      fill(34, 139, 34); // Forest green
    } else if (entry.type === 'complete') {
      fill(184, 134, 11); // Dark goldenrod
    } else {
      fill(178, 34, 34); // Firebrick red
    }

    text(`${i + 1}. ${entry.text}`, logX + 15, yPos);
  }

  // Show "empty" message if no entries
  if (stepLog.length === 0) {
    fill(128);
    textAlign(CENTER, CENTER);
    text('No steps yet', logX + logWidth / 2, logY + logHeight / 2);
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Reposition nodes proportionally (centered at 30% from left)
  let graphCenterX = canvasWidth * 0.3;
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

    // Reposition and resize controls
    if (typeof speedSlider !== 'undefined') {
      speedSlider.size(canvasWidth - sliderLeftMargin - margin);
    }
  }
}
