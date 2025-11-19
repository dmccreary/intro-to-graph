# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **intelligent textbook** for teaching "Introduction to Graph Databases" built with MkDocs and the Material theme. The project follows the intelligent textbook pattern with a core **learning graph** at its foundation - a directed acyclic graph (DAG) representing concept dependencies that forms the knowledge structure for the course.

**Published Site:** https://dmccreary.github.io/intro-to-graph/

**Repository:** https://github.com/dmccreary/intro-to-graph

## Key Architecture Components

### 1. Learning Graph System

The learning graph is the foundational data structure representing 200 concepts and their dependencies:

- **Source Format:** CSV file at `docs/learning-graph/learning-graph.csv`
  - Columns: `ConceptID`, `ConceptLabel`, `Dependencies`, `TaxonomyID`
  - Dependencies use pipe-separated IDs (e.g., `5|12|23`)
  - Empty dependencies indicate foundational concepts

- **Target Format:** JSON file at `docs/learning-graph/learning-graph.json`
  - vis-network.js compatible format
  - Contains: metadata, groups (taxonomies), nodes, edges
  - Used by the interactive graph viewer

- **Key Scripts:**
  - `csv-to-json.py`: Converts CSV to JSON format for visualization
  - `validate-graph.py`: Validates DAG structure (no cycles, no self-dependencies, no invalid references)
  - `analyze-graph.py`: Generates graph quality metrics
  - `taxonomy-distribution.py`: Analyzes concept distribution across taxonomies

### 2. Taxonomy System

Concepts are categorized into 12 taxonomies (color-coded in visualizations):

- FOUND (Foundation Concepts) - red
- GRAPH (Graph Data Model) - orange
- QUERY (Query Languages) - yellow
- PERF (Performance & Optimization) - lightgreen
- ALGO (Graph Algorithms) - blue
- SOCIAL (Social Networks) - purple
- KNOWL (Knowledge Representation) - cyan
- PATTE (Graph Patterns) - pink
- BENCH (Benchmarking) - brown
- INDUS (Industry Applications) - lightgray
- USECS (Use Cases) - magenta
- CAPST (Capstone Projects) - darkgray

Taxonomy configuration is stored in `docs/learning-graph/taxonomy-config.json` and `docs/learning-graph/color-config.json`.

### 3. MkDocs Structure

- **Configuration:** `mkdocs.yml` defines site structure, theme, and navigation
- **Content:** All markdown files live in `docs/`
- **Theme:** Material theme with custom CSS (`docs/css/extra.css`)
- **Plugins:**
  - Standard search
  - Social cards (requires imaging libraries via brew on Mac)
  - Custom `social_override` plugin in `plugins/social_override.py`

### 4. MicroSims (Interactive Visualizations)

Educational simulations embedded via iframes, stored in `docs/sims/`:

- **Graph Viewer:** Interactive learning graph explorer at `docs/sims/graph-viewer/`
  - Uses vis-network.js library
  - Reads from `learning-graph.json`
  - Features: search, filtering by taxonomy, statistics
  - Files: `main.html`, `script.js`, `local.css`

MicroSims follow a standard pattern with `index.md` documentation and `main.html` viewer.

## Development Commands

### Environment Setup

This project uses conda for environment management:

```sh
conda deactivate
conda create -n mkdocs python=3
conda activate mkdocs
pip install mkdocs "mkdocs-material[imaging]"
```

**Note:** Material social imaging requires additional libraries on Mac:
```sh
brew install cairo freetype libffi libjpeg libpng zlib
export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib
```

### Building and Serving

```sh
# Build the site (output to site/)
mkdocs build

# Serve locally at http://localhost:8000 with auto-reload
mkdocs serve

# Deploy to GitHub Pages
mkdocs gh-deploy
```

**Important:** `mkdocs gh-deploy` does NOT commit your source changes to git. Always commit separately.

### Learning Graph Workflow

When working with the learning graph:

```sh
cd docs/learning-graph

# After editing learning-graph.csv, regenerate JSON:
python csv-to-json.py learning-graph.csv learning-graph.json color-config.json metadata.json

# Validate the graph structure:
python validate-graph.py learning-graph.csv

# Generate quality metrics:
python analyze-graph.py learning-graph.csv

# Analyze taxonomy distribution:
python taxonomy-distribution.py learning-graph.csv
```

## File Organization Principles

- **Course content:** Markdown files in `docs/` organized by topic
- **Learning graph data:** CSV/JSON in `docs/learning-graph/`
- **Learning graph analysis:** Python scripts in `docs/learning-graph/`
- **MicroSims:** Each in its own subdirectory under `docs/sims/`
- **Static assets:** Images in `docs/img/`, CSS in `docs/css/`, JS in `docs/js/`
- **Custom plugins:** Python modules in `plugins/`

## Course-Specific Context

This textbook teaches graph databases with focus on:

- Labeled Property Graph (LPG) model
- Query languages: openCypher, GSQL, GQL
- Index-free adjacency and performance
- Real-world applications: social networks, fraud detection, supply chain, healthcare
- Graph algorithms and benchmarking

**Target Audience:** Undergraduate (Junior/Senior) or Graduate Introductory Level
**Duration:** 14 weeks, 3 credits
**Prerequisites:** Prior database/data modeling coursework, basic programming

## Learning Graph Philosophy

The learning graph represents conceptual dependencies - an edge from A to B means "concept A depends on understanding concept B first." This creates a pedagogical roadmap:

- **Left side:** Foundational concepts (no dependencies)
- **Right side:** Advanced concepts (many dependencies)
- **DAG structure:** No circular dependencies
- **Taxonomy colors:** Visual grouping of related concepts

The graph should remain acyclic and validate successfully with `validate-graph.py` after any changes.

## Common Workflows

### Adding a New Concept

1. Add row to `docs/learning-graph/learning-graph.csv` with next ConceptID
2. Specify dependencies as pipe-separated IDs
3. Assign appropriate TaxonomyID
4. Regenerate JSON: `python csv-to-json.py learning-graph.csv learning-graph.json color-config.json metadata.json`
5. Validate: `python validate-graph.py learning-graph.csv`
6. Update glossary in `docs/glossary.md` if needed

### Creating a New MicroSim

1. Create directory under `docs/sims/new-sim-name/`
2. Add `main.html` with the interactive visualization
3. Add `index.md` with documentation and iframe embed
4. Update navigation in `mkdocs.yml` under MicroSims section
5. Reference in relevant chapter content

### Updating Course Content

1. Edit markdown files in `docs/`
2. Test locally with `mkdocs serve`
3. Verify all links and references work
4. Build and deploy with `mkdocs gh-deploy`
