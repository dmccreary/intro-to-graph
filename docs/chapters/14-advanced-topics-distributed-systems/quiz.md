# Quiz: Advanced Topics and Distributed Systems

Test your understanding of distributed graph databases, partitioning strategies, replication models, consistency trade-offs, graph visualization, real-time versus batch analytics, and capstone project design.

---

#### 1. What is the fundamental challenge of distributed graph databases?

<div class="upper-alpha" markdown>
1. Distributed systems are always slower
2. Graphs are inherently interconnected, but distributed systems require splitting data across machines, making traversals that cross machine boundaries expensive
3. Distributed databases cannot store graphs
4. There is no challenge
</div>

??? question "Show Answer"
    The correct answer is **B**. The core challenge is that graphs consist of nodes pointing to other nodes, but in a distributed system, those connected nodes might be on different physical machines. Following an edge that crosses a partition boundary requires a network call (milliseconds) instead of a memory pointer lookup (microseconds). This fundamental tension between graph connectivity and physical distribution is why partitioning strategies, data locality, and query optimization are critical in distributed graph systems.

    **Concept Tested:** Distributed Graph Databases

    **See:** [Understanding Distributed Graph Databases](index.md#understanding-distributed-graph-databases)

---

#### 2. What is graph partitioning and what makes it challenging?

<div class="upper-alpha" markdown>
1. Deleting parts of a graph
2. Dividing a graph into subgraphs for distribution, challenging because minimizing edge cuts conflicts with maintaining balanced partition sizes
3. Partitioning is trivial
4. Graphs cannot be partitioned
</div>

??? question "Show Answer"
    The correct answer is **B**. Graph partitioning divides a large graph into smaller subgraphs that can be distributed across machines. The challenge is achieving multiple conflicting goals: minimize edge cuts (edges crossing partition boundaries, which require network calls), maintain balanced partitions (equal sizes), and preserve community structure (keep related nodes together). Achieving perfect balance often requires cutting through important communities, while minimizing cuts may create wildly imbalanced partitions. This trade-off is fundamental to distributed graph systems.

    **Concept Tested:** Graph Partitioning

    **See:** [Graph Partitioning](index.md#graph-partitioning-dividing-the-network)

---

#### 3. Which sharding strategy is best for workloads dominated by multi-hop graph traversals?

<div class="upper-alpha" markdown>
1. Random hash-based sharding
2. Graph-aware partitioning that minimizes edge cuts between partitions
3. Alphabetical sharding
4. No sharding strategy helps traversals
</div>

??? question "Show Answer"
    The correct answer is **B**. For traversal-heavy workloads, graph-aware partitioning (using algorithms like modularity-based community detection) minimizes the number of edges crossing partition boundaries. This keeps frequently co-traversed nodes on the same physical machine, dramatically reducing network calls during multi-hop queries. While more complex to compute and maintain than hash-based sharding, it can improve traversal performance by 10-100x for connected queries. Hash-based sharding (A) scatters connected nodes randomly, maximizing cross-partition edges—terrible for traversals.

    **Concept Tested:** Sharding Strategies, Graph Partitioning

    **See:** [Sharding Strategies](index.md#sharding-strategies-where-to-put-your-data)

---

#### 4. What is the CAP theorem and why must distributed systems choose between consistency and availability?

<div class="upper-alpha" markdown>
1. CAP stands for Cost, Availability, Performance
2. CAP theorem states you can have at most two of Consistency, Availability, and Partition tolerance; since network partitions are inevitable, systems must choose C or A
3. All distributed systems are CAP-compliant
4. CAP theorem only applies to relational databases
</div>

??? question "Show Answer"
    The correct answer is **B**. The CAP theorem proves that distributed systems can provide at most two of three guarantees: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition tolerance (system works despite network failures). Since network partitions are inevitable in real distributed systems, you must have P, reducing the choice to CP (sacrifice availability for consistency) or AP (sacrifice consistency for availability). This fundamental trade-off shapes all distributed graph database architectures.

    **Concept Tested:** Consistency Models

    **See:** [Consistency Models: The CAP Theorem Trade-Off](index.md#consistency-models-the-cap-theorem-trade-off)

---

#### 5. How does replication improve distributed graph database resilience and performance?

<div class="upper-alpha" markdown>
1. Replication slows systems down
2. Maintaining multiple copies of data across machines provides fault tolerance (survives machine failures) and enables serving reads from nearest replica
3. Replication only wastes storage
4. Distributed systems don't use replication
</div>

??? question "Show Answer"
    The correct answer is **B**. Replication keeps multiple copies of each data partition on different machines (typically RF=3, replication factor of 3). This provides fault tolerance—if one machine fails, the data still exists on other replicas. It also improves read performance by allowing queries to be served from the geographically nearest or least-loaded replica. The trade-off is increased storage cost (3x for RF=3) and complexity in keeping replicas consistent when writes occur.

    **Concept Tested:** Replication

    **See:** [Replication: Copies for Performance and Resilience](index.md#replication-copies-for-performance-and-resilience)

---

#### 6. What distinguishes real-time graph analytics from batch processing?

<div class="upper-alpha" markdown>
1. They are the same thing
2. Real-time analytics answer queries in milliseconds while users wait (traversals, pattern matching), while batch processing computes over the entire graph offline (PageRank, community detection)
3. Batch is always better
4. Real-time cannot use graphs
</div>

??? question "Show Answer"
    The correct answer is **B**. Real-time analytics serve interactive queries with sub-second response times, typically involving traversals of small subgraphs (shortest paths, neighborhood exploration, pattern matching). Batch processing runs algorithms that must touch every node and edge, taking minutes or hours (global PageRank, connected components, community detection across entire graph). Real-time requires careful partitioning to minimize cross-partition hops; batch processing accepts network shuffle overhead during iterative computations. Both are valuable for different use cases.

    **Concept Tested:** Real-Time Analytics, Batch Processing

    **See:** [Real-Time Analytics and Batch Processing](index.md#real-time-analytics-and-batch-processing)

---

#### 7. Given a distributed graph database with replication factor RF=3, write quorum W=2, and read quorum R=2, what consistency guarantee exists?

<div class="upper-alpha" markdown>
1. No consistency guarantee
2. Strong consistency because R + W > RF, ensuring reads always see latest writes
3. Eventual consistency only
4. Writes will always fail
</div>

??? question "Show Answer"
    The correct answer is **B**. With R + W > RF (2 + 2 = 4 > 3), quorum reads are guaranteed to see the most recent write. Here's why: a write to W=2 replicas must succeed before acknowledging the client, and a read from R=2 replicas ensures at least one of those replicas participated in the most recent write (since W + R = 4 but only RF = 3 replicas exist, there must be overlap). This tunable consistency is more flexible than master-slave (always strong) or multi-master (eventual) replication.

    **Concept Tested:** Consistency Models, Replication

    **See:** [Leaderless Replication](index.md#leaderless-replication-quorum-based)

---

#### 8. What is the primary performance bottleneck in distributed batch graph processing?

<div class="upper-alpha" markdown>
1. CPU speed
2. Network shuffle phase where vertex state updates are exchanged across machines between iterations
3. Disk storage
4. User interface
</div>

??? question "Show Answer"
    The correct answer is **B**. In iterative batch graph algorithms (PageRank, community detection), each iteration requires workers to exchange updated vertex values across the network—the "shuffle phase." For large graphs, this can involve gigabytes per second of network traffic. Algorithms that minimize shuffle by using vertex-local computations or clever aggregations perform far better than those requiring frequent state exchange. This is why frameworks like Pregel emphasize message-passing efficiency and why network topology matters in cluster design.

    **Concept Tested:** Batch Processing

    **See:** [Batch Processing Workflow](index.md#batch-processing)

---

#### 9. What techniques make graph visualization effective for large distributed graphs?

<div class="upper-alpha" markdown>
1. Displaying all nodes simultaneously
2. Sampling subgraphs, aggregating communities into super-nodes, and progressive disclosure (expand-on-click) to manage visual complexity
3. Random node placement
4. Text-only display
</div>

??? question "Show Answer"
    The correct answer is **B**. Visualizing billion-node graphs requires managing complexity through: sampling (show important nodes or random samples, not everything), aggregation (roll up communities into single "super-nodes"), and progressive disclosure (start high-level, let users drill down by clicking). Layout algorithms (force-directed, hierarchical) position nodes to reveal structure. Filters let users hide/show by type or property. These techniques transform overwhelming hairballs into comprehensible, interactive visualizations that reveal graph insights.

    **Concept Tested:** Graph Visualization

    **See:** [Graph Visualization and Interactive Queries](index.md#graph-visualization-and-interactive-queries)

---

#### 10. What criteria should guide choosing between single-server and distributed graph databases?

<div class="upper-alpha" markdown>
1. Always choose distributed
2. Consider graph size, availability requirements, query locality, and operational maturity—distribute when data exceeds single-server capacity or high availability is critical
3. Single-server is always better
4. Cost is the only factor
</div>

??? question "Show Answer"
    The correct answer is **B**. The decision to distribute should be based on: (1) Data size—if your graph fits in a large server's RAM (<100GB), single-server may suffice; (2) Availability requirements—if downtime is unacceptable, distributed replication provides resilience; (3) Query patterns—if most queries touch small subgraphs, distribution works well, but whole-graph queries fight the architecture; (4) Operational capability—running distributed systems requires monitoring, failover planning, and expertise. Many applications should start single-server and distribute only when hitting concrete limits.

    **Concept Tested:** Distributed Graph Databases, Capstone Project Design

    **See:** [Conclusion: Distributed Graphs in the Real World](index.md#conclusion-distributed-graphs-in-the-real-world)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (2), Understand (3), Apply (3), Analyze (2)
**Concepts Covered:** Distributed Graph Databases, Graph Partitioning, Sharding Strategies, Replication, Consistency Models, Graph Visualization, Interactive Queries, Real-Time Analytics, Batch Processing, Capstone Project Design

**Next Steps:**
- Review [Chapter Content](index.md) for distributed systems concepts
- Design your capstone project synthesizing all course concepts
- Apply graph database principles to a real-world domain

**Congratulations on completing all 12 chapter quizzes!**
