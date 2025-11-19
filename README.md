# Introduction to Graph Databases

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/intro-to-graph/)
[![GitHub](https://img.shields.io/badge/GitHub-dmccreary%2Fintro--to--graph-blue?logo=github)](https://github.com/dmccreary/intro-to-graph)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![vis-network](https://img.shields.io/badge/vis--network-visualization-orange)](https://visjs.org/)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
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

| Metric | Count |
|--------|-------|
| Concepts in Learning Graph | 200 |
| Taxonomies (Concept Categories) | 12 |
| Markdown Files | 18 |
| MicroSims (Interactive Visualizations) | 1 |
| Images | 3 |
| Python Analysis Scripts | 5 |

**Current Status:** Learning graph complete with 200 concepts and full taxonomy classification. Chapter content development in progress.

## Key Features

### Learning Graph Architecture

The foundational innovation of this textbook is its **learning graph** - a comprehensive concept dependency network where:

- Each concept has explicit prerequisites (dependencies)
- DAG structure ensures no circular dependencies
- 12 color-coded taxonomies organize concepts by domain
- Foundational concepts (left) to advanced concepts (right) progression
- Interactive graph viewer with search, filtering, and statistics

### Interactive MicroSims

The **Graph Viewer MicroSim** provides an interactive visualization of the learning graph using vis-network.js, featuring:

- Visual exploration of all 200 concepts and their relationships
- Filter by taxonomy (Foundation, Graph Model, Query Languages, Performance, etc.)
- Search functionality to find specific concepts
- Real-time statistics (node count, edge count, orphan detection)
- Expandable/collapsible sidebar for legend and controls

### Educational Framework

- **Course Duration:** 14 weeks, 3 credits
- **Target Audience:** Junior/senior undergraduates or graduate students
- **Prerequisites:** Database/data modeling coursework, basic programming (Python/JavaScript)
- **Pedagogy:** Bloom's Taxonomy alignment with six cognitive levels
- **Assessment:** Concept mastery tracking through dependency graph

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

## Repository Structure

```
intro-to-graph/
├── docs/                              # MkDocs documentation source
│   ├── learning-graph/                # Learning graph data and analysis
│   │   ├── learning-graph.csv         # Concept dependencies (source)
│   │   ├── learning-graph.json        # vis-network format (generated)
│   │   ├── csv-to-json.py             # CSV → JSON converter
│   │   ├── validate-graph.py          # DAG validation script
│   │   ├── analyze-graph.py           # Quality metrics generator
│   │   ├── taxonomy-distribution.py   # Taxonomy analysis
│   │   ├── color-config.json          # Taxonomy color mappings
│   │   ├── metadata.json              # Graph metadata
│   │   └── taxonomy-config.json       # Taxonomy definitions
│   ├── sims/                          # Interactive MicroSims
│   │   └── graph-viewer/              # Learning graph viewer
│   │       ├── main.html              # Standalone visualization
│   │       ├── script.js              # Viewer logic
│   │       ├── local.css              # Styling
│   │       └── index.md               # Documentation
│   ├── img/                           # Images and diagrams
│   ├── css/                           # Custom CSS
│   │   └── extra.css                  # Theme customization
│   ├── js/                            # Custom JavaScript
│   │   └── extra.js                   # Additional scripts
│   ├── course-description.md          # Full course overview
│   ├── glossary.md                    # Term definitions
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

### Week-by-Week Topics

1. **Introduction to Graph Thinking** - Why graphs outperform tables for connected data
2. **NoSQL and the Rise of Graphs** - Key-value, document, wide-column, and graph stores
3. **Labeled Property Graph Model** - Nodes, edges, labels, properties, and schema
4. **Query Languages** - openCypher, GSQL, and GQL standards
5. **Index-Free Adjacency & Performance** - Traversal fundamentals and cost comparison
6. **Benchmarking Techniques** - LDBC, Graph 500, performance measurement
7. **Social Networks & Language Modeling** - Friend graphs, influence, sentiment
8. **Knowledge Representation** - Concept graphs, ontologies, SKOS, knowledge management
9. **Graph Algorithms** - BFS, DFS, A*, PageRank, community detection
10. **Graph Modeling Patterns** - Supernodes, hyperedges, temporal modeling
11-12. **Industry Reference Models** - E-commerce, BOM, supply chain, fraud detection, healthcare
13-14. **Capstone Projects** - End-to-end graph applications with presentations

### Learning Objectives by Bloom's Taxonomy

- **Remember:** Define nodes, edges, properties, labels, index-free adjacency
- **Understand:** Explain why RDBMS struggles with connected data, compare NoSQL types
- **Apply:** Construct LPG models, write openCypher/GSQL queries, load data, measure performance
- **Analyze:** Differentiate good/bad modeling choices, examine performance bottlenecks
- **Evaluate:** Justify graph vs. RDBMS decisions, critique schema designs, defend modeling choices
- **Create:** Design complete LPG schemas, develop multi-step queries, build end-to-end graph applications

## Technologies Used

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator for documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Modern, responsive theme
- **[Python](https://www.python.org/)** - Data processing and graph analysis scripts
- **[vis-network](https://visjs.org/)** - Interactive network visualization library
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for the live site
- **[Claude AI](https://claude.ai)** - AI-assisted content generation and analysis

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
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Beautiful, feature-rich theme
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
