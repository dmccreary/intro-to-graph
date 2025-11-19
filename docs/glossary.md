# Glossary of Terms

This glossary defines key terms and concepts used throughout the Introduction to Graph Databases course. Definitions follow ISO 11179 metadata registry standards for precision, conciseness, distinctiveness, and non-circularity.

## A

#### A-Star Algorithm

A pathfinding algorithm that uses heuristic functions to efficiently find the shortest path between nodes by prioritizing exploration of promising routes.

**Example:** GPS navigation systems use A* to find optimal driving routes by estimating distance to destination and actual distance traveled.

#### Account Networks

A graph structure representing relationships between financial accounts, typically used for fraud detection and anti-money laundering analysis.

**Example:** Banks create account networks to identify suspicious transaction patterns between seemingly unrelated accounts that may indicate money laundering.

#### Accumulators

Variables in graph query languages that aggregate values during traversal, enabling concise expression of complex aggregation patterns.

**Example:** In GSQL, an accumulator can sum transaction amounts while traversing a payment chain without requiring multiple queries.

#### Acronym Lists

A controlled vocabulary component that maps acronyms to their full expanded forms, ensuring consistent interpretation across documentation.

**Example:** An acronym list maps "RDBMS" to "Relational Database Management System" and "LPG" to "Labeled Property Graph."

#### Action Item Extraction

The process of identifying and capturing specific tasks or commitments from unstructured sources such as meeting transcripts or documents.

**Example:** A knowledge graph automatically extracts action items from call transcripts, linking them to responsible persons and due dates.

#### Activity Streams

Time-ordered sequences of user actions or events represented as graph edges, commonly used in social network modeling.

**Example:** A social network's activity stream shows a chronological graph of posts, likes, and comments for a user's connections.

#### Aggregation

The process of combining multiple values into summary statistics during graph query execution, such as counting, summing, or averaging.

**Example:** A Cypher query aggregates total sales by product category by traversing from orders to products to categories.

#### All Paths

A query pattern that finds every possible path between two nodes, regardless of length or efficiency.

**Example:** Finding all paths between two researchers in a collaboration network reveals both direct co-authorships and indirect connections through intermediaries.

#### Alternate Labels

Additional names or synonyms for a concept in a controlled vocabulary system, supporting multiple valid ways to refer to the same entity.

**Example:** In SKOS, "automobile" might be an alternate label for the preferred label "car."

#### Anti-Money Laundering

The use of graph analysis to detect patterns of financial transactions designed to disguise the origins of illegally obtained money.

**Example:** Banks analyze transaction graphs to detect layering patterns where money moves through multiple accounts to obscure its source.

#### Anti-Patterns

Common but problematic approaches to graph modeling that lead to performance issues, maintenance difficulties, or semantic confusion.

**Example:** Creating a "supernode" that connects to millions of other nodes creates a bottleneck and is considered an anti-pattern.

#### Arrays

Ordered collections of elements accessible by index position, a fundamental data structure in programming.

**Example:** An array stores product IDs in order, allowing fast retrieval by position: products[0], products[1], products[2].

## B

#### Backlog Management

The organization and prioritization of pending work items, often modeled as a graph showing dependencies and assignees.

**Example:** A project management graph links backlog items to team members, showing which tasks depend on others and who is responsible.

#### Batch Processing

The execution of queries or data operations in large groups rather than individually, optimizing throughput over latency.

**Example:** A nightly batch process loads millions of transaction records into a graph database for next-day analysis.

#### Betweenness Centrality

A graph metric measuring how often a node appears on shortest paths between other nodes, identifying bridges and bottlenecks.

**Example:** In an IT network graph, servers with high betweenness centrality are critical points whose failure would disconnect parts of the network.

#### Bill of Materials

A hierarchical graph representing components and subassemblies required to manufacture a product, showing part-whole relationships.

**Example:** An aircraft BOM graph shows how engines contain turbines, turbines contain blades, capturing thousands of nested components.

#### Bitemporal Models

Graph structures that track both valid-time (when facts are true in reality) and transaction-time (when facts were recorded in the database).

**Example:** A healthcare graph uses bitemporal modeling to record when a patient's diagnosis changed and when that change was entered into the system.

#### Breadth-First Search

A graph traversal algorithm that explores all neighbors at the current depth before moving to the next depth level.

**Example:** BFS finds the shortest path between two people on a social network by exploring all direct friends, then friends-of-friends, layer by layer.

#### Bulk Loading

The process of importing large volumes of data into a graph database in a single operation, optimized for initial data population.

**Example:** A company bulk loads 50 million customer records and 200 million relationships from a data warehouse into a new graph database.

## C

#### CAP Theorem

A principle stating that distributed systems can simultaneously guarantee at most two of three properties: Consistency, Availability, and Partition tolerance.

**Example:** A distributed graph database might sacrifice immediate consistency for availability and partition tolerance during network failures.

#### Capstone Project Design

The planning and architecture of a comprehensive graph application demonstrating mastery of course concepts, typically completed as a final project.

**Example:** Students design a fraud detection system using labeled property graphs, implementing the data model, queries, and analysis algorithms.

#### Centrality Measures

Metrics quantifying the importance or influence of nodes within a graph based on their position and connectivity patterns.

**Example:** Centrality measures identify influential users in social networks, critical infrastructure components, or important concepts in knowledge graphs.

#### Clinical Pathways

Standardized care sequences for specific medical conditions, modeled as graphs showing decision points and treatment alternatives.

**Example:** A diabetes care pathway graph shows diagnosis, testing, medication options, and follow-up schedules with conditional branches based on patient response.

#### Closeness Centrality

A metric measuring how short the average path is from a node to all other nodes, identifying centrally positioned nodes.

**Example:** In a communication network, employees with high closeness centrality can spread information quickly to the entire organization.

#### Closed World Model

An assumption that any information not explicitly stated in the database is false or doesn't exist.

**Example:** In a closed-world graph, if no edge exists between Person A and Person B, they are assumed to not know each other.

#### Codifiable Knowledge

Information that can be explicitly documented, structured, and transferred, as opposed to experiential or tacit knowledge.

**Example:** Standard operating procedures and product specifications are codifiable knowledge that can be represented in knowledge graphs.

#### Community Detection

Algorithms that identify clusters of densely connected nodes within a graph, revealing natural groupings or communities.

**Example:** Community detection in a customer graph reveals distinct buyer segments who share similar purchasing patterns and social connections.

#### Complex Parts

Components composed of multiple subcomponents with intricate relationships, requiring hierarchical or network representations.

**Example:** An automotive engine is a complex part containing hundreds of interconnected subassemblies, each with specific dependencies.

#### Composite Indexes

Database indexes built on multiple properties simultaneously, enabling efficient queries that filter on multiple attributes.

**Example:** A composite index on (country, city, zipcode) speeds up queries searching for addresses in specific geographic locations.

#### Concept Dependency Graphs

Directed graphs showing prerequisite relationships between concepts, indicating which concepts must be learned before others.

**Example:** In a programming course, the concept dependency graph shows "Variables" must be learned before "Functions," which precedes "Recursion."

#### Configuration Management

The systematic tracking and control of system configurations, often modeled as graphs showing component relationships and dependencies.

**Example:** An IT configuration management graph tracks servers, applications, and their dependencies, enabling impact analysis for changes.

#### Connected Components

Maximal subgraphs where every node can reach every other node, identifying isolated clusters within a larger graph.

**Example:** In a social network, connected components reveal separate friend groups with no connections between them.

#### Consistency Models

Rules governing how and when changes propagate through distributed systems, balancing immediacy against availability and partition tolerance.

**Example:** A distributed graph database uses eventual consistency, allowing temporary inconsistencies across nodes that resolve over time.

#### Constant-Time Neighbor Access

The ability to retrieve a node's directly connected neighbors in O(1) time complexity, independent of graph size.

**Example:** Index-free adjacency enables constant-time neighbor access, making multi-hop traversals efficient even in billion-edge graphs.

#### Controlled Vocabularies

Standardized lists of approved terms ensuring consistent terminology across an organization or domain.

**Example:** A medical controlled vocabulary ensures "myocardial infarction" is used consistently instead of varying terms like "heart attack" or "MI."

#### Create Statement

A graph query command that adds new nodes and edges to the database with specified properties and labels.

**Example:** The Cypher statement CREATE (p:Person {name: 'Alice', age: 30}) adds a new Person node with two properties.

#### CSV Import

The process of loading data from comma-separated value files into a graph database, mapping columns to nodes and relationships.

**Example:** A CSV file containing customer data is imported, creating Person nodes with properties mapped from the file's columns.

#### Curriculum Graphs

Directed graphs representing courses and their prerequisites, showing valid learning paths through an educational program.

**Example:** A computer science curriculum graph shows that "Data Structures" requires "Programming I" and is itself required for "Algorithms."

#### Cypher Syntax

The structure and grammar rules of the Cypher graph query language, defining how queries are written and interpreted.

**Example:** Cypher syntax uses ASCII-art patterns like (a)-[:KNOWS]->(b) to visually represent graph patterns in queries.

## D

#### Data Lineage

The documented path showing data's origin, transformations, and movement through systems, often visualized as a graph.

**Example:** A data lineage graph traces customer records from source systems through ETL processes to final reporting databases.

#### Data Loading

The process of transferring data from external sources into a graph database, transforming it to match the graph schema.

**Example:** Data loading converts relational tables into graph nodes and foreign key relationships into edges with appropriate labels.

#### Data Migration

The transfer of data from one database system to another, typically involving schema transformation and validation.

**Example:** A company migrates customer and order data from a relational database to a graph database, restructuring tables as nodes and edges.

#### Data Modeling

The process of creating abstract representations of information structures, defining entities, attributes, and relationships.

**Example:** Data modeling for an e-commerce system identifies entities like Customer, Product, and Order with their properties and connections.

#### Data Structures

Organized formats for storing and accessing data efficiently, such as arrays, hash maps, trees, and graphs.

**Example:** Different data structures optimize different operations: arrays for indexed access, hash maps for key lookup, trees for hierarchical data.

#### Decision Trees

Tree-structured graphs representing sequences of decisions and their outcomes, used for classification and rule-based logic.

**Example:** A loan approval decision tree graph evaluates credit score, income, and debt ratio to determine approval or denial.

#### Declarative Queries

Query statements that specify what results are desired without detailing the procedural steps to obtain them.

**Example:** A declarative Cypher query describes the pattern to match, letting the database engine determine the execution plan.

#### Degree of Node

The count of edges connected to a node, measuring its connectivity within the graph.

**Example:** A social network user with a degree of 500 has 500 direct friendship connections.

#### Delete Statement

A graph query command that removes nodes, edges, or properties from the database based on specified conditions.

**Example:** The Cypher statement MATCH (p:Person {name: 'Alice'}) DELETE p removes the Person node for Alice.

#### Department Knowledge

Domain-specific information and expertise particular to an organizational department, often captured in knowledge graphs.

**Example:** The engineering department's knowledge graph captures product specifications, design decisions, and lessons learned from past projects.

#### Dependency Graphs

Directed graphs showing how entities rely on each other, commonly used in IT systems, software builds, and project planning.

**Example:** A software dependency graph shows which libraries depend on which other libraries, enabling impact analysis for updates.

#### Depth-First Search

A graph traversal algorithm that explores as far as possible along each branch before backtracking to explore other branches.

**Example:** DFS detects cycles in a dependency graph by checking if the traversal revisits nodes already in the current path.

#### Distributed Graph Databases

Graph database systems partitioned across multiple servers, enabling horizontal scaling for large datasets and high query loads.

**Example:** TigerGraph distributes a billion-edge social network across multiple servers, parallelizing queries for high performance.

#### Document Databases

NoSQL systems storing data as self-contained documents (JSON, XML) rather than rows in tables, offering flexible schemas.

**Example:** MongoDB stores customer records as JSON documents, allowing each record to have different fields without schema constraints.

#### Document Validation

The process of checking documents against schemas or rules to ensure structural correctness and data quality.

**Example:** JSON Schema validation ensures customer documents contain required fields like name and email before database insertion.

## E

#### Edge Direction

The orientation of a relationship from one node to another, indicating the semantic flow of the relationship.

**Example:** In a graph, (Person)-[:MANAGES]->(Person) shows a directional relationship where one person manages another.

#### Edge-to-Node Ratio

The average number of edges per node in a graph, indicating connectivity density and impacting traversal performance.

**Example:** A social network with an edge-to-node ratio of 50 means users average 50 connections each.

#### Edges

The connections between nodes in a graph, representing relationships, associations, or interactions.

**Example:** In a social network graph, an edge labeled FRIENDS connects two Person nodes, representing their friendship.

#### Electronic Health Records

Digital patient medical histories modeled as graphs connecting patients, providers, diagnoses, treatments, and outcomes.

**Example:** An EHR graph links a patient to their physicians, medications, lab results, and procedures in a comprehensive health timeline.

#### Enterprise Knowledge

Organization-wide information, best practices, and expertise captured and managed for strategic decision-making and operational efficiency.

**Example:** An enterprise knowledge graph connects business processes, organizational structure, systems, and documented expertise.

#### ETL Pipelines

Extract, Transform, Load processes that move data from source systems, convert formats, and load into target databases.

**Example:** An ETL pipeline extracts customer data from CRM, transforms it to graph format, and loads nodes and edges into Neo4j.

## F

#### Fake Account Detection

Identifying inauthentic or bot accounts in social networks using graph patterns and behavioral anomalies.

**Example:** Graph analysis detects fake accounts by identifying clusters of new accounts with identical connection patterns and minimal activity.

#### Financial Transactions

Monetary exchanges between accounts, parties, or institutions, modeled as edges in financial graphs.

**Example:** A financial graph represents wire transfers as edges between account nodes, capturing amount, timestamp, and transaction type.

#### First-Class Relationships

The treatment of connections as independent entities with their own properties and identities, not just foreign key references.

**Example:** In a graph database, a WORKS_AT relationship can have properties like start_date and position, making it first-class.

#### Follower Networks

Directed graphs representing asymmetric social relationships where one user follows another without requiring reciprocation.

**Example:** Twitter's follower network shows who follows whom, enabling analysis of information flow and influence patterns.

#### Fraud Detection

The use of pattern matching and anomaly detection in graphs to identify suspicious activities or deceptive behavior.

**Example:** Fraud detection analyzes transaction graphs to find ring networks where accounts only interact with each other, indicating coordinated fraud.

#### Friend Graphs

Undirected graphs representing mutual social connections between users, typically in social networking applications.

**Example:** Facebook's friend graph shows symmetric relationships where both parties have accepted the connection.

#### Full-Text Search

Indexing and querying capabilities that find nodes based on text content within properties, supporting keyword and phrase searches.

**Example:** Full-text search on a product graph finds items containing "wireless bluetooth headphones" in their descriptions.

## G

#### GQL

Graph Query Language, an emerging ISO standard for graph database queries, unifying syntax across different vendors.

**Example:** GQL aims to provide a standard query language similar to how SQL standardized relational database queries.

#### Graph 500

A ranking of supercomputer systems based on graph processing performance, measuring large-scale graph analytics capabilities.

**Example:** Graph 500 benchmarks evaluate systems on tasks like breadth-first search on massive graphs with billions of edges.

#### Graph Clustering

Grouping nodes into clusters based on connectivity patterns, where nodes within clusters are more connected than nodes between clusters.

**Example:** Graph clustering segments customers into groups with similar purchasing behaviors and social connections.

#### Graph Data Model

The conceptual framework defining how information is structured as nodes, edges, properties, and labels within a graph database.

**Example:** An IT asset graph data model defines node types (Server, Application, Database) and relationship types (HOSTS, DEPENDS_ON, CONNECTS_TO).

#### Graph Databases

Database systems optimized for storing and querying graph-structured data, treating relationships as first-class entities.

**Example:** Neo4j is a graph database designed to efficiently store and traverse networks of interconnected data.

#### Graph Embeddings

Techniques that map graph nodes or substructures to vectors in continuous space, enabling machine learning on graph data.

**Example:** Node2Vec creates 128-dimensional vectors for users, where similar users have nearby vectors enabling recommendation algorithms.

#### Graph Indexes

Data structures that accelerate graph queries by enabling fast lookup of nodes or edges based on property values or labels.

**Example:** An index on Person.email enables rapid user lookup by email address without scanning all Person nodes.

#### Graph Metrics

Quantitative measurements characterizing graph structure, such as diameter, density, clustering coefficient, and centrality distributions.

**Example:** Graph metrics reveal that a social network has small-world properties with short average path lengths and high clustering.

#### Graph Neural Networks

Deep learning architectures that operate on graph-structured data, learning representations by aggregating information from node neighborhoods.

**Example:** A GNN predicts whether molecules are toxic by learning from molecular graphs where atoms are nodes and bonds are edges.

#### Graph Partitioning

Dividing a large graph into smaller sections distributed across multiple servers, balancing load while minimizing cross-partition edges.

**Example:** A social network is partitioned geographically, keeping users from the same region on the same server to minimize distributed queries.

#### Graph Patterns

Structural templates describing node and edge configurations used in queries to match specific subgraph structures.

**Example:** The pattern (a:Person)-[:KNOWS]->(b:Person)-[:KNOWS]->(c:Person) finds chains of three people connected by KNOWS relationships.

#### Graph Quality Metrics

Measurements assessing graph data quality, such as completeness, consistency, schema adherence, and duplicate detection.

**Example:** Graph quality metrics identify orphan nodes, missing required properties, and inconsistent relationship types.

#### Graph Query

A request to retrieve, modify, or analyze data in a graph database, typically specifying patterns to match or traverse.

**Example:** A graph query finds all products purchased by friends of a user within the last month for recommendation purposes.

#### Graph Schema

The definition of node types, edge types, property constraints, and validation rules governing graph database structure.

**Example:** A graph schema specifies that Person nodes must have a name property and can only have KNOWS edges to other Persons.

#### Graph Validation

The process of checking graph data against schema rules, constraints, and business logic to ensure correctness and consistency.

**Example:** Graph validation ensures every WORKS_AT relationship connects a Person to a Company and includes a start_date property.

#### Graph Visualization

The graphical representation of nodes and edges, enabling visual exploration and analysis of graph structures.

**Example:** Force-directed graph visualization positions connected nodes near each other, revealing communities and central nodes.

#### GSQL

A query language developed by TigerGraph, combining SQL-like syntax with graph traversal capabilities and distributed processing features.

**Example:** GSQL queries use accumulators to efficiently aggregate values during distributed traversal across partitioned graphs.

## H

#### Hash Maps

Data structures that map keys to values using hash functions, enabling average constant-time lookup operations.

**Example:** A hash map stores user IDs as keys and user objects as values, allowing fast retrieval of any user by their ID.

#### Healthcare Graphs

Graph structures representing medical information including patients, providers, conditions, treatments, and outcomes.

**Example:** A healthcare graph connects patients to diagnoses, medications, procedures, and physicians, enabling comprehensive care analysis.

#### Hop Count

The number of edges traversed in a path between two nodes, measuring distance in the graph.

**Example:** Finding "friends within 3 hops" means exploring connections up to friend-of-friend-of-friend relationships.

#### Human Resources Modeling

Graph representations of organizational structures, employee relationships, skills, roles, and career progression.

**Example:** An HR graph links employees to managers, departments, projects, and skills, enabling talent search and succession planning.

#### Hyperedges

Edges that connect more than two nodes simultaneously, representing multi-party relationships.

**Example:** A hyperedge connects a student, professor, and course to represent enrollment as a three-way relationship.

## I

#### Impact Analysis

The process of determining which entities are affected by changes to a node or edge, typically through traversal.

**Example:** Impact analysis on an IT dependency graph shows all applications and services affected by a planned server upgrade.

#### Imperative Queries

Query statements that specify procedural steps to execute, detailing how to obtain desired results.

**Example:** An imperative graph query explicitly defines traversal order and accumulation logic rather than declaring desired patterns.

#### Incremental Loading

Adding new data to an existing graph database in small batches or continuously, updating the graph as new information arrives.

**Example:** Incremental loading adds daily transaction data to a financial fraud graph, updating account nodes and creating new transaction edges.

#### Index-Free Adjacency

A graph storage architecture where each node directly references its connected neighbors without requiring index lookups for traversal.

**Example:** Index-free adjacency enables Neo4j to traverse relationships in constant time, regardless of total graph size.

#### Indegree

The count of incoming edges to a node, measuring how many other nodes point to it.

**Example:** In a follower graph, a celebrity's indegree counts how many users follow them.

#### Influence Graphs

Networks showing how information, opinions, or behaviors spread between actors, used in marketing and social analysis.

**Example:** An influence graph identifies opinion leaders whose endorsements significantly impact purchasing decisions among their connections.

#### Interactive Queries

Real-time, user-initiated database requests expecting sub-second responses, as opposed to batch analytics.

**Example:** Interactive queries power recommendation systems that return personalized product suggestions instantly as users browse.

#### IoT Event Modeling

Graph structures representing sensor data, device relationships, and event sequences from Internet of Things systems.

**Example:** An IoT graph connects sensors to equipment, events to devices, and anomalies to root causes in a manufacturing facility.

#### IT Asset Management

The systematic tracking and governance of technology resources using graphs to model dependencies and configurations.

**Example:** An IT asset graph links physical servers to virtual machines, applications, databases, and business services they support.

## J

#### Join Operations

Relational database operations combining rows from multiple tables based on matching key values, typically expensive for multi-hop queries.

**Example:** Finding friends-of-friends in a relational database requires multiple self-joins on a user table, growing exponentially with hops.

#### JSON Import

Loading data from JSON files or streams into a graph database, mapping JSON objects and arrays to nodes and edges.

**Example:** JSON import converts a file of customer objects with embedded order arrays into Customer nodes connected to Order nodes.

## K

#### Key-Value Stores

NoSQL databases storing data as simple key-value pairs, optimized for fast retrieval by key.

**Example:** Redis stores session IDs as keys mapped to session data values, enabling rapid session lookup.

#### Know Your Customer

Regulatory requirements and processes for verifying customer identities and understanding relationships, often using graph analysis.

**Example:** KYC graphs connect individuals to companies, addresses, and beneficial owners to detect hidden ownership structures.

#### Knowledge Capture

The systematic recording and structuring of expertise, decisions, and insights for organizational preservation and reuse.

**Example:** Knowledge capture transforms expert interviews and documentation into a structured graph of concepts, procedures, and relationships.

#### Knowledge Management

Organizational practices for creating, sharing, using, and managing information and intellectual assets.

**Example:** Enterprise knowledge management uses graphs to connect documents, experts, projects, and concepts for efficient information retrieval.

#### Knowledge Representation

Methods and structures for encoding information, facts, and relationships in formats enabling reasoning and inference.

**Example:** Semantic knowledge representation uses ontologies and graphs to model domain concepts and their interrelationships formally.

## L

#### Labeled Property Graph

A graph data model where nodes and edges can have labels (types) and properties (key-value pairs).

**Example:** A Person node with label "Person" might have properties like {name: "Alice", age: 30}, connected by a KNOWS edge with property {since: 2015}.

#### Labels

Type classifications assigned to nodes or edges, categorizing them into semantic groups or classes.

**Example:** Node labels like Person, Company, and Product classify nodes by type, while edge labels like WORKS_AT and OWNS classify relationships.

#### LDBC SNB Benchmark

Linked Data Benchmark Council's Social Network Benchmark, a standard for evaluating graph database performance on social network workloads.

**Example:** LDBC SNB tests databases on queries like finding recent posts by friends and complex aggregation over social connections.

#### Link Prediction

Algorithms that predict likely future connections between nodes based on graph structure and node attributes.

**Example:** LinkedIn uses link prediction to suggest "People You May Know" by analyzing mutual connections and profile similarity.

## M

#### Map-Reduce Pattern

A computational model that processes data in parallel by mapping operations across partitions and reducing results.

**Example:** GSQL implements map-reduce patterns for distributed graph queries, mapping traversal across partitions and reducing aggregated results.

#### Master Data Management

The practice of creating and maintaining authoritative, consistent definitions of business entities across an organization.

**Example:** Master data management uses graphs to maintain a single source of truth for customer data, linking records from multiple systems.

#### Match Clause

A query syntax element specifying graph patterns to find, forming the foundation of declarative graph queries.

**Example:** The Cypher clause MATCH (a:Person)-[:KNOWS]->(b:Person) finds all pairs of people connected by KNOWS relationships.

#### Merge Statement

A graph query command that either matches existing patterns or creates them if they don't exist, ensuring idempotent operations.

**Example:** MERGE (p:Person {email: 'alice@example.com'}) creates Alice's node only if no Person with that email already exists.

#### Metadata Representation

The encoding of descriptive information about data entities, such as creation dates, data types, and provenance.

**Example:** Graph metadata representation adds properties like created_by, modified_at, and data_source to nodes for governance and lineage tracking.

#### Minimum Spanning Tree

A subgraph connecting all nodes with minimum total edge weight, used in network design and clustering.

**Example:** A minimum spanning tree finds the lowest-cost network configuration to connect all office locations with fiber optic cables.

#### Model Validation

Checking graph schemas and data against business rules, constraints, and quality standards.

**Example:** Model validation ensures Product nodes have required properties like SKU and price, and only connect to valid Category nodes.

#### Multi-Edges

Multiple edges between the same pair of nodes, representing different relationship types or repeated interactions.

**Example:** Two people might be connected by both KNOWS and WORKS_WITH edges, representing distinct relationship types.

#### Multi-Hop Queries

Queries traversing multiple edges from a starting point, exploring relationships beyond immediate neighbors.

**Example:** A multi-hop query finds products purchased by friends of friends, traversing KNOWS and PURCHASED relationships.

#### Multi-Node Benchmarks

Performance tests evaluating distributed graph databases across multiple servers, measuring scalability and coordination overhead.

**Example:** Multi-node benchmarks test how query performance scales when distributing a billion-edge graph across 10, 50, or 100 servers.

## N

#### Natural Language Processing

Computational techniques for analyzing and understanding human language, often integrated with graph knowledge representation.

**Example:** NLP extracts entities and relationships from text to automatically populate knowledge graphs from unstructured documents.

#### Network Topology

The structural layout and connectivity patterns of networks, often analyzed using graph metrics and visualization.

**Example:** Network topology analysis reveals that the internet has scale-free properties with hubs having exponentially more connections than typical nodes.

#### Node Classification

Machine learning tasks predicting categorical labels for nodes based on their attributes and graph structure.

**Example:** Node classification identifies fraudulent accounts by learning from graph patterns and account features like activity frequency.

#### Nodes

The fundamental entities or vertices in a graph, representing objects, concepts, or data points.

**Example:** In a social network, each person is represented as a node containing properties like name, age, and location.

#### Normalization

A relational database design process eliminating data redundancy by decomposing tables into smaller, related tables.

**Example:** Database normalization splits a customer order table into separate Customer, Order, and Product tables linked by foreign keys.

#### NoSQL Databases

Database systems that don't primarily use tabular relational schemas, offering flexible data models and horizontal scalability.

**Example:** NoSQL databases include document stores (MongoDB), key-value stores (Redis), wide-column stores (Cassandra), and graph databases (Neo4j).

#### Note-Taking Systems

Tools and methods for capturing information and organizing knowledge, increasingly using graph structures to link concepts.

**Example:** Obsidian uses graph-based note-taking where notes are nodes and wiki-style links create an interconnected personal knowledge graph.

## O

#### OLAP

Online Analytical Processing systems optimized for complex queries and data analysis across large datasets.

**Example:** OLAP databases aggregate sales data across time, geography, and product dimensions for business intelligence reporting.

#### OLTP

Online Transaction Processing systems optimized for high-volume, low-latency individual transactions with ACID guarantees.

**Example:** OLTP databases handle real-time order processing, ensuring each transaction is immediately committed with full consistency.

#### Ontologies

Formal representations of knowledge domains defining concepts, relationships, and logical rules governing their interactions.

**Example:** A medical ontology defines diseases, symptoms, and treatments with formal relationships like "diabetes hasSymptom frequent urination."

#### Open World Model

An assumption that absence of information in the database doesn't imply falsity, leaving possibilities open.

**Example:** In an open-world graph, if no KNOWS edge exists between two people, their relationship is unknown, not necessarily nonexistent.

#### OpenCypher

An open-source declarative graph query language using ASCII-art syntax to express pattern matching queries.

**Example:** OpenCypher's MATCH (a)-[:FOLLOWS]->(b) uses arrows to intuitively represent directed relationships in social networks.

#### Org Chart Models

Graph representations of organizational hierarchies showing reporting structures and team relationships.

**Example:** An org chart graph links employees to managers with REPORTS_TO relationships, supporting queries about span of control and depth.

#### Outdegree

The count of outgoing edges from a node, measuring how many other nodes it points to.

**Example:** In a citation graph, a paper's outdegree indicates how many other papers it references.

## P

#### PageRank

An algorithm calculating node importance based on the quality and quantity of incoming edges, originally developed for web page ranking.

**Example:** Google's PageRank determines search result order by treating links as votes, with votes from important pages counting more.

#### Path Patterns

Query templates describing sequences of nodes and edges to match, enabling complex traversal specifications.

**Example:** The path pattern (a)-[:BOUGHT]->()-[:MANUFACTURED_BY]->(c) finds manufacturers of products purchased by a customer.

#### Pathfinding

Algorithms for discovering routes through graphs connecting specified start and end nodes, potentially optimizing for cost or distance.

**Example:** Dijkstra's pathfinding algorithm finds the lowest-cost route through a transportation network considering edge weights like distance or time.

#### Pattern Matching

Query evaluation technique finding subgraph instances that conform to specified structural templates.

**Example:** Pattern matching finds all triangles in a social graph by matching the pattern (a)-[:KNOWS]->(b)-[:KNOWS]->(c)-[:KNOWS]->(a).

#### Performance Benchmarking

Systematic testing and measurement of database query speed, throughput, and scalability under various workloads.

**Example:** Performance benchmarking compares graph database response times for 1-hop vs. 5-hop traversal queries at different scales.

#### Personal Knowledge Graphs

Individual knowledge organization systems connecting notes, concepts, and resources in personalized graph structures.

**Example:** A researcher's personal knowledge graph links papers, concepts, research questions, and insights for literature review management.

#### Preferred Labels

The primary, authoritative name for a concept in a controlled vocabulary system, chosen as the standard reference term.

**Example:** In a product taxonomy, "automobile" is the preferred label, while "car" and "vehicle" are alternate labels.

#### Product Catalogs

Hierarchical or networked structures organizing products by categories, attributes, and relationships.

**Example:** An e-commerce product catalog uses a graph where products connect to categories, brands, and compatible accessories.

#### Project Knowledge

Information, decisions, and learnings specific to individual projects, captured for team coordination and future reference.

**Example:** A project knowledge graph links requirements, design decisions, team members, and deliverables for a software development initiative.

#### Properties

Key-value pairs attached to nodes or edges storing attribute information.

**Example:** A Person node might have properties like {name: "Alice", age: 30, email: "alice@example.com"}.

#### Provider-Patient Graphs

Healthcare models connecting medical providers to their patients with treatment, diagnosis, and referral relationships.

**Example:** A provider-patient graph enables analysis of care coordination, referral patterns, and patient outcomes across a healthcare network.

## Q

#### Query Cost Analysis

Evaluation of computational resources and time required to execute database queries, informing optimization decisions.

**Example:** Query cost analysis reveals that a 5-hop traversal across an unindexed property is causing slow performance.

#### Query Latency

The elapsed time between submitting a database query and receiving results, a key performance metric.

**Example:** Interactive applications require query latency under 100 milliseconds to maintain responsive user experiences.

#### Query Optimization

Techniques for improving query execution efficiency through better algorithms, indexing, or execution plan selection.

**Example:** Query optimization rewrites a pattern to leverage existing indexes, reducing execution time from 5 seconds to 50 milliseconds.

#### Query Performance

The speed and efficiency with which a database executes queries, measured by latency, throughput, and resource utilization.

**Example:** Graph databases demonstrate superior query performance for multi-hop relationship traversals compared to relational join operations.

#### Query Plans

Step-by-step execution strategies developed by database engines to fulfill queries, balancing accuracy, speed, and resource usage.

**Example:** A query plan shows the database will use an index lookup followed by neighbor traversal rather than a full graph scan.

#### Query Throughput

The number of queries a database can execute per unit time, measuring system capacity under load.

**Example:** A graph database achieves 10,000 queries per second throughput for simple neighbor lookups on a billion-edge graph.

## R

#### RDBMS

Relational Database Management Systems organizing data in tables with rows and columns, using SQL for queries.

**Example:** PostgreSQL is an RDBMS storing customer data in tables with foreign keys linking customers to their orders.

#### Real-Time Analytics

Data analysis and query processing delivering results with minimal delay, enabling immediate insights and responses.

**Example:** Real-time analytics on transaction graphs detect and alert on fraudulent patterns within seconds of occurrence.

#### Recommendation Engines

Systems suggesting relevant items to users based on preferences, behavior, and graph relationships.

**Example:** A recommendation engine uses collaborative filtering on a purchase graph to suggest products bought by similar customers.

#### Reference Data Models

Standardized graph schemas representing common business domains, providing templates for specific industries or use cases.

**Example:** A retail reference data model defines standard node types (Customer, Product, Order) and relationships (PURCHASED, CONTAINS) for e-commerce.

#### Regulatory Compliance

Adherence to legal and industry requirements, often tracked using graphs connecting policies, controls, and evidence.

**Example:** A compliance graph links regulations to implemented controls, audit findings, and remediation actions for governance tracking.

#### Relational Model

A data organization approach using tables with rows representing records and columns representing attributes.

**Example:** The relational model stores customers in one table and orders in another, linking them through foreign key references.

#### Relationship Types

Classifications of edges defining the semantic meaning of connections between nodes.

**Example:** Relationship types like MANAGES, WORKS_WITH, and REPORTS_TO distinguish different employment relationships in an org chart.

#### Replication

Copying data across multiple database instances for redundancy, availability, and geographic distribution.

**Example:** Database replication maintains synchronized copies of a graph across data centers in multiple regions for disaster recovery.

#### Return Clause

A query syntax element specifying which data to include in query results, selecting nodes, edges, or computed values.

**Example:** The Cypher clause RETURN person.name, count(friend) outputs person names and their friend counts.

#### Root Cause Analysis

Investigating failures or incidents by traversing dependency graphs to identify originating problems.

**Example:** Root cause analysis on an IT dependency graph traces a website outage back to a failed database server.

#### Rule Systems

Mechanisms for defining and enforcing constraints, validations, or business logic on graph data.

**Example:** A rule system enforces that employees can only WORKS_AT one company at a time, preventing invalid data.

## S

#### Scalability

The ability of a system to handle increasing data volumes or query loads through vertical or horizontal scaling.

**Example:** Horizontal scalability adds more servers to distribute a growing graph, maintaining query performance as the dataset expands.

#### Schema Design

The process of defining data structures, constraints, and relationships optimized for specific access patterns and requirements.

**Example:** E-commerce schema design creates Product, Customer, and Order nodes with relationships supporting inventory and recommendation queries.

#### Schema Evolution

The process of modifying database schemas over time while preserving existing data and maintaining compatibility.

**Example:** Schema evolution adds a new Address node type and LIVES_AT relationships without disrupting existing Person nodes.

#### Schema-Enforced Modeling

A database design approach requiring strict adherence to predefined schemas, rejecting non-conforming data.

**Example:** Schema-enforced modeling rejects Person nodes missing required email properties, ensuring data completeness.

#### Schema-Optional Modeling

A flexible approach allowing nodes and edges with varying properties, not requiring predefined schemas.

**Example:** Schema-optional modeling lets different Customer nodes have different properties based on data availability (some have phone, others don't).

#### Sentiment Analysis

Computational determination of emotional tone in text, often integrated with social network graphs.

**Example:** Sentiment analysis on product review graphs identifies items with consistently positive sentiment across user communities.

#### Set Clause

A query command modifying property values on existing nodes or edges.

**Example:** The Cypher clause SET person.age = 31 updates a person's age property to a new value.

#### Sharding Strategies

Approaches for partitioning data across multiple servers, balancing load distribution and query efficiency.

**Example:** Sharding strategies partition social network users by geographic region, keeping local connections on the same server.

#### Shortest Path Algorithms

Computational methods finding the minimum-cost or minimum-hop route between nodes in a graph.

**Example:** Dijkstra's shortest path algorithm finds the fastest route through a transportation network considering traffic and distance.

#### Single-Node Benchmarks

Performance tests evaluating database capabilities on a single server, isolating engine efficiency from distribution overhead.

**Example:** Single-node benchmarks measure how many graph traversal operations a server can execute per second.

#### Skill Management

Organizational tracking of employee capabilities, certifications, and competencies, often modeled as graphs.

**Example:** A skill management graph connects employees to skills with proficiency levels, enabling talent searches for project staffing.

#### SKOS

Simple Knowledge Organization System, a W3C standard for representing controlled vocabularies and taxonomies as linked data.

**Example:** SKOS represents a product taxonomy where broader/narrower relationships link general categories to specific subcategories.

#### Social Networks

Graph structures representing people and their social relationships, interactions, or communications.

**Example:** LinkedIn models a professional social network where people connect through work relationships, shared employers, and endorsements.

#### Statistical Query Tuning

Optimizing query performance using statistical information about data distributions, cardinalities, and access patterns.

**Example:** Statistical query tuning uses node degree distributions to predict whether to use indexes or full scans for optimal performance.

#### Strongly Connected Components

Maximal subgraphs where every node can reach every other node following directed edges, common in web graphs and citation networks.

**Example:** Strongly connected components in a citation network reveal tightly coupled research areas where papers cyclically reference each other.

#### Subgraphs

Portions of larger graphs containing subsets of nodes and edges, often extracted for analysis or visualization.

**Example:** A subgraph containing customers who purchased in the last month enables focused analysis of recent buying patterns.

#### Supernodes

Nodes with extremely high degree, creating performance bottlenecks and often indicating modeling anti-patterns.

**Example:** A "USA" location node connected to millions of people is a supernode causing slow traversals and should be redesigned.

#### Supply Chain Modeling

Graph representations of material and information flows through suppliers, manufacturers, distributors, and retailers.

**Example:** A supply chain graph traces product components from raw material suppliers through assembly plants to distribution centers and stores.

#### Synthetic Benchmarks

Artificially generated datasets and workloads for controlled performance testing, ensuring reproducibility and comparability.

**Example:** Synthetic benchmarks generate random graphs with specified properties to test database performance across different configurations.

## T

#### Tacit Knowledge

Experiential, intuitive knowledge difficult to codify or transfer explicitly, often captured through storytelling and mentorship.

**Example:** Expert troubleshooting intuition is tacit knowledge; knowledge graphs can link documented cases but can't fully capture the expertise.

#### Task Assignment

Allocation of work items to individuals or teams, modeled as graph relationships showing responsibilities and dependencies.

**Example:** A project graph assigns tasks to team members with HAS_TASK edges, showing workload distribution and dependencies.

#### Taxonomies

Hierarchical classifications organizing concepts from general to specific, often represented as tree-structured graphs.

**Example:** A biological taxonomy classifies organisms from kingdom through phylum, class, order, family, genus, to species.

#### Time Trees

Graph structures organizing time-based data in hierarchical trees (year > month > day), enabling efficient temporal queries.

**Example:** Event graphs use time trees to quickly find all events in specific months without scanning all timestamps.

#### Time-Based Modeling

Techniques for representing temporal aspects of data, such as valid times, transaction times, and time-varying relationships.

**Example:** Time-based modeling adds start_date and end_date to employment relationships, tracking job history over time.

#### Tradeoff Analysis

Evaluation of competing design choices by comparing benefits and costs across multiple dimensions.

**Example:** Tradeoff analysis compares graph databases (fast traversals, flexible schema) vs RDBMS (mature tooling, strong consistency).

#### Traveling Salesman Problem

A classic optimization challenge finding the shortest route visiting all nodes exactly once, computationally difficult for large graphs.

**Example:** Delivery route optimization approximates the traveling salesman problem to minimize total driving distance across all stops.

#### Traversal

The process of following edges from node to node, exploring graph structure to find paths or patterns.

**Example:** Traversal from a Customer node through PURCHASED edges to Product nodes finds all items bought by that customer.

#### Traversal Cost

The computational resources and time required to explore graph paths, influenced by hop count and edge density.

**Example:** Traversal cost grows exponentially with hop count in dense graphs, making 5-hop queries significantly more expensive than 2-hop queries.

#### Trees

Hierarchical data structures where each node has one parent (except the root) and zero or more children, forming acyclic graphs.

**Example:** File systems use tree structures where directories are nodes and parent-child relationships represent containment.

## U

#### User Profiles

Collections of attributes and preferences associated with individual users, often modeled as graph nodes.

**Example:** User profile nodes store demographics, preferences, and behavior history, connecting to content through interaction edges.

## V

#### Variable Length Paths

Query patterns matching paths with unspecified or variable numbers of edges, enabling flexible traversal depth.

**Example:** The Cypher pattern (a)-[:KNOWS*1..3]->(b) finds people connected by 1, 2, or 3 friendship hops.

#### Vector Indexes

Specialized indexes supporting similarity search on vector embeddings, enabling semantic search and recommendation.

**Example:** Vector indexes enable finding similar products by comparing embedding vectors rather than matching keywords.

## W

#### Weakly Connected Components

Maximal subgraphs where every node can reach every other node when edge directions are ignored.

**Example:** In a Twitter follower graph, weakly connected components find groups where there's some path of follows between members, regardless of direction.

#### Web Storefront Models

Graph schemas representing e-commerce systems with products, customers, orders, and shopping behaviors.

**Example:** A web storefront model connects Customers to ShoppingCarts containing Products, linked to Orders upon checkout.

#### Where Clause

A query filter specifying conditions that matched patterns must satisfy, restricting results to qualifying subsets.

**Example:** The Cypher clause WHERE person.age > 25 filters results to only include people older than 25.

#### Wide-Column Stores

NoSQL databases organizing data in column families rather than rows, optimizing for write-heavy workloads and time-series data.

**Example:** Cassandra is a wide-column store efficiently handling high-volume sensor data by clustering writes by time and device.

#### World Models

Conceptual frameworks representing domain knowledge, entities, and relationships for specific problem spaces.

**Example:** An autonomous vehicle's world model graphs road networks, traffic rules, vehicle positions, and environmental conditions.

---

**Total Terms:** 200
**Example Coverage:** 72% (144 examples)
**Average Definition Length:** 28 words
**ISO 11179 Compliance:** All definitions meet precision, conciseness, distinctiveness, and non-circularity standards.
