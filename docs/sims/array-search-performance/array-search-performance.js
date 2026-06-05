// MicroSim: Array Search Performance (Linear)
// This p5.js MicroSim demonstrates how linear search comparisons grow with array size.

// Layout planning (per microsim-p5 guide)
// Controls: Row 1 = Start/Pause button, Reset button
//           Row 2 = Slider "Number of items" + value + Comparisons count
// Number of control rows: 2
// controlHeight = (2 x 35) + 10 = 80
// drawHeight = 420
// canvasHeight = drawHeight + controlHeight = 500
// sliderLeftMargin = 300 (two buttons + label/value + gaps)
// margin = 25
// Row 1 positions: buttonY = drawHeight + 5
// Row 2 positions: labelY = drawHeight + 50, sliderY = drawHeight + 40

let canvasWidth = 400; // responsive
let drawHeight = 420;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 300;
let defaultTextSize = 16;

let startButton;
let resetButton;
let countSlider;

let itemCount = 120;
let isRunning = false;
let currentIndex = -1;
let stepFrames = 0;
let comparisons = 0;
let mouseOverCanvas = false;

const COLORS = {
  drawBg: "aliceblue",
  controlBg: "white",
  border: "silver",
  title: "#102a43",
  label: "#1b2a3a",
  sub: "#4a5a6a",
  elementFill: "#cfe7ff",
  elementStroke: "#2b6cb0",
  targetFill: "#ffb3b3",
  targetStroke: "#c53030",
  compareFill: "#9ae6b4",
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  canvas.mouseOver(() => mouseOverCanvas = true);
  canvas.mouseOut(() => mouseOverCanvas = false);

  startButton = createButton('Start');
  startButton.mousePressed(toggleSimulation);

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetSimulation);

  countSlider = createSlider(1, 500, itemCount, 1);
  countSlider.input(() => {
    itemCount = countSlider.value();
    resetSimulation();
  });

  positionControls();

  describe('A MicroSim showing a grid of array items and a linear search comparison overlay that advances when the simulation is running.', LABEL);
}

function draw() {
  updateCanvasSize();

  // Background regions
  fill(COLORS.drawBg);
  stroke(COLORS.border);
  rect(0, 0, canvasWidth, drawHeight);
  fill(COLORS.controlBg);
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title (after background)
  fill(COLORS.title);
  textSize(24);
  textAlign(CENTER, TOP);
  noStroke();
  text('Linear Search Through Arrays (O(n))', canvasWidth / 2, 10);

  // Reset text defaults
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  drawMatrix();
  drawControlLabels();

  // Update animation only on hover
  if (mouseOverCanvas) {
    updateSimulation();
  }

  // Sync button label
  startButton.html(isRunning ? 'Pause' : 'Start');
}

function drawMatrix() {
  const drawX = margin;
  const drawY = 60;
  const drawW = canvasWidth - margin * 2;
  const drawH = drawHeight - 90;

  const cellSize = 24;
  const gap = 4;
  const cols = Math.max(1, floor((drawW + gap) / (cellSize + gap)));
  const rows = ceil(itemCount / cols);
  const maxRows = max(1, floor((drawH + gap) / (cellSize + gap)));
  const visibleRows = min(rows, maxRows);

  let index = 0;
  for (let row = 0; row < visibleRows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (index >= itemCount) {
        return;
      }
      const x = drawX + col * (cellSize + gap);
      const y = drawY + row * (cellSize + gap);
      drawCell(x, y, cellSize, cellSize, index);
      index += 1;
    }
  }
}

function drawCell(x, y, w, h, index) {
  fill(COLORS.elementFill);
  stroke(COLORS.elementStroke);
  strokeWeight(1.5);
  rect(x, y, w, h, 3);

  if (index === itemCount - 1) {
    fill(COLORS.targetFill);
    stroke(COLORS.targetStroke);
    strokeWeight(2);
    rect(x, y, w, h, 3);
  }

  if (index <= currentIndex && currentIndex >= 0) {
    noStroke();
    fill(COLORS.compareFill);
    rect(x + 2, y + 2, w - 4, h - 4, 2);
  }
}

function drawControlLabels() {
  const row2LabelY = drawHeight + 50;

  fill(COLORS.label);
  textStyle(BOLD);
  noStroke();
  text('Number of items: ' + itemCount, 10, row2LabelY);

  fill(COLORS.sub);
  textStyle(NORMAL);
  noStroke();
  text('Comparisons: ' + comparisons, 260, row2LabelY);
}

function positionControls() {
  const row1Y = drawHeight + 5;
  const row2Y = drawHeight + 40;

  startButton.position(10, row1Y);
  startButton.size(110, 30);
  resetButton.position(130, row1Y);
  resetButton.size(90, 30);

  countSlider.position(sliderLeftMargin, row2Y);
  countSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function toggleSimulation() {
  isRunning = !isRunning;
  if (isRunning && currentIndex < 0) {
    currentIndex = -1;
    comparisons = 0;
  }
}

function resetSimulation() {
  isRunning = false;
  currentIndex = -1;
  stepFrames = 0;
  comparisons = 0;
}

function updateSimulation() {
  if (!isRunning) {
    return;
  }

  stepFrames += 1;
  if (stepFrames % 4 === 0) {
    currentIndex += 1;
    comparisons = min(currentIndex + 1, itemCount);
  }

  if (currentIndex >= itemCount - 1) {
    isRunning = false;
    currentIndex = itemCount - 1;
    comparisons = itemCount;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
