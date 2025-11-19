# Requirements for the Knowledge Triangle MicroSim

Use the microsim-p5 skill to create a new p5.js MicroSim at @docs/sims/knowledge-triangle.

This is an drawing of a triangle with three layers.

1. Bottom Data Layer
2. Middle Information Layer
3. Top Knowledge Layer

When the user hovers over any area, an infobox appears in a tool tip explaining what that area is.

## The Data Layer

### Non-Hover Presentation
The base layer has a label of "Data Layer" in white text.
It has a black background and has bright green 1 and 0 like on an old green screen terminal.
When the user hovers over any part of the data layer it displays the following text.

### Infobox Text for Data Layer
The **Data Layer** contains raw binary data in the form of 1s and 0s.  It is the information
you might see by creating a raw dump of the data on a hard drive.  Finding meaning out
of the data layer takes a lot of work.

## The Information Layer

### Non-Hover Presentation

The Information Layer is the middle layer of the triangle.
It has the text "Information Layer" in black text.
full of small circles with the word "Fact" in them using a 10-point
font with different color backgrounds for each circle and a narrow 1pt black border.

### Infobox Text for Information Layer
**Information Layer:** This layer contains isolated facts extracted from the raw data.
These facts are each disconnected from other facts.

## The Knowledge Layer

### Knowledge Layer Presentation

The Text "Knowledge Layer" appears as black text over a background of
a graph of connected nodes.  Nodes are different colors and the edges
between the nodes are also of different colors.

### Infobox Text for the Knowledge Layer

**Knowledge Layer:** this layer contains connected facts.  It is
a graph where facts are all connected together.  Each fact must
connect to other facts to be valuable.  Insight occurs by
traversing the network of facts.

