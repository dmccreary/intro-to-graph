# Query Languages for Graph Databases

## Summary

This chapter provides comprehensive coverage of graph query languages including OpenCypher, GSQL, and the emerging GQL standard. You'll master Cypher syntax for pattern matching, learn how to construct complex graph queries with match, where, and return clauses, and explore GSQL's map-reduce pattern for distributed query processing. The chapter emphasizes both declarative and imperative query approaches, query optimization techniques, and performance considerations for production graph applications.

## Concepts Covered

This chapter covers the following 26 concepts from the learning graph:

1. OpenCypher
2. GSQL
3. Statistical Query Tuning
4. GQL
5. Cypher Syntax
6. Match Clause
7. Where Clause
8. Return Clause
9. Create Statement
10. Merge Statement
11. Delete Statement
12. Set Clause
13. Graph Patterns
14. Variable Length Paths
15. Shortest Path
16. All Paths
17. Map-Reduce Pattern
18. Accumulators
19. Query Optimization
20. Query Performance
21. Query Latency
22. Query Throughput
23. Declarative Queries
24. Imperative Queries
25. Query Plans
26. Shortest Path Algorithms

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Labeled Property Graph Information Model](../03-labeled-property-graph-model/index.md)

---

## The Elephant in the Room (Or Should We Say, the AI in the Cloud?)

Let's address something right up front: By the time you're reading this, AI capabilities are doubling roughly every seven months. There's a decent chance that by the time you're actually working with graph databases professionally, you'll just describe what you want in plain English, and an AI will write the query for you. "Hey AI, find all customers who bought products similar to Alice's purchases in the last month." Done.

So why are we about to spend an entire chapter learning Cypher syntax, GSQL patterns, and query optimization techniques?

Here's the thing (and we're giving you a knowing wink here): **Understanding what the code does is valuable even if you never write it yourself.** When the AI generates a query that returns 10 million nodes instead of the 10 you expected, you'll want to know why. When a query that should take milliseconds is taking minutes, you'll need to spot the problem. When you're reviewing what the AI suggested and something looks... off... you'll want the knowledge to catch it.

Think of it like learning to drive even though self-driving cars exist. Sure, the car might handle 99% of the driving, but you still want to know what's happening when you press the brake, right?

So yes, AI might write most of your graph queries in the future. But this chapter will teach you to read them, understand them, debug them, and—when necessary—write them yourself. Consider it "AI literacy for graph databases."

Ready? Let's dive into graph query languages. And remember: every time you think "I'll never write this manually," imagine your future self saying "Thank goodness I learned this" when the AI suggests a query that would accidentally delete your entire production database. (We're joking. Mostly.)

## Query Languages: The Big Three (and the Future)

Before we dive into syntax, let's survey the landscape. There are three major query languages you should know about, plus a fourth that's emerging as a standard.

### OpenCypher: The People's Champion

**OpenCypher** is the most popular graph query language, originally developed by Neo4j and then open-sourced. It's declarative (you describe what you want, not how to get it), highly readable, and looks a bit like ASCII art of graphs.

**Why it's popular:**
- **Visual syntax:** `(alice:Person)-[:FRIEND_OF]->(bob)` literally looks like a graph
- **Declarative:** Focus on the pattern you want, not the algorithm to find it
- **Wide adoption:** Neo4j, Amazon Neptune, Memgraph, RedisGraph, and many others
- **Active community:** Lots of resources, tutorials, and Stack Overflow answers

**Example:**
```cypher
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
RETURN friend.name, friend.age
ORDER BY friend.age DESC;
```

Even if you've never seen Cypher before, you can probably guess what this does: Find Alice, find her friends, return their names and ages sorted by age.

### GSQL: The Distributed Powerhouse

**GSQL** (Graph SQL) is TigerGraph's query language, designed for massive-scale distributed graph processing. While Cypher is declarative, GSQL blends declarative and imperative styles, giving you fine-grained control over execution.

**Why it matters:**
- **Imperative control:** You can specify exactly how to process the graph
- **Map-reduce pattern:** Built for distributed computation across clusters
- **Accumulators:** Powerful constructs for aggregating data during traversal
- **Performance tuning:** Fine-grained control for optimizing complex queries

**Example:**
```gsql
CREATE QUERY FindFriends(VERTEX<Person> inputPerson) {
  Start = {inputPerson};
  Friends = SELECT friend
            FROM Start:s -(FRIEND_OF:e)- Person:friend
            ORDER BY friend.age DESC;
  PRINT Friends;
}
```

GSQL looks more like traditional programming—you define variables, specify control flow, and manage execution explicitly.

### GQL: The Emerging Standard

**GQL (Graph Query Language)** is the ISO standard for graph queries, currently being developed by the same committee that created SQL. Think of it as "SQL for graphs."

**Why you should care (eventually):**
- **ISO standard:** Official international standard, like SQL
- **Industry consensus:** Major vendors collaborating on unified syntax
- **Future-proof:** Learning GQL means learning the future lingua franca of graphs
- **SQL familiarity:** Designed to feel familiar to SQL developers

**Current status:** Still emerging (as of 2025). Neo4j, Oracle, and other vendors are implementing support, but it's not yet as mature as Cypher or GSQL.

**What it looks like:**
```gql
MATCH (alice:Person WHERE alice.name = 'Alice')-[:FRIEND_OF]->(friend:Person)
RETURN friend.name, friend.age
ORDER BY friend.age DESC
```

Familiar, right? It's intentionally similar to Cypher but with SQL-like syntax elements.

### Which One Should You Learn?

**Short answer:** Start with Cypher. It's the most widely used, has the best tutorials, and concepts transfer easily to other languages.

**Long answer:** Cypher will teach you graph thinking. GSQL will teach you performance optimization. GQL will prepare you for the future. Ideally, know enough Cypher to read and write basic queries, understand GSQL concepts for distributed systems, and keep an eye on GQL for standardization.

And remember: The AI will probably write queries in whatever language your database supports. Your job is to understand what it wrote. 😉

## Cypher Syntax: The ASCII Art of Graph Queries

Let's dive deep into Cypher, the most popular graph query language. We'll cover enough that when an AI (or a colleague, or your future self) writes a Cypher query, you'll know exactly what's happening.

### The Core Philosophy: Drawing Graphs with Text

Cypher's genius is visual syntax. Compare these:

**What you're thinking:**
```
Alice --[FRIEND_OF]--> Bob
```

**What you write:**
```cypher
(alice:Person)-[:FRIEND_OF]->(bob:Person)
```

See the similarity? Nodes in parentheses `()`, relationships in brackets `[]`, arrows showing direction `->`. It's ASCII art that happens to be executable code.

### Nodes: The Parentheses Pattern

Nodes are always wrapped in parentheses:

```cypher
()                           // Anonymous node (any node)
(n)                          // Node bound to variable 'n'
(:Person)                    // Node with label 'Person'
(p:Person)                   // Person node bound to variable 'p'
(alice:Person {name: "Alice"})  // Person named Alice
(p:Person:Employee)          // Node with multiple labels
```

**Breaking down the anatomy:**
- `(variable:Label {property: value})`
- **Variable** (optional): Lets you refer to the node later in the query
- **Label** (optional): The type/category of node
- **Properties** (optional): Key-value pairs to match or filter

### Relationships: The Bracket and Arrow Pattern

Relationships use brackets and arrows:

```cypher
-[:FRIEND_OF]->              // Directed relationship, specific type
-[:FRIEND_OF]-               // Undirected (matches either direction)
<-[:FRIEND_OF]-              // Relationship pointing left
-[r:FRIEND_OF]->             // Relationship bound to variable 'r'
-[:FRIEND_OF {since: 2020}]->  // Relationship with properties
-[*1..3]->                   // Variable-length path (1 to 3 hops)
-[:FRIEND_OF|COLLEAGUE]->    // Multiple relationship types (OR)
```

**Direction matters (usually):**
- `(alice)-[:PURCHASED]->(product)` - Alice purchased product ✅
- `(product)-[:PURCHASED]->(alice)` - Product purchased Alice? ❌ (semantically weird)

But you can traverse backwards:
- `(alice)<-[:PURCHASED]-(product)` - Products purchased by Alice (same data, viewed backwards)

### The Five Essential Clauses

Cypher queries are built from clauses, like SQL. Here are the five you'll use constantly:

1. **MATCH** - Find patterns in the graph
2. **WHERE** - Filter results
3. **RETURN** - Specify what to output
4. **CREATE** - Add new data
5. **DELETE** - Remove data

Let's explore each in detail.

## MATCH Clause: Finding Patterns

The **MATCH clause** is the heart of Cypher queries. It describes a pattern you want to find in the graph.

**Simple matching:**
```cypher
// Find all Person nodes
MATCH (p:Person)
RETURN p;

// Find all friendships
MATCH (a:Person)-[:FRIEND_OF]->(b:Person)
RETURN a.name, b.name;

// Find Alice specifically
MATCH (alice:Person {name: "Alice"})
RETURN alice;
```

**Multi-hop matching:**
```cypher
// Find friends of friends (2 hops)
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->()-[:FRIEND_OF]->(fof)
RETURN fof.name;

// Find who Alice's friends follow (mixing relationship types)
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)-[:FOLLOWS]->(celebrity)
RETURN celebrity.name;
```

**Multiple patterns:**
```cypher
// Find people who are both friends AND work at the same company
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
MATCH (alice)-[:WORKS_AT]->(company)<-[:WORKS_AT]-(friend)
RETURN friend.name, company.name;
```

**Optional patterns:**
```cypher
// Find Alice's friends, and their companies if they have them
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
OPTIONAL MATCH (friend)-[:WORKS_AT]->(company)
RETURN friend.name, company.name;  // company.name might be null
```

**The abstract concept:** MATCH is declarative pattern matching. You describe the shape you want, and the query engine finds all instances of that shape in your graph.

**The practical reality:** When you tell an AI "find Alice's friends," it writes a MATCH clause. When the query takes too long, you'll look at the MATCH clause to see if it's searching too broadly.

## WHERE Clause: Filtering Results

The **WHERE clause** filters matches based on conditions, just like SQL.

**Property filtering:**
```cypher
// Friends over 30
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
WHERE friend.age > 30
RETURN friend.name;

// Multiple conditions
MATCH (p:Person)
WHERE p.age > 25 AND p.age < 40 AND p.city = "Seattle"
RETURN p.name;

// Pattern matching in strings
MATCH (p:Person)
WHERE p.email ENDS WITH "@example.com"
RETURN p.name;
```

**Relationship filtering:**
```cypher
// Friendships formed after 2020
MATCH (a:Person)-[r:FRIEND_OF]->(b:Person)
WHERE r.since > date("2020-01-01")
RETURN a.name, b.name, r.since;
```

**Null checking:**
```cypher
// People who have an email address
MATCH (p:Person)
WHERE p.email IS NOT NULL
RETURN p;
```

**List operations:**
```cypher
// People in specific cities
MATCH (p:Person)
WHERE p.city IN ["Seattle", "Portland", "San Francisco"]
RETURN p.name, p.city;
```

**Pattern-based filtering:**
```cypher
// Find people who have friends but don't work anywhere
MATCH (p:Person)-[:FRIEND_OF]->()
WHERE NOT (p)-[:WORKS_AT]->()
RETURN p.name;
```

**Pro tip:** You can often put properties directly in MATCH `(p:Person {age: 30})` instead of using WHERE `WHERE p.age = 30`. They're equivalent, but WHERE is more flexible for complex conditions.

## RETURN Clause: Shaping Output

The **RETURN clause** specifies what data you want back from the query.

**Basic returns:**
```cypher
// Return nodes
MATCH (p:Person)
RETURN p;

// Return specific properties
MATCH (p:Person)
RETURN p.name, p.age;

// Return with aliases
MATCH (p:Person)
RETURN p.name AS person_name, p.age AS person_age;
```

**Returning relationships:**
```cypher
// Return the whole pattern
MATCH (a:Person)-[r:FRIEND_OF]->(b:Person)
RETURN a, r, b;

// Return relationship properties
MATCH (a:Person)-[r:FRIEND_OF]->(b:Person)
RETURN a.name, b.name, r.since;
```

**Computed values:**
```cypher
// Calculate on the fly
MATCH (p:Person)
RETURN p.name, p.age, (2025 - p.age) AS birth_year;

// String concatenation
MATCH (p:Person)
RETURN p.name + " (" + p.city + ")" AS person_description;
```

**Aggregations:**
```cypher
// Count friends
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
RETURN count(friend);

// Average age of friends
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
RETURN avg(friend.age), min(friend.age), max(friend.age);

// Group and count
MATCH (p:Person)
RETURN p.city, count(p) AS population
ORDER BY population DESC;
```

**Sorting and limiting:**
```cypher
// Sort by age
MATCH (p:Person)
RETURN p.name, p.age
ORDER BY p.age DESC;

// Top 10 oldest people
MATCH (p:Person)
RETURN p.name, p.age
ORDER BY p.age DESC
LIMIT 10;

// Skip and limit (pagination)
MATCH (p:Person)
RETURN p.name
ORDER BY p.name
SKIP 20
LIMIT 10;  // Results 21-30
```

**DISTINCT results:**
```cypher
// Unique cities
MATCH (p:Person)
RETURN DISTINCT p.city;

// Count unique cities
MATCH (p:Person)
RETURN count(DISTINCT p.city);
```

## CREATE Statement: Adding Data

The **CREATE statement** adds new nodes and relationships to the graph.

**Creating nodes:**
```cypher
// Create a single node
CREATE (alice:Person {name: "Alice", age: 28, city: "Seattle"});

// Create multiple nodes at once
CREATE
  (alice:Person {name: "Alice", age: 28}),
  (bob:Person {name: "Bob", age: 35}),
  (techcorp:Company {name: "TechCorp"});
```

**Creating relationships:**
```cypher
// Create nodes and relationship in one statement
CREATE (alice:Person {name: "Alice"})-[:FRIEND_OF {since: "2020-05-12"}]->(bob:Person {name: "Bob"});

// Add relationship between existing nodes
MATCH (alice:Person {name: "Alice"})
MATCH (bob:Person {name: "Bob"})
CREATE (alice)-[:FRIEND_OF {since: "2020-05-12"}]->(bob);
```

**Creating patterns:**
```cypher
// Create a whole social network structure
CREATE
  (alice:Person {name: "Alice"})-[:FRIEND_OF]->(bob:Person {name: "Bob"}),
  (bob)-[:FRIEND_OF]->(charlie:Person {name: "Charlie"}),
  (charlie)-[:FRIEND_OF]->(alice),
  (alice)-[:WORKS_AT]->(techcorp:Company {name: "TechCorp"}),
  (bob)-[:WORKS_AT]->(techcorp);
```

**Returning created data:**
```cypher
CREATE (alice:Person {name: "Alice", age: 28})
RETURN alice;
```

**Important warning:** CREATE always creates new nodes/relationships, even if they already exist. If you run the same CREATE statement twice, you'll get duplicates. That's where MERGE comes in...

## MERGE Statement: Create or Match

The **MERGE statement** is like "create if it doesn't exist, otherwise match." It's idempotent—running it multiple times has the same effect as running it once.

**Basic MERGE:**
```cypher
// Create Alice if she doesn't exist
MERGE (alice:Person {name: "Alice"})
RETURN alice;

// Run this 10 times - still only one Alice node
MERGE (alice:Person {name: "Alice"})
RETURN alice;
```

**MERGE with ON CREATE:**
```cypher
// Set properties only when creating new node
MERGE (alice:Person {name: "Alice"})
ON CREATE SET alice.created = timestamp(), alice.age = 28
RETURN alice;
```

**MERGE with ON MATCH:**
```cypher
// Update last_seen every time we match Alice
MERGE (alice:Person {name: "Alice"})
ON MATCH SET alice.last_seen = timestamp()
RETURN alice;
```

**MERGE with both:**
```cypher
MERGE (alice:Person {name: "Alice"})
ON CREATE SET alice.created = timestamp(), alice.age = 28
ON MATCH SET alice.last_seen = timestamp()
RETURN alice;
```

**MERGE relationships:**
```cypher
// Ensure friendship exists (create if missing)
MATCH (alice:Person {name: "Alice"})
MATCH (bob:Person {name: "Bob"})
MERGE (alice)-[r:FRIEND_OF]->(bob)
ON CREATE SET r.since = date()
RETURN r;
```

**Why MERGE matters:** When loading data from external sources, you often don't know if nodes already exist. MERGE handles this gracefully—no duplicates, no errors.

**When the AI uses MERGE:** If you ask an AI to "make sure Alice is friends with Bob," it should use MERGE, not CREATE. If it uses CREATE, you might end up with 50 duplicate FRIEND_OF relationships. Now you know to spot that!

## SET Clause: Updating Properties

The **SET clause** modifies properties on existing nodes and relationships.

**Setting properties:**
```cypher
// Update a single property
MATCH (alice:Person {name: "Alice"})
SET alice.age = 29
RETURN alice;

// Update multiple properties
MATCH (alice:Person {name: "Alice"})
SET alice.age = 29, alice.city = "Portland", alice.updated = timestamp()
RETURN alice;
```

**Adding labels:**
```cypher
// Add a label to a node
MATCH (alice:Person {name: "Alice"})
SET alice:Employee
RETURN alice;  // Now alice has labels Person AND Employee
```

**Copying properties:**
```cypher
// Copy all properties from one node to another
MATCH (alice:Person {name: "Alice"})
MATCH (template:PersonTemplate)
SET alice = template
RETURN alice;
```

**Conditional updates:**
```cypher
// Update age only if current age is less than 30
MATCH (p:Person)
WHERE p.age < 30
SET p.age = p.age + 1
RETURN p.name, p.age;
```

**Updating relationship properties:**
```cypher
MATCH (a:Person)-[r:FRIEND_OF]->(b:Person)
WHERE a.name = "Alice" AND b.name = "Bob"
SET r.closeness = 0.9, r.last_contact = date()
RETURN r;
```

## DELETE Statement: Removing Data

The **DELETE statement** removes nodes and relationships from the graph.

**Deleting relationships:**
```cypher
// Delete a specific friendship
MATCH (alice:Person {name: "Alice"})-[r:FRIEND_OF]->(bob:Person {name: "Bob"})
DELETE r;

// Delete all FRIEND_OF relationships
MATCH ()-[r:FRIEND_OF]->()
DELETE r;
```

**Deleting nodes:**
```cypher
// Delete a node (must delete its relationships first!)
MATCH (alice:Person {name: "Alice"})
DELETE alice;  // ERROR if Alice has any relationships

// Delete node and all its relationships
MATCH (alice:Person {name: "Alice"})
DETACH DELETE alice;  // Deletes Alice and all connected relationships
```

**Conditional deletion:**
```cypher
// Delete inactive users
MATCH (p:Person)
WHERE p.last_seen < date() - duration({months: 6})
DETACH DELETE p;
```

**Deleting all data (use with extreme caution!):**
```cypher
// Delete everything in the database
MATCH (n)
DETACH DELETE n;  // ⚠️ This removes EVERYTHING
```

**Why DETACH DELETE exists:** In graph databases, you can't have relationships pointing to non-existent nodes. If you try to DELETE a node that has relationships, the database will throw an error. DETACH DELETE removes the relationships first, then the node.

**When the AI might get this wrong:** If the AI tries to DELETE a node without DETACH, the query will fail. Now you'll know to add DETACH. (See? Understanding syntax helps even when AI writes code!)

## Graph Patterns: The Power of Structure

**Graph patterns** are the core of Cypher queries—they describe shapes you want to find in your graph.

**Basic patterns:**
```cypher
// Simple 1-hop pattern
(a)-[:KNOWS]->(b)

// 2-hop pattern
(a)-[:KNOWS]->(b)-[:KNOWS]->(c)

// Triangle pattern
(a)-[:KNOWS]->(b)-[:KNOWS]->(c)-[:KNOWS]->(a)

// Star pattern (central node with multiple connections)
(center)-[:CONNECTED_TO]->(n1),
(center)-[:CONNECTED_TO]->(n2),
(center)-[:CONNECTED_TO]->(n3)
```

**Pattern with multiple relationship types:**
```cypher
// Alice's friends who work at companies Alice follows
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
      -[:WORKS_AT]->(company)<-[:FOLLOWS]-(alice)
RETURN friend.name, company.name;
```

**Patterns with constraints:**
```cypher
// Find fraud rings: groups where everyone knows everyone (cliques)
MATCH (a:Person)-[:TRANSFERRED_MONEY]->(b:Person)
     -[:TRANSFERRED_MONEY]->(c:Person)-[:TRANSFERRED_MONEY]->(a)
WHERE a <> b AND b <> c AND c <> a  // Ensure they're distinct
RETURN a, b, c;
```

**Anti-patterns (patterns that should NOT exist):**
```cypher
// Find people who have friends but no job
MATCH (p:Person)-[:FRIEND_OF]->()
WHERE NOT (p)-[:WORKS_AT]->()
RETURN p.name;
```

**Why patterns matter:** Patterns let you express complex graph queries concisely. Finding triangles (3-way relationships) in SQL would require multiple self-joins. In Cypher, it's one visual pattern.

## Variable-Length Paths: Following the Rabbit Hole

**Variable-length paths** let you traverse relationships without knowing how many hops you need.

**Basic syntax:**
```cypher
-[*]->           // Any number of hops (use carefully—can be slow!)
-[*1..3]->       // 1 to 3 hops
-[*..5]->        // Up to 5 hops
-[*2..]->        // At least 2 hops
-[:FRIEND_OF*1..3]->  // 1-3 hops of FRIEND_OF relationships
```

**Real examples:**
```cypher
// Find everyone within 3 degrees of Alice
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF*1..3]-(connected)
RETURN DISTINCT connected.name;

// Find influence chains: who can reach CEO through management?
MATCH (employee:Person)-[:REPORTS_TO*1..10]->(ceo:Person {title: "CEO"})
RETURN employee.name, length(path) AS distance;

// Find product recommendations: friends of friends who bought similar products
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF*2]-(fof)
     -[:PURCHASED]->(product)
WHERE NOT (alice)-[:PURCHASED]->(product)  // Alice hasn't bought it yet
RETURN product.name, count(fof) AS friend_count
ORDER BY friend_count DESC
LIMIT 10;
```

**Why variable-length paths are powerful:** They let you explore network effects, influence propagation, recommendation chains, and supply chain dependencies without knowing the exact number of hops beforehand.

**Performance warning:** Variable-length paths can be expensive. `[:FRIEND_OF*]` with no upper limit might traverse millions of relationships. Always set an upper bound (`*1..5`) unless you have a very good reason not to.

**When the AI might mess this up:** If the AI writes `[:FRIEND_OF*]` without a limit on a large graph, the query might run forever. Understanding this helps you spot the issue.

## Shortest Path: Finding the Quickest Route

**Shortest path** finds the minimal-hop route between two nodes.

**Basic shortest path:**
```cypher
// Find shortest friendship chain between Alice and Bob
MATCH path = shortestPath((alice:Person {name: "Alice"})
                         -[:FRIEND_OF*]-(bob:Person {name: "Bob"}))
RETURN path, length(path);
```

**All shortest paths:**
```cypher
// Find all shortest paths (there might be multiple routes with same length)
MATCH paths = allShortestPaths((alice:Person {name: "Alice"})
                              -[:FRIEND_OF*]-(bob:Person {name: "Bob"}))
RETURN paths, length(paths);
```

**Shortest path with relationship type filter:**
```cypher
// Shortest professional connection (via WORKS_AT and PARTNER_WITH)
MATCH path = shortestPath((alice:Person {name: "Alice"})
                         -[:WORKS_AT|PARTNER_WITH*]-(bob:Person {name: "Bob"}))
RETURN path;
```

**Shortest path with max length:**
```cypher
// Find shortest path within 5 hops (return null if no path exists)
MATCH path = shortestPath((alice:Person {name: "Alice"})
                         -[:FRIEND_OF*..5]-(bob:Person {name: "Bob"}))
RETURN path;
```

**Real-world use cases:**
- **Social networks:** Six degrees of separation, connection suggestions
- **Supply chains:** Find fastest route from manufacturer to customer
- **Network routing:** Shortest path between network nodes
- **Knowledge graphs:** How are two concepts related?

**The abstract concept:** Shortest path algorithms (Dijkstra's, BFS) find minimal-cost routes through graphs. Cypher abstracts this complexity into simple syntax.

## All Paths: When You Need Every Route

**All paths** returns every possible route between two nodes (use carefully—can be huge!).

**Basic syntax:**
```cypher
// Find all paths between Alice and Bob (up to 4 hops)
MATCH paths = (alice:Person {name: "Alice"})
             -[:FRIEND_OF*..4]-(bob:Person {name: "Bob"})
RETURN paths;
```

**Filtered paths:**
```cypher
// Find all collaboration paths through projects
MATCH paths = (alice:Person {name: "Alice"})
             -[:WORKED_ON]->(:Project)<-[:WORKED_ON*..3]-(bob:Person {name: "Bob"})
WHERE length(paths) > 1  // At least 2 hops
RETURN paths
LIMIT 100;  // Prevent returning millions of paths
```

**Why you'd want all paths:**
- **Redundancy analysis:** How many ways can information flow?
- **Risk assessment:** If one connection fails, what are the alternatives?
- **Network analysis:** Understanding structural properties of graphs

**Why all paths is dangerous:** On a densely connected graph, the number of paths can grow exponentially. ALWAYS use LIMIT and max-length constraints.

**When the AI might overuse this:** If you ask "how is Alice related to Bob," a naive AI might use all paths, returning millions of results. Shortest path is usually better.

## Declarative vs. Imperative Queries

One of the key concepts in query languages is the difference between **declarative** and **imperative** approaches.

**Declarative queries** (Cypher's style):
- You describe **what** you want, not **how** to find it
- The database figures out the optimal execution plan
- Easier to write, harder to optimize manually

**Example:**
```cypher
// Declarative: "Find Alice's friends over 30"
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
WHERE friend.age > 30
RETURN friend.name;
```

You didn't specify:
- Which index to use
- Which node to start from
- What traversal algorithm to use
- How to filter results

The query planner handles all that.

**Imperative queries** (GSQL's style):
- You specify **how** to execute the query step-by-step
- More control over execution, more code complexity
- Useful for optimizing complex queries on massive graphs

**Example (GSQL):**
```gsql
CREATE QUERY FindOlderFriends(VERTEX<Person> alice) {
  SumAccum<INT> @@count;

  Start = {alice};

  Friends = SELECT friend
            FROM Start:s -(FRIEND_OF:e)-> Person:friend
            WHERE friend.age > 30
            ACCUM @@count += 1;

  PRINT Friends, @@count;
}
```

Here you explicitly:
- Define accumulators (`@@count`)
- Specify traversal start (`Start = {alice}`)
- Control execution flow

**Which is better?** Neither—they're different tools for different jobs:
- **Declarative** for most queries, rapid development, standard use cases
- **Imperative** for performance-critical queries, complex aggregations, distributed processing

**AI implication:** Most AI systems will generate declarative queries (Cypher) because they're simpler and more portable. If you need imperative control (GSQL), you might need to guide the AI more specifically.

## GSQL and the Map-Reduce Pattern

Let's talk about **GSQL** and why TigerGraph designed a different approach.

### Why GSQL Exists

Cypher is great for small-to-medium graphs (millions of nodes). But when you hit billions of nodes and trillions of relationships across distributed clusters, declarative queries can struggle with optimization. GSQL was designed for this scale.

**GSQL's map-reduce pattern** processes graphs in stages:

1. **Map:** Transform each vertex/edge
2. **Reduce:** Aggregate results
3. **Repeat:** Iterate until convergence

This mirrors big data processing frameworks (Hadoop MapReduce, Spark), but optimized for graphs.

### Accumulators: GSQL's Secret Weapon

**Accumulators** are variables that collect data during graph traversal.

**Types of accumulators:**
- `SumAccum<INT>` - Sum integers
- `AvgAccum` - Calculate averages
- `MaxAccum` / `MinAccum` - Track max/min values
- `ListAccum<STRING>` - Collect lists
- `SetAccum<VERTEX>` - Collect unique vertices

**Example:**
```gsql
CREATE QUERY CountFriendsByCity(VERTEX<Person> alice) {
  MapAccum<STRING, INT> @@cityCount;

  Start = {alice};

  Friends = SELECT friend
            FROM Start -(:FRIEND_OF)-> Person:friend
            ACCUM @@cityCount += (friend.city -> 1);

  PRINT @@cityCount;
}

// Might return: {"Seattle": 5, "Portland": 3, "SF": 2}
```

**Why accumulators matter:** They let you aggregate data during traversal, not after. This is much faster on distributed systems because you're not shuffling data across network.

**Cypher equivalent (less efficient at scale):**
```cypher
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
RETURN friend.city, count(friend)
GROUP BY friend.city;
```

Both produce the same result, but on a 10-billion-edge graph, GSQL's accumulator approach can be orders of magnitude faster.

**When you'd use GSQL:**
- Billion+ node graphs
- Distributed processing across clusters
- Complex multi-hop aggregations
- Graph algorithms (PageRank, community detection, centrality)
- Real-time fraud detection at scale

**When you'd stick with Cypher:**
- Graphs under 100 million nodes
- Standard CRUD operations
- Rapid development
- Team familiarity with declarative SQL-like syntax

## Query Optimization: Making Queries Fast

Understanding **query optimization** helps you read query plans and spot performance issues.

### How Query Planners Work

When you write a Cypher query, the database doesn't execute it literally. It:

1. **Parses** the query into an abstract syntax tree
2. **Optimizes** by rewriting into equivalent but faster forms
3. **Generates a query plan** specifying execution order
4. **Executes** the plan

**View the query plan:**
```cypher
EXPLAIN
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
WHERE friend.age > 30
RETURN friend.name;
```

This shows you what the database will do without actually running the query.

**Analyze actual execution:**
```cypher
PROFILE
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
WHERE friend.age > 30
RETURN friend.name;
```

PROFILE runs the query and shows actual row counts, execution time per step.

### Common Optimizations

**1. Index usage:**
```cypher
// Slow (table scan)
MATCH (p:Person)
WHERE p.name = "Alice"
RETURN p;

// Fast (index seek) if you've created an index
CREATE INDEX person_name FOR (p:Person) ON (p.name);
```

**2. Filter early:**
```cypher
// Slower: match everything, then filter
MATCH (p:Person)-[:FRIEND_OF]->(friend)
WHERE p.name = "Alice" AND friend.age > 30
RETURN friend;

// Faster: filter Alice first, then traverse
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
WHERE friend.age > 30
RETURN friend;
```

**3. Avoid Cartesian products:**
```cypher
// Slow (Cartesian product: all people × all companies)
MATCH (p:Person), (c:Company)
WHERE p.name = "Alice" AND c.name = "TechCorp"
RETURN p, c;

// Fast (connected pattern)
MATCH (p:Person {name: "Alice"})-[:WORKS_AT]->(c:Company {name: "TechCorp"})
RETURN p, c;
```

**4. Use LIMIT when exploring:**
```cypher
// Risky (might return millions)
MATCH (p:Person)
RETURN p;

// Safe (stops after 100)
MATCH (p:Person)
RETURN p
LIMIT 100;
```

### Query Performance Metrics

**Query latency:** How long does one query take?
- Good: < 100ms
- Acceptable: 100ms - 1s
- Slow: > 1s
- Fix it: > 10s

**Query throughput:** How many queries per second can the system handle?
- Measure with: Queries per second (QPS)
- Affected by: Concurrency, caching, index quality, hardware

**Statistical Query Tuning:** Use PROFILE to identify bottlenecks:
```cypher
PROFILE
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF*1..3]-(connected)
RETURN count(connected);
```

Look for:
- **High db hits:** Operations scanning too many nodes/relationships
- **Large row counts:** Intermediate results that should be filtered earlier
- **Missing index usage:** Scans instead of index seeks

## Shortest Path Algorithms: Under the Hood

You've used `shortestPath()` in Cypher, but what's actually happening?

### Breadth-First Search (BFS)

**How it works:**
1. Start at source node
2. Explore all neighbors (1-hop away)
3. Explore all neighbors' neighbors (2-hops away)
4. Continue until target found

**Why it finds shortest paths:** BFS explores layer by layer, so first time it reaches the target is guaranteed to be the shortest path (for unweighted graphs).

**Cypher uses BFS for:**
```cypher
shortestPath((alice)-[:FRIEND_OF*]-(bob))
```

**Time complexity:** O(V + E) where V = vertices, E = edges

### Dijkstra's Algorithm

**How it works:**
1. Assign tentative distances to all nodes (infinity, except source = 0)
2. Visit unvisited node with smallest distance
3. Update distances to neighbors
4. Repeat until target reached

**When you'd use it:** Weighted graphs where relationships have costs.

**Example:**
```cypher
// If FRIEND_OF had a 'distance' property
MATCH path = shortestPath((alice)-[:FRIEND_OF*]-(bob))
RETURN reduce(dist = 0, r IN relationships(path) | dist + r.distance) AS totalDistance;
```

**Time complexity:** O((V + E) log V) with priority queue

### A* Algorithm

**How it works:** Like Dijkstra, but uses a heuristic (estimated cost to goal) to explore promising paths first.

**When you'd use it:** Spatial graphs (geographic networks, routing) where you have coordinate data to estimate distances.

**Example use case:** Finding shortest driving route on road network graph.

**Time complexity:** Depends on heuristic quality, often much faster than Dijkstra in practice

### Why You Care

When the AI generates:
```cypher
shortestPath((a)-[:FRIEND_OF*]-(b))
```

You now know it's running BFS. If the query is slow, you know:
- BFS is O(V + E), so it might be traversing millions of relationships
- You could limit max hops: `shortestPath((a)-[:FRIEND_OF*..6]-(b))`
- Or you could check if an index on Person.name exists to find `a` and `b` quickly

See? Understanding algorithms helps you debug AI-generated code!

## Query Plans: Reading the Execution Blueprint

**Query plans** show exactly how the database will execute your query.

**Get the plan without running:**
```cypher
EXPLAIN
MATCH (alice:Person {name: "Alice"})-[:FRIEND_OF]->(friend)
WHERE friend.age > 30
RETURN friend.name
ORDER BY friend.name;
```

**Typical plan operations:**

| Operation | What It Does | Performance |
|-----------|-------------|-------------|
| `NodeByLabelScan` | Scan all nodes with a label | Slow (O(n)) |
| `NodeIndexSeek` | Use index to find nodes | Fast (O(log n)) |
| `Expand(All)` | Follow all relationships | O(degree) per node |
| `Filter` | Apply WHERE conditions | Depends on selectivity |
| `Sort` | Order results | O(n log n) |
| `Limit` | Take first N results | Fast |
| `Distinct` | Remove duplicates | O(n) |

**Reading a plan:**
```
Plan:
+------------------+--------+--------+
| Operator         | Rows   | DB Hits|
+------------------+--------+--------+
| ProduceResults   |   12   |    0   |
| Sort             |   12   |   24   |
| Filter           |   12   |   45   |
| Expand(All)      |   45   |   90   |
| NodeIndexSeek    |    1   |    2   |
+------------------+--------+--------+
```

**Interpretation:**
1. **NodeIndexSeek** (bottom): Found 1 Alice node using index (2 db hits)
2. **Expand(All)**: Followed FRIEND_OF edges, found 45 friends (90 db hits)
3. **Filter**: Checked age > 30, kept 12 results (45 db hits)
4. **Sort**: Sorted 12 results by name (24 db hits)
5. **ProduceResults** (top): Returned 12 rows

**Red flags to look for:**
- ❌ `NodeByLabelScan` when you expected `NodeIndexSeek` (missing index!)
- ❌ Huge row counts early in plan that filter down later (filter earlier!)
- ❌ `CartesianProduct` (accidental cross join)
- ❌ High DB hits relative to rows returned (inefficient access pattern)

**When the AI's query is slow:** Look at the plan. You might see it's doing a label scan instead of an index seek, meaning you need to create an index. Or it's expanding too broadly before filtering. Understanding plans = debugging superpowers.

## Bringing It All Together: A Realistic Example

Let's build a complete query using everything we've learned. Imagine you're building a social network feature: "People you may know."

**Requirements:**
- Find people who are friends with your friends (2-hop)
- But exclude people you're already friends with
- Prioritize people in the same city
- Show people with mutual friends count
- Limit to top 10 suggestions

**The query:**
```cypher
MATCH (me:Person {name: "Alice"})-[:FRIEND_OF]->(friend)-[:FRIEND_OF]->(suggestion)
WHERE NOT (me)-[:FRIEND_OF]-(suggestion)  // Not already friends
  AND suggestion <> me                     // Not myself
WITH suggestion, count(DISTINCT friend) AS mutualFriends, suggestion.city AS city, me.city AS myCity
ORDER BY
  CASE WHEN city = myCity THEN 1 ELSE 0 END DESC,  // Same city first
  mutualFriends DESC                                // Then by mutual friends
RETURN
  suggestion.name AS name,
  suggestion.city AS city,
  mutualFriends,
  CASE WHEN city = myCity THEN 'Same city!' ELSE '' END AS note
LIMIT 10;
```

**Breaking it down:**
1. **MATCH:** Find 2-hop friends
2. **WHERE:** Filter out existing friends and self
3. **WITH:** Aggregate mutual friends count, prepare for sorting
4. **ORDER BY:** Same city first, then by mutual friend count
5. **RETURN:** Format output nicely
6. **LIMIT:** Top 10 suggestions

**What an AI might get wrong:**
- Forgetting `suggestion <> me` (suggesting yourself)
- Not using `DISTINCT` in count (counting same mutual friend multiple times if multiple paths exist)
- Inefficient pattern (could use variable-length path with max 2 hops for clarity)

**Optimized version:**
```cypher
// Create index first for better performance
CREATE INDEX person_name IF NOT EXISTS FOR (p:Person) ON (p.name);

// Optimized query
MATCH (me:Person {name: "Alice"})
MATCH (me)-[:FRIEND_OF]->(friend)-[:FRIEND_OF]->(suggestion)
WHERE NOT (me)-[:FRIEND_OF]-(suggestion)
  AND suggestion <> me
WITH suggestion,
     count(DISTINCT friend) AS mutualFriends,
     me.city = suggestion.city AS sameCity
ORDER BY sameCity DESC, mutualFriends DESC
RETURN suggestion.name, suggestion.city, mutualFriends
LIMIT 10;
```

**Performance considerations:**
- Index on `Person.name` makes finding Alice fast
- Filtering `NOT (me)-[:FRIEND_OF]-(suggestion)` happens during traversal (efficient)
- `LIMIT 10` stops early—doesn't need to find all suggestions
- `DISTINCT` in count prevents duplicate counting

Now you can read this query, understand it, optimize it, and explain it—even if an AI wrote it.

## The Bottom Line: Why Learning This Matters

We opened this chapter with a wink: "AI will probably write your queries." And that's likely true. But here's what we've learned:

1. **Reading code is a superpower:** When the AI generates a query, you can understand what it does
2. **Debugging is essential:** When queries fail or are slow, you can spot the issue
3. **Optimization requires knowledge:** You can't tune what you don't understand
4. **Communication improves:** "Use MERGE, not CREATE" is faster than explaining duplicates
5. **Trust but verify:** You can review AI-generated code for correctness and efficiency

Think of this chapter as **query language literacy**. You might not write Cypher from scratch every day, but you'll read it, review it, debug it, and optimize it. And when the AI suggests something that looks wrong, you'll have the knowledge to catch it.

**Final thought:** AI is doubling every seven months, yes. But so is the amount of data we're storing and querying. The problems are growing as fast as the solutions. Understanding graph query languages isn't about whether AI can write them—it's about understanding what needs to be written, why it works (or doesn't), and how to make it better.

Plus, honestly? There's something deeply satisfying about reading a complex Cypher query and thinking, "Yeah, I know exactly what that does." That's worth learning, AI or no AI. 😊

## Key Takeaways

1. **OpenCypher is the people's champion:** Most popular, visual syntax, widely adopted
2. **GSQL is for scale:** Map-reduce patterns and accumulators for billion-node graphs
3. **GQL is the future:** ISO standard emerging, SQL-like, future-proof
4. **MATCH finds patterns:** Declarative pattern matching is Cypher's superpower
5. **WHERE filters, RETURN shapes:** Basic clauses you'll see everywhere
6. **CREATE adds, MERGE upserts:** CREATE makes duplicates, MERGE doesn't
7. **Variable-length paths are powerful but dangerous:** Always set max length
8. **Shortest path uses BFS:** Understanding algorithms helps debug performance
9. **Query plans reveal execution:** EXPLAIN and PROFILE are your debugging friends
10. **Declarative vs imperative:** Different tools for different scales
11. **Accumulators enable distributed aggregation:** GSQL's secret sauce for massive graphs
12. **Optimization matters:** Indexes, early filtering, avoiding Cartesian products
13. **AI will write queries, but you need to read them:** Literacy > authorship

Now go forth and read graph queries with confidence! And when the AI inevitably tries to use `CREATE` where it should use `MERGE`, you'll catch it. 😉

---

*Remember: The best code is code you understand—whether you wrote it or an AI did. This chapter gave you the tools to understand graph query languages. Use them wisely (and when the AI messes up, you know we told you so!)*
