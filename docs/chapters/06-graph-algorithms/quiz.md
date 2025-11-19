# Quiz: Graph Algorithms

Test your understanding of graph algorithms including pathfinding, centrality measures, community detection, and graph neural networks.

---

#### 1. What is the key difference between breadth-first search (BFS) and depth-first search (DFS)?

<div class="upper-alpha" markdown>
1. BFS explores all neighbors at the current depth before moving deeper, while DFS explores as far as possible along each branch before backtracking
2. BFS is always faster than DFS
3. DFS can only be used on trees
4. BFS and DFS produce identical results
</div>

??? question "Show Answer"
    The correct answer is **A**. BFS explores all neighbors at the current depth level before moving to the next depth (layer by layer), while DFS explores as far as possible along each branch before backtracking. BFS finds shortest paths in unweighted graphs; DFS is useful for cycle detection and topological sorting. Neither is universally faster—it depends on the use case.

    **Concept Tested:** Breadth-First Search, Depth-First Search

    **See:** [Graph Traversal Algorithms](index.md)

---

#### 2. What does PageRank measure?

<div class="upper-alpha" markdown>
1. The physical size of web pages
2. Node importance based on the quality and quantity of incoming edges, where links from important nodes count more
3. The number of pages in a book
4. Database read performance
</div>

??? question "Show Answer"
    The correct answer is **B**. PageRank calculates node importance by considering both the quantity and quality of incoming edges—nodes pointed to by many important nodes receive high PageRank scores. Originally developed by Google for web page ranking, it's now used to identify influential users in social networks, critical infrastructure, or important concepts in knowledge graphs.

    **Concept Tested:** PageRank

    **See:** [PageRank Algorithm](index.md)

---

#### 3. What problem do shortest path algorithms solve?

<div class="upper-alpha" markdown>
1. Finding the alphabetically first path
2. Finding the minimum-cost or minimum-hop route between nodes in a graph
3. Determining graph color schemes
4. Counting total nodes
</div>

??? question "Show Answer"
    The correct answer is **B**. Shortest path algorithms find the minimum-cost (considering edge weights) or minimum-hop (counting edges) route between nodes. Dijkstra's algorithm finds shortest weighted paths; BFS finds minimum hop-count paths in unweighted graphs. Applications include GPS navigation, network routing, and social connection analysis.

    **Concept Tested:** Shortest Path Algorithms

    **See:** [Pathfinding Section](index.md)

---

#### 4. What is community detection used for?

<div class="upper-alpha" markdown>
1. Finding spelling errors
2. Identifying clusters of densely connected nodes within graphs, revealing natural groupings or communities
3. Counting community members
4. Deleting communities
</div>

??? question "Show Answer"
    The correct answer is **B**. Community detection algorithms identify clusters of densely connected nodes where nodes within clusters are more connected than nodes between clusters. This reveals natural groupings like customer segments with similar purchasing patterns, social groups in networks, or fraud rings. Applications include market segmentation, social analysis, and fraud detection.

    **Concept Tested:** Community Detection

    **See:** [Community Detection](index.md)

---

#### 5. How do graph neural networks (GNNs) differ from traditional neural networks?

<div class="upper-alpha" markdown>
1. GNNs can only process numbers
2. GNNs operate on graph-structured data, learning node representations by aggregating information from neighborhoods
3. GNNs are older than traditional neural networks
4. GNNs cannot learn from data
</div>

??? question "Show Answer"
    The correct answer is **B**. Graph Neural Networks are deep learning architectures that operate on graph-structured data, learning node representations by aggregating information from node neighborhoods. Unlike CNNs (designed for grids) or RNNs (designed for sequences), GNNs handle arbitrary graph topologies, enabling tasks like node classification, link prediction, and graph classification on molecular, social, or knowledge graphs.

    **Concept Tested:** Graph Neural Networks

    **See:** [Graph Neural Networks Section](index.md)

---

#### 6. What is betweenness centrality and why is it useful?

<div class="upper-alpha" markdown>
1. The number of edges connected to a node
2. A measure of how often a node appears on shortest paths between other nodes, identifying bridges and bottlenecks
3. The distance between two nodes
4. The number of properties on a node
</div>

??? question "Show Answer"
    The correct answer is **B**. Betweenness centrality measures how often a node appears on shortest paths between other nodes, identifying bridges and bottlenecks in the network. High betweenness indicates the node is critical for information flow. Applications include finding critical servers in IT networks, key connectors in social networks, or bottlenecks in supply chains.

    **Concept Tested:** Betweenness Centrality

    **See:** [Centrality Measures](index.md)

---

#### 7. Given a transportation network where you need to find the fastest route considering traffic and distance, which algorithm would you use?

<div class="upper-alpha" markdown>
1. Alphabetical sorting
2. Dijkstra's shortest path algorithm, using travel time as edge weights
3. Random path selection
4. Breadth-first search without considering weights
</div>

??? question "Show Answer"
    The correct answer is **B**. Dijkstra's algorithm finds shortest paths in weighted graphs, perfect for GPS navigation where edges have weights representing travel time (considering traffic and distance). BFS (D) only works for unweighted graphs (hop count). The algorithm efficiently finds optimal routes even in large road networks with thousands of nodes.

    **Concept Tested:** Shortest Path Algorithms, Pathfinding

    **See:** [Pathfinding Applications](index.md)

---

#### 8. What distinguishes centrality measures from simple node degree?

<div class="upper-alpha" markdown>
1. They measure the same thing
2. Centrality measures consider network position and structure, not just direct connections
3. Centrality only applies to social networks
4. Node degree is always more accurate
</div>

??? question "Show Answer"
    The correct answer is **B**. While node degree simply counts direct connections, centrality measures consider network position and structure. Betweenness centrality identifies bridges, closeness centrality measures reach efficiency, and PageRank weighs connections by source importance. A node with few connections might have high centrality if strategically positioned, while highly connected nodes might have low centrality if isolated.

    **Concept Tested:** Centrality Measures, Degree of Node

    **See:** [Centrality Analysis](index.md)

---

#### 9. How does the A* (A-star) algorithm improve upon basic shortest path finding?

<div class="upper-alpha" markdown>
1. By ignoring edge weights
2. By using heuristic functions to estimate distance to goal, prioritizing exploration of promising routes
3. By always being slower
4. By only working on trees
</div>

??? question "Show Answer"
    The correct answer is **B**. A* uses heuristic functions (estimated distance to goal) to intelligently prioritize which paths to explore, making it more efficient than Dijkstra's for single source-destination queries. For example, GPS navigation uses A* with straight-line distance as a heuristic, avoiding exploration of routes heading away from the destination.

    **Concept Tested:** A-Star Algorithm

    **See:** [Pathfinding Algorithms](index.md)

---

#### 10. Why are graph algorithms increasingly important for machine learning?

<div class="upper-alpha" markdown>
1. They're not important for machine learning
2. Graph structures naturally represent relationships in data, and algorithms like GNNs enable ML on social networks, molecules, and knowledge graphs
3. Machine learning only works with images
4. Graphs slow down machine learning
</div>

??? question "Show Answer"
    The correct answer is **B**. Graph structures naturally represent relationships in many domains—social networks, molecular structures, knowledge graphs, recommendation systems. Graph algorithms and GNNs enable machine learning on this structured data, powering applications from drug discovery (molecular graphs) to social network analysis to recommendation engines. Graph embeddings and GNNs are increasingly central to modern ML.

    **Concept Tested:** Graph Neural Networks, Graph Embeddings

    **See:** [Graph ML Applications](index.md)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (2), Understand (4), Apply (2), Analyze (2)
**Concepts Covered:** Breadth-First Search, Depth-First Search, PageRank, Community Detection, Graph Neural Networks, Betweenness Centrality, Centrality Measures, Shortest Path Algorithms, Pathfinding, A-Star Algorithm, Graph Embeddings

**Next Steps:**
- Explore [Chapter Content](index.md) for algorithm implementations
- Practice applying algorithms to different graph types
- Continue to [Chapter 7: Social Network Modeling](../07-social-network-modeling/index.md)
