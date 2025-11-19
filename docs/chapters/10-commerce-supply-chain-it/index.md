# Commerce, Supply Chain, and IT Infrastructure

## Summary

This chapter demonstrates graph database applications in e-commerce, supply chain management, and IT infrastructure. You'll learn to model web storefronts with product catalogs, design recommendation engines using graph algorithms, and manage complex bill-of-materials structures for manufacturing. The chapter extends to IT asset management, network topology modeling, configuration management, and critical operational applications including impact analysis and root cause analysis for infrastructure troubleshooting.

## Concepts Covered

This chapter covers the following 12 concepts from the learning graph:

1. Web Storefront Models
2. Product Catalogs
3. Recommendation Engines
4. Bill of Materials
5. Complex Parts
6. Supply Chain Modeling
7. IT Asset Management
8. Dependency Graphs
9. Network Topology
10. Configuration Management
11. Impact Analysis
12. Root Cause Analysis

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Labeled Property Graph Information Model](../03-labeled-property-graph-model/index.md)
- [Chapter 6: Graph Algorithms](../06-graph-algorithms/index.md)

---

## "Boring" Business Applications? Think Again!

Let's be honest: when you first hear about "managing a web storefront" or "product catalog systems," your eyes might glaze over a bit. It sounds like exactly the kind of straightforward database work that relational databases were designed for, right? A table of products, a table of customers, a table of orders—simple, clean, boring.

And you'd be partially right. A basic e-commerce site with a simple product catalog can absolutely work fine with a traditional relational database. There's nothing wrong with that approach for simple cases.

But here's where things get interesting. Let me ask you a few questions:

**What if you discovered that by intelligently recommending products to your customers, you could increase sales by 20%?** That's not a hypothetical—companies like Amazon have proven that recommendation engines are massively profitable. But building effective recommendations requires understanding the relationships between products, between customers, between purchases, and between all of these together. Suddenly we're not just storing data; we're traversing a complex web of connections.

**What if your products aren't simple items, but complex assemblies with 10,000 subcomponents?** Think about manufacturing a car, an airplane, or even a complex electronic device. You need to track which parts go into which assemblies, which suppliers provide which components, what the lead times are, which parts are interchangeable, and critically—which spare parts you should stock and in what quantities. That's a graph problem.

**What if one of your suppliers has a warehouse that burns down?** (This happens more often than you'd think!) How do you quickly figure out which products are affected, which customer orders are at risk, which alternative suppliers you can pivot to, and what the cascading impact will be across your entire operation? In a relational database, that analysis might take hours or days. In a graph database, it's a traversal query that runs in seconds.

Once you look at the real-world complexity of commerce, supply chains, and IT infrastructure, you quickly see that graph databases aren't just "nice to have"—they're often the ideal fit. What looked boring on the surface turns out to be one of the most compelling applications of graph technology.

So let's dive in and explore how graphs transform these "boring" business domains into powerful, intelligent systems.

## E-Commerce Fundamentals: More Than Just Tables

Let's start with the basics of e-commerce and see how even the simple stuff benefits from a graph approach.

### Web Storefront Models: The Foundation

A **web storefront model** is the data structure that represents your online store—products, categories, prices, inventory, and the relationships between them. At first glance, this seems straightforward:

- Products have names, descriptions, prices, SKUs
- Products belong to categories
- Categories form hierarchies (Electronics > Computers > Laptops > Gaming Laptops)
- Products have inventory counts
- Customers browse, search, and purchase

In a relational database, you'd model this with several tables:
- `products` table
- `categories` table
- `product_categories` join table (for many-to-many relationships)
- `inventory` table
- And so on...

This works, but notice what happens when you want to answer questions like:
- "Show me all products in this category and all its subcategories"
- "What products are frequently bought together?"
- "Which products are similar to this one?"
- "What's the path from Gaming Laptops up to the root category?"

These queries require joins, recursive CTEs, or multiple roundtrips to the database. In a graph database, they're simple traversals.

### Product Catalogs: Relationships Matter

A **product catalog** is more than just a list of products—it's a rich network of relationships:

**Product-to-Category Relationships:**
- A product can belong to multiple categories (a yoga mat might be in both "Fitness" and "Home & Wellness")
- Categories form hierarchies (or sometimes DAGs—directed acyclic graphs—when products cross-categorize)
- Categories have attributes that products inherit

**Product-to-Product Relationships:**
- **Complements**: "Frequently bought together" (camera + memory card + camera bag)
- **Alternatives**: "Customers also considered" (different laptop models)
- **Upgrades**: "Premium version available" (basic plan → pro plan)
- **Bundles**: "Buy this set" (shampoo + conditioner + styling product)
- **Accessories**: "Works with" (phone case for specific phone model)
- **Substitutes**: "Out of stock? Try this instead"

**Product-to-Attribute Relationships:**
- Colors, sizes, materials, specifications
- These can form their own hierarchies (Clothing → Shirts → T-Shirts → Graphic Tees)

In a graph model, all of these relationships become first-class citizens. Instead of burying them in join tables or JSON blobs, you make them explicit edges that you can query, analyze, and leverage for recommendations.

<details>
    <summary>E-Commerce Storefront Graph Model</summary>
    Type: graph-model

    Purpose: Illustrate a complete e-commerce storefront as a graph, showing products, categories, customers, and their rich relationships

    Node types:
    1. Product (light blue rounded rectangles)
       - Properties: sku, name, price, description, inventory_count
       - Examples: "Wireless Mouse", "USB-C Cable", "Laptop Bag", "Gaming Headset"

    2. Category (orange hexagons)
       - Properties: name, slug, description
       - Examples: "Electronics", "Computers", "Accessories", "Gaming"

    3. Customer (green circles)
       - Properties: customer_id, name, email, join_date
       - Examples: "Alice", "Bob", "Carol"

    4. Order (purple rounded rectangles)
       - Properties: order_id, date, total, status
       - Examples: "Order #1001", "Order #1002"

    5. Brand (yellow rectangles)
       - Properties: name, description
       - Examples: "TechBrand", "ComfortCo"

    6. Attribute (pink small circles)
       - Properties: attribute_name, value
       - Examples: "Color: Black", "Size: Large", "Material: Plastic"

    Edge types:
    1. IN_CATEGORY (solid blue arrows)
       - From: Product → Category
       - Properties: featured (boolean)
       - Note: Products can be in multiple categories

    2. SUBCATEGORY_OF (thick orange arrows)
       - From: Category → Category (parent)
       - Properties: sort_order
       - Creates category hierarchy

    3. FREQUENTLY_BOUGHT_WITH (dotted purple arrows, bidirectional)
       - From: Product ↔ Product
       - Properties: confidence_score (0-1), support_count
       - Example: Mouse ↔ Mouse Pad

    4. SIMILAR_TO (dashed light blue arrows)
       - From: Product → Product
       - Properties: similarity_score (0-1)
       - Example: Gaming Mouse A → Gaming Mouse B

    5. ACCESSORY_FOR (solid green arrows)
       - From: Product → Product
       - Properties: compatibility_note
       - Example: Laptop Bag → specific Laptop models

    6. PLACED (solid black arrows)
       - From: Customer → Order
       - Properties: timestamp

    7. CONTAINS (solid purple arrows)
       - From: Order → Product
       - Properties: quantity, unit_price

    8. BROWSED (dashed gray arrows)
       - From: Customer → Product
       - Properties: timestamp, duration_seconds
       - Used for recommendations

    9. MANUFACTURED_BY (solid yellow arrows)
       - From: Product → Brand
       - Properties: none

    10. HAS_ATTRIBUTE (thin pink arrows)
        - From: Product → Attribute
        - Properties: none

    Sample data structure:

    Category hierarchy:
    - Electronics (root)
      ├─ Computers
      │  ├─ Laptops
      │  │  └─ Gaming Laptops
      │  └─ Accessories
      │     ├─ Mice
      │     └─ Keyboards
      └─ Audio
         └─ Headsets

    Products with relationships:
    - "Wireless Mouse" (Product)
      ├─ IN_CATEGORY → Mice, Accessories
      ├─ MANUFACTURED_BY → TechBrand
      ├─ FREQUENTLY_BOUGHT_WITH → "Mouse Pad"
      ├─ SIMILAR_TO → "Gaming Mouse Pro"
      ├─ HAS_ATTRIBUTE → "Color: Black", "Wireless: Yes"
      └─ Part of Order #1001 (via CONTAINS edge from order)

    - "Gaming Headset" (Product)
      ├─ IN_CATEGORY → Headsets, Audio, Gaming
      ├─ ACCESSORY_FOR → "Gaming Laptop X"
      ├─ FREQUENTLY_BOUGHT_WITH → "USB Sound Adapter"
      └─ BROWSED by Alice and Bob

    Customers and orders:
    - Alice (Customer)
      ├─ PLACED → Order #1001 (contains Wireless Mouse, Mouse Pad)
      ├─ BROWSED → Gaming Headset (timestamp: 2024-03-10)
      └─ BROWSED → USB-C Cable (timestamp: 2024-03-12)

    Layout: Force-directed with clustering
    - Category hierarchy on the left (tree structure)
    - Products in center (clustered by category)
    - Customers on right
    - Orders connecting customers to products

    Interactive features:
    - Hover over product: Show all attributes and relationships
    - Click product: Highlight all directly related products (similar, complements, accessories)
    - Click customer: Show browsing history and purchase history
    - Click category: Highlight all products in that category and subcategories
    - Double-click product: Show recommendation candidates based on similarity and co-purchase
    - Filter by relationship type: Show only specific edge types

    Visual styling:
    - Node size based on importance (popular products larger)
    - Edge thickness based on relationship strength (confidence score, support count)
    - Color coding by entity type (consistent with legend)
    - Highlight hover and selection with glow effect

    Legend (bottom left):
    - Node shapes and types with color coding
    - Edge styles and their meanings
    - Relationship strength indicators

    Canvas size: 1200x900px
    Background: Light gray gradient

    Implementation: vis-network JavaScript library with custom interactions
</details>

## The Game Changer: Recommendation Engines

Now we get to the exciting part—where graphs turn e-commerce from a simple transaction system into an intelligent, revenue-generating machine.

### Recommendation Engines: The 20% Sales Boost

A **recommendation engine** analyzes patterns in customer behavior, product relationships, and purchase history to suggest products that customers are likely to buy. And the impact is massive—companies like Amazon attribute a significant portion of their revenue (some estimates suggest 20-35%) to their recommendation systems.

There are several types of recommendations, and graphs excel at all of them:

**1. Collaborative Filtering: "Customers Like You Also Bought..."**

This approach finds customers similar to you based on past purchases or browsing, then recommends products those similar customers bought.

Graph query pattern:
```
Start with Customer A
→ Find products A purchased
→ Find other customers who purchased those products
→ Find products those customers purchased that A hasn't yet
→ Rank by frequency/relevance
```

This is a multi-hop traversal problem—perfect for graphs! In SQL, this requires multiple self-joins and is painfully slow. In a graph, it's a natural traversal.

**2. Content-Based Filtering: "Similar to Items You Liked..."**

This approach recommends products similar to ones you've already shown interest in.

Graph query pattern:
```
Start with products Customer A browsed/purchased
→ Find similar products (based on SIMILAR_TO edges)
→ Find products in the same category or with similar attributes
→ Rank by similarity score
```

**3. Knowledge-Based: "Frequently Bought Together"**

This approach leverages explicit product relationships.

Graph query pattern:
```
Start with current shopping cart
→ For each product, find FREQUENTLY_BOUGHT_WITH edges
→ Exclude products already in cart
→ Rank by confidence score
```

This is trivial in a graph (one hop from current products) but complex in SQL (requires analysis of all historical orders to find patterns).

**4. Hybrid Approaches**

Real-world systems combine multiple approaches. For example:
- Start with collaborative filtering to find candidate products
- Filter by content similarity to ensure relevance
- Boost products frequently bought together
- Apply business rules (profit margins, inventory levels, promotions)

Graphs make it easy to combine these signals because you're just traversing different edge types and computing scores.

**The Graph Advantage:**

Why are graphs so good for recommendations?

1. **Natural fit**: Recommendations are inherently about connections (between customers, between products, between behaviors)
2. **Real-time**: Graph traversals are fast enough to compute recommendations on the fly as users browse
3. **Explainable**: You can show users WHY you recommended something ("Because you bought X" or "Customers who bought Y also bought Z")
4. **Flexible**: Easy to add new relationship types or adjust ranking algorithms
5. **Fresh**: As new purchases happen, the graph updates, and recommendations improve immediately

## Manufacturing Complexity: Bill of Materials

Now let's tackle another "simple" problem that turns out to be incredibly complex: manufacturing products with thousands of components.

### Bill of Materials: When Products Have Products

A **Bill of Materials (BOM)** is a comprehensive list of all the parts, components, and materials needed to manufacture a product. For simple products (like a wooden chair), a BOM might have a dozen items. For complex products (like a car or a jet engine), a BOM can have tens of thousands of items organized in a deep hierarchy.

Here's where it gets interesting:

**Hierarchical Structure:**
A car contains:
- Engine assembly
  - Engine block
    - Cylinder head
      - Valves (8x)
      - Valve springs (8x)
      - Spark plugs (8x)
    - Pistons (8x)
    - Crankshaft
  - Fuel injection system
    - Fuel pump
    - Injectors (8x)
    - Fuel rail
  - Cooling system
    - Radiator
    - Water pump
    - Thermostat
- Transmission assembly
  - [hundreds of parts]
- Body assembly
  - [thousands of parts]
- Electrical system
  - [thousands of parts]

Each level can have multiple levels below it, creating a tree structure (or actually a DAG, because some parts appear in multiple assemblies).

**Quantities Matter:**
The BOM doesn't just list parts—it specifies quantities:
- Each engine needs 8 valves
- Each valve spring goes with one valve
- If you're building 1,000 cars, you need 8,000 valves

**Part Relationships:**
- **Substitutable parts**: "If part A is out of stock, use part B"
- **Interchangeable parts**: "Parts X and Y are functionally identical"
- **Versioned parts**: "Engine v2 uses updated fuel injector model"
- **Suppliers**: "Part can be sourced from Supplier 1 or Supplier 2"
- **Lead times**: "Part A takes 6 weeks to order, Part B is stocked locally"

### Complex Parts: The Real-World Challenge

**Complex parts** refer to components with intricate dependencies, multiple sourcing options, version requirements, and compatibility constraints. Let's look at why this gets complicated fast:

**Scenario: Spare Parts Inventory**

You manufacture a product with 10,000 components. The question is: which spare parts should you stock, and how many?

- Some parts fail frequently (wear items like brake pads)
- Some parts rarely fail but are critical (engine control unit)
- Some parts are cheap and easy to stock (screws, clips)
- Some parts are expensive and have long lead times (specialized electronics)
- Some parts are used in multiple products (standardized components)
- Some parts have been superseded by newer versions

A graph database lets you model all of these factors:

```
(Part)-[:USED_IN {quantity}]->(Assembly)
(Part)-[:FAILS_WITH {probability}]->(FailureMode)
(Part)-[:SUPPLIED_BY {lead_time, cost}]->(Supplier)
(Part)-[:SUPERSEDES]->(OlderPart)
(Part)-[:INTERCHANGEABLE_WITH]->(AlternatePart)
```

Then you can run queries like:
- "Which parts are critical (used in high-volume products, have high failure rates, and have long lead times)?"
- "If I stock 100 of Part X, how many product repairs can I support?"
- "Which parts should I order from Supplier A vs Supplier B given current lead times and prices?"

These become graph traversal and aggregation queries that would be nightmarishly complex in SQL.

<details>
    <summary>Bill of Materials Graph Model with Manufacturing Intelligence</summary>
    Type: graph-model

    Purpose: Show a multi-level BOM structure with spare parts analysis, supplier relationships, and inventory intelligence

    Node types:
    1. Product (large blue rounded rectangles)
       - Properties: product_id, name, model, annual_volume
       - Examples: "Electric Car Model S", "Motorcycle Sport 500"

    2. Assembly (medium orange hexagons)
       - Properties: assembly_id, name, version, weight
       - Examples: "Engine Assembly v2.1", "Battery Pack", "Transmission"

    3. Component (small green rectangles)
       - Properties: component_id, name, part_number, unit_cost
       - Examples: "Fuel Injector", "Valve", "Spark Plug", "Circuit Board"

    4. Supplier (yellow circles)
       - Properties: supplier_id, name, reliability_rating, location
       - Examples: "PartsCorpEast", "GlobalSupply", "LocalParts"

    5. Material (purple small rectangles)
       - Properties: material_id, type, specification
       - Examples: "Steel Grade A", "Aluminum Alloy", "Plastic ABS"

    Edge types:
    1. CONTAINS (thick blue arrows, hierarchical)
       - From: Product → Assembly, Assembly → Component, Assembly → Assembly
       - Properties: quantity (how many needed), position (where in assembly)
       - Creates the BOM hierarchy

    2. MADE_OF (thin purple arrows)
       - From: Component → Material
       - Properties: weight_grams

    3. SUPPLIED_BY (solid yellow arrows)
       - From: Component → Supplier
       - Properties: lead_time_days, unit_cost, min_order_quantity, reliability_score
       - Note: Components can have multiple suppliers

    4. SUPERSEDES (dashed green arrows)
       - From: Component (newer) → Component (older)
       - Properties: effective_date, backward_compatible (boolean)
       - Example: "Fuel Injector v2" supersedes "Fuel Injector v1"

    5. INTERCHANGEABLE_WITH (bidirectional dotted gray)
       - From: Component ↔ Component
       - Properties: compatibility_note
       - Example: Different manufacturers' equivalent parts

    6. FAILS_WITH (red dashed arrows)
       - From: Component → FailureMode (conceptual node)
       - Properties: annual_failure_rate, mtbf_hours (mean time between failure)
       - Used for spare parts planning

    7. REQUIRED_FOR (orange arrows)
       - From: Component → Product (direct or through assemblies)
       - Properties: criticality (high/medium/low)
       - Computed from traversal: shows which components are needed for which products

    Sample BOM structure:

    Electric Car Model S (Product)
    ├─ CONTAINS (1x) → Engine Assembly v2.1
    │  ├─ CONTAINS (1x) → Engine Block
    │  │  ├─ CONTAINS (8x) → Valve
    │  │  │  ├─ SUPPLIED_BY → PartsCorpEast (lead: 14 days, cost: $5)
    │  │  │  ├─ SUPPLIED_BY → GlobalSupply (lead: 30 days, cost: $3.50)
    │  │  │  ├─ FAILS_WITH → "Normal wear" (failure rate: 0.05/year)
    │  │  │  └─ MADE_OF → Steel Grade A
    │  │  ├─ CONTAINS (8x) → Spark Plug
    │  │  │  ├─ SUPPLIED_BY → LocalParts (lead: 3 days, cost: $8)
    │  │  │  ├─ FAILS_WITH → "Fouling" (failure rate: 0.15/year)
    │  │  │  └─ SUPERSEDES → "Spark Plug v1" (old version)
    │  │  └─ CONTAINS (1x) → Crankshaft
    │  │     ├─ SUPPLIED_BY → PartsCorpEast (lead: 45 days, cost: $850)
    │  │     ├─ FAILS_WITH → "Rare catastrophic" (failure rate: 0.001/year)
    │  │     └─ MADE_OF → Steel Grade A
    │  └─ CONTAINS (1x) → Fuel Injection System
    │     └─ CONTAINS (8x) → Fuel Injector v2
    │        ├─ SUPPLIED_BY → GlobalSupply (lead: 20 days, cost: $45)
    │        ├─ SUPERSEDES → Fuel Injector v1
    │        ├─ FAILS_WITH → "Clogging" (failure rate: 0.08/year)
    │        └─ INTERCHANGEABLE_WITH → "Generic Injector Model 3"
    │
    ├─ CONTAINS (1x) → Battery Pack
    │  └─ [similar structure with cells, BMS, etc.]
    │
    └─ CONTAINS (1x) → Transmission
       └─ [hundreds of parts]

    Spare parts intelligence annotations:
    - HIGH PRIORITY: Spark Plug (high failure rate 0.15, low cost, short lead time 3 days)
    - MEDIUM PRIORITY: Valve (moderate failure rate 0.05, multiple suppliers available)
    - LOW PRIORITY: Crankshaft (very low failure rate 0.001, but expensive $850, long lead 45 days - stock 2-3 for emergencies)
    - OPTIMIZATION: Fuel Injector v2 can use Generic Injector Model 3 as alternative

    Layout: Hierarchical tree layout
    - Product at top
    - Assemblies in middle layers
    - Components at bottom
    - Suppliers shown as satellites around components they supply

    Interactive features:
    - Click component: Highlight all products using it (upstream traversal)
    - Click product: Show complete BOM explosion (downstream traversal)
    - Click supplier: Show all parts they supply and lead times
    - Hover on CONTAINS edge: Show quantity required
    - Filter view: "Show only high-failure-rate parts" or "Show parts from single supplier"
    - Spare parts calculator: Input product volume → calculate recommended spare parts inventory
    - Supplier risk analysis: Click supplier → show impact if they're unavailable

    Visual styling:
    - Node size proportional to cost or criticality
    - Edge thickness proportional to quantity
    - Color coding:
      - Green: parts with multiple suppliers
      - Yellow: parts with single supplier
      - Red: parts with high failure rate
    - Failure rate shown as node border color intensity

    Calculations shown (side panel):
    - Annual parts demand: Product volume × quantity per product × (1 + failure rate)
    - Inventory recommendation: Demand × (lead time / 365) × safety factor
    - Supplier diversity score: Percentage of parts with 2+ suppliers

    Legend:
    - Node types and shapes
    - Edge meanings
    - Color coding for risk levels
    - Criticality indicators

    Canvas size: 1400x1000px
    Background: White with subtle grid

    Implementation: vis-network or D3.js with hierarchical layout
</details>

## Supply Chain: Where Graphs Really Shine

Now for the scenario that makes even relational database experts concede that graphs might be a better choice: supply chain management.

### Supply Chain Modeling: A Web of Dependencies

A **supply chain** is the network of organizations, people, activities, information, and resources involved in moving a product from supplier to customer. And it's not a simple linear chain—it's a complex web of dependencies.

Consider a smartphone manufacturer:
- You source processors from Supplier A
- Supplier A gets silicon wafers from Supplier B
- Supplier B gets raw materials from Supplier C
- Meanwhile, you source displays from Supplier D
- Supplier D gets glass from Supplier E and touch sensors from Supplier F
- Supplier F also supplies components to Supplier A (circular dependency!)
- Each supplier has backup suppliers, alternate routes, and varying lead times
- Products move through multiple warehouses, distribution centers, and shipping routes

This is inherently a graph structure:

```
(Product)-[:REQUIRES]->(Component)
(Component)-[:SOURCED_FROM]->(Supplier)
(Supplier)-[:LOCATED_IN]->(Region)
(Supplier)-[:SHIPS_VIA]->(LogisticsProvider)
(Warehouse)-[:STOCKS]->(Component)
(Warehouse)-[:SHIPS_TO]->(Warehouse)
```

### The Warehouse Fire Scenario

Here's where graphs show their real power. Imagine you get a phone call: "One of your suppliers had a warehouse fire. It's offline for 3 months."

In a relational database, answering "What's the impact?" requires complex recursive queries:
1. Find which components come from that warehouse
2. Find which products use those components (direct and via assemblies)
3. Find which orders contain those products
4. Find which customers are affected
5. Find alternative suppliers for those components
6. Calculate if alternative suppliers can meet demand
7. Compute revised delivery dates

Each step might be a separate query, and you're manually piecing together the analysis.

In a graph database, this is a single traversal query:

```
MATCH (warehouse:Warehouse {id: 'affected-warehouse-id'})
MATCH path = (warehouse)-[:STOCKS]->(component)
              -[:USED_IN*]->(assembly)
              -[:PART_OF*]->(product)
              -[:IN_ORDER]->(order)
              -[:PLACED_BY]->(customer)
RETURN customers, products, components,
       alternative_suppliers,
       estimated_delay
```

The graph traversal automatically follows the dependency chain, accounting for multiple levels of assemblies and showing the full blast radius of the disruption.

**Impact Analysis Questions Graphs Answer Instantly:**

- "Which customers are affected?" (traverse to orders to customers)
- "Can we substitute alternative suppliers?" (check SUPPLIED_BY edges from components)
- "Which products can we still build?" (find products not dependent on affected warehouse)
- "What's the financial impact?" (sum order values on affected path)
- "Which orders should we prioritize?" (rank by order value, customer importance, delivery date)

<details>
    <summary>Supply Chain Disruption Impact Analysis Interactive Diagram</summary>
    Type: microsim

    Learning objective: Help students understand how graph traversals enable real-time impact analysis when supply chain disruptions occur

    Canvas layout (1400x900px):
    - Left panel (300x900): Control panel and scenario selector
    - Main area (1100x900): Interactive supply chain graph visualization

    Visual elements in main area:

    Supply chain graph structure:
    - Suppliers (yellow circles, left side)
      - Supplier A: "ChipFab Inc" (provides processors)
      - Supplier B: "DisplayTech" (provides screens)
      - Supplier C: "BatteryCo" (provides batteries)
      - Supplier D: "CaseMaker" (provides chassis)

    - Warehouses (orange rectangles, mid-left)
      - Warehouse West
      - Warehouse East
      - Warehouse Central

    - Components (green small rectangles, mid)
      - Processor X1
      - Display OLED
      - Battery 5000mAh
      - Aluminum Chassis
      - Camera Module
      - USB-C Port

    - Products (blue rounded rectangles, mid-right)
      - Smartphone Pro
      - Smartphone Lite
      - Tablet Max

    - Orders (purple rounded rectangles, right)
      - Order #1001 (50 units Smartphone Pro)
      - Order #1002 (100 units Smartphone Lite)
      - Order #1003 (25 units Tablet Max)
      - Order #1004 (200 units Smartphone Pro)

    - Customers (pink circles, far right)
      - TechRetail Corp
      - OnlineStore Inc
      - Enterprise Solutions Ltd

    Relationships:
    - SUPPLIES: Supplier → Warehouse → Component
    - REQUIRES: Product → Component (with quantity)
    - CONTAINS: Order → Product
    - PLACED_BY: Order → Customer

    Interactive controls in left panel:

    **Scenario Selector:**
    - Dropdown: "Select Disruption Scenario"
      - "Warehouse Fire: Warehouse West offline"
      - "Supplier Bankruptcy: DisplayTech unavailable"
      - "Component Shortage: Processor X1 limited supply"
      - "Shipping Delay: All deliveries +2 weeks"
      - "Natural Disaster: Region-wide disruption"

    - Button: "Analyze Impact" (runs traversal simulation)
    - Button: "Find Alternatives" (shows alternate suppliers/routes)
    - Button: "Reset Scenario"

    **Impact Dashboard (updates after analysis):**
    - Affected Components: X
    - Affected Products: X
    - Affected Orders: X (total units: Y)
    - Affected Customers: X
    - Revenue at Risk: $X
    - Estimated Delay: X days

    **Alternative Solutions:**
    - List of possible mitigation strategies
    - "Use Supplier E for Processor X1 (lead time: +5 days)"
    - "Redirect stock from Warehouse East"
    - "Substitute Product: Smartphone Lite for Pro"

    Default scenario: "Warehouse Fire: Warehouse West offline"

    Behavior when "Analyze Impact" clicked:

    1. **Highlight affected node** (warehouse, red glow)

    2. **Animate traversal** (step-by-step):
       - Step 1: Components in affected warehouse turn orange
       - Step 2: Products requiring those components turn orange
       - Step 3: Orders containing those products turn orange
       - Step 4: Customers who placed those orders turn orange
       - Each step takes 0.5 seconds

    3. **Show impact path** (thick red lines along traversal)

    4. **Update dashboard** with metrics

    5. **Calculate alternatives**:
       - Find components from other warehouses (highlight in green)
       - Find products that can still be fulfilled (highlight in green)
       - Show partial fulfillment options

    Example traversal for "Warehouse West Fire":

    Warehouse West (DISRUPTED)
    ├─ Stocks: Processor X1
    │  └─ Required by: Smartphone Pro, Tablet Max
    │     ├─ In Order #1001 (50 units) → TechRetail Corp
    │     ├─ In Order #1004 (200 units) → Enterprise Solutions Ltd
    │     └─ In Order #1003 (25 units) → OnlineStore Inc
    │
    └─ Stocks: Camera Module
       └─ Required by: Smartphone Pro, Smartphone Lite
          └─ In Order #1002 (100 units) → OnlineStore Inc

    Impact summary:
    - 4 out of 4 orders affected (100% of current orders)
    - 3 out of 3 customers affected
    - Revenue at risk: $1.2M
    - Components unavailable: Processor X1, Camera Module

    Alternatives found:
    - Warehouse East has 50 units of Processor X1 (can fulfill Order #1001 fully)
    - Supplier A can expedite 200 processors (7-day lead time) for Order #1004
    - Camera Module available from Warehouse Central
    - Recommendation: Prioritize Order #1001 (immediate fulfillment), delay #1004 by 7 days

    Visual styling:
    - Normal state: nodes in category colors, gray edges
    - Disrupted: red glow and pulsing animation
    - Affected: orange/yellow color
    - Alternative available: green highlight
    - Impact path: thick red edges with animation (flow direction)
    - Metrics shown as badges on nodes (e.g., "50 units" on component)

    Hover interactions:
    - Hover warehouse: Show inventory levels
    - Hover component: Show which products need it
    - Hover product: Show BOM and current orders
    - Hover order: Show customer, value, delivery date
    - Hover edge: Show relationship details (quantity, lead time)

    Additional features:
    - Timeline slider: Simulate disruption recovery over time
    - "Compare Scenarios" mode: Run two scenarios side-by-side
    - Export report: Generate impact analysis summary

    Educational annotations:
    - "Graph Advantage: This analysis took 0.05 seconds. In SQL: hours or days."
    - "Multi-hop Traversal: Following relationships across 5-6 levels"
    - "Alternative Discovery: Graph can find backup suppliers automatically"

    Implementation notes:
    - Use p5.js or vis-network for rendering
    - Store supply chain as graph data structure
    - Implement BFS or DFS traversal for impact analysis
    - Animate traversal step-by-step for educational clarity
    - Calculate metrics by aggregating node properties along paths
    - Use color transitions for smooth visual feedback

    Canvas size: 1400x900px
    Background: Light gray gradient

    Default state: Graph shown in normal state, ready for scenario selection
</details>

## IT Infrastructure: The Hidden Graph

Now let's shift gears to IT infrastructure management—another domain where everything seems straightforward until you look at the interconnections.

### IT Asset Management: More Than an Inventory

**IT Asset Management (ITAM)** is the practice of tracking all IT assets in an organization—servers, applications, databases, network devices, software licenses, and the relationships between them.

A basic ITAM system might just track:
- What assets exist
- Who owns them
- When they were purchased
- When warranties expire

But a graph-based ITAM system captures:
- What depends on what (applications on servers, services on databases)
- Who accesses what (users to applications, applications to data)
- How things communicate (network topology)
- What versions are deployed where (configuration management)

### Dependency Graphs: Understanding the Web

A **dependency graph** shows how IT components depend on each other. For example:

```
Customer Portal (Web App)
├─ Depends on: Authentication Service
│  ├─ Depends on: User Database (PostgreSQL)
│  │  ├─ Runs on: DB Server 1
│  │  └─ Backed up to: Storage Array A
│  └─ Depends on: LDAP Directory
│     └─ Runs on: Directory Server
├─ Depends on: Payment Service
│  ├─ Depends on: Payment Gateway API (external)
│  └─ Depends on: Transaction Database
│     └─ Runs on: DB Server 2
└─ Runs on: Web Server Cluster (3 servers)
   └─ Load Balanced by: Load Balancer 1
```

This seemingly simple web application actually depends on a dozen different components. If any one of them fails, the application might break.

### Network Topology: The Physical Web

**Network topology** is the arrangement of network devices (routers, switches, firewalls, load balancers) and how they connect to each other.

In a graph model:
```
(Device)-[:CONNECTED_TO {port, bandwidth}]->(Device)
(Device)-[:ROUTES_TO {via_interface}]->(Network)
(Device)-[:PROTECTED_BY]->(Firewall)
(Application)-[:ACCESSED_VIA]->(LoadBalancer)
```

This lets you answer questions like:
- "Show me all paths between Server A and the internet"
- "If this switch fails, which servers lose connectivity?"
- "What's the network path for traffic from User X to Application Y?"
- "Which devices are behind which firewalls?"

### Configuration Management: Keeping Track of Change

**Configuration Management (CM)** is tracking the configuration state of all your IT systems—what software versions are installed where, what settings are applied, what changes have been made.

The traditional CM approach (like ITIL's Configuration Management Database or CMDB) uses relational databases. But CMDBs have a notorious reputation for being:
- Hard to populate (requires constant updating)
- Quickly out of date (changes happen faster than CM can track)
- Difficult to query (complex joins across many tables)
- Poor at showing relationships (which is ironic, since that's the point!)

Graph-based CM changes the game:

```
(Server)-[:RUNS {version}]->(Application)
(Application)-[:CONFIGURED_WITH]->(ConfigFile)
(ConfigFile)-[:CONTAINS_SETTING {key, value}]->(Setting)
(Server)-[:PATCHED_TO]->(OSVersion)
(Server)-[:CONNECTED_TO]->(OtherServer)
```

Now you can query:
- "Which servers are running Application X version < 2.0?" (need to patch)
- "Which applications use this deprecated config setting?" (need to update)
- "Show me all configuration changes in the last 30 days" (audit trail)
- "What's the full stack for Application Y?" (application → dependencies → servers → network)

<details>
    <summary>IT Infrastructure Dependency Graph Model</summary>
    Type: graph-model

    Purpose: Show a complete IT infrastructure as a graph, including servers, applications, databases, network devices, and their dependencies for impact and root cause analysis

    Node types:
    1. Application (large blue rounded rectangles)
       - Properties: app_id, name, version, owner_team, criticality (high/medium/low)
       - Examples: "Customer Portal", "Payment Service", "Inventory System"

    2. Service (medium blue hexagons)
       - Properties: service_id, name, api_version, endpoint_url
       - Examples: "Authentication Service", "Email Service", "Search Service"

    3. Database (green cylinders)
       - Properties: db_id, name, type (PostgreSQL/MySQL/MongoDB), size_gb
       - Examples: "User DB", "Transaction DB", "Product Catalog DB"

    4. Server (gray rectangles)
       - Properties: server_id, hostname, ip_address, cpu, ram_gb, os, location
       - Examples: "web-server-01", "db-server-03", "app-server-05"

    5. Network Device (orange diamonds)
       - Properties: device_id, type (router/switch/firewall/load_balancer), model
       - Examples: "LoadBalancer-1", "Firewall-DMZ", "Core-Switch-A"

    6. Storage (purple cylinders)
       - Properties: storage_id, type, capacity_tb, backup (boolean)
       - Examples: "Storage Array A", "Backup NAS"

    7. External Service (yellow clouds)
       - Properties: service_name, provider, sla_tier
       - Examples: "Payment Gateway", "CDN", "Email Provider"

    Edge types:
    1. DEPENDS_ON (thick blue arrows)
       - From: Application → Service, Service → Database, Application → External Service
       - Properties: criticality (critical/important/optional), rto_minutes (recovery time objective)
       - Shows functional dependencies

    2. RUNS_ON (solid gray arrows)
       - From: Application/Service/Database → Server
       - Properties: version, port, process_id

    3. CONNECTS_TO (thin black arrows)
       - From: Server → Server, Server → Network Device
       - Properties: protocol, port, bandwidth_mbps

    4. PROTECTED_BY (orange dashed arrows)
       - From: Server/Application → Network Device (firewall)
       - Properties: rule_id, allowed_ports[]

    5. STORES_DATA_ON (purple arrows)
       - From: Database → Storage
       - Properties: path, size_gb, backup_schedule

    6. LOAD_BALANCED_BY (green dotted arrows)
       - From: Application → Network Device (load balancer) → Server (multiple)
       - Properties: algorithm (round-robin/least-conn), health_check_url

    7. BACKED_UP_TO (purple dashed arrows)
       - From: Database/Storage → Storage (backup)
       - Properties: frequency, retention_days, last_backup_date

    8. CALLS (thin blue dashed arrows)
       - From: Application → Service, Service → External Service
       - Properties: request_rate_per_sec, avg_latency_ms

    Sample infrastructure:

    Customer Portal (Application, criticality: HIGH)
    ├─ DEPENDS_ON → Authentication Service (criticality: CRITICAL, RTO: 15min)
    │  ├─ DEPENDS_ON → User Database (PostgreSQL)
    │  │  ├─ RUNS_ON → db-server-01 (Linux, 64GB RAM)
    │  │  ├─ STORES_DATA_ON → Storage Array A (5TB)
    │  │  └─ BACKED_UP_TO → Backup NAS (daily, 30-day retention)
    │  ├─ RUNS_ON → app-server-03, app-server-04 (2 instances)
    │  └─ CALLS → LDAP Service (external)
    │
    ├─ DEPENDS_ON → Payment Service (criticality: CRITICAL, RTO: 5min)
    │  ├─ DEPENDS_ON → Transaction Database
    │  │  ├─ RUNS_ON → db-server-02
    │  │  └─ BACKED_UP_TO → Backup NAS (hourly, 90-day retention)
    │  ├─ CALLS → Payment Gateway (external)
    │  └─ RUNS_ON → app-server-05
    │
    ├─ DEPENDS_ON → Inventory Service
    │  ├─ DEPENDS_ON → Product Catalog DB (MongoDB)
    │  │  └─ RUNS_ON → db-server-03
    │  └─ RUNS_ON → app-server-06
    │
    └─ RUNS_ON → web-server-01, web-server-02, web-server-03
       └─ LOAD_BALANCED_BY → LoadBalancer-1
          └─ PROTECTED_BY → Firewall-DMZ

    Network topology:
    - All web servers CONNECT_TO Core-Switch-A
    - All app servers CONNECT_TO Core-Switch-B
    - All db servers CONNECT_TO Core-Switch-C
    - Switches interconnected via CONNECT_TO edges
    - External traffic routed through Firewall-DMZ

    Layout: Hierarchical layers (top to bottom)
    - Layer 1 (top): User-facing applications
    - Layer 2: Services
    - Layer 3: Databases
    - Layer 4: Servers
    - Layer 5: Network devices
    - Layer 6 (bottom): Storage

    Interactive features:
    - Click application: Show complete dependency tree (all downstream dependencies)
    - Click server: Show all applications/services running on it (upstream)
    - Click database: Show which applications depend on it and where it's stored
    - Hover edge: Show dependency details (criticality, RTO, etc.)
    - "Impact Analysis" mode: Click any node → highlight all dependent nodes (blast radius)
    - "Root Cause" mode: Click failed application → trace back to find which dependency failed
    - "Single Point of Failure" finder: Highlight nodes with no redundancy
    - Filter by criticality: Show only HIGH criticality paths

    Visual styling:
    - Node color intensity shows criticality (darker = more critical)
    - Edge thickness shows dependency strength
    - Dashed edges show "soft" dependencies (optional/degraded service ok)
    - Red highlights show failed/offline components
    - Yellow highlights show degraded components
    - Green highlights show healthy components

    Impact Analysis scenario:
    - db-server-01 fails (disk failure)
    - User Database becomes unavailable
    - Authentication Service can't function
    - Customer Portal login fails
    - Impact: Customer Portal partially functional (can browse, can't log in or purchase)
    - Affected users: All logged-in sessions valid, new logins fail
    - Mitigation: Failover to standby db-server-01-standby (shown as alternate path)

    Root Cause Analysis scenario:
    - Customer Portal experiencing slow response times
    - Trace dependencies:
      - Payment Service has high latency (avg: 2000ms, normal: 50ms)
      - Transaction Database on db-server-02 has high CPU (95%)
      - Root cause: Unoptimized query causing table scans
    - Graph shows the path from symptom to root cause

    Metrics overlay (shown in side panel when node selected):
    - Server: CPU %, RAM %, Disk %, Network I/O
    - Database: Query/sec, Connection count, Cache hit rate
    - Application: Request rate, Error rate, Response time p95
    - Network Device: Throughput, Packet loss, Connection count

    Legend:
    - Node types and shapes
    - Edge types and meanings
    - Color coding for health status
    - Criticality levels

    Canvas size: 1400x1000px
    Background: Dark gray (for contrast with colored nodes)

    Implementation: vis-network with hierarchical layout and custom node shapes
</details>

## Operational Intelligence: Impact and Root Cause Analysis

Now we get to the payoff—using these graph models to answer critical operational questions in real time.

### Impact Analysis: Understanding the Blast Radius

**Impact analysis** answers the question: "If this component fails (or changes), what else is affected?"

This is crucial for:
- **Change management**: "If I upgrade this server, which applications will be impacted?"
- **Incident response**: "This database just crashed—which services are down?"
- **Capacity planning**: "If I decommission this old server, what needs to migrate first?"
- **Risk assessment**: "What's the blast radius if our payment gateway goes offline?"

In a graph database, impact analysis is a traversal query:

```
Start with the affected component
Follow all DEPENDS_ON edges outward
Follow all RUNS_ON edges upward
Collect all reachable nodes
Rank by criticality and distance
```

Example scenario:
- A server needs emergency maintenance
- Impact analysis shows: 3 applications, 2 databases, 15 customer-facing services affected
- Business impact: $50K/hour in lost revenue if customer portal goes offline
- Decision: Schedule maintenance during 3 AM maintenance window, notify affected teams

Without a graph, this analysis requires:
- Manually searching through configuration files
- Checking multiple systems (CMDB, monitoring tools, documentation)
- Piecing together dependencies from tribal knowledge
- Hours or days of investigation

With a graph: Seconds.

### Root Cause Analysis: Finding the Smoking Gun

**Root cause analysis** answers the opposite question: "Something is broken—what's the underlying cause?"

When an application fails or performs poorly, the symptoms might be visible, but the root cause is often hidden deep in the dependency chain:

- Symptom: "Customer Portal is slow"
- Layer 1: Web servers are responding slowly
- Layer 2: Authentication Service has high latency
- Layer 3: User Database queries are timing out
- Layer 4: Database server has high CPU usage
- Layer 5: Root cause: Backup job is running during business hours, saturating disk I/O

A graph traversal can systematically explore the dependency tree, checking health metrics at each level, and identifying where the problem originates.

```
Start with the failing application
Check its direct dependencies (services, databases)
For each dependency, check health metrics
If unhealthy, traverse deeper to its dependencies
Repeat until you find a healthy node with an unhealthy child
That transition point is likely the root cause
```

This turns troubleshooting from an art (requires experienced engineers with deep system knowledge) into a science (systematic traversal of the dependency graph with metrics).

**The Graph Advantage in Operations:**

1. **Speed**: Real-time traversals vs. hours of manual investigation
2. **Completeness**: Graph traversal finds ALL affected components, not just the obvious ones
3. **Auditability**: The path through the graph shows why Component A affects Component B
4. **Automation**: Once you have the graph, you can automate impact and root cause analysis
5. **Visualization**: Seeing the dependency graph helps humans understand complex systems
6. **What-if scenarios**: "What if we remove this dependency?" → simulate before acting

## Bringing It All Together

Let's step back and see how all these pieces connect.

### E-Commerce + Supply Chain + IT: One Integrated Graph

In a modern business, these domains aren't separate—they're all interconnected:

- Your e-commerce platform (web storefront) runs on IT infrastructure
- Product recommendations require analyzing customer behavior and inventory data
- Your supply chain determines product availability shown on the website
- When a supplier is disrupted, IT systems need to update product status
- IT monitoring tracks application performance, affecting customer experience
- Customer orders trigger supply chain events (pick, pack, ship)

A graph database can model all of this in one unified model:

```
(Customer)-[:ORDERED]->(Product)
(Product)-[:REQUIRES]->(Component)
(Component)-[:SUPPLIED_BY]->(Supplier)
(Supplier)-[:SHIPS_FROM]->(Warehouse)
(Product)-[:MANAGED_BY]->(InventorySystem)
(InventorySystem)-[:RUNS_ON]->(Server)
(Server)-[:DEPENDS_ON]->(Database)
```

This unified model enables questions like:
- "A warehouse fire just happened—which customer orders are at risk, and which IT systems need to send notifications?"
- "We're seeing high database load—is it because of a surge in product recommendations or supply chain updates?"
- "Which products should we promote (high inventory + trending purchases + available from multiple suppliers)?"

### Why Graphs Win in These Domains

Let's revisit why graphs are ideal for commerce, supply chains, and IT:

**1. Relationships Are First-Class**

In all three domains, the relationships between entities are just as important (or more important) than the entities themselves:
- Commerce: "Frequently bought together" matters more than product attributes
- Supply chain: "Depends on" relationships determine resilience
- IT: "Runs on" and "connects to" determine system behavior

**2. Variable Depth Queries**

These domains require queries that traverse varying numbers of hops:
- "Find similar products" (1-2 hops)
- "Show complete bill of materials" (arbitrary depth)
- "Trace supply chain to raw materials" (5-10+ hops)
- "Find all downstream dependencies" (unknown depth)

Relational databases struggle with variable-depth recursion. Graphs handle it naturally.

**3. Schema Flexibility**

All three domains evolve:
- New product types with different attributes
- New supplier relationships and logistics providers
- New types of IT infrastructure (containers, serverless, cloud)

Graphs' schema-optional nature makes evolution easier than rigid relational schemas.

**4. Real-Time Analysis**

Business needs answers fast:
- "What products should we recommend?" (sub-second)
- "What's the impact of this supplier issue?" (seconds)
- "What caused this outage?" (seconds to minutes)

Graph traversals are fast enough for real-time operational decisions.

**5. Explainability**

Graphs show WHY:
- "We recommended this product because you bought X and customers who bought X also bought Y"
- "This supplier disruption affects Product A because it provides Component B which is used in Assembly C"
- "The application failed because Service D depends on Database E which runs on Server F which lost network connectivity"

The path through the graph IS the explanation.

## Key Takeaways

**1. Don't Judge Complexity by the Surface**

What looks like a simple "database and web app" problem often hides massive complexity when you consider recommendations, supply chains, and infrastructure dependencies.

**2. Recommendations Are a Game Changer**

Intelligent product recommendations can increase e-commerce revenue by 20-35%. Graphs make recommendations fast, flexible, and explainable.

**3. Manufacturing Is More Complex Than It Looks**

Bill of materials with thousands of components, multiple suppliers, version dependencies, and spare parts planning is fundamentally a graph problem.

**4. Supply Chains Are Webs, Not Chains**

Modern supply chains have circular dependencies, multiple paths, and complex failure modes. Graphs model this reality better than tables.

**5. IT Infrastructure Is a Dependency Graph**

Every IT system depends on other systems. Understanding and managing these dependencies is critical for reliability and operational efficiency.

**6. Impact Analysis Prevents Disasters**

Knowing what will break before you make a change (or when something fails) is the difference between controlled operations and chaos.

**7. Root Cause Analysis Saves Time and Money**

Systematic graph traversal finds problems faster than manual investigation, reducing downtime and operational costs.

**8. Integration Creates Compounding Value**

When you model commerce, supply chain, and IT in one graph, you can answer cross-domain questions that would be impossible otherwise.

What started as "boring database applications" turned out to be some of the most compelling use cases for graph databases. The interconnected nature of modern business operations is exactly what graphs were designed to handle.

---
