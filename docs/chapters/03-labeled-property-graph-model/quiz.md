# Quiz: Labeled Property Graph Information Model

Test your understanding of the Labeled Property Graph (LPG) model, nodes, edges, properties, labels, and fundamental graph operations.

---

#### 1. What are the four building blocks of a Labeled Property Graph (LPG)?

<div class="upper-alpha" markdown>
1. Tables, rows, columns, and indexes
2. Nodes, edges, properties, and labels
3. Files, folders, permissions, and users
4. Classes, objects, methods, and variables
</div>

??? question "Show Answer"
    The correct answer is **B**. The Labeled Property Graph model consists of four building blocks: **Nodes** (entities/things), **Edges** (relationships/connections), **Properties** (attributes as key-value pairs), and **Labels** (categories/types). This flexible model enables expressive data representations where relationships are first-class citizens.

    **Concept Tested:** Labeled Property Graph

    **See:** [LPG Introduction](index.md#the-labeled-property-graph-the-whole-enchilada)

---

#### 2. What does "index-free adjacency" mean in graph databases?

<div class="upper-alpha" markdown>
1. Databases that don't use any indexes
2. Each node directly references its connected neighbors in memory without requiring index lookups for traversal
3. Indexes are stored remotely
4. Graphs that are not adjacent to each other
</div>

??? question "Show Answer"
    The correct answer is **B**. Index-free adjacency is a graph storage architecture where each node directly references its connected neighbors in memory, eliminating the need for index lookups during traversal. This enables constant-time (O(1)) neighbor access regardless of total graph size, making multi-hop queries efficient even in massive graphs.

    **Concept Tested:** Index-Free Adjacency

    **See:** [Index-Free Adjacency Section](index.md)

---

#### 3. In the graph notation `(Alice:Person {age: 28})-[:KNOWS {since: 2020}]->(Bob:Person {age: 35})`, what does `:Person` represent?

<div class="upper-alpha" markdown>
1. A property
2. An edge
3. A label categorizing the node type
4. A query command
</div>

??? question "Show Answer"
    The correct answer is **C**. `:Person` is a **label** that categorizes both Alice and Bob as belonging to the "Person" node type. Labels enable semantic organization, allowing queries to filter by node categories. Properties like `{age: 28}` provide attributes, while `-[:KNOWS]->` represents the edge/relationship.

    **Concept Tested:** Labels

    **See:** [Labels Section](index.md#nodes-the-stars-of-the-show)

---

#### 4. What is the key difference between schema-optional and schema-enforced modeling?

<div class="upper-alpha" markdown>
1. Schema-optional allows varying properties without predefined schemas, while schema-enforced requires strict adherence to predefined schemas
2. Schema-optional is faster than schema-enforced
3. Schema-enforced is only for small databases
4. Schema-optional cannot store relationships
</div>

??? question "Show Answer"
    The correct answer is **A**. Schema-optional modeling allows nodes and edges to have varying properties without requiring predefined schemas—different nodes can have different fields based on data availability. Schema-enforced modeling requires strict adherence to predefined schemas, rejecting non-conforming data to ensure completeness and consistency. Graph databases typically support both approaches.

    **Concept Tested:** Schema-Optional Modeling, Schema-Enforced Modeling

    **See:** [Schema Approaches Section](index.md)

---

#### 5. What makes relationships "first-class citizens" in graph databases?

<div class="upper-alpha" markdown>
1. Relationships are stored first
2. Relationships cost more to store
3. Relationships can have their own properties, identities, and types, not just foreign key references
4. Relationships are always more important than nodes
</div>

??? question "Show Answer"
    The correct answer is **C**. In graph databases, relationships are "first-class citizens" because they can have their own properties (like `start_date`, `weight`, `role`), identities, and types—they're independent entities with rich information, not just foreign key references like in relational databases. For example, a WORKS_AT relationship can store `{role: "Engineer", start_date: "2020-01-15"}` directly on the edge.

    **Concept Tested:** First-Class Relationships

    **See:** [First-Class Relationships](index.md)

---

#### 6. What is a multi-hop query?

<div class="upper-alpha" markdown>
1. A query that jumps between different databases
2. A query that traverses multiple edges from a starting point to explore relationships beyond immediate neighbors
3. A query that runs on multiple servers
4. A query that requires multiple user logins
</div>

??? question "Show Answer"
    The correct answer is **B**. A multi-hop query traverses multiple edges from a starting point, exploring relationships beyond immediate neighbors. For example, finding "friends-of-friends-of-friends" involves 3 hops. Graph databases excel at multi-hop queries through index-free adjacency, while relational databases require expensive self-joins that scale poorly.

    **Concept Tested:** Multi-Hop Queries

    **See:** [Multi-Hop Queries Section](index.md)

---

#### 7. Given a social network graph where you need to find all posts liked by friends of a specific user, which graph operation would you use?

<div class="upper-alpha" markdown>
1. Simple node lookup
2. Graph traversal following FRIEND and LIKED edges from the user
3. Database backup
4. Schema migration
</div>

??? question "Show Answer"
    The correct answer is **B**. To find posts liked by friends, you'd use graph traversal: starting from the user node, follow outgoing FRIEND edges to find friend nodes, then follow their outgoing LIKED edges to find post nodes. This demonstrates how multi-hop traversals naturally express relationship queries. Simple lookup (A) only retrieves one node. Options C and D are unrelated operations.

    **Concept Tested:** Traversal, Pattern Matching

    **See:** [Traversal Section](index.md)

---

#### 8. What is the primary advantage of "constant-time neighbor access" in graph databases?

<div class="upper-alpha" markdown>
1. It makes databases smaller
2. Finding a node's connections takes the same time in a million-node graph as in a billion-node graph
3. It eliminates the need for electricity
4. It makes all queries instant
</div>

??? question "Show Answer"
    The correct answer is **B**. Constant-time neighbor access means finding a node's connections takes O(1) time regardless of total graph size—the same performance in a million-node graph as in a billion-node graph. This is achieved through index-free adjacency where nodes directly reference neighbors. This makes deep multi-hop traversals practical even in massive graphs. Option A is incorrect about size. Option C is nonsensical. Option D overstates—not all queries are instant, just neighbor access.

    **Concept Tested:** Constant-Time Neighbor Access

    **See:** [Index-Free Adjacency](index.md)

---

#### 9. In the context of graph databases, what is "edge direction"?

<div class="upper-alpha" markdown>
1. Which way the graph is drawn on screen
2. The orientation of a relationship from source node to target node, indicating semantic flow
3. The compass direction of database servers
4. The order in which edges are stored on disk
</div>

??? question "Show Answer"
    The correct answer is **B**. Edge direction is the orientation of a relationship from a source node to a target node, indicating the semantic flow of the relationship. For example, `(Alice)-[:FOLLOWS]->(Bob)` shows Alice follows Bob (directional), while `(Alice)-[:FRIEND]-(Bob)` could represent mutual friendship (direction ignored). Directed edges model asymmetric relationships common in social networks, organizational hierarchies, and workflows.

    **Concept Tested:** Edge Direction

    **See:** [Edge Direction Section](index.md)

---

#### 10. Why is pattern matching fundamental to graph queries?

<div class="upper-alpha" markdown>
1. It makes queries look pretty
2. It enables finding subgraph instances that conform to specified structural templates, expressing relationship queries naturally
3. It's required by law
4. It prevents database crashes
</div>

??? question "Show Answer"
    The correct answer is **B**. Pattern matching is fundamental because it enables finding all subgraph instances that match specified structural templates, making relationship queries natural and expressive. For example, the pattern `(a:Person)-[:KNOWS]->(b:Person)-[:KNOWS]->(c:Person)` finds all chains of three people connected by KNOWS relationships. This declarative approach is more intuitive than imperative traversal code. Options A, C, and D are nonsensical.

    **Concept Tested:** Pattern Matching

    **See:** [Pattern Matching Section](index.md)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (3), Understand (4), Apply (2), Analyze (1)
**Concepts Covered:** Labeled Property Graph, Nodes, Edges, Properties, Labels, Schema-Optional/Enforced Modeling, Index-Free Adjacency, First-Class Relationships, Traversal, Multi-Hop Queries, Constant-Time Neighbor Access, Edge Direction, Pattern Matching

**Next Steps:**
- Review the [Chapter Content](index.md) for detailed explanations
- Practice graph notation and pattern writing
- Continue to [Chapter 4: Query Languages](../04-query-languages/index.md)
