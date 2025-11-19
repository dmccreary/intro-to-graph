// Knowledge Triangle MicroSim
// Demonstrates the three layers of data transformation:
// Data Layer -> Information Layer -> Knowledge Layer

// Canvas dimensions - REQUIRED structure
let canvasWidth = 600;
let drawHeight = 500;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

// Triangle dimensions
let triangleBase;
let triangleHeight;
let triangleTop;
let triangleBottom;

// Layer boundaries (y-coordinates)
let dataLayerTop;
let infoLayerTop;
let knowledgeLayerTop;

// Hover state
let hoveredLayer = null; // 'data', 'info', 'knowledge', or null

// Data for each layer
let dataChars = [];
let factCircles = [];
let knowledgeNodes = [];
let knowledgeEdges = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Calculate triangle dimensions
  calculateTriangle();

  // Generate random data for each layer
  generateDataLayer();
  generateInfoLayer();
  generateKnowledgeLayer();

  describe('Knowledge Triangle visualization showing three layers: Data (binary), Information (facts), and Knowledge (connected graph)', LABEL);
}

function draw() {
  updateCanvasSize();

  // Drawing area (white background)
  fill('white');
  rect(0, 0, width, drawHeight);

  // Control area (white background)
  fill('white');
  rect(0, drawHeight, width, controlHeight);

  // Draw the three layers
  drawDataLayer();
  drawInfoLayer();
  drawKnowledgeLayer();

  // Draw triangle outlines
  drawTriangleOutlines();

  // Place the title at the base of the knowledge layer
  fill('black');
  textSize(36);
  textAlign(CENTER, BOTTOM);
  noStroke();
  text('Knowledge Triangle', canvasWidth/2, margin*2);

  // Reset text settings
  stroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Check for hover and draw infobox
  checkHover();
  drawInfoBox();

  // Debug: Show hover state in control area
  fill('gray');
  textSize(14);
  textAlign(LEFT, CENTER);
  text('Hover: ' + (hoveredLayer || 'none'), 10, drawHeight + 25);
}

function calculateTriangle() {
  triangleBase = canvasWidth - 2 * margin;
  triangleHeight = drawHeight - 80; // Leave room for title
  triangleTop = 60;
  triangleBottom = triangleTop + triangleHeight;

  // Each layer is 1/3 of the triangle height
  knowledgeLayerTop = triangleTop;
  infoLayerTop = triangleTop + triangleHeight / 3;
  dataLayerTop = triangleTop + 2 * triangleHeight / 3;
}

function generateDataLayer() {
  // Generate random 1s and 0s for the data layer
  dataChars = [];
  let numChars = 150;
  for (let i = 0; i < numChars; i++) {
    dataChars.push({
      char: random() > 0.5 ? '1' : '0',
      x: random(margin, canvasWidth - margin),
      y: random(dataLayerTop, triangleBottom)
    });
  }
}

function generateInfoLayer() {
  // Generate fact circles for the information layer
  factCircles = [];
  let numFacts = 12;
  let colors = ['#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C', '#FFE4B5'];

  for (let i = 0; i < numFacts; i++) {
    // Calculate triangle width at this y position
    let y = random(infoLayerTop+5, dataLayerTop-8);
    let triangleWidthAtY = getTriangleWidthAtY(y);
    let centerX = canvasWidth / 2;
    let minX = centerX - triangleWidthAtY / 2 + 20;
    let maxX = centerX + triangleWidthAtY / 2 - 20;

    factCircles.push({
      x: random(minX, maxX),
      y: y,
      radius: 12,
      color: random(colors)
    });
  }
}

function generateKnowledgeLayer() {
  // Generate connected nodes for the knowledge layer
  knowledgeNodes = [];
  knowledgeEdges = [];
  let numNodes = 8;
  let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];

  // Create nodes
  for (let i = 0; i < numNodes; i++) {
    let y = random(knowledgeLayerTop + 30, infoLayerTop - 20);
    let triangleWidthAtY = getTriangleWidthAtY(y);
    let centerX = canvasWidth / 2;
    let minX = centerX - triangleWidthAtY / 2 + 30;
    let maxX = centerX + triangleWidthAtY / 2 - 30;

    knowledgeNodes.push({
      x: random(minX, maxX),
      y: y,
      radius: 10,
      color: random(colors)
    });
  }

  // Create edges between nearby nodes
  let edgeColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];
  for (let i = 0; i < knowledgeNodes.length; i++) {
    let connections = floor(random(1, 4));
    for (let j = 0; j < connections; j++) {
      let targetIndex = floor(random(knowledgeNodes.length));
      if (targetIndex !== i) {
        knowledgeEdges.push({
          from: i,
          to: targetIndex,
          color: random(edgeColors)
        });
      }
    }
  }
}

function getTriangleWidthAtY(y) {
  // Calculate the width of the triangle at a given y position
  // Triangle is narrow at top (small y) and wide at bottom (large y)
  let relativeY = y - triangleTop;
  let ratio = relativeY / triangleHeight;
  return triangleBase * ratio;
}

function drawDataLayer() {
  // Draw black background for data layer
  fill(0);
  noStroke();

  // Calculate triangle points for data layer
  let dataTop = dataLayerTop;
  let dataWidthAtTop = getTriangleWidthAtY(dataTop);
  let centerX = canvasWidth / 2;

  beginShape();
  vertex(centerX - dataWidthAtTop / 2, dataTop);
  vertex(centerX + dataWidthAtTop / 2, dataTop);
  vertex(centerX + triangleBase / 2, triangleBottom);
  vertex(centerX - triangleBase / 2, triangleBottom);
  endShape(CLOSE);

  // Draw green 1s and 0s
  fill('#00FF00'); // Bright green like old terminals
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let dc of dataChars) {
    // Check if point is within the data layer triangle
    if (isPointInDataLayer(dc.x, dc.y)) {
      text(dc.char, dc.x, dc.y);
    }
  }

  // Draw layer label
  fill('white');
  textSize(20);
  textAlign(CENTER, CENTER);
  text('Data Layer', centerX, dataLayerTop + (triangleBottom - dataLayerTop) / 2);
}

function drawInfoLayer() {
  // Draw light blue background for info layer
  fill('#E8F4F8');
  noStroke();

  let centerX = canvasWidth / 2;
  let infoWidthAtTop = getTriangleWidthAtY(infoLayerTop);
  let dataWidthAtTop = getTriangleWidthAtY(dataLayerTop);

  beginShape();
  vertex(centerX - infoWidthAtTop / 2, infoLayerTop);
  vertex(centerX + infoWidthAtTop / 2, infoLayerTop);
  vertex(centerX + dataWidthAtTop / 2, dataLayerTop);
  vertex(centerX - dataWidthAtTop / 2, dataLayerTop);
  endShape(CLOSE);

  // Draw fact circles
  for (let fact of factCircles) {
    if (isPointInInfoLayer(fact.x, fact.y)) {
      // Draw circle with colored background
      fill(fact.color);
      stroke(0);
      strokeWeight(1);
      circle(fact.x, fact.y, fact.radius * 2);

      // Draw "Fact" text
      fill(0);
      noStroke();
      textSize(10);
      textAlign(CENTER, CENTER);
      text('Fact', fact.x, fact.y);
    }
  }

  // Draw layer label
  fill('black');
  textSize(20);
  textAlign(CENTER, CENTER);
  noStroke();
  text('Information Layer', centerX, infoLayerTop + (dataLayerTop - infoLayerTop) / 2);
}

function drawKnowledgeLayer() {
  // Draw light background for knowledge layer
  fill('#F0F8FF');
  noStroke();

  let centerX = canvasWidth / 2;
  let infoWidthAtTop = getTriangleWidthAtY(infoLayerTop);

  beginShape();
  vertex(centerX, knowledgeLayerTop);
  vertex(centerX + infoWidthAtTop / 2, infoLayerTop);
  vertex(centerX - infoWidthAtTop / 2, infoLayerTop);
  endShape(CLOSE);

  // Draw edges first (so they appear behind nodes)
  for (let edge of knowledgeEdges) {
    let fromNode = knowledgeNodes[edge.from];
    let toNode = knowledgeNodes[edge.to];
    stroke(edge.color);
    strokeWeight(2);
    line(fromNode.x, fromNode.y, toNode.x, toNode.y);
  }

  // Draw nodes
  for (let node of knowledgeNodes) {
    fill(node.color);
    stroke(0);
    strokeWeight(1);
    circle(node.x, node.y, node.radius * 2);
  }

  // Draw layer label
  fill('black');
  textSize(20);
  textAlign(CENTER, CENTER);
  noStroke();
  // required some manual adjustment
  text('Knowledge Layer', centerX, knowledgeLayerTop + (infoLayerTop - knowledgeLayerTop)/2 + 55);
}

function drawTriangleOutlines() {
  // Draw outlines for the triangle sections
  stroke('silver');
  strokeWeight(2);
  noFill();

  let centerX = canvasWidth / 2;

  // Outer triangle
  triangle(
    centerX, triangleTop,
    centerX - triangleBase / 2, triangleBottom,
    centerX + triangleBase / 2, triangleBottom
  );

  // Lines separating layers
  let infoWidth = getTriangleWidthAtY(infoLayerTop);
  let dataWidth = getTriangleWidthAtY(dataLayerTop);

  line(centerX - infoWidth / 2, infoLayerTop, centerX + infoWidth / 2, infoLayerTop);
  line(centerX - dataWidth / 2, dataLayerTop, centerX + dataWidth / 2, dataLayerTop);
}

function checkHover() {
  let prevHoveredLayer = hoveredLayer;

  if (mouseX >= 0 && mouseX <= canvasWidth && mouseY >= triangleTop && mouseY <= triangleBottom) {
    if (isPointInDataLayer(mouseX, mouseY)) {
      hoveredLayer = 'data';
    } else if (isPointInInfoLayer(mouseX, mouseY)) {
      hoveredLayer = 'info';
    } else if (isPointInKnowledgeLayer(mouseX, mouseY)) {
      hoveredLayer = 'knowledge';
    } else {
      hoveredLayer = null;
    }
  } else {
    hoveredLayer = null;
  }

  // Log when hover state changes
  if (hoveredLayer !== prevHoveredLayer) {
    console.log('Hover changed from', prevHoveredLayer, 'to', hoveredLayer,
                'at position', mouseX, mouseY);
  }
}

function isPointInDataLayer(x, y) {
  if (y < dataLayerTop || y > triangleBottom) return false;

  let centerX = canvasWidth / 2;
  let widthAtY = getTriangleWidthAtY(y);
  let leftEdge = centerX - widthAtY / 2;
  let rightEdge = centerX + widthAtY / 2;

  return x >= leftEdge && x <= rightEdge;
}

function isPointInInfoLayer(x, y) {
  if (y < infoLayerTop || y > dataLayerTop) return false;

  let centerX = canvasWidth / 2;
  let widthAtY = getTriangleWidthAtY(y);
  let leftEdge = centerX - widthAtY / 2;
  let rightEdge = centerX + widthAtY / 2;

  return x >= leftEdge && x <= rightEdge;
}

function isPointInKnowledgeLayer(x, y) {
  if (y < knowledgeLayerTop || y > infoLayerTop) return false;

  let centerX = canvasWidth / 2;
  let widthAtY = getTriangleWidthAtY(y);
  let leftEdge = centerX - widthAtY / 2;
  let rightEdge = centerX + widthAtY / 2;

  return x >= leftEdge && x <= rightEdge;
}

function drawInfoBox() {
  if (hoveredLayer === null) return;

  // Simple debug box - just show a colored rectangle that follows mouse
  let boxWidth = 300;
  let boxHeight = 100;
  let boxX = mouseX + 15;
  let boxY = mouseY + 15;

  // Keep box on screen
  if (boxX + boxWidth > canvasWidth - 10) {
    boxX = mouseX - boxWidth - 15;
  }
  if (boxY + boxHeight > drawHeight - 10) {
    boxY = mouseY - boxHeight - 15;
  }

  // Draw a bright visible box for debugging
  fill('yellow');
  stroke('red');
  strokeWeight(3);
  rect(boxX, boxY, boxWidth, boxHeight);

  // Draw the layer name in large text
  fill('black');
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text('Layer: ' + hoveredLayer.toUpperCase(), boxX + boxWidth/2, boxY + boxHeight/2);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  calculateTriangle();

  // Regenerate layer data with new dimensions
  generateDataLayer();
  generateInfoLayer();
  generateKnowledgeLayer();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
