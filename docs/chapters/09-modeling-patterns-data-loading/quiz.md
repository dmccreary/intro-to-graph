# Quiz: Modeling Patterns and Data Loading

Test your understanding of graph modeling patterns, anti-patterns, data loading strategies, and schema evolution.

---

#### 1. What is a subgraph?

<div class="upper-alpha" markdown>
1. A graph below sea level
2. A portion of a larger graph containing a subset of nodes and edges, often extracted for focused analysis
3. A type of submarine
4. A backup copy
</div>

??? question "Show Answer"
    The correct answer is **B**. A subgraph is a portion of a larger graph containing subsets of nodes and edges, extracted for analysis, visualization, or processing. For example, extracting customers who purchased in the last month creates a focused subgraph for analyzing recent buying patterns without processing the entire customer base.

    **Concept Tested:** Subgraphs

    **See:** [Graph Patterns](index.md)

---

#### 2. What is time-based modeling and why is it important?

<div class="upper-alpha" markdown>
1. Setting database clocks
2. Techniques for representing temporal aspects like valid times, transaction times, and time-varying relationships in graph data
3. Measuring query speed
4. Scheduling backups
</div>

??? question "Show Answer"
    The correct answer is **B**. Time-based modeling represents temporal aspects of data: when facts are valid (valid-time), when they were recorded (transaction-time), and how relationships change over time. For example, modeling job history: `(Person)-[:WORKED_AT {start: "2018-01", end: "2022-06"}]->(Company)` captures employment duration. This enables historical queries and temporal analysis.

    **Concept Tested:** Time-Based Modeling

    **See:** [Temporal Patterns](index.md)

---

#### 3. What is an ETL pipeline in the context of graph databases?

<div class="upper-alpha" markdown>
1. A type of graph algorithm
2. Extract, Transform, Load processes that move data from sources, convert formats, and load into graph databases
3. A visualization tool
4. A backup strategy
</div>

??? question "Show Answer"
    The correct answer is **B**. ETL (Extract, Transform, Load) pipelines extract data from source systems (relational databases, APIs, files), transform it to graph format (mapping tables to nodes, foreign keys to edges), and load it into the graph database. For example: extract customer data from CRM, transform to graph format, load as Person nodes and relationship edges.

    **Concept Tested:** ETL Pipelines

    **See:** [Data Loading](index.md)

---

#### 4. What makes bulk loading different from incremental loading?

<div class="upper-alpha" markdown>
1. They are the same
2. Bulk loading imports large volumes in single operations for initial population, while incremental loading adds data in small batches continuously
3. Bulk loading is always slower
4. Incremental loading only works with small databases
</div>

??? question "Show Answer"
    The correct answer is **B**. Bulk loading imports large data volumes (millions of records) in optimized single operations, ideal for initial database population. Incremental loading adds new data in small batches or continuously as it arrives, updating the graph with daily transactions, new users, or streaming data. Both are important for different lifecycle stages.

    **Concept Tested:** Bulk Loading, Incremental Loading

    **See:** [Data Loading Strategies](index.md)

---

#### 5. Why should you avoid creating supernodes in graph models?

<div class="upper-alpha" markdown>
1. Supernodes are good for performance
2. Nodes with millions of connections create performance bottlenecks when traversing requires processing all edges
3. Supernodes use too much disk space
4. Databases cannot store supernodes
</div>

??? question "Show Answer"
    The correct answer is **B**. Supernodes (nodes with millions of connections) create performance bottlenecks because any traversal from that node must process all its edges. For example, connecting all US customers to a single "USA" node means every query touching that node processes millions of edges. The solution: hierarchical modeling like City→State→Country distributing connections.

    **Concept Tested:** Supernodes, Anti-Patterns

    **See:** [Anti-Patterns](index.md)

---

#### 6. What is schema evolution and why does it matter?

<div class="upper-alpha" markdown>
1. Schemas cannot change
2. The process of modifying database schemas over time while preserving existing data and maintaining compatibility
3. Deleting old schemas
4. A type of graph algorithm
</div>

??? question "Show Answer"
    The correct answer is **B**. Schema evolution is modifying database schemas over time (adding node types, edge types, properties) while preserving existing data. Graph databases support additive evolution gracefully: adding Address nodes and LIVES_AT edges doesn't disrupt existing Person nodes. Schema-optional modeling makes evolution easier than rigid relational schemas requiring migrations.

    **Concept Tested:** Schema Evolution

    **See:** [Schema Management](index.md)

---

#### 7. Given a scenario where you need to migrate customer and order data from relational tables to a graph, how would you structure the transformation?

<div class="upper-alpha" markdown>
1. Copy tables directly without changes
2. Convert Customer and Order tables to node types, foreign keys to edges: (Customer)-[:PLACED]->(Order), Order_Items join table to (Order)-[:CONTAINS]->(Product) edges
3. Delete the relational data
4. Don't migrate
</div>

??? question "Show Answer"
    The correct answer is **B**. Relational-to-graph migration transforms: tables → node types, foreign keys → edges, join tables → edges or intermediate nodes. Customer and Order tables become nodes, customer_id foreign key becomes `(Customer)-[:PLACED]->(Order)` edge, Order_Items join table becomes `(Order)-[:CONTAINS {quantity: 2}]->(Product)` with quantity as edge property.

    **Concept Tested:** Data Migration, ETL Pipelines

    **See:** [Migration Patterns](index.md)

---

#### 8. What are time trees and when are they useful?

<div class="upper-alpha" markdown>
1. Trees that grow over time
2. Hierarchical graph structures organizing time-based data (year→month→day→hour) enabling efficient temporal queries
3. A scheduling algorithm
4. A type of index
</div>

??? question "Show Answer"
    The correct answer is **B**. Time trees organize temporal data in hierarchical structures: Year→Month→Day→Hour nodes connected by edges. Events connect to appropriate time nodes, enabling efficient queries like "all events in March 2024" without scanning all timestamps. This pattern is common for event logging, IoT data, and historical analysis.

    **Concept Tested:** Time Trees, Time-Based Modeling

    **See:** [Temporal Patterns](index.md)

---

#### 9. How does CSV import typically work for graph databases?

<div class="upper-alpha" markdown>
1. CSV cannot be imported
2. Mapping CSV columns to node properties and relationship properties, with separate files for nodes and edges
3. CSV files replace the graph
4. Only Excel files work
</div>

??? question "Show Answer"
    The correct answer is **B**. CSV import maps columns to graph elements: one CSV for nodes (columns become properties), another for edges (source ID, target ID, edge type, properties). For example, customers.csv creates Person nodes with properties from columns, while orders.csv creates PURCHASED edges referencing customer and product IDs. Most graph databases provide optimized CSV import tools.

    **Concept Tested:** CSV Import, Data Loading

    **See:** [Data Loading Methods](index.md)

---

#### 10. Why is data migration from relational to graph often valuable despite the effort?

<div class="upper-alpha" markdown>
1. It's not valuable
2. Relationship-heavy queries become exponentially faster, multi-hop traversals become practical, and schema flexibility enables agile development
3. It only works for small datasets
4. Relational databases are always better
</div>

??? question "Show Answer"
    The correct answer is **B**. Migration to graphs yields dramatic benefits for relationship-heavy applications: queries requiring multiple self-joins in relational systems (friends-of-friends, supply chain paths, fraud rings) become simple, efficient traversals; multi-hop analysis becomes practical; schema flexibility supports agile development. For connected data use cases, performance improvements of 100-1000x are common, justifying migration effort.

    **Concept Tested:** Data Migration, Tradeoff Analysis

    **See:** [Migration Decisions](index.md)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (2), Understand (4), Apply (2), Analyze (2)
**Concepts Covered:** Subgraphs, Anti-Patterns, Supernodes, Time-Based Modeling, Time Trees, Schema Evolution, ETL Pipelines, Data Loading, Bulk Loading, Incremental Loading, Data Migration, CSV Import

**Next Steps:**
- Review [Chapter Content](index.md) for modeling best practices
- Practice designing data migration strategies
- Continue to [Chapter 10: Commerce, Supply Chain, and IT](../10-commerce-supply-chain-it/index.md)
