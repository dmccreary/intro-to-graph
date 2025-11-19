# Knowledge Triangle MicroSim - Development Session Log

**Date:** 2025-11-19
**MicroSim:** Knowledge Triangle
**Location:** `/docs/sims/knowledge-triangle/`
**Status:** ✅ Complete and Production-Ready

## Executive Summary

Successfully created an interactive p5.js MicroSim visualizing the three layers of data transformation in graph databases: Data Layer (raw binary), Information Layer (isolated facts), and Knowledge Layer (connected graph). The development process involved creating the visualization, debugging triangle orientation issues, and resolving p5.js rendering errors to achieve working hover tooltips.

## Initial Requirements

From `requirements.md`:

### Concept
Create a triangle diagram with three horizontal layers representing the data hierarchy:

1. **Data Layer (Bottom)**: Black background with green binary (1s and 0s)
2. **Information Layer (Middle)**: Colored circles labeled "Fact"
3. **Knowledge Layer (Top)**: Connected graph nodes with edges

### Interactive Feature
- Hover tooltips explaining each layer's characteristics
- Educational descriptions of the transformation from data → information → knowledge

### Visual Design
- Triangle shape (narrow at top, wide at bottom)
- Distinct visual styling for each layer
- Layer labels within each section

## Implementation Process

### Phase 1: Initial File Creation

**Files Generated:**

1. `knowledge-triangle.js` - Main p5.js simulation
2. `main.html` - HTML wrapper with p5.js CDN
3. `index.md` - Documentation with iframe embed
4. `metadata.json` - Dublin Core educational metadata

**Architecture Decisions:**

- Canvas dimensions: 600×550 (500px drawing + 50px control area)
- Triangle positioning: 60px from top, with 80px reserved for title
- Three equal height layers (each 1/3 of triangle height)
- Width calculation function `getTriangleWidthAtY(y)` for responsive triangle geometry

### Phase 2: Triangle Geometry Implementation

**Initial Width Calculation (INCORRECT):**

```javascript
function getTriangleWidthAtY(y) {
  let relativeY = y - triangleTop;
  let ratio = relativeY / triangleHeight;
  return triangleBase * (1 - ratio);  // ❌ INVERTED!
}
```

**Problem:** This formula made the triangle **wide at top, narrow at bottom** - the opposite of intended.

**Root Cause:** In p5.js, y=0 is at the TOP of the canvas and y increases DOWNWARD. The formula `(1 - ratio)` inverted the width calculation.

**Corrected Formula:**

```javascript
function getTriangleWidthAtY(y) {
  // Triangle is narrow at top (small y) and wide at bottom (large y)
  let relativeY = y - triangleTop;
  let ratio = relativeY / triangleHeight;
  return triangleBase * ratio;  // ✅ CORRECT
}
```

**Validation:**
- At `knowledgeLayerTop` (y=60): ratio = 0, width = 0 (narrow apex) ✓
- At `triangleBottom`: ratio = 1, width = triangleBase (wide base) ✓

### Phase 3: Layer Drawing Implementation

**Data Layer (Bottom):**
- Background: Black filled trapezoid
- Content: 150 random "1" and "0" characters in bright green (#00FF00)
- Label: White "Data Layer" text centered

**Information Layer (Middle):**
- Background: Light blue (#E8F4F8) trapezoid
- Content: 12 colored circles (radius 12px) with "Fact" labels
- Colors: Pastel palette ['#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C', '#FFE4B5']
- Label: Black "Information Layer" text

**Knowledge Layer (Top):**
- Background: Light blue (#F0F8FF) triangle
- Content: 8 nodes with 1-3 connections each, colored edges
- Node colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F']
- Label: Black "Knowledge Layer" text with manual positioning offset (+55px)

### Phase 4: Hover Detection System

**Architecture:**

```javascript
// Global hover state
let hoveredLayer = null; // 'data', 'info', 'knowledge', or null

// Detection functions for each layer
function isPointInDataLayer(x, y)
function isPointInInfoLayer(x, y)
function isPointInKnowledgeLayer(x, y)

// Main hover check (called every frame)
function checkHover()
```

**Hit Detection Logic:**

Each layer has exclusive y-coordinate ranges:
- Knowledge: `knowledgeLayerTop` to `infoLayerTop`
- Information: `infoLayerTop` to `dataLayerTop`
- Data: `dataLayerTop` to `triangleBottom`

For x-coordinate validation:
```javascript
let widthAtY = getTriangleWidthAtY(y);
let leftEdge = centerX - widthAtY / 2;
let rightEdge = centerX + widthAtY / 2;
return x >= leftEdge && x <= rightEdge;
```

## Debugging Journey

### Bug #1: Inverted Triangle Orientation

**Symptom:** Triangle appeared upside-down with wide top and narrow bottom.

**Diagnosis:**
- User reported: "some of the triangles are inverted"
- Reminded that y=0 is at top in p5.js

**Solution:** Changed `getTriangleWidthAtY()` formula from `triangleBase * (1 - ratio)` to `triangleBase * ratio`

**Verification:** Visual inspection showed correct pyramid shape with apex at top.

### Bug #2: Invalid stroke() Call

**Symptom:** Error in p5.js editor:
```
[line 76] "[object Arguments]is not a valid color representation"
occurred inside the p5js library when stroke was called
```

**Diagnosis:**
- Called `stroke()` with no arguments after `noStroke()`
- In p5.js, `stroke()` requires at least one color parameter
- Cannot call `stroke()` to "reset" - must specify a color

**Solution:** Removed the invalid `stroke()` call with no arguments:
```javascript
// Before:
noStroke();
text('Knowledge Triangle', ...);
stroke();  // ❌ Invalid - cannot call stroke() without arguments!
textAlign(LEFT, CENTER);

// After:
noStroke();
text('Knowledge Triangle', ...);
textAlign(LEFT, CENTER);  // ✅ Just omit stroke()
```

### Bug #3: Tooltips Not Appearing

**Symptom:** No tooltips visible on hover, no clicking response.

**Diagnosis Process:**

**Step 1:** Added debug indicator at bottom of canvas
```javascript
text('Hover: ' + (hoveredLayer || 'none'), 10, drawHeight + 25);
```

**Step 2:** Simplified tooltip to bright yellow box for visibility
```javascript
fill('yellow');
stroke('red');
strokeWeight(3);
rect(boxX, boxY, boxWidth, boxHeight);
```

**Step 3:** Added console logging to track hover state changes
```javascript
if (hoveredLayer !== prevHoveredLayer) {
  console.log('Hover changed from', prevHoveredLayer, 'to', hoveredLayer,
              'at position', mouseX, mouseY);
}
```

**Step 4:** Added logging to confirm drawInfoBox() execution
```javascript
console.log('Drawing infobox for layer:', hoveredLayer);
```

**Success:** Console logs showed:
```
Hover changed from null to knowledge at position 292 155
Drawing infobox for layer: knowledge
Hover changed from knowledge to info at position 278 217
Drawing infobox for layer: info
```

**Root Cause:** The bug was the earlier p5.js `stroke()` error (Bug #2) preventing the entire sketch from running. Once that was fixed, hover detection worked perfectly.

## Final Implementation

### Tooltip Styling

**Professional Design Elements:**

1. **Shadow effect** for depth:
   ```javascript
   fill(0, 0, 0, 30);  // Semi-transparent black
   rect(boxX + 4, boxY + 4, boxWidth, boxHeight, 8);
   ```

2. **Title bar** with blue background:
   ```javascript
   fill(70, 130, 180);  // Steel blue
   rect(boxX, boxY, boxWidth, 35, 8, 8, 0, 0);  // Rounded top corners
   ```

3. **White text** on title bar, **dark gray** on body

4. **Smart positioning** to keep tooltip on-screen:
   ```javascript
   if (boxX + boxWidth > canvasWidth - 10) {
     boxX = mouseX - boxWidth - 15;  // Flip to left of mouse
   }
   if (boxY + boxHeight > drawHeight - 10) {
     boxY = mouseY - boxHeight - 15;  // Flip above mouse
   }
   ```

5. **Word wrapping** for clean text display

### Educational Content

**Data Layer Tooltip:**
> Contains raw binary data in the form of 1s and 0s. It is the information you might see by creating a raw dump of the data on a hard drive. Finding meaning out of the data layer takes a lot of work.

**Information Layer Tooltip:**
> Contains isolated facts extracted from the raw data. These facts are each disconnected from other facts.

**Knowledge Layer Tooltip:**
> Contains connected facts. It is a graph where facts are all connected together. Each fact must connect to other facts to be valuable. Insight occurs by traversing the network of facts.

## Performance Optimizations

1. **Efficient hover detection:** Check y-range first (cheap), then x-range (requires width calculation)
2. **Conditional rendering:** Only draw tooltip when `hoveredLayer !== null`
3. **Data generation on setup:** Create random elements once, not every frame
4. **Responsive regeneration:** Only regenerate on `windowResized()`, not every frame

## Lessons Learned

### p5.js Coordinate System
- **Always remember:** y=0 is at TOP, y increases DOWNWARD
- Ratios for "top to bottom" progression should increase from 0 to 1 with increasing y
- Test triangle orientation visually before implementing complex features

### p5.js Function Signatures
- `describe()` takes 1-2 parameters, second is optional display mode
- `stroke()` requires at least one color parameter - cannot call without args
- Use `noStroke()` and `noFill()` to disable, don't try to "reset" them

### Debugging Interactive Graphics
1. **Start simple:** Yellow box with red border is unmissable
2. **Add logging:** Track state changes with console.log
3. **Incremental validation:** Fix errors one at a time, test each fix
4. **Visual indicators:** Show debug info in the canvas itself (like "Hover: ...")

### MicroSim Architecture Patterns
- Separate drawing functions for each visual element
- Central state management (`hoveredLayer` global variable)
- Frame-by-frame update in `draw()`, setup in `setup()`
- Responsive design with `windowResized()` handler

## Testing Checklist

✅ Triangle displays with correct orientation (apex at top)
✅ Three distinct layers with appropriate visual styling
✅ Hover detection works for all three layers
✅ Tooltips appear with correct content for each layer
✅ Tooltips stay on screen (smart positioning)
✅ No console errors in browser
✅ Works in p5.js editor (paste JavaScript directly)
✅ Responsive to window resizing
✅ Title positioned correctly in knowledge layer
✅ Layer labels visible and centered

## File Manifest

```
docs/sims/knowledge-triangle/
├── knowledge-triangle.js    (465 lines) - Main p5.js simulation
├── main.html                (22 lines)  - HTML wrapper with CDN
├── index.md                 (280 lines) - Documentation with lesson plan
├── metadata.json            (75 lines)  - Dublin Core metadata
└── logs/
    └── knowledge-triangle.md           - This session log
```

## Integration

**MkDocs Navigation:** Added to `mkdocs.yml`:
```yaml
- MicroSims:
  - Knowledge Triangle: sims/knowledge-triangle/index.md
```

**Live URL:** https://dmccreary.github.io/intro-to-graph/sims/knowledge-triangle/

**Embed Code:**
```html
<iframe src="https://dmccreary.github.io/intro-to-graph/sims/knowledge-triangle/main.html"
        height="502px"
        width="100%"
        scrolling="no">
</iframe>
```

## Metrics

- **Development Time:** ~2 hours (including debugging)
- **Lines of Code:** 465 (JavaScript only)
- **Bugs Fixed:** 3 issues (triangle orientation, stroke call, tooltip debugging)
- **Files Created:** 5 (JS, HTML, MD, JSON, LOG)
- **Dependencies:** p5.js 1.11.10 via CDN

## Future Enhancements (Optional)

1. **Animation:** Slowly animate the connections in the knowledge layer
2. **Click interaction:** Click a layer to "lock" the tooltip open
3. **Comparison mode:** Side-by-side view of RDBMS table vs. graph representation
4. **Data flow animation:** Visualize data moving up through the layers
5. **Customization controls:** Sliders to adjust number of facts/nodes
6. **Export feature:** Save current triangle state as PNG image
7. **Mobile optimization:** Touch-friendly tooltip activation

## Educational Impact

This MicroSim successfully illustrates the fundamental principle that distinguishes graph databases from traditional data storage:

- **Traditional databases** operate at the **Information Layer**: structured facts in tables, but relationships are secondary
- **Graph databases** elevate data to the **Knowledge Layer**: relationships are first-class, enabling traversal and insight

The visual metaphor of a triangle (volume decreases, value increases) reinforces that while raw data is abundant, actionable knowledge requires connection and context.

## Conclusion

The Knowledge Triangle MicroSim is production-ready and successfully demonstrates the three-layer data transformation hierarchy. All bugs have been resolved, hover tooltips work reliably, and the visualization effectively communicates the core educational concept: **knowledge emerges from connected information, not isolated facts**.

The debugging process reinforced important p5.js fundamentals and demonstrated the value of incremental testing with visual feedback. The final implementation follows MicroSim best practices with responsive design, clean code structure, and comprehensive documentation.

---

**Status:** ✅ Complete
**Last Updated:** 2025-11-19
**Ready for Production:** Yes
**Next Action:** Deploy with `mkdocs gh-deploy`
