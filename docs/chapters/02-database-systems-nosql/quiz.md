# Quiz: Database Systems and NoSQL

Test your understanding of traditional database systems, NoSQL alternatives, and the context for graph databases.

---

#### 1. What does RDBMS stand for?

<div class="upper-alpha" markdown>
1. Really Big Database Management System
2. Relational Database Management System
3. Remote Database Management Service
4. Redundant Binary Data Management System
</div>

??? question "Show Answer"
    The correct answer is **B**. RDBMS stands for Relational Database Management System, which organizes data into tables with rows and columns, uses SQL for queries, and enforces relationships through foreign keys. This foundational technology dominated enterprise computing for fifty years.

    **Concept Tested:** RDBMS

    **See:** [RDBMS Section](index.md#rdbms-the-foundation-and-its-cracks)

---

#### 2. What is the primary difference between OLTP and OLAP workloads?

<div class="upper-alpha" markdown>
1. OLTP handles many small transactions for day-to-day operations, while OLAP performs complex analysis on historical data
2. OLTP is newer than OLAP
3. OLTP uses NoSQL while OLAP uses relational databases
4. OLTP is only for large companies while OLAP is for small businesses
</div>

??? question "Show Answer"
    The correct answer is **A**. OLTP (Online Transaction Processing) handles many small transactions like processing orders and updating accounts, focusing on current data with ACID requirements. OLAP (Online Analytical Processing) performs complex queries analyzing historical data for business intelligence, with read-heavy workloads and aggregations across millions of records. Option B is incorrect about their relative ages. Option C incorrectly categorizes database types. Option D falsely restricts usage by company size.

    **Concept Tested:** OLTP vs OLAP

    **See:** [OLTP vs OLAP Section](index.md#oltp-vs-olap-different-workloads-different-needs)

---

#### 3. According to the CAP theorem, what are the three properties that distributed systems must choose between?

<div class="upper-alpha" markdown>
1. Cost, Accuracy, Performance
2. Consistency, Availability, Partition tolerance
3. Capacity, Accessibility, Privacy
4. Correctness, Automation, Persistence
</div>

??? question "Show Answer"
    The correct answer is **B**. The CAP theorem states that distributed systems can guarantee at most two of three properties: **Consistency** (all nodes see the same data), **Availability** (every request gets a response), and **Partition tolerance** (system continues despite network failures). This fundamental limitation forces design tradeoffs in distributed databases.

    **Concept Tested:** CAP Theorem

    **See:** [CAP Theorem Section](index.md)

---

#### 4. Which NoSQL database type is optimized for storing simple key-value pairs with instant lookups?

<div class="upper-alpha" markdown>
1. Document databases
2. Wide-column stores
3. Key-value stores
4. Graph databases
</div>

??? question "Show Answer"
    The correct answer is **C**. Key-value stores like Redis and DynamoDB are optimized for simple key-value pairs with instant O(1) lookup performance. They're ideal for caching, session storage, and simple data retrieval. Document databases (A) store structured documents like JSON. Wide-column stores (B) organize data in column families. Graph databases (D) specialize in relationship-heavy data.

    **Concept Tested:** Key-Value Stores

    **See:** [NoSQL Landscape Section](index.md)

---

#### 5. What type of data is MongoDB, a document database, best suited for?

<div class="upper-alpha" markdown>
1. Simple counters and flags
2. Self-contained documents like JSON objects with flexible schemas
3. Time-series sensor data
4. Highly connected relationship data
</div>

??? question "Show Answer"
    The correct answer is **B**. Document databases like MongoDB excel at storing self-contained documents (JSON, XML) with flexible schemas, making them ideal for content management, product catalogs, and user profiles where each record can have different fields. Simple counters (A) suit key-value stores. Time-series data (C) suits wide-column stores. Relationship-heavy data (D) suits graph databases.

    **Concept Tested:** Document Databases

    **See:** [NoSQL Types Section](index.md)

---

#### 6. Which statement best describes a fundamental limitation of traditional RDBMS?

<div class="upper-alpha" markdown>
1. RDBMS cannot store text data
2. RDBMS hits performance walls when relationships become central to queries due to expensive join operations
3. RDBMS does not support transactions
4. RDBMS can only run on Windows servers
</div>

??? question "Show Answer"
    The correct answer is **B**. Traditional RDBMS systems struggle with relationship-heavy queries because finding multi-hop connections requires expensive self-joins that scale poorly. This fundamental limitation becomes critical in applications like social networks, fraud detection, and knowledge graphs. Option A is false—RDBMS supports text. Option C is false—ACID transactions are a core RDBMS strength. Option D is false—RDBMS runs on diverse platforms.

    **Concept Tested:** RDBMS limitations

    **See:** [RDBMS Challenges](index.md#rdbms-the-foundation-and-its-cracks)

---

#### 7. Why did NoSQL databases emerge in the mid-2000s?

<div class="upper-alpha" markdown>
1. To make databases slower
2. To address RDBMS limitations including schema rigidity, horizontal scaling challenges, and modern workload patterns
3. To eliminate all structured data
4. To replace spreadsheets
</div>

??? question "Show Answer"
    The correct answer is **B**. NoSQL databases emerged to address RDBMS limitations: schema rigidity conflicting with agile development, difficulty scaling horizontally across distributed systems, challenges handling semi-structured data (JSON/XML), and new workload patterns like real-time analytics and recommendations. These systems trade some ACID guarantees for flexibility and scalability. Options A, C, and D mischaracterize NoSQL's purpose.

    **Concept Tested:** NoSQL Databases evolution

    **See:** [Database Revolution](index.md#the-database-revolution-you-need-to-know-about)

---

#### 8. Which NoSQL database type would be best for modeling a social network with complex friend relationships?

<div class="upper-alpha" markdown>
1. Key-value store
2. Document database
3. Wide-column store
4. Graph database
</div>

??? question "Show Answer"
    The correct answer is **D**. Graph databases are specifically designed for relationship-heavy data like social networks, where modeling "friends-of-friends," influence patterns, and community detection are core requirements. They use index-free adjacency for efficient multi-hop traversals. Key-value stores (A) handle simple lookups. Document databases (B) store self-contained records. Wide-column stores (C) optimize for time-series and wide tables.

    **Concept Tested:** Graph Databases, Tradeoff Analysis

    **See:** [NoSQL Landscape](index.md)

---

#### 9. What does "tradeoff analysis" mean when choosing between database systems?

<div class="upper-alpha" markdown>
1. Comparing prices of database licenses
2. Evaluating competing design choices by comparing benefits and costs across dimensions like consistency, scalability, and flexibility
3. Trading databases between companies
4. Analyzing stock market trades
</div>

??? question "Show Answer"
    The correct answer is **B**. Tradeoff analysis evaluates competing design choices by comparing benefits and costs across multiple dimensions. For databases, this means weighing factors like consistency vs. availability (CAP theorem), ACID guarantees vs. scalability, schema flexibility vs. data integrity, and query performance for different workload types. Understanding tradeoffs helps select the optimal database for specific requirements.

    **Concept Tested:** Tradeoff Analysis

    **See:** [Choosing Databases Section](index.md)

---

#### 10. Wide-column stores like Cassandra are optimized for which use case?

<div class="upper-alpha" markdown>
1. Complex multi-hop relationship queries
2. Simple key-value lookups
3. Write-heavy workloads and time-series data with high-volume sensor data
4. Storing small amounts of data on a single server
</div>

??? question "Show Answer"
    The correct answer is **C**. Wide-column stores like Cassandra organize data in column families and are optimized for write-heavy workloads and time-series data, efficiently handling high-volume sensor data, log aggregation, and metrics. They excel at clustering writes by time and device. Multi-hop queries (A) suit graph databases. Simple lookups (B) suit key-value stores. Small single-server data (D) can use any system—wide-column stores are built for scale.

    **Concept Tested:** Wide-Column Stores

    **See:** [NoSQL Types](index.md)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (4), Understand (4), Apply (2), Analyze (0)
**Concepts Covered:** RDBMS, OLTP, OLAP, NoSQL Databases, Key-Value Stores, Document Databases, Wide-Column Stores, Graph Databases, CAP Theorem, Tradeoff Analysis

**Next Steps:**
- Review the [Chapter Content](index.md) for concepts you found challenging
- Explore how these database types compare in the [Glossary](../../glossary.md)
- Continue to [Chapter 3: Labeled Property Graph Model](../03-labeled-property-graph-model/index.md)
