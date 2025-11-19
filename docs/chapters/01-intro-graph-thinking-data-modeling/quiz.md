# Quiz: Introduction to Graph Thinking and Data Modeling

Test your understanding of foundational data modeling concepts and graph database thinking with these questions.

---

#### 1. What is the primary purpose of data modeling?

<div class="upper-alpha" markdown>
1. To create visual decorations for presentations
2. To create abstract representations of information structures defining entities, attributes, and relationships
3. To generate random data for testing
4. To organize files alphabetically on a computer
</div>

??? question "Show Answer"
    The correct answer is **B**. Data modeling is the process of creating abstract representations of information structures, defining entities, attributes, and relationships. This enables systematic organization and querying of data. Option A is incorrect because data models serve structural purposes, not decorative ones. Option C confuses modeling with data generation. Option D describes file management, not data modeling.

    **Concept Tested:** Data Modeling

    **See:** [Chapter 1 Introduction](index.md#the-foundation-data-structures)

---

#### 2. Which data structure provides constant-time (O(1)) lookup performance regardless of size?

<div class="upper-alpha" markdown>
1. Arrays
2. Hash maps
3. Trees
4. Linked lists
</div>

??? question "Show Answer"
    The correct answer is **B**. Hash maps use hashing functions to instantly find values based on keys, achieving O(1) constant-time lookups regardless of data size. Arrays (A) require O(n) linear search time unless you know the exact index. Trees (C) typically require O(log n) search time. Linked lists (D) require O(n) traversal time.

    **Concept Tested:** Hash Maps

    **See:** [Hash Maps Section](index.md#hash-maps-instant-lookups)

---

#### 3. What fundamental limitation do relational databases face when querying highly connected data?

<div class="upper-alpha" markdown>
1. They cannot store text fields
2. They require expensive join operations that become exponentially slower with each hop
3. They do not support SQL queries
4. They can only store numbers
</div>

??? question "Show Answer"
    The correct answer is **B**. Relational databases struggle with highly connected data because finding multi-hop relationships (friends-of-friends-of-friends) requires multiple self-joins, and performance degrades exponentially with each additional hop. Options A and D are incorrect—relational databases support diverse data types. Option C is incorrect because relational databases are specifically designed for SQL queries.

    **Concept Tested:** RDBMS limitations with connected data

    **See:** [Why Graph Thinking Matters](index.md#why-graph-thinking-matters-now)

---

#### 4. In the context of graph databases, what does "first-class citizen" mean for relationships?

<div class="upper-alpha" markdown>
1. Relationships are the most important part of the system
2. Relationships can have their own properties, identities, and types, not just foreign key references
3. Relationships are stored before nodes
4. Relationships require special premium database licenses
</div>

??? question "Show Answer"
    The correct answer is **B**. In graph databases, relationships are "first-class citizens" because they can have their own properties (like start_date, weight, role), identities, and types—they're independent entities, not just foreign key references like in relational databases. Option A misinterprets the term. Option C is incorrect about storage order. Option D conflates technical concepts with licensing.

    **Concept Tested:** First-Class Relationships

    **See:** [Graph Databases Introduction](index.md#why-graph-thinking-matters-now)

---

#### 5. Which statement best explains why hash maps struggle with multi-hop queries?

<div class="upper-alpha" markdown>
1. Hash maps cannot store string keys
2. Hash maps only work for one-hop relationships and require multiple separate lookups for traversals
3. Hash maps are too slow for any queries
4. Hash maps cannot store numerical values
</div>

??? question "Show Answer"
    The correct answer is **B**. Hash maps excel at single-hop lookups (key → value) but struggle with multi-hop queries because each level of connection requires a separate lookup. To traverse customers → orders → products → suppliers requires multiple independent hash map lookups, and performance tanks. Options A and D are incorrect—hash maps support diverse key and value types. Option C is incorrect because hash maps are extremely fast for direct lookups.

    **Concept Tested:** Hash Maps limitations

    **See:** [Hash Maps Section](index.md#hash-maps-instant-lookups)

---

#### 6. What does database normalization aim to achieve?

<div class="upper-alpha" markdown>
1. Making all data values the same
2. Eliminating data redundancy by decomposing tables into smaller, related tables
3. Converting databases to use only normal distributions
4. Standardizing font sizes in reports
</div>

??? question "Show Answer"
    The correct answer is **B**. Database normalization is a relational database design process that eliminates data redundancy by decomposing tables into smaller, related tables linked by foreign keys. This reduces data duplication and ensures consistency. Option A misunderstands "normalization" as making values identical. Option C confuses database normalization with statistical distributions. Option D describes formatting, not database design.

    **Concept Tested:** Normalization

    **See:** [Relational Model Section](index.md)

---

#### 7. Given a scenario where you need to frequently query "friends of friends of friends" relationships in a social network, which data structure would perform best?

<div class="upper-alpha" markdown>
1. Arrays, because they're simple
2. Hash maps, because they're fast
3. Graph databases, because they use index-free adjacency for constant-time neighbor access
4. Relational databases, because they support joins
</div>

??? question "Show Answer"
    The correct answer is **C**. Graph databases excel at multi-hop traversals like "friends-of-friends-of-friends" because they use index-free adjacency, where each node directly references its neighbors in memory. This enables constant-time traversal per hop, making deep queries practical. Arrays (A) would require expensive searches. Hash maps (B) work well for single-hop but require multiple lookups for multi-hop. Relational databases (D) require expensive self-joins that scale poorly.

    **Concept Tested:** Graph Database advantages, Index-Free Adjacency

    **See:** [Why Graphs Outperform](index.md#why-graph-thinking-matters-now)

---

#### 8. What distinguishes a tree from a general graph?

<div class="upper-alpha" markdown>
1. Trees can only store numbers
2. Trees have hierarchical structure where each node has one parent (except root) and zero or more children, forming acyclic graphs
3. Trees are always larger than graphs
4. Trees cannot be represented digitally
</div>

??? question "Show Answer"
    The correct answer is **B**. Trees are hierarchical data structures where each node has exactly one parent (except the root node) and zero or more children, and they contain no cycles. This distinguishes them from general graphs, which can have multiple parents per node and may contain cycles. Option A is incorrect—trees store diverse data types. Option C incorrectly compares size. Option D is nonsensical—trees are commonly used digital structures.

    **Concept Tested:** Trees

    **See:** [Trees Section](index.md#trees-hierarchical-organization)

---

#### 9. Why do traditional relational databases struggle with "the world isn't organized in tables and rows"?

<div class="upper-alpha" markdown>
1. Because real-world data involves complex, interconnected relationships that don't map naturally to tabular structures
2. Because relational databases can only store text
3. Because tables don't support sorting
4. Because rows cannot contain numbers
</div>

??? question "Show Answer"
    The correct answer is **A**. Traditional relational databases were designed for tabular data, but real-world information often involves complex, interconnected relationships (customers ↔ products ↔ suppliers ↔ shipments) that don't map naturally to rigid table structures. Graph databases model these connections directly, making relationship queries natural and efficient. Options B, C, and D are factually incorrect about relational database capabilities.

    **Concept Tested:** Data Modeling, RDBMS vs. Graph

    **See:** [Why Graph Thinking Matters](index.md#why-graph-thinking-matters-now)

---

#### 10. What is a "world model" in the context of data modeling and AI?

<div class="upper-alpha" markdown>
1. A 3D globe visualization
2. A conceptual framework representing domain knowledge, entities, and relationships for specific problem spaces
3. A database containing all geographic locations
4. A model that only works internationally
</div>

??? question "Show Answer"
    The correct answer is **B**. A world model is a conceptual framework that represents domain knowledge, entities, and relationships for specific problem spaces. For example, an autonomous vehicle's world model graphs road networks, traffic rules, vehicle positions, and environmental conditions. This enables AI systems to understand and reason about their operational context. Option A confuses world models with visualizations. Options C and D misinterpret "world" literally rather than conceptually.

    **Concept Tested:** World Models

    **See:** [Chapter Introduction](index.md#why-graph-thinking-matters-now)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (4), Understand (4), Apply (1), Analyze (1)
**Concepts Covered:** Data Modeling, Hash Maps, Trees, Arrays, RDBMS, Normalization, Graph Databases, First-Class Relationships, World Models, Index-Free Adjacency

**Next Steps:**
- Review the [Chapter Content](index.md) for concepts you found challenging
- Explore the [Glossary](../../glossary.md) for detailed term definitions
- Practice with [Chapter 2: Database Systems and NoSQL](../02-database-systems-nosql/index.md)
