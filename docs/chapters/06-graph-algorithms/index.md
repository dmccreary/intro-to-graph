# Graph Algorithms

## Summary

This chapter covers essential graph algorithms that power modern graph analytics and machine learning applications. You'll learn classic search algorithms like breadth-first and depth-first search, explore pathfinding techniques including A-star and the traveling salesman problem, and master centrality measures that identify important nodes in networks. The chapter progresses to advanced topics including PageRank, community detection, graph neural networks, and graph embeddings that enable machine learning on graph-structured data.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

1. Breadth-First Search
2. Depth-First Search
3. A-Star Algorithm
4. Pathfinding
5. Traveling Salesman Problem
6. PageRank
7. Community Detection
8. Centrality Measures
9. Betweenness Centrality
10. Closeness Centrality
11. Graph Embeddings
12. Graph Neural Networks
13. Link Prediction
14. Graph Clustering
15. Connected Components
16. Strongly Connected Components
17. Weakly Connected Components
18. Node Classification

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Labeled Property Graph Information Model](../03-labeled-property-graph-model/index.md)
- [Chapter 4: Query Languages for Graph Databases](../04-query-languages/index.md)

---

## Can Code Be Worth $350 Million?

Here's a wild question: can a single graph algorithm, written in about a page of code, be worth $350 million dollars?

The answer is yes—and we're talking about PageRank, the algorithm that launched Google and changed the internet forever. When Larry Page and Sergey Brin developed PageRank in 1996, they weren't just writing another search algorithm. They were applying graph theory to the web, treating every webpage as a node and every hyperlink as an edge. That simple insight, combined with a clever algorithm that could run on a graph of billions of pages, created what eventually became one of the most valuable companies in history.

But here's what makes graph algorithms truly fascinating: they're not just academic curiosities or billion-dollar lottery tickets. Graph algorithms represent a fundamental shift in how we think about storing and processing data. They break one of the cardinal rules of traditional database design—the idea that business logic should live in the application layer, not in the database itself. Graph algorithms blur that line, putting powerful analytical capabilities right where the data lives.

Once you understand graph algorithms, you'll see why storing data in precise models that capture structure is radically different from storing it in flat tables. Let's dive in and explore how these algorithms work and why they're a game-changer for graph databases.

## Understanding Graph Traversal: The Foundation

Before we can appreciate the fancy algorithms, we need to understand how to walk through a graph. Think of a graph as a city, with nodes as buildings and edges as streets connecting them. Graph traversal is simply the process of visiting nodes in a systematic way—like a mail carrier who needs to visit every building on their route.

The two fundamental traversal strategies are Breadth-First Search (BFS) and Depth-First Search (DFS). These aren't just academic concepts—they're the building blocks for nearly every graph algorithm you'll encounter.

### Breadth-First Search (BFS): Layer by Layer

Imagine you're at a party and you want to meet everyone there. With breadth-first search, you'd introduce yourself to everyone in the room you're in first, then move to adjacent rooms and meet those people, then move to rooms connected to those, and so on. You're exploring the social graph layer by layer, moving outward from your starting point.

BFS uses a queue data structure (first-in, first-out, like a line at a coffee shop). Here's how it works:

1. Start at a node and add it to the queue
2. Remove the first node from the queue and visit it
3. Add all its unvisited neighbors to the back of the queue
4. Repeat until the queue is empty

**Real-world applications of BFS:**

- Finding the shortest path between two people on a social network
- Checking if a website is reachable from your current page (web crawling)
- Finding all servers within 3 network hops from a failed component
- GPS navigation systems finding nearby points of interest

### Depth-First Search (DFS): All the Way Down

Depth-first search takes a different approach. Instead of exploring layer by layer, DFS goes as deep as possible down one path before backtracking. It's like exploring a maze by always taking the leftmost path until you hit a dead end, then backtracking and trying the next path.

DFS uses a stack data structure (last-in, first-out, like a stack of plates). Here's how it works:

1. Start at a node and push it onto the stack
2. Pop a node from the stack and visit it
3. Push all its unvisited neighbors onto the stack
4. Repeat until the stack is empty

**Real-world applications of DFS:**

- Detecting cycles in dependency graphs (circular references)
- Solving maze and puzzle problems
- Finding connected components in a network
- Topological sorting (ordering tasks that depend on each other)

#### Diagram: BFS vs DFS Interactive Visualization MicroSim

<details>
    <summary>BFS vs DFS Interactive Visualization MicroSim</summary>
    Type: microsim

    Learning objective: Help students understand the fundamental difference between breadth-first and depth-first traversal strategies by visualizing how each algorithm explores a graph.

    Canvas layout (900x600px):
    - Left side (650x600): Drawing area showing a graph network
    - Right side (250x600): Control panel with white background

    Visual elements in drawing area:
    - 16 nodes arranged in a balanced tree structure (4 levels: 1-2-4-8 nodes)
    - Node 1 at top, branching downward
    - Edges connecting parent nodes to child nodes
    - Start node (bright green circle with thicker border)
    - Current node being visited (yellow circle with pulsing animation)
    - Nodes in queue/stack waiting to be visited (light orange)
    - Visited nodes (blue)
    - Unvisited nodes (light gray)
    - Node labels showing numbers 1-16

    Interactive controls (right panel):
    - Dropdown menu: "Select Algorithm" (BFS or DFS)
    - Button: "Start Traversal" (green, 200px wide)
    - Button: "Step Forward" (blue, 200px wide)
    - Button: "Reset" (red, 200px wide)
    - Slider: "Animation Speed" (range 100-2000ms, default 600ms)
    - Display box: "Visit Order" showing sequence like "1, 2, 3, 5..."
    - Display box: "Queue/Stack Contents" showing current data structure state
    - Label: "Nodes Visited: X/16"

    Default parameters:
    - Algorithm: BFS
    - Animation speed: 600ms
    - Start node: Node 1 (top of tree)

    Behavior:
    - When "Start Traversal" clicked:
      - Animate the selected algorithm visiting nodes automatically
      - Highlight current node in yellow with pulsing effect
      - Show nodes in queue/stack in light orange
      - Mark fully processed nodes in blue
      - Update visit order list in real-time
      - Show queue/stack contents at each step
    - When "Step Forward" clicked:
      - Process one node then pause
      - Useful for studying the algorithm step-by-step
    - Visual comparison:
      - BFS visits level by level: 1, 2, 3, 5, 6, 9, 10...
      - DFS goes deep first: 1, 2, 5, 10, 11, 6, 12, 13...

    Educational notes displayed below controls:
    - "BFS uses a Queue (FIFO): First nodes discovered are visited first"
    - "DFS uses a Stack (LIFO): Most recently discovered nodes are visited first"
    - "Notice how BFS explores all neighbors before going deeper"
    - "Notice how DFS follows one path all the way down before backtracking"

    Implementation: p5.js with custom graph layout algorithm
    Graph data structure: Adjacency list representation
    Animation: Use p5.js frameCount and millis() for timing
</details>

### When to Use BFS vs DFS

Choosing between BFS and DFS depends on what you're trying to accomplish:

| Use Case | Best Algorithm | Why? |
|----------|----------------|------|
| Shortest path | BFS | Explores closest nodes first |
| Cycle detection | DFS | Follows paths to completion |
| All paths between nodes | DFS | Explores every branch thoroughly |
| Closest neighbors | BFS | Stops early when target found |
| Memory constrained | DFS | Uses less memory for wide graphs |
| Level-order traversal | BFS | Natural layer-by-layer exploration |

## Connected Components: Finding Islands in the Graph

Imagine you have a social network dataset with millions of users. Some users are connected to each other through friendships, but there might be isolated groups that have no connections to the rest of the network. These isolated groups are called **connected components**.

A connected component is a subgraph where:

- Every node can reach every other node in the component
- No node in the component can reach nodes outside the component

Think of connected components like islands in an ocean. Everyone on an island can travel to anyone else on the same island, but they can't reach people on other islands without a bridge (edge).

There are three types of connectivity in directed graphs (graphs where edges have direction, like following someone on Twitter):

**Weakly Connected Components:** If you ignore edge directions, the nodes are connected. Like saying "Alice follows Bob OR Bob follows Alice" counts as a connection.

**Strongly Connected Components:** Every node can reach every other node following the directed edges. Like saying "there's a path from Alice to Bob AND from Bob to Alice."

**Connected Components (undirected graphs):** In graphs where edges have no direction (like Facebook friendships), there's just one type of connected component.

**Real-world applications:**

- Identifying isolated user groups in social networks
- Finding separate network segments in IT infrastructure
- Detecting fraud rings (groups of accounts that only interact with each other)
- Analyzing scientific collaboration networks to find research communities

## Pathfinding: Getting from A to B Efficiently

Now that we know how to explore a graph, let's talk about pathfinding—finding the best route from one node to another. This is where graph algorithms get really practical.

### The Shortest Path Problem

BFS already gives us the shortest path in unweighted graphs (where all edges are equal). But what if edges have different weights? Imagine a road network where some roads are longer than others, or a network where some connections are faster than others. We need smarter algorithms.

### A-Star (A*): Pathfinding with a Compass

The A-Star algorithm (usually written as A*) is like BFS with a sense of direction. While BFS explores all neighbors equally, A* prioritizes neighbors that seem closer to the destination.

A* uses a heuristic function—an educated guess about which direction to explore. Think of it like having a compass that points toward your destination. You still explore methodically, but you check the promising-looking paths first.

**How A* works:**

1. Start at the origin node
2. For each neighbor, calculate a score: `f(n) = g(n) + h(n)`
   - `g(n)` = actual distance from start to this node
   - `h(n)` = estimated distance from this node to goal (heuristic)
3. Explore the neighbor with the lowest `f(n)` score first
4. Repeat until you reach the goal

**Real-world applications:**

- GPS navigation (finding fastest route considering traffic)
- Game AI (characters finding paths around obstacles)
- Robot motion planning (navigating physical spaces)
- Network routing protocols (finding efficient packet routes)

### The Traveling Salesman Problem: The Ultimate Pathfinding Challenge

Here's a famous problem that has stumped computer scientists for decades: you're a traveling salesperson who needs to visit a list of cities and return home. What's the shortest route that visits every city exactly once?

This is the **Traveling Salesman Problem (TSP)**, and it's notoriously difficult. While finding the shortest path between two nodes is easy, finding the shortest path that visits all nodes is exponentially harder.

For small graphs (10-15 cities), you can check every possible route. But for larger graphs, the number of possible routes explodes:

- 10 cities: 181,440 possible routes
- 15 cities: 653,837,184,000 possible routes
- 20 cities: 60,822,550,204,416,000 possible routes
- 25 cities: More routes than atoms in the observable universe

Real-world problems that reduce to TSP:

- Package delivery route optimization (UPS, FedEx, Amazon)
- Manufacturing (drilling circuit boards efficiently)
- DNA sequencing (finding shortest overlapping sequences)
- Telescope scheduling (minimizing movement between targets)

#### Diagram: Traveling Salesman Problem Performance Chart

<details>
    <summary>Traveling Salesman Problem Performance Chart</summary>
    Type: chart

    Chart type: Line chart with logarithmic Y-axis

    Purpose: Show how computation time for solving TSP grows exponentially with the number of cities, illustrating why it's such a challenging problem.

    X-axis: Number of cities (5, 10, 15, 20, 25, 30)
    Y-axis: Computation time (seconds, logarithmic scale from 0.001 to 1,000,000)

    Data series:

    1. "Brute Force (check all routes)" - red line:
       - 5 cities: 0.001 seconds
       - 10 cities: 0.18 seconds
       - 15 cities: 653 seconds (≈11 minutes)
       - 20 cities: 60,822 seconds (≈17 hours)
       - 25 cities: 620,448,401 seconds (≈20 years)
       - 30 cities: Off the chart (age of universe)

    2. "Optimized Approximation (A* variant)" - green line:
       - 5 cities: 0.001 seconds
       - 10 cities: 0.005 seconds
       - 15 cities: 0.02 seconds
       - 20 cities: 0.15 seconds
       - 25 cities: 0.8 seconds
       - 30 cities: 3.2 seconds

    Title: "Traveling Salesman Problem: Exact vs Approximate Solutions"

    Annotations:
    - Arrow pointing to red line at 25 cities: "Exact solution would take 20 years!"
    - Arrow pointing to green line: "Approximate solution finds near-optimal route in <1 second"
    - Text box: "Note: Approximate algorithms find routes within 1-5% of optimal"

    Legend: Position top-left

    Color scheme:
    - Red for brute force (danger/slow)
    - Green for approximation (success/fast)
    - Gray grid lines
    - White background

    Implementation: Chart.js with logarithmic scale
    Canvas size: 700x500px
</details>

The TSP teaches us an important lesson: sometimes good enough is good enough. Modern TSP solvers use approximation algorithms that find routes within 1-5% of the optimal solution in reasonable time. A delivery route that's 3% longer than perfect but takes seconds to compute is far better than the perfect route that takes 20 years to calculate.

## Centrality Measures: Who's Important in the Network?

Not all nodes in a graph are created equal. In a social network, some people have more friends. In a road network, some intersections are busier. In an IT infrastructure, some servers are more critical. **Centrality measures** help us identify the most important nodes in a graph.

Think of centrality as popularity, but different types of popularity matter in different contexts.

### Degree Centrality: How Connected Are You?

The simplest measure is **degree centrality**—just count how many edges connect to a node. In a social network, this is how many friends you have.

- **High degree centrality:** You're well-connected
- **Low degree centrality:** You're more isolated

But degree centrality is naive. Having 1,000 casual acquaintances might mean less than having 10 close friends who are themselves well-connected.

### Betweenness Centrality: Are You a Bridge?

**Betweenness centrality** measures how often a node appears on the shortest path between other nodes. Think of it as measuring how much traffic flows through you.

Nodes with high betweenness centrality are **bridges** or **brokers**—they connect different parts of the network. Remove them, and communities become disconnected.

**Real-world applications:**

- Identifying critical network routers (if they fail, networks partition)
- Finding influential connectors in social networks (people who bridge different groups)
- Detecting bottlenecks in workflows (steps where everything passes through)
- Finding vulnerability points in supply chains

### Closeness Centrality: How Quickly Can You Reach Everyone?

**Closeness centrality** measures how short your average path is to all other nodes. If you can reach everyone in the network in just a few hops, you have high closeness centrality.

Think of it as measuring efficiency:

- **High closeness:** You're at the center of the action, close to everyone
- **Low closeness:** You're on the periphery, far from most nodes

**Real-world applications:**

- Optimal warehouse placement (minimize average shipping distance)
- Emergency service location (minimize average response time)
- Influencer identification (who can spread information fastest)
- Server placement in content delivery networks

#### Diagram: Centrality Measures Comparison Diagram

<details>
    <summary>Centrality Measures Comparison Diagram</summary>
    Type: diagram

    Purpose: Visually demonstrate how different centrality measures identify different "important" nodes in the same network.

    Layout: Three identical network graphs arranged horizontally, each highlighting different nodes based on centrality type

    Network structure (same for all three):
    - 20 nodes arranged in three distinct communities
    - Left community: 7 nodes in a cluster
    - Right community: 7 nodes in a cluster
    - Center: 6 nodes connecting the two communities
    - Edges connecting nodes within communities (many edges)
    - Bridge edges connecting communities (few edges, pass through center nodes)

    Diagram 1: "Degree Centrality"
    - Node size represents degree (larger = more connections)
    - Largest nodes: Hub nodes within each community (5-6 connections each)
    - Smallest nodes: Peripheral nodes (1-2 connections)
    - Color gradient: Dark blue (high degree) to light blue (low degree)
    - Label: "High degree nodes are popular within their community"

    Diagram 2: "Betweenness Centrality"
    - Node size represents betweenness (larger = more shortest paths pass through)
    - Largest nodes: Bridge nodes in the center (connecting left and right communities)
    - Medium nodes: Hub nodes within communities
    - Smallest nodes: Peripheral nodes
    - Color gradient: Dark orange (high betweenness) to light orange (low betweenness)
    - Label: "High betweenness nodes connect different groups"

    Diagram 3: "Closeness Centrality"
    - Node size represents closeness (larger = shorter average path to all others)
    - Largest nodes: Central hub nodes in the middle area
    - Medium nodes: Well-connected nodes in communities
    - Smallest nodes: Peripheral edge nodes
    - Color gradient: Dark green (high closeness) to light green (low closeness)
    - Label: "High closeness nodes can reach everyone quickly"

    Visual elements:
    - Arrows pointing to specific nodes with annotations:
      - "This node has many friends (high degree)"
      - "This node bridges communities (high betweenness)"
      - "This node is centrally located (high closeness)"
    - Each graph titled with its centrality type
    - Legend showing what node size and color represent

    Style: Clean network diagram with circular nodes, straight edges
    Overall size: 1200x400px (400px per diagram)
    Colors: Blue, orange, and green color schemes respectively

    Implementation: SVG or Canvas-based diagram with labeled annotations
</details>

The key insight: **different centrality measures identify different types of importance.** A delivery driver might care about closeness (fastest average delivery time), while a cybersecurity analyst cares about betweenness (critical points of failure).

## PageRank: The $350 Million Algorithm

Now we come back to where we started: PageRank, the algorithm that launched Google and revolutionized web search.

Before PageRank, search engines ranked pages by counting keywords. If you wanted your page to rank for "best pizza," you just had to write "best pizza" 500 times (preferably in white text on a white background so humans wouldn't see it). This made search results terrible.

Larry Page and Sergey Brin had a better idea: treat the web as a graph. Each webpage is a node, and each hyperlink is an edge. Instead of counting keywords, count importance based on who links to you.

The PageRank insight: **A page is important if important pages link to it.**

This creates a recursive definition (importance defined in terms of importance), but that's actually brilliant—it's solved using linear algebra and graph theory.

### How PageRank Works: The Random Surfer Model

Imagine a web surfer who randomly clicks links:

1. Start on a random webpage
2. Randomly click one of the links on that page
3. Repeat forever

PageRank is the probability that this random surfer ends up on each page. Pages that are linked to more often (and linked from important pages) have higher probabilities.

**The algorithm:**

1. Start with all pages having equal PageRank (1/N where N = total pages)
2. For each page, distribute its PageRank equally to all pages it links to
3. Each page's new PageRank is the sum of PageRank it receives from incoming links
4. Repeat until values stabilize (converge)

**Key formula:** `PR(A) = (1-d) + d * (PR(T1)/C(T1) + ... + PR(Tn)/C(Tn))`

Where:

- `PR(A)` = PageRank of page A
- `d` = damping factor (usually 0.85) - probability surfer clicks a link vs jumping to random page
- `T1...Tn` = pages that link to page A
- `C(T)` = number of outbound links from page T

#### Diagram: PageRank Interactive Infographic

<details>
    <summary>PageRank Interactive Infographic</summary>
    Type: infographic

    Purpose: Show how PageRank values propagate through a small web graph over multiple iterations, helping students understand the iterative nature of the algorithm.

    Layout: Vertical layout with graph visualization at top and iteration controls below

    Graph visualization (800x400px):
    - 7 webpage nodes arranged in a meaningful layout:
      - Node A: "News Site" (top center) - links to B, C, D
      - Node B: "Blog Post" (left) - links to E
      - Node C: "Article" (center) - links to A, E
      - Node D: "Review Site" (right) - links to E, F
      - Node E: "Popular Page" (bottom center) - links to F, G
      - Node F: "Product Page" (bottom left) - links to E
      - Node G: "About Page" (bottom right) - links to E

    - Visual elements:
      - Nodes displayed as circles with webpage icons
      - Node size proportional to current PageRank value
      - Node color gradient: white (low PageRank) to gold (high PageRank)
      - PageRank value displayed inside each node (e.g., "0.15")
      - Directed edges shown as arrows (hyperlinks)
      - Edge thickness represents PageRank flow

    Interactive controls (800x200px below graph):
    - Button: "Reset" - Sets all nodes to equal PageRank (1/7 ≈ 0.143)
    - Button: "Step Forward" - Calculate one iteration
    - Button: "Run to Convergence" - Automatically iterate until values stabilize
    - Slider: "Damping Factor (d)" - Range 0.5 to 0.95, default 0.85
    - Display: "Iteration: X"
    - Display: "Convergence: Y%" (how much values changed in last iteration)

    Iteration visualization:
    - Show how PageRank flows from each node to its outgoing links
    - Animate PageRank values updating
    - Highlight nodes that changed most in each iteration
    - After convergence, highlight final "winner" (Node E in this case)

    Educational annotations:
    - "Iteration 0: All pages start with equal PageRank"
    - "Iteration 1: Pages that receive more links gain PageRank"
    - "Iteration 5: Notice how Page E (linked by many) has highest PageRank"
    - "Convergence: Values stop changing after ~10-15 iterations"
    - Formula display: "PR(A) = (1-d) + d × Σ(PR(T)/C(T))"

    Bottom panel:
    - Table showing PageRank values for each node across iterations
    - Columns: Node | Iteration 0 | Iteration 1 | ... | Final
    - Rows sorted by final PageRank value (highest first)

    Visual style:
    - Modern web-themed colors (blues, golds, whites)
    - Smooth animations for PageRank updates (300ms transitions)
    - Glow effect on high-PageRank nodes

    Implementation: D3.js or vis-network with custom PageRank calculation
    Total size: 800x600px
</details>

### Why PageRank Was Revolutionary

PageRank did something remarkable: it turned link structure (the graph of the web) into a measure of quality. This was a perfect example of extracting business value from graph structure.

Traditional databases would store webpages in tables with columns for URL, title, keywords, etc. But they couldn't easily represent "importance derived from who links to you." That's inherently a graph property.

**PageRank's impact:**

- Made Google the dominant search engine (market value: hundreds of billions)
- Proved that graph algorithms could create massive business value
- Showed that structure contains information that content alone doesn't capture
- Inspired countless other "rank by graph structure" algorithms

Modern search is far more complex than PageRank alone, but PageRank proved the concept: graph algorithms can be worth $350 million (and much more).

## Community Detection: Finding Groups and Clusters

In many networks, nodes naturally form clusters or communities—groups that are densely connected internally but sparsely connected to other groups.

Think about your social network:

- Your college friends mostly know each other (dense connections)
- Your work colleagues mostly know each other (dense connections)
- But your college friends and work colleagues probably don't know each other much (sparse connections between groups)

**Community detection** algorithms identify these natural groupings automatically.

### Graph Clustering Algorithms

**Graph clustering** is the process of dividing a graph into groups (clusters) where:

- Nodes within a cluster are highly connected
- Nodes between clusters are loosely connected

Popular algorithms include:

**Louvain Method:** Optimizes "modularity"—a measure of how well-separated communities are. Fast and effective for large graphs.

**Label Propagation:** Each node adopts the label (group) that most of its neighbors have. Nodes naturally cluster with their neighbors.

**Spectral Clustering:** Uses linear algebra (eigenvalues of the graph's matrix representation) to find natural divisions.

**Real-world applications:**

- Social network analysis (finding friend groups, communities of interest)
- Customer segmentation (grouping similar customers)
- Fraud detection (finding fraud rings)
- Biological networks (identifying protein complexes, gene modules)
- Recommendation systems (grouping similar items or users)

#### Diagram: Community Detection Graph Model Visualization

<details>
    <summary>Community Detection Graph Model Visualization</summary>
    Type: graph-model

    Purpose: Demonstrate how community detection algorithms identify natural clusters in a network, using a social network example.

    Node types:
    1. Person nodes (circles)
       - Properties: name, community_id
       - Visual: Colored by detected community
       - Size: Based on degree (number of connections)

    Sample network structure:
    - Total nodes: 30 people
    - 3 distinct communities:
      - Community 1 (Blue): "College Friends" - 10 nodes, densely connected
      - Community 2 (Orange): "Work Colleagues" - 12 nodes, densely connected
      - Community 3 (Green): "Sports Team" - 8 nodes, densely connected
    - Within-community edges: 80% probability of connection
    - Between-community edges: 5% probability of connection
    - A few "bridge" nodes belong to multiple communities (work friend who also plays sports)

    Edge types:
    1. Strong connection (thick solid line)
       - Properties: interaction_frequency (high)
       - Example: Close friends who interact daily
    2. Weak connection (thin line)
       - Properties: interaction_frequency (low)
       - Example: Acquaintances who occasionally interact
    3. Cross-community bridge (dashed line, purple)
       - Properties: bridges communities
       - Example: Person who connects college friends to work colleagues

    Visual styling:
    - Node colors match detected community (blue, orange, green)
    - Node size proportional to degree (3-15px radius)
    - Bridge nodes shown with multi-colored rings
    - Edge thickness based on interaction frequency
    - Community boundaries shown as subtle background shading (light blue, light orange, light green circles)

    Layout: Force-directed layout with community attraction
    - Nodes in same community pulled together
    - Nodes in different communities pushed apart
    - Results in visually separated clusters

    Interactive features:
    - Hover node: Show name and community assignment
    - Click node: Highlight all connections and show community membership
    - Click background: Select community detection algorithm
      - Option 1: "Louvain Method" (default)
      - Option 2: "Label Propagation"
      - Option 3: "Modularity Optimization"
    - Button: "Re-run Detection" - Recalculate communities with selected algorithm
    - Display: "Modularity Score: X.XX" (higher = better community separation)
    - Display: "Communities Detected: 3"

    Legend:
    - Community colors and their meanings
    - Edge thickness scale (interaction frequency)
    - Bridge nodes explanation
    - Modularity score interpretation

    Educational annotations:
    - "Dense connections within communities (blue, orange, green groups)"
    - "Sparse connections between communities (dashed purple lines)"
    - "Bridge nodes connect multiple communities (multi-colored rings)"
    - "Modularity measures how well-separated communities are (0-1 scale)"

    Implementation: vis-network JavaScript library
    Canvas size: 900x700px
    Physics simulation: Enabled with community-based attraction forces
</details>

### Why Community Detection Matters

Community detection reveals hidden structure in data. Companies use it to:

- **Social networks:** Suggest new friends (people in your communities)
- **E-commerce:** Create product categories (items bought together)
- **Healthcare:** Identify disease subtypes (patients with similar symptoms)
- **Cybersecurity:** Detect coordinated bot networks (accounts that only interact with each other)

Once again, this is information derived from graph structure, not from node properties. A table-based database could store people and their attributes, but discovering communities requires analyzing connection patterns—inherently a graph operation.

## Advanced Topics: Graph Machine Learning

The newest frontier in graph algorithms combines graphs with machine learning. These techniques enable predictions and classifications based on graph structure.

### Graph Embeddings: Turning Graphs into Vectors

Machine learning algorithms typically expect data as vectors (lists of numbers). But how do you represent a graph node as a vector?

**Graph embeddings** solve this problem by mapping each node to a point in high-dimensional space (like a vector with 64 or 128 numbers). The embedding captures the node's position in the graph such that:

- Similar nodes are close together in vector space
- Different nodes are far apart
- Structural properties (degree, centrality, community) are preserved

Think of it like creating a coordinate system for a graph. Each node gets coordinates, and the coordinates encode information about the node's role and relationships.

**Popular embedding techniques:**

**Node2Vec:** Inspired by word embeddings (Word2Vec). Generates random walks starting from each node, then learns embeddings that predict which nodes appear in the same random walk.

**GraphSAGE:** Learns embeddings by aggregating information from each node's neighbors. Can generate embeddings for new nodes not seen during training.

**DeepWalk:** Generates random walks and treats them like sentences, using NLP techniques to learn node embeddings.

**Applications:**

- Content recommendation (embed users and items, recommend nearby items)
- Fraud detection (embed accounts, flag unusual patterns)
- Drug discovery (embed molecules, find similar compounds)
- Knowledge graph completion (predict missing relationships)

### Graph Neural Networks (GNNs): Deep Learning on Graphs

**Graph Neural Networks** extend deep learning to graph-structured data. Traditional neural networks expect grid-like input (images, text sequences), but GNNs handle irregular graph structures.

GNNs work by:

1. Each node starts with features (properties)
2. Nodes exchange information with their neighbors
3. Each node updates its representation by combining its features with aggregated neighbor information
4. Repeat for multiple layers, allowing information to propagate across the graph
5. Use final node representations for predictions

**Real-world applications:**

- **Social networks:** Predicting user interests based on friends' interests
- **Molecular property prediction:** Predicting if a molecule will be toxic (atoms = nodes, bonds = edges)
- **Traffic prediction:** Forecasting traffic flow (intersections = nodes, roads = edges)
- **Recommendation systems:** Predicting user preferences based on social connections

### Link Prediction: Will They Connect?

**Link prediction** asks: given a graph snapshot, which new edges are likely to form in the future?

Think of it as:

- **Social networks:** Who will become friends?
- **E-commerce:** What products will users buy together?
- **Academic collaboration:** Which researchers will co-author papers?
- **Protein interactions:** Which proteins will bind together?

Link prediction algorithms use features like:

- **Common neighbors:** If A and B have many mutual friends, they might connect
- **Preferential attachment:** Popular nodes attract more connections
- **Graph distance:** Nodes closer together are more likely to connect
- **Community membership:** Nodes in the same community connect more often

Modern approaches use graph embeddings or GNNs to learn patterns from historical graph changes.

### Node Classification: What Type Is This Node?

**Node classification** assigns labels to nodes based on graph structure and node features.

Examples:

- **Social networks:** Classify users as "influencers," "casual users," or "bots"
- **Fraud detection:** Classify accounts as "legitimate" or "fraudulent"
- **Citation networks:** Classify papers by research area
- **Protein networks:** Classify proteins by function

The key insight: node labels often correlate with graph structure. If your friends are mostly interested in sports, you're likely interested in sports too. This is called **homophily**—the tendency for similar nodes to connect.

GNNs excel at node classification because they can learn from both:

- Node features (properties like age, location, posting frequency)
- Graph structure (who connects to whom, community membership)

#### Diagram: Graph Machine Learning Workflow Diagram

<details>
    <summary>Graph Machine Learning Workflow Diagram</summary>
    Type: workflow

    Purpose: Show the end-to-end process of applying graph machine learning to a real problem, from raw data to predictions.

    Visual style: Horizontal flowchart with process rectangles and data artifacts

    Workflow steps:

    1. Start: "Raw Data"
       Hover text: "Example: Social network data with user profiles and friendships"
       Icon: Database cylinder

    2. Process: "Build Graph"
       Hover text: "Convert data to graph structure: users → nodes, friendships → edges"
       Icon: Network diagram
       Output artifact: "Graph G(V,E)"

    3. Process: "Feature Engineering"
       Hover text: "Extract node features: age, location, posting frequency, profile completeness"
       Icon: Wrench
       Output artifact: "Node features matrix X"

    4. Decision: "Task Type?"
       Hover text: "What are we trying to predict?"
       Icon: Diamond shape
       Branches to three paths:

       Path A: "Link Prediction"
       Path B: "Node Classification"
       Path C: "Graph Embedding"

    5a. Process: "Link Prediction Model"
        Hover text: "Train model to predict future friendships using GraphSAGE"
        Icon: Neural network
        Output: "Edge probability scores"

    5b. Process: "Node Classification Model"
        Hover text: "Train GNN to classify users as influencer/casual/bot"
        Icon: Neural network
        Output: "Node class labels"

    5c. Process: "Embedding Model"
        Hover text: "Train Node2Vec to create 128-dimensional user embeddings"
        Icon: Neural network
        Output: "Node embedding vectors"

    6. Process: "Evaluate Model"
       Hover text: "Measure accuracy, precision, recall on test set"
       Icon: Chart
       Metrics: "Accuracy: 92%, F1: 0.89"

    7. Decision: "Performance OK?"
       Hover text: "Does model meet requirements?"
       Branches:
       - Yes → Continue
       - No → Return to Feature Engineering (feedback loop)

    8. Process: "Deploy Model"
       Hover text: "Use model in production to make predictions on new data"
       Icon: Cloud

    9. End: "Predictions"
       Hover text: "Real-time recommendations, fraud alerts, or other outputs"
       Icon: Dashboard

    Color coding:
    - Blue: Data artifacts (graph, features, embeddings)
    - Orange: ML processes (training, embedding)
    - Yellow: Decision points
    - Green: Deployment and production
    - Gray: Evaluation and feedback

    Annotations:
    - Arrow from "Deploy Model" back to "Raw Data": "Continuous learning: new data → retrain model"
    - Note: "Graph structure provides extra information beyond node features alone"
    - Note: "GNNs combine node features + neighbor information = better predictions"

    Layout:
    - Horizontal flow from left to right
    - Feedback loops shown as curved arrows
    - Three parallel paths for different task types merge back together

    Implementation: Mermaid flowchart or custom SVG
    Size: 1000x600px
</details>

## Why Graph Algorithms Break the Rules

Remember at the beginning when we said graph algorithms break traditional database design rules? Here's why that matters.

In traditional database design, you're taught:

**"Business logic belongs in the application layer, not in the database."**

The reasoning is sound: databases should store data, applications should process it. This separation makes systems more flexible and maintainable.

But graph algorithms challenge this rule. When you run PageRank in a graph database, you're not just retrieving data—you're computing derived insights from the structure itself. The database isn't just storing relationships; it's analyzing them.

This is powerful because:

1. **Performance:** Graph algorithms operate directly on native graph storage, avoiding expensive data transfers to application servers
2. **Real-time insights:** Queries can incorporate algorithmic results on the fly (e.g., "show me influential users" using centrality measures)
3. **Structure is data:** In graphs, the pattern of connections IS meaningful data, not just a way to organize data

Consider a traditional RDBMS approach to finding communities in a social network:

1. Export all user and friendship data to application server
2. Build graph structure in application memory
3. Run community detection algorithm
4. Store results back in database
5. Query results

With a graph database:

1. Run community detection algorithm directly in the database
2. Query results

The graph database approach is not just faster—it enables queries that were impractical before. "Show me communities that formed in the last week" requires recomputing communities frequently, which is only feasible if the algorithm runs efficiently on the live database.

## Key Takeaways

Graph algorithms are transformative because they extract value from structure. Here's what we've learned:

**Foundational concepts:**

- BFS and DFS are the building blocks for graph exploration
- Connected components identify isolated groups in networks
- Pathfinding algorithms (A*, TSP) solve routing and optimization problems

**Centrality measures identify importance:**

- Degree centrality: Who has the most connections?
- Betweenness centrality: Who bridges different groups?
- Closeness centrality: Who can reach everyone quickly?

**PageRank proved graph algorithms have business value:**

- A one-page algorithm launched a company worth hundreds of billions
- Importance derived from structure, not just content
- Graph thinking enables insights impossible with tables

**Community detection reveals hidden structure:**

- People, products, and concepts naturally cluster
- Algorithms can discover these clusters automatically
- Applications in recommendations, fraud detection, and segmentation

**Graph machine learning is the frontier:**

- Graph embeddings convert graphs to vectors for ML
- Graph neural networks enable deep learning on graphs
- Link prediction and node classification solve real problems

**Graph algorithms blur the line between data and logic:**

- Traditional rules say "keep business logic out of the database"
- Graph algorithms challenge this by making structure analytical
- The result: real-time insights that scale

Most importantly, graph algorithms show us that **how you connect data is just as important as what data you have.** A person's importance isn't just their attributes (age, location, job title)—it's who they're connected to. A webpage's value isn't just its content—it's who links to it.

Once you think in graphs, you see the world differently. Tables store facts, but graphs capture relationships. And relationships, as these algorithms show us, contain remarkable insights.

The $350 million question wasn't just about PageRank. It was about recognizing that structure itself is information—and that graph algorithms could unlock that information at scale. That insight didn't just create Google. It's reshaping how we build databases, design systems, and extract meaning from connected data.

Welcome to the world of graph thinking.
