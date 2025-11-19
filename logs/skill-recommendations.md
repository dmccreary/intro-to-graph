# Skill Recommendations Based on Recent Activity

**Date:** November 19, 2025
**Context:** Post-microsim-screen-capture skill creation
**Current Skills:** 22 existing skills for MicroSim and intelligent textbook development

## Analysis of Recent Activity

### Recent Work Patterns
1. **MicroSim Standardization** - Frequent need to bring MicroSims up to quality standards
2. **Interactive Controls** - Adding sliders, checkboxes, and other UI controls to MicroSims
3. **Metadata Creation** - Writing Dublin Core metadata.json and YAML frontmatter
4. **Documentation** - Creating comprehensive lesson plans and technical documentation
5. **Screenshot Generation** - Capturing preview images for social media/documentation
6. **Quality Assessment** - Scoring MicroSims on standardization checklist

### Existing Skill Coverage
**Strong Coverage:**
- MicroSim creation (p5.js, vis-network, Chart.js, Mermaid, etc.)
- Learning graph generation and analysis
- Content generation (chapters, glossaries, quizzes, FAQs)
- Quality assessment (microsim-standardization, book-metrics)

**Gaps Identified:**
- Batch operations across multiple MicroSims
- Interactive control generation and templating
- Metadata automation
- Build/deploy workflows
- Cross-MicroSim pattern updates

## High-Priority Skill Recommendations

### 1. microsim-batch-processor
**Priority:** ⭐⭐⭐⭐⭐ HIGHEST

**Problem Solved:**
Running the same operation on multiple MicroSims is tedious and error-prone. Currently requires manual iteration through each MicroSim directory.

**Capabilities:**
- Execute standardization on all MicroSims in `/docs/sims/`
- Generate screenshots for all MicroSims missing preview images
- Update metadata.json files in bulk (e.g., add new field to all)
- Generate quality reports for all MicroSims
- Fix common issues across multiple MicroSims (broken links, missing files)
- Filter operations by criteria (quality score < 85, missing metadata, etc.)
- Parallel processing for speed
- Detailed operation logs and summaries

**Example Usage:**
```
"Run standardization and capture screenshots for all MicroSims with quality score < 85"
"Update all metadata.json files to add 'library' field based on main.html analysis"
"Generate a quality report for all vis-network MicroSims"
```

**Implementation Approach:**
- Python script that discovers all MicroSim directories
- Modular operation functions (standardize, screenshot, update_metadata, etc.)
- CLI with filters and operation selection
- Parallel execution with progress reporting
- Rollback capability for batch updates

**ROI:** Very High - Will be used constantly for maintenance and updates

---

### 2. microsim-interactive-controls-generator
**Priority:** ⭐⭐⭐⭐

**Problem Solved:**
Adding interactive controls (sliders, checkboxes, dropdowns) requires manual HTML/CSS/JavaScript coding. The org-chart session demonstrated this takes significant time even for common patterns.

**Capabilities:**
- Add pre-configured control types:
  - Sliders (range inputs with value display)
  - Checkboxes (toggle boolean states)
  - Dropdowns (select from options)
  - Radio buttons (mutually exclusive options)
  - Color pickers
  - Text inputs with validation
- Generate corresponding CSS styling (consistent with site theme)
- Create JavaScript event handlers with common patterns:
  - "Filter by count" (org-chart pattern)
  - "Toggle view mode" (org-chart pattern)
  - "Show/hide elements"
  - "Change colors/styling"
  - "Update data ranges"
- Update HTML structure automatically
- Add control labels and descriptions
- Integrate with existing MicroSim code

**Common Control Patterns:**
1. **Node Count Slider** - Filter visible nodes in network graphs
2. **View Mode Toggle** - Switch between different display formats
3. **Category Filter** - Show/hide items by category
4. **Speed Control** - Adjust animation speed in simulations
5. **Theme Selector** - Switch color schemes
6. **Data Range Selector** - Filter by numeric ranges

**Example Usage:**
```
"Add a slider to control animation speed from 0.5x to 2x in the moving-rainbow MicroSim"
"Add checkboxes to filter taxonomy categories in the learning-graph-viewer"
"Add a dropdown to select different layout algorithms in the org-chart"
```

**Implementation Approach:**
- Template-based HTML/CSS/JS generation
- Control type library with reusable patterns
- Integration helpers for common libraries (vis-network, p5.js, Chart.js)
- Style inheritance from site CSS
- Automated variable naming and event handler creation

**ROI:** High - Will accelerate MicroSim enhancement significantly

---

### 3. microsim-metadata-generator
**Priority:** ⭐⭐⭐⭐

**Problem Solved:**
Creating metadata.json with proper Dublin Core fields is repetitive, error-prone, and requires knowledge of the schema. YAML frontmatter in index.md must be kept in sync.

**Capabilities:**
- Interactive prompting for metadata fields:
  - Title, description (with character count guidance)
  - Creator, date (auto-filled with defaults)
  - Subject keywords (suggestions based on content analysis)
  - Educational level, Bloom's taxonomy
  - Prerequisites and concepts
  - Library detection (automatic from main.html)
- Generate properly formatted metadata.json (validated against schema)
- Update index.md YAML frontmatter
- Suggest appropriate values based on:
  - MicroSim directory name
  - Analysis of main.html content
  - Existing similar MicroSims
  - Learning graph concepts
- Validate against Dublin Core schema
- Update existing metadata (add missing fields, fix format)
- Batch metadata generation with defaults

**Dublin Core Fields:**
- **Required:** title, description, creator, date, subject, type, format, language, rights
- **Educational:** audience, educationalLevel, bloomsLevel, prerequisites, concepts
- **Technical:** library, version, dependencies

**Example Usage:**
```
"Generate metadata for the timeline MicroSim"
"Update metadata.json for all Chart.js MicroSims to include proper Bloom's levels"
"Fix metadata.json format issues in the bubble-chart MicroSim"
```

**Implementation Approach:**
- Schema-driven prompt generation
- Content analysis for automatic suggestions
- Validation against metadata.json schema
- Sync with index.md YAML frontmatter
- Template library for common MicroSim types

**ROI:** High - Required for every new MicroSim and quality standards

---

### 4. microsim-lesson-plan-generator
**Priority:** ⭐⭐⭐⭐

**Problem Solved:**
Writing comprehensive lesson plans is time-consuming and requires educational expertise. The org-chart session showed a detailed lesson plan takes significant effort.

**Capabilities:**
- Analyze MicroSim content, concepts, and complexity
- Generate learning objectives aligned with Bloom's taxonomy:
  - Remember (recall concepts)
  - Understand (explain relationships)
  - Apply (use in context)
  - Analyze (break down components)
  - Evaluate (make judgments)
  - Create (design new solutions)
- Create age-appropriate activities based on educational level:
  - Junior high (ages 12-14)
  - Senior high (ages 15-18)
  - Undergraduate (ages 18-22)
  - Graduate (ages 22+)
- Suggest assessment methods:
  - Formative (during lesson)
  - Summative (end of lesson)
  - Extended (homework/projects)
- Include prerequisite checks
- Generate time estimates (broken down by activity)
- Add extension activities for advanced students
- Include discussion prompts and key questions

**Lesson Plan Structure:**
1. Target Audience & Duration
2. Learning Objectives (3-5 objectives)
3. Prerequisites
4. Materials Needed
5. Activities (with timings)
   - Introduction/Hook
   - Exploration
   - Guided Practice
   - Independent Practice
   - Closure
6. Assessment Methods
7. Extensions & Differentiation
8. Key Vocabulary/Concepts

**Example Usage:**
```
"Create a lesson plan for the bubble-chart MicroSim targeting undergraduate students"
"Generate a 30-minute lesson plan for the org-chart visualization for high school students"
"Create lesson plans for all graph algorithm MicroSims"
```

**Implementation Approach:**
- Template-based generation with customization
- Bloom's taxonomy mapping from metadata
- Activity generators for different learning styles
- Time estimation based on complexity
- Integration with learning graph concepts

**ROI:** High - Significantly enhances educational value of MicroSims

---

### 5. intelligent-textbook-build-and-deploy
**Priority:** ⭐⭐⭐⭐

**Problem Solved:**
Building and deploying the textbook involves multiple manual steps with various validation checks. Errors can occur at any step, requiring restart.

**Capabilities:**
- Pre-build validation:
  - All MicroSims have required files (main.html, index.md, metadata.json)
  - No MicroSims below quality threshold (configurable, e.g., 85/100)
  - All chapters have proper structure
  - Learning graph is valid (no cycles)
  - No broken internal links
- Automated screenshot generation:
  - Identify MicroSims missing preview images
  - Generate screenshots using microsim-screen-capture
  - Update metadata references
- Build process:
  - Run `mkdocs build` with error checking
  - Capture and parse error messages
  - Provide actionable fix suggestions
- Post-build validation:
  - Check generated site structure
  - Verify all assets copied correctly
  - Test key pages render
- Deployment:
  - Run `mkdocs gh-deploy`
  - Verify deployment success
  - Check live site accessibility
- Reporting:
  - Build log with timestamps
  - Summary of issues fixed
  - Deployment confirmation with URL
  - Quality metrics (page count, MicroSim count, etc.)

**Workflow Stages:**
1. **Validate** - Check all prerequisites
2. **Prepare** - Generate missing screenshots, fix known issues
3. **Build** - Run mkdocs build with error handling
4. **Verify** - Check build output
5. **Deploy** - Push to GitHub Pages
6. **Confirm** - Verify live site

**Example Usage:**
```
"Build and deploy the textbook after checking all MicroSims are standardized"
"Build the site and show me any errors without deploying"
"Deploy to GitHub Pages and verify all MicroSims load correctly"
```

**Implementation Approach:**
- Multi-stage pipeline with checkpoints
- Rollback on errors
- Detailed logging at each stage
- Integration with existing skills (microsim-screen-capture, microsim-standardization)
- Dry-run mode for testing

**ROI:** Very High - Used multiple times per day for development workflow

---

### 6. microsim-update-from-template
**Priority:** ⭐⭐⭐

**Problem Solved:**
When updating a pattern (like the org-chart controls styling), manually applying it to other similar MicroSims is tedious and error-prone.

**Capabilities:**
- Identify similar MicroSims based on:
  - Same JavaScript library (vis-network, p5.js, Chart.js)
  - Same structural pattern (network graphs, timelines, charts)
  - Same HTML structure
- Apply structural updates across multiple MicroSims:
  - Update HTML boilerplate
  - Apply CSS pattern updates
  - Modernize JavaScript patterns
  - Update library versions
- Preserve MicroSim-specific content:
  - Custom styling
  - Unique data structures
  - Special features
  - Documentation
- Preview changes before applying
- Selective application (choose which updates to apply)
- Rollback capability

**Common Update Patterns:**
1. **Control Styling Updates** - Apply new control CSS to all MicroSims
2. **Library Version Updates** - Update CDN links to latest versions
3. **Accessibility Improvements** - Add ARIA labels, keyboard navigation
4. **Responsive Design** - Update viewport handling
5. **Error Handling** - Add consistent error messaging
6. **Loading States** - Add loading indicators

**Example Usage:**
```
"Update all vis-network MicroSims to use the same control styling as org-chart"
"Apply the new responsive CSS pattern to all Chart.js MicroSims"
"Update all MicroSims to use the latest CDN versions"
```

**Implementation Approach:**
- Template extraction from source MicroSim
- Diff-based updating with merge conflict detection
- Dry-run mode showing changes
- Backup before applying
- Validation after update

**ROI:** Medium-High - Valuable for maintaining consistency across MicroSims

---

## Medium-Priority Skill Recommendations

### 7. microsim-quality-reporter
**Priority:** ⭐⭐⭐

**Problem Solved:**
Quality scoring is currently manual in microsim-standardization. Tracking quality improvements over time requires manual record-keeping.

**Capabilities:**
- Generate quality scores for all MicroSims (automated)
- Create comparison reports:
  - Before/after standardization
  - Historical trends over time
  - Quality distribution across MicroSim types
- Identify lowest-scoring MicroSims needing work
- Track quality improvements with timestamps
- Export reports to markdown/CSV/JSON
- Generate quality badges for README files
- Create quality dashboards

**Report Types:**
1. **Individual MicroSim Report** - Detailed breakdown with checklist
2. **Aggregate Report** - All MicroSims with summary statistics
3. **Trend Report** - Quality changes over time
4. **Priority Report** - Lowest-scoring MicroSims ranked
5. **Completion Report** - Progress toward quality goals

**Example Usage:**
```
"Generate quality scores for all MicroSims and show which need work"
"Create a trend report showing quality improvements over the past month"
"Export quality metrics to CSV for analysis"
```

**ROI:** Medium - Useful for tracking progress and prioritizing work

---

### 8. learning-graph-to-microsim-mapper
**Priority:** ⭐⭐⭐

**Problem Solved:**
Your learning graph has 200 concepts. Knowing which concepts have MicroSims and which don't is currently manual cross-referencing.

**Capabilities:**
- Analyze all MicroSim metadata.json `concepts` fields
- Cross-reference with learning-graph.json concepts
- Generate coverage reports:
  - Which concepts have MicroSims
  - Which concepts lack visualization
  - Which MicroSims cover multiple concepts
  - Concept-to-MicroSim mapping
- Suggest MicroSims to create based on concept gaps
- Identify redundant MicroSims (overlapping concepts)
- Update chapter content to link relevant MicroSims
- Generate concept index with MicroSim references

**Reports Generated:**
1. **Coverage Matrix** - Grid showing concept coverage
2. **Gap Analysis** - Concepts without MicroSims
3. **Redundancy Report** - Overlapping MicroSims
4. **Chapter Integration** - Which chapters need MicroSim links
5. **Priority Queue** - Suggested MicroSims to create next

**Example Usage:**
```
"Show me which learning graph concepts don't have MicroSims"
"Map all vis-network MicroSims to their learning graph concepts"
"Suggest new MicroSims to create based on concept gaps"
```

**ROI:** Medium - Strategic value for planning MicroSim development

---

### 9. microsim-accessibility-checker
**Priority:** ⭐⭐⭐

**Problem Solved:**
Educational content should be accessible to all students. WCAG compliance is currently not validated.

**Capabilities:**
- Check color contrast ratios (WCAG AA/AAA standards)
- Validate alt text on images and icons
- Check keyboard navigation (tab order, focus states)
- Test screen reader compatibility
- Verify proper heading hierarchy
- Check form label associations
- Validate ARIA attributes
- Test with color blindness simulation
- Generate accessibility reports with severity levels
- Suggest fixes for common issues
- Automated fix application for simple issues

**Accessibility Checks:**
1. **Color Contrast** - Text/background ratios (4.5:1 minimum)
2. **Keyboard Navigation** - All interactive elements accessible
3. **Screen Reader** - Proper ARIA labels and descriptions
4. **Focus Indicators** - Visible focus states
5. **Semantic HTML** - Proper heading structure
6. **Form Labels** - All inputs properly labeled
7. **Alternative Text** - All images have alt text
8. **Color Independence** - Information not conveyed by color alone

**Example Usage:**
```
"Check accessibility of all MicroSims and generate a report"
"Fix color contrast issues in the org-chart MicroSim"
"Test keyboard navigation for all vis-network MicroSims"
```

**ROI:** Medium - Important for educational standards compliance

---

## Top 3 Priority Recommendations

Based on immediate value, frequency of use, and ROI:

### 🥇 1. microsim-batch-processor
**Why:** Highest ROI - will be used constantly for maintenance, updates, and bulk operations. Saves significant time on repetitive tasks.

**Immediate Use Cases:**
- Standardize all MicroSims before major release
- Generate screenshots for all MicroSims missing them
- Update metadata across all MicroSims
- Generate quality reports

---

### 🥈 2. microsim-interactive-controls-generator
**Why:** Significantly accelerates MicroSim enhancement. The org-chart session showed this takes considerable time to do manually.

**Immediate Use Cases:**
- Add interactive controls to existing MicroSims
- Enhance user experience across all visualizations
- Standardize control patterns

---

### 🥉 3. intelligent-textbook-build-and-deploy
**Why:** Streamlines the most common daily workflow. Reduces errors and automates validation.

**Immediate Use Cases:**
- Daily development builds
- Pre-deployment validation
- Automated quality checks before publish

---

## Implementation Priority Queue

Suggested order of development:

1. **microsim-batch-processor** (1-2 days)
2. **intelligent-textbook-build-and-deploy** (1 day)
3. **microsim-interactive-controls-generator** (2-3 days)
4. **microsim-metadata-generator** (1 day)
5. **microsim-lesson-plan-generator** (1-2 days)
6. **microsim-update-from-template** (2 days)
7. **microsim-quality-reporter** (1 day)
8. **learning-graph-to-microsim-mapper** (1 day)
9. **microsim-accessibility-checker** (2 days)

**Total Estimated Effort:** 12-15 development days

---

## Synergy Opportunities

Skills that work particularly well together:

1. **microsim-batch-processor** + **microsim-screen-capture**
   - Automate screenshot generation for all MicroSims

2. **microsim-batch-processor** + **microsim-standardization**
   - Standardize all MicroSims in one operation

3. **intelligent-textbook-build-and-deploy** + **microsim-quality-reporter**
   - Pre-build quality validation

4. **microsim-metadata-generator** + **learning-graph-to-microsim-mapper**
   - Auto-populate concepts field from learning graph

5. **microsim-interactive-controls-generator** + **microsim-update-from-template**
   - Apply control patterns across similar MicroSims

---

## Long-Term Vision

As the skill ecosystem grows, consider:

1. **Skill Orchestration** - Meta-skills that coordinate multiple skills
2. **Dependency Management** - Skills that require other skills
3. **Skill Documentation** - Auto-generated skill catalog with examples
4. **Skill Testing** - Validate skills still work after updates
5. **Skill Metrics** - Track which skills are most valuable

---

## Next Steps

**Recommendation:** Start with **microsim-batch-processor** as it will immediately provide value and be used constantly.

**Question to Consider:** Which of these skills would have the biggest immediate impact on your current work?
