// Minimum Spanning Tree MicroSim
// Educational simulation demonstrating Kruskal's and Prim's algorithms

// Canvas dimensions - REQUIRED structure
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 150;
let defaultTextSize = 16;

// Graph data structures
let nodes = [];
let edges = [];
let mstEdges = [];
let nodeCount = 8;
let nodeRadius = 25;

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

function initializeGraph() {
  nodes = [];
  edges = [];
  mstEdges = [];
  rejectedEdges = [];

  // Create nodes in a circular layout
  for (let i = 0; i < nodeCount; i++) {
    let angle = (TWO_PI / nodeCount) * i - HALF_PI;
    let radius = min(canvasWidth, drawHeight - 100) * 0.35;
    let x = canvasWidth / 2 + cos(angle) * radius;
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
  } else {
    // Cycle detected - reject edge
    rejectedEdges.push(edge);
    edge.state = 'rejected';
    stepDescription = `Rejected edge ${nodes[edge.from].label}-${nodes[edge.to].label} (weight ${edge.weight}) - would create cycle`;
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
    fill(255);
    stroke(0);
    strokeWeight(1);
    ellipse(midX, midY, 35, 35);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);
    text(edge.weight, midX, midY);
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
      fill(255);
    }

    stroke(0);
    strokeWeight(2);
    ellipse(node.x, node.y, nodeRadius * 2, nodeRadius * 2);

    fill(0);
    noStroke();
    text(node.label, node.x, node.y);
  }
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

  // Speed slider
  speedSlider = createSlider(100, 2000, 500, 100);
  speedSlider.position(sliderLeftMargin, drawHeight + 60);
  speedSlider.size(canvasWidth - sliderLeftMargin - margin);
  speedSlider.input(() => {
    animationSpeed = speedSlider.value();
  });
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

  // Status information
  textSize(14);
  text('Status: ' + stepDescription, 10, drawHeight + 100);
  text(`MST Edges: ${mstEdges.length}/${nodeCount - 1}  |  Total Weight: ${totalMSTWeight}`, 10, drawHeight + 120);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);

  // Reposition nodes proportionally
  for (let node of nodes) {
    let angle = (TWO_PI / nodeCount) * node.id - HALF_PI;
    let radius = min(canvasWidth, drawHeight - 100) * 0.35;
    node.x = canvasWidth / 2 + cos(angle) * radius;
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
