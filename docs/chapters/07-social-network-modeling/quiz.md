# Quiz: Social Network Modeling

Test your understanding of modeling social networks, friend graphs, influence networks, and real-world applications.

---

#### 1. What distinguishes a friend graph from a follower network?

<div class="upper-alpha" markdown>
1. Friend graphs use undirected edges representing mutual relationships, while follower networks use directed edges for asymmetric following
2. They are identical structures
3. Friend graphs are always larger
4. Follower networks don't use graphs
</div>

??? question "Show Answer"
    The correct answer is **A**. Friend graphs (like Facebook) use undirected edges representing mutual, symmetric friendships where both parties accept the connection. Follower networks (like Twitter) use directed edges for asymmetric relationships—Alice can follow Bob without Bob following Alice. This distinction affects queries and analysis significantly.

    **Concept Tested:** Friend Graphs, Follower Networks

    **See:** [Social Network Types](index.md)

---

#### 2. What is an influence graph used to measure?

<div class="upper-alpha" markdown>
1. Graph database performance
2. How information, opinions, or behaviors spread between actors in a network
3. The weight of network cables
4. File sizes
</div>

??? question "Show Answer"
    The correct answer is **B**. Influence graphs show how information, opinions, or behaviors spread through networks, used in marketing to identify opinion leaders whose endorsements significantly impact others' decisions. Influence can be measured through metrics like retweet patterns, information cascade paths, or purchasing behavior propagation.

    **Concept Tested:** Influence Graphs

    **See:** [Influence Modeling](index.md)

---

#### 3. How can graphs detect fake accounts in social networks?

<div class="upper-alpha" markdown>
1. By checking username length
2. By analyzing graph patterns like clusters of new accounts with identical connection patterns and minimal activity
3. Graphs cannot detect fake accounts
4. By measuring network bandwidth
</div>

??? question "Show Answer"
    The correct answer is **B**. Graph analysis detects fake accounts by identifying suspicious patterns: clusters of newly created accounts with identical connection patterns, accounts that only interact with each other (isolated clusters), minimal genuine activity, or unnaturally rapid connection growth. These structural patterns are difficult for bots to disguise.

    **Concept Tested:** Fake Account Detection

    **See:** [Fraud Detection](index.md)

---

#### 4. What is an org chart model and how is it typically represented in graphs?

<div class="upper-alpha" markdown>
1. A chart showing organizational profits
2. A hierarchical graph showing reporting structures with REPORTS_TO relationships linking employees to managers
3. A visualization of server racks
4. A financial balance sheet
</div>

??? question "Show Answer"
    The correct answer is **B**. Org chart models use hierarchical graphs where nodes represent employees/positions and edges (typically labeled REPORTS_TO) link employees to their managers. This tree or directed acyclic graph (for matrix organizations) structure supports queries about reporting chains, span of control, organizational depth, and management hierarchies.

    **Concept Tested:** Org Chart Models

    **See:** [Organizational Modeling](index.md)

---

#### 5. Why is modeling edges as first-class citizens important for social networks?

<div class="upper-alpha" markdown>
1. It makes databases slower
2. Relationships can have properties like connection_date, interaction_frequency, or relationship_strength enriching analysis
3. It's not important
4. It only works for small networks
</div>

??? question "Show Answer"
    The correct answer is **B**. Treating relationships as first-class citizens allows edges to carry rich properties like when connections formed, interaction frequency, relationship strength, or connection source. For example, a KNOWS relationship with `{since: 2015, interactions: 247, strength: "close"}` enables sophisticated analyses like finding strongest connections or tracking relationship evolution over time.

    **Concept Tested:** First-Class Relationships, Social Networks

    **See:** [Relationship Modeling](index.md)

---

#### 6. How can sentiment analysis be integrated with social network graphs?

<div class="upper-alpha" markdown>
1. It cannot be integrated
2. By adding sentiment scores as properties on posts, comments, or interactions, enabling analysis of emotional tone across networks
3. By changing graph colors
4. By deleting negative content
</div>

??? question "Show Answer"
    The correct answer is **B**. Sentiment analysis (using NLP) determines emotional tone in text, which can be stored as properties on posts, comments, or interaction edges in social graphs. For example, `(User)-[:POSTED {sentiment: 0.85}]->(Post)` or analyzing sentiment trends across communities. This enables tracking opinion shifts, identifying influencers of positive/negative sentiment, or detecting crisis situations.

    **Concept Tested:** Sentiment Analysis, Natural Language Processing

    **See:** [NLP Integration](index.md)

---

#### 7. Given an HR system where you need to find all employees with a specific skill within 3 levels of management from a VP, which graph structure would you query?

<div class="upper-alpha" markdown>
1. A simple employee list
2. An org chart graph with REPORTS_TO edges and employee nodes with skill properties, traversing 3 hops from the VP
3. A relational table
4. A file system
</div>

??? question "Show Answer"
    The correct answer is **B**. You'd query an org chart graph: `MATCH (vp:VP)-[:REPORTS_TO*1..3]-(employee)-[:HAS_SKILL]-(skill {name: "Python"}) RETURN employee`. This traverses up to 3 levels of reporting relationships from the VP and filters for employees with the required skill. Relational databases (C) would require expensive recursive joins.

    **Concept Tested:** Org Chart Models, Human Resources Modeling, Multi-Hop Queries

    **See:** [HR Modeling Applications](index.md)

---

#### 8. What is the purpose of modeling activity streams in social networks?

<div class="upper-alpha" markdown>
1. To measure water flow
2. To represent time-ordered sequences of user actions or events for timeline analysis and activity tracking
3. To delete old posts
4. To encrypt data
</div>

??? question "Show Answer"
    The correct answer is **B**. Activity streams model time-ordered sequences of user actions (posts, likes, comments, shares) as graph edges with timestamps. This structure enables timeline queries, activity pattern analysis, user engagement tracking, and recommendation based on recent behaviors. For example, showing "what your friends did today" or analyzing engagement trends.

    **Concept Tested:** Activity Streams

    **See:** [Activity Modeling](index.md)

---

#### 9. How do graphs support skill management in organizations?

<div class="upper-alpha" markdown>
1. By storing skills as node properties or separate skill nodes connected to employees, enabling talent search and gap analysis
2. Graphs don't support skill management
3. By deleting unskilled employees
4. By changing job titles
</div>

??? question "Show Answer"
    The correct answer is **A**. Skill management graphs connect employees to skills (as properties or nodes) with proficiency levels: `(Employee)-[:HAS_SKILL {proficiency: "expert"}]->(Skill {name: "Python"})`. This enables queries like "find all expert Python developers in engineering" or "identify skill gaps for project staffing," supporting talent search, training needs analysis, and succession planning.

    **Concept Tested:** Skill Management, Human Resources Modeling

    **See:** [Skill Modeling](index.md)

---

#### 10. Why is understanding social network graph structures valuable beyond social media applications?

<div class="upper-alpha" markdown>
1. It's only valuable for social media
2. Social network patterns (influence, communities, centrality) apply to organizational networks, collaboration, knowledge sharing, and many business contexts
3. It has no business value
4. It only works for consumer applications
</div>

??? question "Show Answer"
    The correct answer is **B**. Social network analysis patterns apply far beyond social media: organizational influence networks identify informal leaders, collaboration graphs reveal knowledge silos, customer networks show referral patterns, professional networks guide partnership strategies, and supply chain networks map dependencies. The concepts of influence, communities, and centrality are universal across connected systems.

    **Concept Tested:** Social Networks, Influence Graphs, Human Resources Modeling

    **See:** [Applications Beyond Social Media](index.md)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (2), Understand (4), Apply (2), Analyze (2)
**Concepts Covered:** Social Networks, Friend Graphs, Follower Networks, Influence Graphs, Fake Account Detection, Org Chart Models, Human Resources Modeling, Sentiment Analysis, Activity Streams, Skill Management, First-Class Relationships

**Next Steps:**
- Review [Chapter Content](index.md) for social network modeling patterns
- Practice designing social graph schemas
- Continue to [Chapter 8: Knowledge Representation](../08-knowledge-representation-management/index.md)
