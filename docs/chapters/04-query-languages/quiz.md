# Quiz: Query Languages for Graph Databases

Test your understanding of graph query languages including OpenCypher, GSQL, GQL, and query optimization techniques.

---

#### 1. Which query language uses ASCII-art syntax that visually resembles graph patterns?

<div class="upper-alpha" markdown>
1. SQL
2. OpenCypher
3. Python
4. Java
</div>

??? question "Show Answer"
    The correct answer is **B**. OpenCypher uses ASCII-art syntax where patterns like `(alice:Person)-[:KNOWS]->(bob)` visually resemble the graph structure, making queries intuitive and readable. This visual approach is one of Cypher's key advantages.

    **Concept Tested:** OpenCypher

    **See:** [OpenCypher Section](index.md#opencypher-the-peoples-champion)

---

#### 2. What is the primary difference between declarative and imperative queries?

<div class="upper-alpha" markdown>
1. Declarative queries specify what results you want, while imperative queries specify how to get them step-by-step
2. Declarative queries are faster than imperative queries
3. Imperative queries can only be used with relational databases
4. Declarative queries require more code than imperative queries
</div>

??? question "Show Answer"
    The correct answer is **A**. Declarative queries (like Cypher) specify what pattern you want to match without detailing execution steps—the database figures out how. Imperative queries (aspects of GSQL) specify explicit control flow and execution steps. Neither is inherently faster; performance depends on optimization. Both work with graph databases.

    **Concept Tested:** Declarative Queries, Imperative Queries

    **See:** [Query Approaches](index.md)

---

#### 3. In Cypher syntax, what does the MATCH clause do?

<div class="upper-alpha" markdown>
1. Creates new nodes and edges
2. Specifies the graph pattern to find
3. Deletes matching patterns
4. Updates property values
</div>

??? question "Show Answer"
    The correct answer is **B**. The MATCH clause specifies the graph pattern to find, defining which nodes and relationships to search for. It's the foundational clause for querying graphs in Cypher. CREATE adds new elements, DELETE removes them, and SET updates properties.

    **Concept Tested:** Match Clause

    **See:** [Cypher Syntax](index.md)

---

#### 4. What is the purpose of GSQL's accumulators?

<div class="upper-alpha" markdown>
1. To store battery power
2. To aggregate values during graph traversal, enabling concise expression of complex aggregations
3. To create backups
4. To speed up database startup
</div>

??? question "Show Answer"
    The correct answer is **B**. Accumulators in GSQL are variables that aggregate values (sums, counts, lists) during traversal across distributed graphs. They enable concise expression of complex aggregation patterns without requiring multiple query rounds, particularly powerful in TigerGraph's distributed architecture.

    **Concept Tested:** Accumulators

    **See:** [GSQL Section](index.md#gsql-the-distributed-powerhouse)

---

#### 5. Which Cypher statement ensures idempotent operations by either matching existing patterns or creating them if they don't exist?

<div class="upper-alpha" markdown>
1. CREATE
2. DELETE
3. MERGE
4. SET
</div>

??? question "Show Answer"
    The correct answer is **C**. MERGE either matches existing patterns or creates them if they don't exist, ensuring operations are idempotent (running twice produces the same result). CREATE always adds new elements. DELETE removes elements. SET updates properties.

    **Concept Tested:** Merge Statement

    **See:** [Cypher Statements](index.md)

---

#### 6. What does a variable length path like `[:KNOWS*1..3]` represent in Cypher?

<div class="upper-alpha" markdown>
1. Exactly 3 KNOWS relationships
2. A path with 1, 2, or 3 KNOWS relationships, enabling flexible traversal depth
3. A path multiplied by 3
4. An error in syntax
</div>

??? question "Show Answer"
    The correct answer is **B**. Variable length paths like `[:KNOWS*1..3]` match paths with 1, 2, or 3 edges of the specified type. This enables queries where relationship depth is unknown or varies, like finding connections within a professional network. The `*1..3` syntax specifies the range of hops.

    **Concept Tested:** Variable Length Paths

    **See:** [Path Patterns](index.md)

---

#### 7. Given a query that needs to find all products purchased by friends-of-friends, which Cypher pattern would you use?

<div class="upper-alpha" markdown>
1. `MATCH (me)-[:FRIEND]->(friend)-[:FRIEND]->(fof)-[:PURCHASED]->(product)`
2. `CREATE (me)-[:FRIEND]->(product)`
3. `DELETE (me)-[:FRIEND]->(friend)`
4. `SET me.friends = 2`
</div>

??? question "Show Answer"
    The correct answer is **A**. This pattern traverses from "me" through FRIEND relationships twice (me → friend → friend-of-friend) then through PURCHASED relationships to products. This demonstrates multi-hop pattern matching for finding indirect connections. CREATE adds data, DELETE removes it, and SET updates properties—none solve this query need.

    **Concept Tested:** Graph Patterns, Multi-Hop Queries

    **See:** [Pattern Matching](index.md)

---

#### 8. Why is query optimization important in graph databases?

<div class="upper-alpha" markdown>
1. To make queries slower
2. Small changes in query structure can yield dramatic performance improvements by leveraging indexes and minimizing traversals
3. It's only important for relational databases
4. Query optimization has no effect on performance
</div>

??? question "Show Answer"
    The correct answer is **B**. Query optimization is critical because small structural changes—like starting from indexed low-cardinality nodes instead of scanning millions of nodes, or reordering pattern clauses—can yield 10-1000x performance improvements. Optimization involves leveraging indexes, limiting traversal depth, and pushing filters early.

    **Concept Tested:** Query Optimization

    **See:** [Query Optimization Section](index.md)

---

#### 9. What distinguishes query latency from query throughput?

<div class="upper-alpha" markdown>
1. Latency measures response time for individual queries, while throughput measures queries processed per unit time
2. They are the same metric
3. Latency only applies to distributed systems
4. Throughput is always higher than latency
</div>

??? question "Show Answer"
    The correct answer is **A**. Query latency measures the elapsed time for a single query to complete (e.g., 50 milliseconds), while query throughput measures how many queries the system can process per second (e.g., 10,000 queries/second). Both are important performance metrics serving different purposes—latency for user experience, throughput for system capacity.

    **Concept Tested:** Query Latency, Query Throughput

    **See:** [Performance Metrics](index.md)

---

#### 10. How does the map-reduce pattern in GSQL support distributed graph processing?

<div class="upper-alpha" markdown>
1. By storing all data on one server
2. By mapping operations across graph partitions and reducing aggregated results, enabling parallel processing
3. By preventing queries from running
4. By converting graphs to tables
</div>

??? question "Show Answer"
    The correct answer is **B**. GSQL implements map-reduce for distributed query processing by mapping traversal operations across graph partitions (each server processes its partition) and reducing/aggregating results. This parallelization enables efficient queries on massive graphs distributed across clusters, making TigerGraph performant at scale.

    **Concept Tested:** Map-Reduce Pattern

    **See:** [GSQL Distributed Processing](index.md#gsql-the-distributed-powerhouse)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (3), Understand (3), Apply (3), Analyze (1)
**Concepts Covered:** OpenCypher, GSQL, GQL, Cypher Syntax, Match Clause, MERGE, Accumulators, Variable Length Paths, Graph Patterns, Query Optimization, Query Performance, Declarative/Imperative Queries, Map-Reduce Pattern

**Next Steps:**
- Practice writing Cypher queries with the patterns you've learned
- Explore the [Chapter Content](index.md) for query examples
- Continue to [Chapter 5: Performance and Benchmarking](../05-performance-metrics-benchmarking/index.md)
