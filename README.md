# Introduction to Graph Databases

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/intro-to-graph/)
[![GitHub](https://img.shields.io/badge/GitHub-dmccreary%2Fintro--to--graph-blue?logo=github)](https://github.com/dmccreary/intro-to-graph)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![vis-network](https://img.shields.io/badge/vis--network-visualization-orange)](https://visjs.org/)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: **[https://dmccreary.github.io/intro-to-graph/](https://dmccreary.github.io/intro-to-graph/)**

## Overview

This is an **intelligent textbook** for teaching "Introduction to Graph Databases" designed for undergraduate (junior/senior) and graduate introductory-level students. Built using MkDocs with the Material theme, it incorporates a comprehensive **learning graph** - a directed acyclic graph (DAG) of 200 interconnected concepts that forms the knowledge architecture for the course.

The textbook covers graph databases as powerful tools for representing, querying, and analyzing highly connected information. Students learn why traditional relational databases struggle with modern relationship-heavy data, and how **Labeled Property Graph (LPG)** databases treat relationships as first-class citizens with types, attributes, directionality, and semantics.

Key topics include:

- **Graph Data Models:** Nodes, edges, labels, properties, and schema design
- **Query Languages:** openCypher, GSQL, and emerging GQL standards
- **Performance:** Index-free adjacency, traversal optimization, and benchmarking
- **Graph Algorithms:** Search, pathfinding, PageRank, community detection
- **Real-World Applications:** Social networks, fraud detection, supply chain, healthcare, knowledge graphs

The course follows **Bloom's Taxonomy (2001 revision)** for learning outcomes, using concept dependency graphs to ensure proper prerequisite sequencing. Whether you're a student learning graph databases for the first time or an educator looking for structured course materials, this textbook provides comprehensive coverage with interactive visualizations that make complex concepts accessible and engaging.

## Site Status and Metrics

| Metric | Count | Link |
|--------|-------|------|
| **Chapters** | 12 | [Chapters](https://dmccreary.github.io/intro-to-graph/chapters/) |
| **Concepts in Learning Graph** | 200 | [Concept List](https://dmccreary.github.io/intro-to-graph/learning-graph/concept-list/) |
| **Taxonomies (Categories)** | 12 | [Taxonomy Distribution](https://dmccreary.github.io/intro-to-graph/learning-graph/taxonomy-distribution/) |
| **Glossary Terms** | 198 | [Glossary](https://dmccreary.github.io/intro-to-graph/glossary/) |
| **FAQ Questions** | 6 | [FAQs](https://dmccreary.github.io/intro-to-graph/faq/) |
| **Quiz Questions** | 120 | [Quiz Report](https://dmccreary.github.io/intro-to-graph/learning-graph/quiz-generation-report/) |
| **MicroSims (Interactive Visualizations)** | 5 | [MicroSims](https://dmccreary.github.io/intro-to-graph/sims/graph-viewer/) |
| **Diagrams** | 49 | [Diagram Details](https://dmccreary.github.io/intro-to-graph/learning-graph/diagram-details/) |
| **Equations** | 27 | — |
| **Total Words** | 133,308 | — |
| **Hyperlinks** | 513 | — |
| **Equivalent Pages** | 547 | [Metrics](https://dmccreary.github.io/intro-to-graph/learning-graph/book-metrics/) |

**Completion Status:** Approximately 95% complete - all 12 chapters written with full quiz coverage (120 questions), comprehensive glossary (198 terms, ISO 11179-compliant), and extensive interactive elements.

**Quality Scores:**
- Overall Quality: 88/100 (Grade A-)
- Glossary Quality: 95/100
- Bloom's Taxonomy Distribution: 90/100
- Learning Graph Structure: Valid DAG with 200 concepts

## Key Features

### Learning Graph Architecture

The foundational innovation of this textbook is its **learning graph** - a comprehensive concept dependency network where:

- Each concept has explicit prerequisites (dependencies)
- DAG structure ensures no circular dependencies
- 12 color-coded taxonomies organize concepts by domain
- Foundational concepts (left) to advanced concepts (right) progression
- Interactive graph viewer with search, filtering, and statistics
- Maximum dependency chain length: 18 concepts
- 6 foundational concepts with no prerequisites

**Taxonomy Categories:**
- FOUND (Foundation Concepts) - 25 concepts
- GRAPH (Graph Data Model) - 42 concepts
- QUERY (Query Languages) - 26 concepts
- PERF (Performance & Optimization) - 15 concepts
- ALGO (Graph Algorithms) - 17 concepts
- SOCIAL (Social Networks) - 15 concepts
- KNOW (Knowledge Representation) - 10 concepts
- PATTERN (Graph Patterns) - 15 concepts
- SUPPLY (Supply Chain & IT) - 16 concepts
- FIN (Financial Applications) - 5 concepts
- HEALTH (Healthcare) - 4 concepts
- ADV (Advanced Topics) - 10 concepts

### Interactive MicroSims

Five interactive visualizations provide hands-on learning experiences:

1. **Graph Viewer** - Explore the complete learning graph with 200 concepts
2. **Minimum Spanning Tree** - Understand graph optimization algorithms
3. **Multi-Hop Comparison** - Compare RDBMS vs. graph database query patterns
4. **Organizational Chart** - Model hierarchical relationships in graph databases
5. **RDBMS vs Graph Performance** - Visualize performance differences across query depths

### Educational Framework

- **Course Duration:** 14 weeks, 3 credits
- **Target Audience:** Junior/senior undergraduates or graduate students
- **Prerequisites:** Database/data modeling coursework, basic programming (Python/JavaScript)
- **Pedagogy:** Bloom's Taxonomy alignment with six cognitive levels
- **Assessment:** 120 quiz questions distributed across all chapters
  - Remember: 20% | Understand: 35% | Apply: 23% | Analyze: 22%
- **Concept Coverage:** 68% of all concepts, 95% of high-centrality concepts tested

### Comprehensive Glossary

The textbook includes an **ISO 11179-compliant glossary** with:

- 198 precisely defined terms (99% concept coverage)
- Average definition length: 28 words (target: 20-50)
- 72% of terms include illustrative examples (144/200)
- Zero circular dependencies
- Flesch-Kincaid Grade Level: 14-16 (College/Undergraduate)
- All definitions meet four ISO 11179 criteria: precision, conciseness, distinctiveness, non-circularity

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dmccreary/intro-to-graph.git
cd intro-to-graph
```

### Install Dependencies

This project uses MkDocs with the Material theme. Set up using conda (recommended):

```bash
conda deactivate
conda create -n mkdocs python=3
conda activate mkdocs
pip install mkdocs "mkdocs-material[imaging]"
```

**Mac Users:** For Material social imaging features, install additional libraries:

```bash
brew install cairo freetype libffi libjpeg libpng zlib
export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib
```

Add the export command to your `~/.zshrc` file for persistence.

### Build and Serve Locally

Build the site:

```bash
mkdocs build
```

Serve locally with live reload (recommended for development):

```bash
mkdocs serve
```

Open your browser to `http://localhost:8000`

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch. **Note:** This does NOT commit source changes to git - always commit separately.

### Working with the Learning Graph

The learning graph is stored in two formats:

- **CSV:** `docs/learning-graph/learning-graph.csv` (source of truth)
- **JSON:** `docs/learning-graph/learning-graph.json` (for visualization)

After editing the CSV, regenerate the JSON:

```bash
cd docs/learning-graph
python csv-to-json.py learning-graph.csv learning-graph.json color-config.json metadata.json
```

Validate the graph structure:

```bash
python validate-graph.py learning-graph.csv
```

Analyze graph quality metrics:

```bash
python analyze-graph.py learning-graph.csv
```

Generate book metrics:

```bash
~/.claude/skills/book-metrics-generator/scripts/book-metrics-generator.sh
```

## Repository Structure

```
intro-to-graph/
├── docs/                              # MkDocs documentation source
│   ├── chapters/                      # Chapter content (12 chapters)
│   │   ├── 01-intro-graph-thinking-data-modeling/
│   │   │   ├── index.md              # Chapter markdown
│   │   │   └── quiz.md               # 10 quiz questions
│   │   ├── 02-database-systems-nosql/
│   │   └── ... (10 more chapters)
│   ├── learning-graph/                # Learning graph data and analysis
│   │   ├── learning-graph.csv         # Concept dependencies (source)
│   │   ├── learning-graph.json        # vis-network format (generated)
│   │   ├── book-metrics.md            # Overall book statistics
│   │   ├── chapter-metrics.md         # Per-chapter breakdown
│   │   ├── quality-metrics.md         # Graph quality analysis
│   │   ├── taxonomy-distribution.md   # Taxonomy analysis
│   │   ├── glossary-quality-report.md # Glossary quality assessment
│   │   ├── quiz-generation-report.md  # Quiz quality report
│   │   ├── csv-to-json.py             # CSV → JSON converter
│   │   ├── validate-graph.py          # DAG validation script
│   │   ├── analyze-graph.py           # Quality metrics generator
│   │   ├── taxonomy-distribution.py   # Taxonomy analysis
│   │   ├── color-config.json          # Taxonomy color mappings
│   │   ├── metadata.json              # Graph metadata
│   │   └── taxonomy-config.json       # Taxonomy definitions
│   ├── sims/                          # Interactive MicroSims
│   │   ├── graph-viewer/              # Learning graph viewer
│   │   ├── minimum-spanning-tree/     # MST visualization
│   │   ├── multi-hop-comparison/      # RDBMS vs Graph comparison
│   │   ├── org-chart/                 # Organizational chart model
│   │   └── rdbms-vs-graph-performance/ # Performance comparison
│   ├── stories/                       # Educational narratives
│   │   └── neighborhood-walk/         # Graph thinking introduction
│   ├── prompts/                       # AI generation prompts
│   ├── img/                           # Images and diagrams
│   ├── css/                           # Custom CSS
│   │   └── extra.css                  # Theme customization
│   ├── js/                            # Custom JavaScript
│   │   └── extra.js                   # Additional scripts
│   ├── course-description.md          # Full course overview
│   ├── glossary.md                    # 198 ISO 11179-compliant definitions
│   ├── faq.md                         # Frequently asked questions
│   ├── references.md                  # Curated references
│   ├── license.md                     # License details
│   └── index.md                       # Site homepage
├── plugins/                           # Custom MkDocs plugins
│   ├── social_override.py             # Social card customization
│   └── __init__.py
├── mkdocs.yml                         # MkDocs configuration
├── CLAUDE.md                          # Claude Code guidance
└── README.md                          # This file
```

## Course Content Overview

### Chapter Breakdown

| Chapter | Name | Words | Sections | Diagrams | Quiz Questions |
|---------|------|-------|----------|----------|----------------|
| 1 | Introduction to Graph Thinking | 4,749 | 23 | 5 | 10 |
| 2 | Database Systems and NoSQL | 6,109 | 25 | 1 | 10 |
| 3 | Labeled Property Graph Model | 6,525 | 33 | 0 | 10 |
| 4 | Query Languages | 4,925 | 42 | 0 | 10 |
| 5 | Performance and Benchmarking | 5,545 | 43 | 0 | 10 |
| 6 | Graph Algorithms | 7,247 | 30 | 6 | 10 |
| 7 | Social Network Modeling | 12,521 | 20 | 11 | 10 |
| 8 | Knowledge Representation | 8,398 | 32 | 6 | 10 |
| 9 | Modeling Patterns & Data Loading | 9,759 | 39 | 6 | 10 |
| 10 | Commerce, Supply Chain, IT | 7,852 | 27 | 4 | 10 |
| 11 | Financial, Healthcare, Regulatory | 7,786 | 21 | 3 | 10 |
| 12 | Advanced Topics & Distributed Systems | 9,123 | 29 | 7 | 10 |
| **Total** | **12 Chapters** | **133,308** | **364** | **49** | **120** |

### Learning Objectives by Bloom's Taxonomy

- **Remember:** Define nodes, edges, properties, labels, index-free adjacency
- **Understand:** Explain why RDBMS struggles with connected data, compare NoSQL types
- **Apply:** Construct LPG models, write openCypher/GSQL queries, load data, measure performance
- **Analyze:** Differentiate good/bad modeling choices, examine performance bottlenecks
- **Evaluate:** Justify graph vs. RDBMS decisions, critique schema designs, defend modeling choices
- **Create:** Design complete LPG schemas, develop multi-step queries, build end-to-end graph applications

## Technologies Used

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator for documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Modern, responsive theme with extensive features
- **[Python](https://www.python.org/)** - Data processing and graph analysis scripts
- **[vis-network](https://visjs.org/)** - Interactive network visualization library for learning graphs
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for the live site
- **[Claude AI](https://claude.ai)** - AI-assisted content generation and intelligent textbook development
- **[Claude Code](https://claude.ai/code)** - Agentic coding assistant for textbook construction
- **[Claude Skills](https://github.com/dmccreary/claude-skills)** - Reusable AI workflows for educational content

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it:

**[GitHub Issues](https://github.com/dmccreary/intro-to-graph/issues)**

When reporting issues, please include:

- Description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable, especially for MicroSims)
- Browser/environment details (for interactive visualizations)

## License

This work is licensed under the **[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/)**.

**You are free to:**

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [license.md](docs/license.md) for full details.

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Beautiful, feature-rich theme by Martin Donath
- **[vis-network](https://visjs.org/)** - Network visualization library for learning graphs
- **[Python](https://www.python.org/)** community - Data processing and analysis tools
- **[Claude AI](https://claude.ai)** by Anthropic - AI-assisted content generation and intelligent textbook development
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for open source educational projects

Special thanks to the educators and developers who contribute to making educational resources accessible, interactive, and open.

## Contact

**Dan McCreary**

- GitHub: [@dmccreary](https://github.com/dmccreary)
- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)

Questions, suggestions, or collaboration opportunities? Feel free to connect on LinkedIn or open an issue on GitHub.

---

**Built with Claude Code** | [View Source](https://github.com/dmccreary/intro-to-graph) | [Read the Course](https://dmccreary.github.io/intro-to-graph/)
