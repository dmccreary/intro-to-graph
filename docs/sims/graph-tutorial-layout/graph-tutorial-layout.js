// Graph Tutorial Layout MicroSim
// Demonstrates the standard layout for step-by-step graph algorithm visualizations

// Canvas dimensions - REQUIRED structure
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 210;
let defaultTextSize = 16;

// Sample graph data
let nodes = [];
let edges = [];
let nodeCount = 6;
let nodeRadius = 20;

// Sample step log
let stepLog = [
  { type: 'accepted', text: '✓ A-B (52)' },
  { type: 'accepted', text: '✓ B-C (67)' },
  { type: 'rejected', text: '✗ A-C (89) - cycle' },
  { type: 'accepted', text: '✓ C-D (45)' },
  { type: 'accepted', text: '✓ D-E (78)' },
  { type: 'rejected', text: '✗ B-E (92) - cycle' },
  { type: 'complete', text: '★ Complete! Total: 242' }
];

// UI controls (simulated)
let showAnnotations = true;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Initialize sample graph nodes in a circle
  initializeGraph();

  describe('Graph Tutorial Layout demonstration showing the standard regions for graph algorithm visualizations with a sample network graph and step log', LABEL);
}

function initializeGraph() {
  nodes = [];
  edges = [];

  // Create nodes in a circular layout (centered at 34% from left)
  let graphCenterX = canvasWidth * 0.34;
  let graphCenterY = drawHeight / 2 + 20;

  for (let i = 0; i < nodeCount; i++) {
    let angle = (TWO_PI / nodeCount) * i - HALF_PI;
    let radius = min(canvasWidth * 0.28, drawHeight - 150) * 0.45;
    let x = graphCenterX + cos(angle) * radius;
    let y = graphCenterY + sin(angle) * radius;
    nodes.push({
      id: i,
      x: x,
      y: y,
      label: String.fromCharCode(65 + i) // A, B, C, etc.
    });
  }

  // Create sample edges with states
  edges = [
    { from: 0, to: 1, weight: 52, state: 'accepted' },
    { from: 1, to: 2, weight: 67, state: 'accepted' },
    { from: 0, to: 2, weight: 89, state: 'rejected' },
    { from: 2, to: 3, weight: 45, state: 'accepted' },
    { from: 3, to: 4, weight: 78, state: 'accepted' },
    { from: 1, to: 4, weight: 92, state: 'rejected' },
    { from: 4, to: 5, weight: 63, state: 'available' },
    { from: 3, to: 5, weight: 71, state: 'available' }
  ];
}

function draw() {
  updateCanvasSize();

  // Drawing area (light blue background with silver border)
  fill('aliceblue');
  stroke('silver');
  rect(0, 0, canvasWidth, drawHeight);

  // Control area (white background)
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Draw title
  fill('black');
  textSize(24);
  textAlign(CENTER, TOP);
  noStroke();
  text('Graph Tutorial Layout', canvasWidth / 2, 10);

  // Reset to default settings
  stroke(0);
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Draw the layout components
  drawLayoutAnnotations();
  drawEdges();
  drawNodes();
  drawStepLog();
  drawControlArea();
}

function drawLayoutAnnotations() {
  if (!showAnnotations) return;

  // Draw region labels with semi-transparent backgrounds
  textSize(14);

  // Graph region label
  let graphCenterX = canvasWidth * 0.34;
  fill(255, 255, 255, 200);
  stroke(100, 149, 237);
  strokeWeight(2);
  setLineDash([5, 5]);
  rect(20, 50, canvasWidth * 0.62, drawHeight - 80, 8);
  setLineDash([]);
  strokeWeight(1);

  fill(100, 149, 237);
  noStroke();
  textAlign(CENTER, TOP);
  text('Graph Visualization Region', graphCenterX, 55);
  textSize(12);
  fill(100);
  text('Center: canvasWidth * 0.34', graphCenterX, 75);

  // Step log region indicator
  let logX = canvasWidth * 0.67;
  let logWidth = canvasWidth * 0.30;
  stroke(34, 139, 34);
  strokeWeight(2);
  setLineDash([5, 5]);
  noFill();
  rect(logX - 10, 50, logWidth + 20, drawHeight - 80, 8);
  setLineDash([]);
  strokeWeight(1);

  // Control region indicator
  stroke(255, 140, 0);
  strokeWeight(2);
  setLineDash([5, 5]);
  noFill();
  rect(5, drawHeight + 5, canvasWidth - 10, controlHeight - 10, 8);
  setLineDash([]);
  strokeWeight(1);

  fill(255, 140, 0);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12);
  text('Control Panel (controlHeight: 150px)', 15, drawHeight + 12);
}

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

function drawNodes() {
  textAlign(CENTER, CENTER);
  textSize(16);

  for (let node of nodes) {
    // Steel blue for nodes
    fill(70, 130, 180);
    stroke(0);
    strokeWeight(2);
    ellipse(node.x, node.y, nodeRadius * 2, nodeRadius * 2);

    fill(255);  // White text
    noStroke();
    text(node.label, node.x, node.y);
  }
}

function drawStepLog() {
  // Position on right side
  let logX = canvasWidth * 0.66;
  let logY = 50;
  let logWidth = canvasWidth * 0.32;
  let logHeight = drawHeight - 80;
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

  // Draw region label
  fill(34, 139, 34);
  textSize(12);
  text('canvasWidth * 0.67', logX + logWidth / 2, logY + 30);

  // Draw entries
  textAlign(LEFT, TOP);
  textSize(14);

  for (let i = 0; i < stepLog.length; i++) {
    let entry = stepLog[i];
    let yPos = logY + 55 + i * lineHeight;

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
}

function drawControlArea() {
  // Draw sample control buttons
  fill(240);
  stroke(150);
  strokeWeight(1);

  // Algorithm selector mockup
  rect(10, drawHeight + 40, 150, 25, 4);
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(12);
  text("Kruskal's Algorithm", 15, drawHeight + 52);

  // Step button mockup
  fill(240);
  stroke(150);
  rect(170, drawHeight + 40, 90, 25, 4);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text('Step Forward', 215, drawHeight + 52);

  // Auto Run button mockup
  fill(240);
  stroke(150);
  rect(270, drawHeight + 40, 70, 25, 4);
  fill(0);
  noStroke();
  text('Auto Run', 305, drawHeight + 52);

  // Reset button mockup
  fill(240);
  stroke(150);
  rect(350, drawHeight + 40, 55, 25, 4);
  fill(0);
  noStroke();
  text('Reset', 377, drawHeight + 52);

  // Speed slider mockup
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(14);
  text('Animation Speed: 500ms', 10, drawHeight + 90);

  // Slider labels
  textSize(12);
  fill(100);
  text('Slower', sliderLeftMargin, drawHeight + 80);
  textAlign(RIGHT, CENTER);
  text('Faster', canvasWidth - margin, drawHeight + 80);

  // Slider track mockup
  stroke(200);
  strokeWeight(4);
  line(sliderLeftMargin, drawHeight + 90, canvasWidth - margin, drawHeight + 90);

  // Slider thumb mockup
  fill(100, 149, 237);
  noStroke();
  let sliderPos = sliderLeftMargin + (canvasWidth - sliderLeftMargin - margin) * 0.7;
  ellipse(sliderPos, drawHeight + 90, 16, 16);

  // Status text
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(14);
  text('Status: Complete! Minimum spanning tree found with total weight: 242', 10, drawHeight + 115);
  text('MST Edges: 5/5  |  Total Weight: 242', 10, drawHeight + 135);
}

// Helper function for dashed lines
function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  initializeGraph();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
