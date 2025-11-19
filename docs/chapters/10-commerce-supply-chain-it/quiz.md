# Quiz: Commerce, Supply Chain, and IT Infrastructure

Test your understanding of graph database applications in e-commerce, supply chain management, and IT infrastructure including recommendation engines, bill of materials, impact analysis, and root cause analysis.

---

#### 1. What is the primary advantage of using graphs for product recommendation engines?

<div class="upper-alpha" markdown>
1. Graphs make products cheaper
2. Graphs enable traversing relationships between customers, products, and purchases to find patterns like "customers who bought X also bought Y"
3. Graphs automatically generate product descriptions
4. Recommendation engines don't use graphs
</div>

??? question "Show Answer"
    The correct answer is **B**. Recommendation engines leverage graph traversals to analyze patterns across customer-product-purchase relationships. For example, collaborative filtering ("customers like you also bought") requires traversing from a customer to their purchases, to other customers who made similar purchases, to products those customers bought. This multi-hop analysis is what graphs excel at.

    **Concept Tested:** Recommendation Engines

    **See:** [Recommendation Engines](index.md#the-game-changer-recommendation-engines)

---

#### 2. What is a Bill of Materials (BOM) and why is it naturally graph-structured?

<div class="upper-alpha" markdown>
1. A receipt for materials purchased
2. A hierarchical list of components needed to manufacture a product, naturally forming a tree or DAG structure with assemblies containing subassemblies and parts
3. A budget document
4. A shipping manifest
</div>

??? question "Show Answer"
    The correct answer is **B**. A Bill of Materials represents the hierarchical breakdown of a product into assemblies, subassemblies, and individual components. For example, a car engine contains a fuel injection system, which contains fuel injectors, which contain various smaller parts. This hierarchy naturally forms a graph (often a DAG when parts are shared across assemblies). Each level specifies quantities needed, creating a complex dependency structure ideal for graph representation.

    **Concept Tested:** Bill of Materials

    **See:** [Bill of Materials](index.md#manufacturing-complexity-bill-of-materials)

---

#### 3. How do graphs help with supply chain disruption analysis?

<div class="upper-alpha" markdown>
1. By predicting weather patterns
2. By traversing supplier-component-product relationships to find all affected products, orders, and customers when a disruption occurs
3. Graphs cannot help with supply chains
4. By automatically ordering replacement parts
</div>

??? question "Show Answer"
    The correct answer is **B**. When a supply chain disruption occurs (warehouse fire, supplier bankruptcy), graph traversals reveal the blast radius: which components are unavailable → which products can't be built → which orders are affected → which customers need notification. This multi-level impact analysis that might take hours or days in relational systems becomes a seconds-long graph query. Additionally, graphs can identify alternative suppliers and routes.

    **Concept Tested:** Supply Chain Modeling

    **See:** [Supply Chain Modeling](index.md#the-warehouse-fire-scenario)

---

#### 4. What distinguishes web storefront models from simple product catalogs?

<div class="upper-alpha" markdown>
1. They are identical
2. Web storefront models capture rich relationships between products, categories, customers, and behaviors beyond just storing product listings
3. Storefronts are always more expensive
4. Catalogs use different databases
</div>

??? question "Show Answer"
    The correct answer is **B**. While a product catalog might just list products with attributes, a web storefront model captures the full ecosystem: products belong to multiple categories (many-to-many), products have relationships with other products (complements, alternatives, accessories), customers browse and purchase creating behavioral data, and all these relationships inform recommendations and business intelligence. The graph structure makes these connections first-class citizens rather than buried in join tables.

    **Concept Tested:** Web Storefront Models, Product Catalogs

    **See:** [Web Storefront Models](index.md#e-commerce-fundamentals-more-than-just-tables)

---

#### 5. What is IT asset management and how do dependency graphs enhance it?

<div class="upper-alpha" markdown>
1. Tracking IT purchases only
2. Managing IT assets with dependency graphs showing what components depend on each other, enabling impact and root cause analysis
3. Deleting old equipment
4. IT asset management doesn't use graphs
</div>

??? question "Show Answer"
    The correct answer is **B**. IT Asset Management tracks servers, applications, databases, and network devices, but dependency graphs go further by capturing relationships: applications depend on services, services depend on databases, databases run on servers. This enables critical operational queries like "if I upgrade this server, what applications are affected?" (impact analysis) or "this application is slow—what dependency is causing it?" (root cause analysis). Traditional ITAM without graphs can't answer these questions efficiently.

    **Concept Tested:** IT Asset Management, Dependency Graphs

    **See:** [IT Asset Management](index.md#it-infrastructure-the-hidden-graph)

---

#### 6. Given a scenario where you need to find all spare parts critical for maintaining inventory, which graph approach would you use?

<div class="upper-alpha" markdown>
1. Random selection
2. Traverse BOM to find parts with high failure rates, long lead times, and usage in high-volume products, then rank by criticality
3. Store all parts equally
4. Don't track spare parts
</div>

??? question "Show Answer"
    The correct answer is **B**. Graph traversals can analyze the BOM to identify critical spare parts by combining multiple factors: parts with high failure rates (stored as properties), parts with long supplier lead times (traverse to supplier relationships), and parts used in high-volume products (aggregate usage across product tree). The graph makes it easy to compute a criticality score incorporating all these dimensions and prioritize which parts to stock.

    **Concept Tested:** Complex Parts, Bill of Materials

    **See:** [Complex Parts](index.md#complex-parts-the-real-world-challenge)

---

#### 7. What is impact analysis in IT infrastructure management?

<div class="upper-alpha" markdown>
1. Measuring server weight
2. Determining what systems, applications, and users are affected when a component fails or changes, by traversing dependency relationships
3. Counting users
4. Backing up data
</div>

??? question "Show Answer"
    The correct answer is **B**. Impact analysis answers "if this component fails or changes, what else is affected?" by traversing the dependency graph outward from the affected component. For example, if a database server needs maintenance, impact analysis shows: all services using that database → all applications depending on those services → all users accessing those applications → business impact in lost revenue or productivity. This traversal-based analysis is what makes graphs ideal for infrastructure management.

    **Concept Tested:** Impact Analysis

    **See:** [Impact Analysis](index.md#impact-analysis-understanding-the-blast-radius)

---

#### 8. How does root cause analysis differ from impact analysis?

<div class="upper-alpha" markdown>
1. They are the same thing
2. Root cause analysis traces backward from symptoms to find the underlying problem, while impact analysis traces forward from a component to find what's affected
3. Root cause is always faster
4. Only one can use graphs
</div>

??? question "Show Answer"
    The correct answer is **B**. Root cause analysis and impact analysis are inverse operations: impact analysis starts with a known change/failure and traverses forward through dependencies to find effects, while root cause analysis starts with observed symptoms (slow application, failed service) and traverses backward through dependencies to find the source. For example, "Customer Portal is slow" → depends on Authentication Service → depends on User Database → high CPU on database server → root cause: unoptimized query. Both leverage graph traversals but in opposite directions.

    **Concept Tested:** Root Cause Analysis, Impact Analysis

    **See:** [Root Cause Analysis](index.md#root-cause-analysis-finding-the-smoking-gun)

---

#### 9. What role does network topology play in IT infrastructure graphs?

<div class="upper-alpha" markdown>
1. It doesn't matter
2. Network topology models how devices physically connect, enabling queries about network paths, failure scenarios, and connectivity dependencies
3. Topology only applies to geography
4. Networks don't have topology
</div>

??? question "Show Answer"
    The correct answer is **B**. Network topology in IT infrastructure graphs models the physical and logical connections between routers, switches, firewalls, load balancers, and servers. This enables powerful operational queries: "show all paths between Server A and the internet," "if this switch fails, which servers lose connectivity?" or "what's the network path for this application's traffic?" Graph representation makes these path-based queries natural and efficient, whereas traditional network diagrams are static and require manual analysis.

    **Concept Tested:** Network Topology

    **See:** [Network Topology](index.md#network-topology-the-physical-web)

---

#### 10. Why is configuration management more effective when modeled as a graph?

<div class="upper-alpha" markdown>
1. Graphs don't improve configuration management
2. Graph-based configuration management explicitly models relationships between servers, applications, configurations, and versions, enabling queries about deployment state and change impact
3. Configuration management requires spreadsheets
4. Graphs are slower for configuration
</div>

??? question "Show Answer"
    The correct answer is **B**. Traditional Configuration Management Databases (CMDBs) using relational models have a poor reputation for being hard to query and quickly outdated. Graph-based configuration management models servers running applications, applications using configurations, and configurations containing settings as explicit relationships. This enables queries like "which servers run Application X version < 2.0?" (need patching), "which applications use this deprecated setting?" (need updating), or "what's the complete stack for this application?" The graph structure matches the inherently interconnected nature of IT infrastructure.

    **Concept Tested:** Configuration Management

    **See:** [Configuration Management](index.md#configuration-management-keeping-track-of-change)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (2), Understand (4), Apply (2), Analyze (2)
**Concepts Covered:** Web Storefront Models, Product Catalogs, Recommendation Engines, Bill of Materials, Complex Parts, Supply Chain Modeling, IT Asset Management, Dependency Graphs, Network Topology, Configuration Management, Impact Analysis, Root Cause Analysis

**Next Steps:**
- Review [Chapter Content](index.md) for e-commerce and IT applications
- Practice designing supply chain and infrastructure graphs
- Continue to [Chapter 11: Financial, Healthcare, and Regulatory Applications](../11-financial-healthcare-regulatory/index.md)
