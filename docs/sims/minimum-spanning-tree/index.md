---
title: Minimum Spanning Tree Algorithm Visualizer
description: An interactive MicroSim demonstrating Kruskal's and Prim's algorithms for finding minimum spanning trees in weighted graphs.
---

# Minimum Spanning Tree Algorithm Visualizer

<iframe src="main.html" height="652px" width="100%" scrolling="no"></iframe>

[Run the Minimum Spanning Tree MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/intro-to-graph/sims/minimum-spanning-tree/main.html"
        height="652px"
        width="100%"
        scrolling="no">
</iframe>
```

## Description

The Minimum Spanning Tree (MST) MicroSim provides an interactive visualization of two fundamental graph algorithms: Kruskal's algorithm and Prim's algorithm. Both algorithms solve the same problem—finding the minimum cost network that connects all nodes without creating cycles—but use different strategic approaches.

### What is a Minimum Spanning Tree?

A minimum spanning tree is a subset of edges in a weighted graph that:
- **Connects all nodes** (vertices) together
- **Contains no cycles** (is a tree structure)
- **Minimizes the total edge weight** (has minimum total cost)

MSTs solve critical real-world problems in network design, infrastructure planning, and optimization.

### Algorithm Comparison

**Kruskal's Algorithm (Edge-Based Greedy Approach):**
- Sorts all edges by weight from smallest to largest
- Examines edges in order, adding each edge if it doesn't create a cycle
- Uses a union-find data structure to detect cycles efficiently
- Strategy: "Consider the cheapest available connection"

**Prim's Algorithm (Node-Based Greedy Approach):**
- Starts from an arbitrary node and grows the tree one node at a time
- Always adds the minimum-weight edge connecting a visited node to an unvisited node
- Uses a priority queue to track candidate edges
- Strategy: "Expand the tree with the cheapest connection to a new location"

### Visual Feedback

The simulation uses color coding to show algorithm progress:
- **Gray edges**: Available for consideration
- **Yellow edge**: Currently being evaluated
- **Gold edges**: Accepted into the MST (thick lines)
- **Light gray edges**: Rejected (would create cycle)
- **Green nodes** (Prim's only): Visited nodes included in the MST

Edge weights are displayed at the midpoint of each edge in white circles for easy reference.

### Interactive Controls

**Algorithm Selection:**
- Dropdown menu to switch between Kruskal's and Prim's algorithms
- Changing algorithms resets the simulation with a new random graph

**Execution Controls:**
- **Step Forward**: Execute one algorithm step to see detailed decision-making
- **Auto Run**: Animate the complete algorithm execution
- **Reset**: Generate a new random graph and restart

**Animation Speed:**
- Slider controls the delay between steps (100-2000 milliseconds)
- Slower speeds help understand each decision; faster speeds show overall behavior

**Status Display:**
- Current action description explains each step
- Edge counter shows progress (current/total edges needed)
- Running total displays cumulative MST weight

## Educational Applications

### Learning Objectives

Students using this MicroSim will:
1. **Understand** the minimum spanning tree problem and its real-world applications
2. **Compare** two different algorithmic approaches to the same problem
3. **Analyze** how greedy algorithms make locally optimal choices
4. **Observe** cycle detection mechanisms in action
5. **Apply** graph theory concepts to network optimization

### Classroom Activities

**Activity 1: Algorithm Comparison**
- Run both algorithms on the same graph (use Reset to generate new graphs)
- Verify that both produce MSTs with the same total weight
- Observe how the order of edge selection differs between algorithms
- Discuss: Why do different approaches yield the same optimal result?

**Activity 2: Manual Prediction**
- Pause after each step and predict which edge will be selected next
- For Kruskal's: Find the minimum weight edge that won't create a cycle
- For Prim's: Find the minimum weight edge connecting to an unvisited node
- Verify predictions by stepping forward

**Activity 3: Real-World Applications**
- Given the graph represents cities connected by roads, what does the MST represent?
  - Answer: Minimum road network connecting all cities
- Brainstorm other scenarios: utility networks, computer networks, transportation routes
- Calculate potential cost savings: Compare MST weight to total graph weight

**Activity 4: Cycle Detection**
- Watch carefully when Kruskal's rejects edges
- Identify which existing MST edges would create a cycle with the rejected edge
- Understand why preventing cycles is essential for tree structures

### Discussion Questions

1. Why do both algorithms always find an MST with the same total weight, even though they select edges in different orders?
2. In what situations might you prefer Kruskal's algorithm over Prim's (or vice versa)?
3. How does the union-find data structure enable efficient cycle detection in Kruskal's algorithm?
4. What would happen if edges had negative weights? Would these algorithms still work?
5. Can you think of situations where you'd want the *maximum* spanning tree instead?

## Real-World Applications

### Network Infrastructure Design
- **Telecommunications**: Laying fiber optic cable to connect cities with minimum total length
- **Electrical grids**: Connecting power stations with minimum transmission line cost
- **Water distribution**: Designing pipe networks to serve all locations efficiently

### Computer Networks
- **Local Area Networks (LANs)**: Minimizing cable length in building networks
- **Network routing**: Finding efficient data transmission paths
- **Cluster analysis**: Grouping similar data points with minimum total distance

### Transportation and Logistics
- **Road networks**: Connecting communities with minimum pavement
- **Railway planning**: Designing rail lines connecting stations
- **Airline route optimization**: Hub-and-spoke network design

### Supply Chain Management
- **Distribution centers**: Connecting warehouses with minimum shipping cost
- **Pipeline networks**: Oil, gas, or water pipeline routing
- **Manufacturing**: Connecting assembly stations on a factory floor

## Technical Implementation

This MicroSim is built with p5.js and follows educational MicroSim design standards:
- **Width-responsive**: Adapts to any container width while maintaining proportions
- **Clean separation**: Drawing area (graph) separate from control area (UI)
- **Immediate feedback**: Real-time visualization of algorithm decisions
- **Educational focus**: Clear labels, status messages, and visual differentiation

### Data Structures Used

**Graph Representation:**
- Nodes: Array of objects with position and label
- Edges: Array of objects with endpoints, weight, and state

**Kruskal's Algorithm:**
- Sorted edge list (priority queue)
- Union-find (disjoint set) for cycle detection

**Prim's Algorithm:**
- Visited node tracker (boolean array)
- Priority queue of candidate edges

### Algorithm Complexity

Both algorithms have similar time complexity:
- Kruskal's: O(E log E) where E = number of edges (dominated by sorting)
- Prim's: O(E log V) where V = number of nodes (with binary heap priority queue)

For dense graphs (many edges), Prim's can be more efficient. For sparse graphs (few edges), Kruskal's may perform better in practice.

## Extension Ideas

Teachers and advanced students can extend this simulation:

1. **Compare performance**: Add a step counter to compare how many steps each algorithm requires
2. **Show the queue**: Display Kruskal's sorted edge list or Prim's priority queue
3. **Weight visualization**: Use edge thickness to represent weight visually
4. **Custom graphs**: Allow students to create their own graphs by clicking to add nodes/edges
5. **Maximum spanning tree**: Modify algorithms to find maximum instead of minimum weight
6. **Animation effects**: Add particle flow along edges to show "network traffic"

## Lesson Plan

**Grade Level**: High School (Grades 10-12) or Undergraduate Computer Science

**Duration**: 45-60 minutes

**Prerequisites**:
- Understanding of graphs (nodes and edges)
- Basic algorithm concepts
- Familiarity with greedy algorithms (helpful but not required)

**Learning Sequence**:

1. **Introduction (10 min)**
   - Define minimum spanning tree problem
   - Discuss real-world applications
   - Introduce greedy algorithm concept

2. **Guided Exploration (15 min)**
   - Demonstrate Kruskal's algorithm using Step Forward
   - Students predict next edge selection
   - Discuss cycle detection mechanism

3. **Algorithm Comparison (10 min)**
   - Show Prim's algorithm on same graph
   - Compare edge selection order
   - Verify both find same total weight

4. **Independent Practice (10 min)**
   - Students experiment with both algorithms
   - Try different animation speeds
   - Generate multiple random graphs

5. **Application Discussion (10 min)**
   - Brainstorm real-world MST problems
   - Discuss when each algorithm might be preferred
   - Connect to broader graph theory concepts

6. **Assessment (5 min)**
   - Quiz: Given a small graph, manually find the MST
   - Verify answer using the simulation

**Assessment Opportunities**:
- Can students correctly predict which edge will be selected next?
- Do students understand why certain edges are rejected?
- Can students explain the difference between the two algorithmic approaches?
- Can students identify real-world applications of MSTs?

## Related Concepts

- Graph theory fundamentals
- Greedy algorithms
- Union-find (disjoint set) data structure
- Priority queues and heaps
- Network optimization
- Computational complexity
- NP-completeness (MST is actually in P, unlike many graph problems)

## References

1. Kruskal, J. B. (1956). "On the shortest spanning subtree of a graph and the traveling salesman problem". *Proceedings of the American Mathematical Society*, 7(1), 48-50.

2. Prim, R. C. (1957). "Shortest connection networks and some generalizations". *Bell System Technical Journal*, 36(6), 1389-1401.

3. Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press. Chapter 23: Minimum Spanning Trees.
