# Quiz: Performance Metrics and Benchmarking

Test your understanding of graph database performance, index-free adjacency, benchmarking techniques, and optimization strategies.

---

#### 1. What is hop count in graph traversal?

<div class="upper-alpha" markdown>
1. The number of servers in the cluster
2. The number of edges traversed in a path between two nodes, measuring distance in the graph
3. The number of properties on a node
4. The number of users connected to the database
</div>

??? question "Show Answer"
    The correct answer is **B**. Hop count is the number of edges traversed in a path between nodes, measuring distance in the graph. For example, "friends within 3 hops" means exploring friend → friend-of-friend → friend-of-friend-of-friend relationships. Hop count directly impacts query performance.

    **Concept Tested:** Hop Count

    **See:** [Hop Count Section](index.md)

---

#### 2. What is the indegree of a node?

<div class="upper-alpha" markdown>
1. The total number of edges connected to a node
2. The count of incoming edges to a node, measuring how many other nodes point to it
3. The number of properties on a node
4. The node's position in the graph
</div>

??? question "Show Answer"
    The correct answer is **B**. Indegree is the count of incoming edges to a node—how many other nodes point to it. For example, in a follower graph, a celebrity's indegree counts their followers. Outdegree counts outgoing edges (who they follow). Total degree is indegree + outdegree.

    **Concept Tested:** Indegree

    **See:** [Node Degree Metrics](index.md)

---

#### 3. Why do graph indexes primarily serve as entry points rather than speeding up joins?

<div class="upper-alpha" markdown>
1. Indexes don't work in graph databases
2. Graph databases use index-free adjacency for traversal, so indexes mainly enable fast lookup of starting nodes
3. Joins are faster than indexes
4. Indexes slow down queries
</div>

??? question "Show Answer"
    The correct answer is **B**. Unlike relational databases where indexes speed up joins, graph databases use index-free adjacency for traversal after finding starting nodes. Indexes primarily serve as efficient entry points—for example, an index on Person.email enables rapid user lookup to begin traversal from that specific node.

    **Concept Tested:** Graph Indexes

    **See:** [Index Strategy](index.md)

---

#### 4. What does the LDBC SNB benchmark measure?

<div class="upper-alpha" markdown>
1. File system performance
2. Graph database performance on social network workloads with queries like finding recent posts by friends
3. Network bandwidth
4. CPU clock speed
</div>

??? question "Show Answer"
    The correct answer is **B**. The Linked Data Benchmark Council's Social Network Benchmark (LDBC SNB) is a standard for evaluating graph database performance on realistic social network workloads, including queries like finding recent posts by friends, complex aggregations, and update operations. It enables fair comparison across different graph databases.

    **Concept Tested:** LDBC SNB Benchmark

    **See:** [Benchmarking Section](index.md)

---

#### 5. Why does query performance often degrade exponentially with hop count in dense graphs?

<div class="upper-alpha" markdown>
1. Because databases get tired
2. Each hop potentially explores many neighbors, causing exponential growth in nodes visited
3. Hop count has no effect on performance
4. Performance improves with more hops
</div>

??? question "Show Answer"
    The correct answer is **B**. In dense graphs, each hop potentially explores many neighbors—if each node connects to 100 others, a 3-hop query might touch 100 → 10,000 → 1,000,000 nodes. This exponential growth makes deep queries expensive. Graph databases mitigate this through index-free adjacency and query optimization, but hop count remains critical for performance.

    **Concept Tested:** Hop Count, Traversal Cost

    **See:** [Performance Factors](index.md)

---

#### 6. What is the edge-to-node ratio and why does it matter?

<div class="upper-alpha" markdown>
1. It doesn't matter for performance
2. The average number of edges per node, indicating connectivity density and impacting traversal performance
3. The ratio of deleted to active edges
4. The size of edges in bytes
</div>

??? question "Show Answer"
    The correct answer is **B**. The edge-to-node ratio is the average number of edges per node in a graph. A social network with ratio 50 means users average 50 connections. Higher ratios indicate denser graphs with more connections to traverse, impacting query performance. This metric helps predict traversal costs and identify supernodes.

    **Concept Tested:** Edge-to-Node Ratio

    **See:** [Graph Metrics](index.md)

---

#### 7. Given a slow query scanning millions of nodes, what optimization technique would most likely help?

<div class="upper-alpha" markdown>
1. Buy more RAM
2. Add an index on the filtered property to enable fast entry point lookup instead of full scan
3. Delete half the database
4. Restart the server
</div>

??? question "Show Answer"
    The correct answer is **B**. Adding an index on the filtered property (like Person.email or Product.SKU) enables the database to quickly find specific starting nodes instead of scanning millions. This transforms an O(n) full scan into an O(1) or O(log n) index lookup. While more RAM (A) can help with caching, it doesn't address the root cause of scanning.

    **Concept Tested:** Query Optimization, Graph Indexes

    **See:** [Optimization Techniques](index.md)

---

#### 8. What distinguishes synthetic benchmarks from real-world workload benchmarks?

<div class="upper-alpha" markdown>
1. Synthetic benchmarks use artificially generated data and queries for controlled testing, while real-world benchmarks use actual production patterns
2. They are the same thing
3. Synthetic benchmarks are always more accurate
4. Real-world benchmarks don't exist
</div>

??? question "Show Answer"
    The correct answer is **A**. Synthetic benchmarks use artificially generated datasets and workloads (like Graph 500) for reproducible, controlled testing across different systems. Real-world benchmarks use actual production access patterns. Both are valuable—synthetic for comparability, real-world for relevance to specific use cases.

    **Concept Tested:** Synthetic Benchmarks, Performance Benchmarking

    **See:** [Benchmarking Approaches](index.md)

---

#### 9. How does statistical query tuning improve performance?

<div class="upper-alpha" markdown>
1. By deleting statistics
2. By using statistical information about data distributions and node degrees to optimize query plans
3. By making queries slower
4. By converting all data to statistics
</div>

??? question "Show Answer"
    The correct answer is **B**. Statistical query tuning uses information about data distributions (node degree distributions, edge cardinalities, property value frequencies) to make smarter execution decisions. For example, knowing that 95% of users have degree < 100 but 5% have degree > 10,000 helps the optimizer decide whether to use indexes or full scans.

    **Concept Tested:** Statistical Query Tuning

    **See:** [Query Tuning](index.md)

---

#### 10. Why is measuring both query latency and throughput important?

<div class="upper-alpha" markdown>
1. They're redundant metrics
2. Latency measures user experience (response time), while throughput measures system capacity (queries/second) under load
3. Only throughput matters
4. Only latency matters
</div>

??? question "Show Answer"
    The correct answer is **B**. Latency measures individual query response time (critical for user experience—"Does my query feel fast?"), while throughput measures how many concurrent queries the system handles (critical for capacity planning—"How many users can we support?"). A system might have low latency but low throughput, or vice versa. Both metrics are essential for production readiness.

    **Concept Tested:** Query Latency, Query Throughput, Performance Benchmarking

    **See:** [Performance Metrics](index.md)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (3), Understand (3), Apply (2), Analyze (2)
**Concepts Covered:** Hop Count, Indegree, Outdegree, Edge-to-Node Ratio, Graph Indexes, LDBC SNB, Graph Metrics, Performance Benchmarking, Synthetic Benchmarks, Query Optimization, Statistical Query Tuning, Query Latency, Query Throughput, Traversal Cost

**Next Steps:**
- Review [Chapter Content](index.md) for performance optimization strategies
- Practice benchmarking graph queries
- Continue to [Chapter 6: Graph Algorithms](../06-graph-algorithms/index.md)
