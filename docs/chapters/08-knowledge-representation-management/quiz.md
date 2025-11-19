# Quiz: Knowledge Representation and Management

Test your understanding of knowledge graphs, ontologies, taxonomies, and enterprise knowledge management with graph databases.

---

#### 1. What is a concept dependency graph?

<div class="upper-alpha" markdown>
1. A graph showing financial dependencies
2. A directed graph showing prerequisite relationships between learning concepts, indicating which concepts must be learned before others
3. A backup system
4. A type of relational database
</div>

??? question "Show Answer"
    The correct answer is **B**. A concept dependency graph is a directed graph representing prerequisite relationships between learning concepts—an edge from A to B means "concept A depends on understanding B first." This creates a pedagogical roadmap ensuring concepts are learned in optimal order, foundational concepts before advanced ones.

    **Concept Tested:** Concept Dependency Graphs

    **See:** [Concept Graphs](index.md)

---

#### 2. What is an ontology in the context of knowledge representation?

<div class="upper-alpha" markdown>
1. A medical specialty
2. A formal representation of knowledge domains defining concepts, relationships, and logical rules governing their interactions
3. A type of graph database
4. A programming language
</div>

??? question "Show Answer"
    The correct answer is **B**. An ontology is a formal representation of a knowledge domain that defines concepts, their properties, relationships, and logical rules. For example, a medical ontology defines diseases, symptoms, treatments with formal relationships like "diabetes hasSymptom frequent_urination" and reasoning rules, enabling AI systems to understand and infer knowledge.

    **Concept Tested:** Ontologies

    **See:** [Ontology Modeling](index.md)

---

#### 3. What is SKOS and what is it used for?

<div class="upper-alpha" markdown>
1. A type of database
2. Simple Knowledge Organization System, a W3C standard for representing controlled vocabularies and taxonomies as linked data
3. A programming framework
4. A network protocol
</div>

??? question "Show Answer"
    The correct answer is **B**. SKOS (Simple Knowledge Organization System) is a W3C standard for representing controlled vocabularies, taxonomies, and thesauri as linked data. It defines relationships like broader/narrower (category hierarchies), preferred/alternate labels (synonyms), and related terms, enabling semantic interoperability across systems.

    **Concept Tested:** SKOS

    **See:** [SKOS Standard](index.md)

---

#### 4. What distinguishes a glossary from a taxonomy?

<div class="upper-alpha" markdown>
1. They are the same thing
2. A glossary provides term definitions, while a taxonomy organizes terms hierarchically from general to specific
3. Glossaries are always longer
4. Taxonomies cannot be represented in graphs
</div>

??? question "Show Answer"
    The correct answer is **B**. A glossary provides definitions of terms (alphabetically organized reference), while a taxonomy organizes terms hierarchically showing parent-child (broader-narrower) relationships. For example, a glossary defines "automobile" but a taxonomy shows "vehicle > motorized vehicle > automobile > sedan." Both are valuable knowledge organization tools, often used together.

    **Concept Tested:** Glossaries, Taxonomies

    **See:** [Knowledge Organization](index.md)

---

#### 5. How do personal knowledge graphs differ from enterprise knowledge graphs?

<div class="upper-alpha" markdown>
1. They use different database technologies
2. Personal knowledge graphs organize individual notes and concepts for personal use, while enterprise knowledge graphs capture organization-wide information
3. Personal knowledge graphs are always smaller
4. There is no difference
</div>

??? question "Show Answer"
    The correct answer is **B**. Personal knowledge graphs organize an individual's notes, concepts, research, and insights for personal knowledge management (tools like Obsidian or Roam). Enterprise knowledge graphs capture organization-wide knowledge—business processes, project information, expert knowledge, documented procedures—for enterprise-scale knowledge management and decision support.

    **Concept Tested:** Personal Knowledge Graphs, Enterprise Knowledge

    **See:** [Knowledge Graph Types](index.md)

---

#### 6. What is knowledge capture and why is it important?

<div class="upper-alpha" markdown>
1. Backing up databases
2. The systematic recording and structuring of expertise, decisions, and insights for organizational preservation and reuse
3. Deleting old knowledge
4. Encrypting data
</div>

??? question "Show Answer"
    The correct answer is **B**. Knowledge capture is the systematic process of recording and structuring expert knowledge, decisions, insights, and lessons learned. This transforms tacit knowledge (in people's heads) into codifiable knowledge (documented in systems), preventing knowledge loss when experts leave, enabling knowledge sharing across teams, and supporting organizational learning.

    **Concept Tested:** Knowledge Capture

    **See:** [Knowledge Management](index.md)

---

#### 7. Given a requirement to model a company's organizational knowledge including projects, documents, experts, and concepts, how would you structure a graph?

<div class="upper-alpha" markdown>
1. Use a single table
2. Create nodes for each entity type (Project, Document, Person, Concept) with relationships like AUTHORED, WORKED_ON, RELATES_TO capturing connections
3. Store everything in text files
4. Don't use a graph
</div>

??? question "Show Answer"
    The correct answer is **B**. An enterprise knowledge graph would have nodes for Projects, Documents, People, Concepts, and Departments with rich relationships: `(Person)-[:AUTHORED]->(Document)`, `(Person)-[:EXPERT_IN]->(Concept)`, `(Document)-[:RELATES_TO]->(Project)`, `(Concept)-[:DEPENDS_ON]->(Concept)`. This structure enables semantic search ("find experts who worked on projects related to AI"), knowledge discovery, and insight extraction.

    **Concept Tested:** Enterprise Knowledge, Knowledge Management

    **See:** [Enterprise Knowledge Modeling](index.md)

---

#### 8. What distinguishes tacit knowledge from codifiable knowledge?

<div class="upper-alpha" markdown>
1. Tacit knowledge is experiential and difficult to document, while codifiable knowledge can be explicitly documented and transferred
2. They are the same thing
3. Tacit knowledge is always better
4. Codifiable knowledge cannot be stored
</div>

??? question "Show Answer"
    The correct answer is **A**. Tacit knowledge is experiential, intuitive knowledge difficult to codify (expert troubleshooting intuition, judgment calls). Codifiable knowledge can be explicitly documented (procedures, specifications, facts). Knowledge graphs excel at capturing codifiable knowledge and some tacit knowledge (by linking documented cases, expert decisions, and contextual factors), though true experiential tacit knowledge requires mentorship.

    **Concept Tested:** Tacit Knowledge, Codifiable Knowledge

    **See:** [Knowledge Types](index.md)

---

#### 9. How can controlled vocabularies improve data quality in knowledge graphs?

<div class="upper-alpha" markdown>
1. By deleting data
2. By ensuring consistent terminology through standardized lists of approved terms, preventing synonyms and ambiguity
3. By encrypting vocabulary
4. By making vocabularies random
</div>

??? question "Show Answer"
    The correct answer is **B**. Controlled vocabularies provide standardized lists of approved terms ensuring consistent terminology across an organization. For example, mandating "myocardial infarction" instead of varying terms like "heart attack" or "MI" prevents ambiguity, improves searchability, and enables better analytics. This is especially critical in domains like healthcare, law, and science.

    **Concept Tested:** Controlled Vocabularies

    **See:** [Vocabulary Management](index.md)

---

#### 10. Why are knowledge graphs increasingly important for AI and large language models?

<div class="upper-alpha" markdown>
1. They're not important for AI
2. Knowledge graphs provide structured context, facts, and relationships that ground AI responses in verified information and enable reasoning
3. AI doesn't use knowledge
4. Knowledge graphs replace AI
</div>

??? question "Show Answer"
    The correct answer is **B**. Knowledge graphs provide structured, verified knowledge that AI systems can use for grounding (connecting language to facts), reasoning (following logical relationships), and context (understanding domain-specific information). When combined with language models, knowledge graphs reduce hallucinations, enable fact-checking, support multi-hop reasoning, and provide explainable AI by tracing inference paths through the graph.

    **Concept Tested:** Knowledge Representation, Enterprise Knowledge

    **See:** [Knowledge Graphs for AI](index.md)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (2), Understand (4), Apply (2), Analyze (2)
**Concepts Covered:** Concept Dependency Graphs, Ontologies, SKOS, Glossaries, Taxonomies, Controlled Vocabularies, Personal Knowledge Graphs, Enterprise Knowledge, Knowledge Capture, Tacit Knowledge, Codifiable Knowledge, Knowledge Management

**Next Steps:**
- Explore [Chapter Content](index.md) for knowledge graph examples
- Practice designing knowledge representation schemas
- Continue to [Chapter 9: Modeling Patterns and Data Loading](../09-modeling-patterns-data-loading/index.md)
