# Introduction to Graph Databases


**Credits:** 3
**Length:** 14 Weeks
**Level:** Undergraduate (Junior/Senior) or Graduate Introductory Level
**Prerequisites:**

* Prior coursework in databases or data modeling (recommended)
* Basic programming knowledge (Python, JavaScript, or similar)
* Familiarity with data structures (arrays, hash maps, trees)

# Course Overview

This course introduces students to **graph databases** as powerful tools for representing, querying, and analyzing highly connected information. Students learn why traditional relational databases struggle with modern, relationship-heavy data and how **Labeled Property Graph (LPG)** databases treat relationships as first-class citizens with attributes, directionality, and semantics.

We begin by contrasting the architectural foundations of **RDBMS vs. NoSQL** systems, explore the design motivations behind graph data models, and introduce the formal elements of LPGs: **nodes, edges, properties, labels, and schema options**. Students then gain hands-on experience modeling and querying real-world graphs using languages such as **openCypher**, **GSQL**, or **Gremlin** (depending on instructor preference).

The course emphasizes building real applications: social networks, recommendation engines, fraud detection pipelines, supply-chain models, knowledge graphs, bill-of-materials (BOM), and healthcare data modeling. Students practice evaluating when to choose graph data models, how to optimize them, how to measure performance, and how to design graph schemas aligned with real business domains.

The capstone project involves building an end-to-end graph application using an LPG graph database.


## Sample Outline (14 Weeks)

### Week 1 – Introduction to Graph Thinking

* Why data modeling matters in our AI-driven world
* The importance of world-models
* Six major representations of data
* RDBMS vs. OLAP vs. NoSQL
* When graphs outperform tables
* Edges are a first class citizen
* LPG: The most maintainable information model
* **Case Study:** Neo4j
* Timeline of Graph Database

### Week 2 – NoSQL and the Rise of Graphs

* Key-value, document, wide-column, and graph stores
* Tradeoff analysis (model precision, flexibility, scaling)
* Representations of knowledge
* The Knowledge Triangle
* Single server graphs
* Distributed graphs
* **Case Study:** TigerGraph

### Week 3 – Labeled Property Graph (LPG) Information Model

* Nodes, edges, labels, properties
* Representing metadata
* Open vs. Closed World Models
* Schema-optional vs. schema-enforced modeling
* Tools to view graph data models
* Adding rules to graphs
* Validating documents
* Validating graphs

### Week 4 – Query Languages for Graphs

* openCypher
* GSQL / Gremlin overview
* Path patterns, hops, aggregations
* GQL - the emerging standard for advanced query languages

### Week 5 – Index-Free Adjacency & Performance

* Traversal fundamentals
* Constant-time neighbor access
* Cost comparison: joins vs. traversals
* MicroSim: Chart: Comparing Multi-hop performance on RDBMS vs. Graph 

### Week 6 – Benchmarking Techniques

* Why benchmarking is critical to promoting graphs
* Predicting the future value of insights
* LDBC SNB benchmark
* Measuring graph performance
* Query latency, throughput, and scalability

### Week 7 – Modeling Social Networks and Language

* Friend graphs
* Modeling human resources
* Case Study: The Org Chart and Skill Management
* Diagram: Org Chart Models
* Influence graphs
* Modeling with edges as first-class citizens
* Extending your model
* Adding discussions
* Adding natural language language processing
* Adding products to your graph
* Adding sentiment to your graph
* Detecting bad fake accounts
* Case Study: Assigning Tasks from the Backlog

### Week 8 – Knowledge Representation with Concept Graphs**

* Concept dependency graphs
* Curriculum graphs
* Ontology-connected graph structures
* The Simple Knowledge Organization System (SKOS)
* Preferred Labels and Alternate Labels
* The Acronym List
* The Glossary
* The Controlled Vocabulary
* The Taxonomy
* The Ontology

### Week 9 - Graph Algorithms

* Search
* Breath First Search (BFS)
* Depth First Search (DFS)
* A-Star (A*)
* Pathfinding
* Traveling Salesman
* PageRank
* Community detection
* Graph Neural Networks

### Week 9 – Graph Modeling Patterns**

* Subgraphs
* Supernode vs. anti-pattern nodes
* Hyperedges, multi-edges
* Time-based modeling patterns
* Time Trees
* Modeling Internet of Things Events
* Modeling Rules and Decision Trees
* Bitemporal Graph Models (Advanced Topic)

### Weeks 10 and 11 – Industry Reference Data Models (Part I)**

* Web storefront graph model
* Product catalogs
* Bill-of-Materials (BOM) and complex parts
* Supply chain modeling
* Modeling financial transactions
* Fraud detection graphs
* Highly Regulated Industries
* Anti-Money Laundering (AML)
* Know Your Customer (KYC)
* Account-network traversal
* Provider/patient graphs
* Electronic health record modeling
* IT asset and dependency graphs
* Graph analytics vs. transactional graph queries
* Graph embeddings (introduction)

### Weeks 12, 13 and 14 – Capstone Project Presentations**

* Students present a full graph application
* Modeling choices, data loading, queries, and performance measurements

## Sample of Concepts Covered**

* NoSQL Databases
* Six Representations of Data
* RDBMS vs. Graph Databases
* OLAP vs. OLTP Workloads
* Key-Value Stores
* Document Databases
* Graph Stores
* Tradeoff Analysis / CAP
* Representations of Knowledge
* Concept Graphs
* Index-Free Adjacency
* Performance & Benchmarking
* Web Storefront Modeling
* Learning Management System Modeling
* Curriculum & Course Dependency Graphs
* Healthcare Data Graphs
* IT Asset & Dependency Graphs
* Financial Transaction Graphs
* Fraud Detection Graphs
* Complex Parts & BOM Graphs
* Supply Chain Models
* Graph Modeling Anti-Patterns
* Graph Algorithms
* openCypher / GSQL querying
* Data loading pipelines
* Best practices for graph schema design

## Topics Not Covered

*

# **Learning Objectives (Organized by Bloom’s Taxonomy – 2001 Revision)**

Below are the learning objectives grouped by **Remember → Understand → Apply → Analyze → Evaluate → Create**.

## **1. Remember (Factual Knowledge)**

Students will be able to:

* Define key terms such as *node*, *edge*, *property*, *label*, *schema-optional*, and *index-free adjacency*.
* List the major categories of NoSQL systems.
* Identify the components of an LPG information model.
* Recall common graph query languages (openCypher, GSQL, Gremlin).

## **2. Understand (Conceptual Knowledge)**

Students will be able to:

* Explain why traditional RDBMS systems struggle with highly connected data.
* Describe the tradeoffs among key-value, document, and graph stores.
* Summarize how graph queries locate patterns more naturally than SQL joins.
* Explain how concept dependency graphs represent knowledge structures.
* Compare various real-world graph models (social, supply chain, healthcare, etc.).

## **3. Apply (Procedural Knowledge)**

Students will be able to:

* Construct simple LPG models using nodes, edges, and properties.
* Write openCypher or GSQL queries to retrieve and aggregate graph data.
* Load data sets into a graph database using CSV or ETL pipelines.
* Implement graph traversal queries that compute multi-hop patterns.
* Use performance measurement tools to benchmark graph workloads.

## **4. Analyze (Breakdown & Structure)**

Students will be able to:

* Differentiate between good and bad graph modeling choices.
* Decompose a domain into entities, relationships, and multi-edge structures.
* Examine performance logs to identify bottlenecks in graph queries.
* Analyze alternative graph schema representations for a given domain.
* Map complex business processes into multi-layered graph models (e.g., supply chain, IT dependency graph).

## **5. Evaluate (Judgment & Critique)**

Students will be able to:

* Justify when a graph database is more appropriate than an RDBMS or document store.
* Evaluate competing graph schema designs for clarity, scalability, and performance.
* Critique query patterns for correctness, efficiency, and maintainability.
* Assess the appropriateness of chosen benchmarks and workload profiles.
* Defend the modeling decisions used in their capstone project.

## **6. Create (Synthesis & Design)**

Students will be able to:

* Design a complete LPG schema for a complex domain (healthcare, finance, supply chain, etc.).
* Develop multi-step graph queries supporting application requirements.
* Create an end-to-end graph system including ETL, schema, queries, and visualizations.
* Build and present a capstone graph application grounded in real-world data.
* Propose design improvements using graph algorithms or structural pattern refinements.

---

If you'd like, I can also generate:

* A **concept dependency graph** for the course
* A **full syllabus PDF**
* A **14-week slide deck outline**
* **MicroSims** that help teach specific topics (e.g., index-free adjacency, BFS traversal, fraud detection patterns)
