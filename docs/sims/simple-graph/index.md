# Simple Graph MicroSim

<iframe src="main.html" height="500" scrolling="no"></iframe>

## Overview

This MicroSim demonstrates a basic graph structure using vis-network, showing two nodes (Person entities) connected by a relationship edge. The simulation features an interactive property inspector that displays detailed information about nodes and edges when clicked.

## Learning Objectives

After interacting with this MicroSim, students will be able to:

- **Understand** the basic components of a graph data structure (nodes and edges)
- **Identify** properties associated with nodes and edges
- **Recognize** how relationships connect entities in a graph
- **Analyze** the information stored in graph elements

## Graph Structure

The graph contains:

**Nodes:**
- **Dan** (Person, age: 65) - Positioned at 25% from the left
- **Ann** (Person, age: 69) - Positioned at 50% from the left

**Edges:**
- **FRIEND_OF** - A directed relationship from Dan to Ann, established since 2002

## How to Use

1. **View the Graph:** The visualization shows two nodes representing people connected by a friendship relationship
2. **Click on Nodes:** Click on either "Dan" or "Ann" to view their properties in the right panel
3. **Click on Edge:** Click on the arrow/line connecting the nodes to view relationship properties
4. **Inspect Properties:** The property inspector on the right displays detailed information including:
   - Node: ID, Label, Type, Age, Position, Size, Fixed status
   - Edge: ID, Type, From/To nodes, Since date, Direction, Width

## Interactive Features

- **Property Inspector:** Right panel (25% of screen) shows detailed properties
- **Fixed Positions:** Nodes maintain their positions with physics disabled
- **Responsive Design:** Layout adapts to different screen sizes
- **Visual Feedback:** Elements highlight when clicked

## MicroSim

<iframe src="main.html" width="100%" height="600px" style="border: 1px solid #ccc; border-radius: 4px;"></iframe>

## Technical Details

**Technology:** vis-network JavaScript library
**Node Positioning:** Fixed coordinates with physics disabled
**Node Size:** 1/10th of canvas width (responsive)
**Layout:** 75% graph visualization, 25% property inspector

## Graph Notation

This graph can be represented in Cypher-like notation:

```
(Dan:Person {age: 65})
    -[:FRIEND_OF {since: 2002}]->
(Ann:Person {age: 69})
```

## Educational Context

This simple graph demonstrates fundamental graph database concepts:

- **Nodes** represent entities (in this case, people)
- **Properties** store information about entities (type, age)
- **Edges** represent relationships between entities
- **Edge Properties** provide context about relationships (since date)
- **Direction** indicates the flow of relationships (Dan → Ann)

## Discussion Questions

1. What information is stored in the nodes vs. the edges?
2. How does the visual representation help understand the relationship?
3. What other properties might be useful to add to these nodes?
4. How could this simple graph be extended to represent a larger social network?

## Related Concepts

- Graph Theory
- Network Visualization
- Data Structures
- Relationship Modeling
- Property Graphs

## See Also

- [Learning Graph](../learning-graph/index.md) - A more complex graph showing concept relationships
