---
title: Knowledge Triangle
description: A MicroSim visualizing the three layers of data transformation - from raw binary data to connected knowledge graphs.
image: /sims/knowledge-triangle/knowledge-triangle.png
og:image: /sims/knowledge-triangle/knowledge-triangle.png
twitter:image: /sims/knowledge-triangle/knowledge-triangle.png
social:
   cards: false
---

# Knowledge Triangle

<iframe src="main.html" height="552px" width="100%" scrolling="no"></iframe>

[Run the Knowledge Triangle MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

## Embedding This MicroSim

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/intro-to-graph/sims/knowledge-triangle/main.html" height="552px" width="100%" scrolling="no"></iframe>
```

## Description

The **Knowledge Triangle** MicroSim is an interactive visualization that demonstrates the three fundamental layers of data transformation in information systems. The triangle metaphor illustrates how raw data at the base is progressively refined and connected to create meaningful knowledge at the apex.

### The Three Layers

**1. Data Layer (Bottom - Black with Green Binary)**
The foundation contains raw binary data represented as 1s and 0s displayed in bright green on a black background, reminiscent of early computer terminals. This layer represents:

- Raw dumps of data from storage systems
- Unprocessed information requiring significant effort to interpret
- The largest volume of information but lowest semantic value

**2. Information Layer (Middle - Colored Fact Circles)**
The middle layer shows extracted facts as colorful circles, each labeled "Fact." This layer represents:

- Isolated facts extracted from raw data through processing
- Structured information that is meaningful but disconnected
- Individual data points that lack relationships to other facts

**3. Knowledge Layer (Top - Connected Graph)**
The apex contains a connected network of nodes and edges in various colors, representing knowledge as a graph structure. This layer represents:

- Facts connected through meaningful relationships
- A graph database structure where connections create insight
- The principle that value emerges from traversing relationships between facts

### Interactive Features

**Hover to Learn:** Move your mouse over any of the three layers to see a detailed explanation tooltip that describes the characteristics and significance of that layer.

## Educational Context

### Learning Objectives

After interacting with this MicroSim, students should be able to:

1. **Understand** the progression from raw data to actionable knowledge
2. **Identify** the characteristics that distinguish data, information, and knowledge
3. **Explain** why connected information (knowledge graphs) provides more value than isolated facts
4. **Relate** the knowledge triangle concept to graph database architectures

### Alignment with Bloom's Taxonomy

- **Remember:** Identify the three layers of the knowledge triangle
- **Understand:** Explain the difference between data, information, and knowledge
- **Apply:** Recognize examples of each layer in real-world systems
- **Analyze:** Compare the value and utility of each layer

## Lesson Plan

### Context (5 minutes)

Introduce the fundamental question: "What's the difference between having lots of data and having knowledge?"

Use examples:
- A library catalog vs. understanding which books are related
- A phone directory vs. a social network
- Raw sensor readings vs. predictive insights

### Exploration (10 minutes)

Have students interact with the MicroSim:

1. **Initial observation:** What do you notice about each layer?
2. **Hover exploration:** Read the description for each layer
3. **Visual analysis:** How does the visual representation reflect the concept?
   - Why are the data layer elements (1s and 0s) scattered randomly?
   - Why are information facts shown as separate circles?
   - Why is knowledge shown as a connected network?

### Discussion Questions (10 minutes)

1. **Volume vs. Value:** Which layer has the most "stuff" and which has the most value? Why?
2. **Processing Required:** What kind of work is needed to move from one layer to the next?
3. **Real-World Examples:** Can you think of examples in your daily life where you've seen:
   - Raw data that was hard to understand?
   - Information presented as isolated facts?
   - Knowledge that came from connecting different pieces of information?
4. **Graph Database Connection:** How does this triangle relate to why graph databases are valuable?
   - Graph databases store information at the "Knowledge Layer"
   - Relationships are first-class citizens, not afterthoughts
   - Insights come from traversing connections

### Application (10 minutes)

**Activity:** Given a scenario, identify which layer it represents:

- **Scenario 1:** A CSV file of customer transactions → **Data Layer**
- **Scenario 2:** A list showing "Customer A bought Product X" → **Information Layer**
- **Scenario 3:** A network showing customers who bought similar products and might be interested in recommendations → **Knowledge Layer**

**Challenge Question:**
"If you were building a fraud detection system, which layer would be most valuable and why?"

Expected answer: The Knowledge Layer, because fraud patterns emerge from connections between accounts, transactions, and behaviors - not from isolated data points.

### Reflection (5 minutes)

Have students write or discuss:
- Why do graph databases operate at the "Knowledge Layer"?
- What are the tradeoffs of storing data at different layers?
- In what situations would you want to stay at the Information Layer rather than building a full Knowledge Graph?

## Connection to Graph Databases

This MicroSim illustrates a core principle of graph database design:

**Traditional databases often store information at the Information Layer** - rows in tables that contain facts but lack explicit, first-class relationships.

**Graph databases elevate data to the Knowledge Layer** by:
- Making relationships as important as entities
- Enabling efficient traversal across connections
- Representing the semantic network of how facts relate to each other

The visual metaphor helps students understand why graph databases are particularly powerful for domains where **relationships and connections are as important as the individual data points themselves** - such as social networks, fraud detection, recommendation engines, and knowledge management systems.

## Metadata

**Subject:** Graph Databases, Information Science, Knowledge Representation
**Grade Level:** Undergraduate, Graduate
**Duration:** 30-40 minutes (including discussion)
**Prerequisites:** Basic understanding of databases and data structures
**Bloom's Taxonomy Levels:** Understand, Apply, Analyze
**Topic:** Data Hierarchy, Knowledge Graphs, Graph Database Fundamentals

---

**Technical Details:**
- **Framework:** p5.js
- **Canvas:** 600×550 (width-responsive)
- **Interactivity:** Hover tooltips
- **Accessibility:** ARIA labels, semantic HTML
