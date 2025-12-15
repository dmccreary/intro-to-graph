---
title: Graph Tutorial Layout
description: A MicroSim demonstrating the standard layout for step-by-step graph algorithm visualizations with graph area, step log, and control panel.
---

# Graph Tutorial Layout

<iframe src="main.html" height="652px" width="100%" scrolling="no"></iframe>

[Run the Graph Tutorial Layout MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## Description

This MicroSim demonstrates the standard layout for creating step-by-step graph algorithm visualizations. It shows the three main regions that every graph algorithm tutorial should have:

1. **Graph Visualization Region** (Left side) - Where the network graph is drawn with nodes and edges
2. **Step Log Panel** (Right side) - A scrolling log showing each algorithm decision
3. **Control Panel** (Bottom) - Buttons and sliders for user interaction

## Layout Proportions

| Region | Position | Purpose |
|--------|----------|---------|
| Graph Center | `canvasWidth * 0.34` | Centers the graph in the left portion |
| Step Log | `canvasWidth * 0.67` | Right 30% of the canvas |
| Drawing Area | Top 500px | `drawHeight` for visualization |
| Control Panel | Bottom 150px | `controlHeight` for UI controls |

## Visual Elements Demonstrated

### Graph Visualization

- **Nodes**: Steel blue circles with white letter labels (A-F)
- **Accepted edges**: Gold color, 4px thick
- **Rejected edges**: Light gray, 1px thin
- **Available edges**: Gray, 2px medium
- **Edge weights**: Displayed in aliceblue rectangles

### Step Log

- **Accepted entries**: Green with checkmark (✓)
- **Rejected entries**: Red with X (✗)
- **Completion**: Gold with star (★)
- **Auto-scroll**: Shows most recent entries

### Control Panel

- **Algorithm selector**: Dropdown for choosing algorithm
- **Step Forward**: Execute one step manually
- **Auto Run/Pause**: Toggle automatic execution
- **Reset**: Generate new random graph
- **Speed slider**: Control animation delay (Slower/Faster labels)
- **Status text**: Current step description
- **Progress**: Edge count and total weight

## Embedding This MicroSim

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/intro-to-graph/sims/graph-tutorial-layout/main.html"
        height="652px"
        scrolling="no">
</iframe>
```

## Usage Guide

This layout template is designed for instructors creating new graph algorithm visualizations. The key principles are:

1. **Consistent positioning** - Students learn one interface and apply it to all algorithms
2. **Clear visual feedback** - Color coding immediately shows algorithm decisions
3. **Complete logging** - Every step is recorded for review
4. **User control** - Both manual stepping and automatic modes supported

## Related Resources

- [Creating a Step-by-Step Graph Animation](../../instructors-guide/creating-a-step-by-step-graph-animation.md) - Full implementation guide
- [Minimum Spanning Tree MicroSim](../minimum-spanning-tree/index.md) - Working example using this layout

## Technical Details

- **Library**: p5.js 1.11.10
- **Canvas Height**: 650px (500px drawing + 150px controls)
- **Responsive**: Width adjusts to container
- **Node Radius**: 20px
- **Default Text Size**: 16px
