#!/usr/bin/env python3
"""Simple graph validation script"""
import csv
from collections import defaultdict, deque

def load_graph(csv_path):
    """Load graph from CSV"""
    concepts = {}
    dependencies = defaultdict(list)

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            concept_id = int(row['ConceptID'])
            label = row['ConceptLabel']
            deps = row['Dependencies'].strip()

            concepts[concept_id] = label

            if deps:
                dep_list = [int(d) for d in deps.split('|')]
                dependencies[concept_id] = dep_list

    return concepts, dependencies

def check_self_dependencies(concepts, dependencies):
    """Check for self-dependencies"""
    self_deps = []
    for concept_id, deps in dependencies.items():
        if concept_id in deps:
            self_deps.append((concept_id, concepts[concept_id]))
    return self_deps

def check_invalid_dependencies(concepts, dependencies):
    """Check for dependencies on non-existent concepts"""
    invalid = []
    for concept_id, deps in dependencies.items():
        for dep in deps:
            if dep not in concepts:
                invalid.append((concept_id, concepts[concept_id], dep))
    return invalid

def has_cycle_dfs(concepts, dependencies):
    """Check for cycles using DFS"""
    WHITE, GRAY, BLACK = 0, 1, 2
    color = {node: WHITE for node in concepts}

    def visit(node, path=[]):
        if color[node] == GRAY:
            # Found a cycle
            cycle_start = path.index(node) if node in path else 0
            return True, path[cycle_start:] + [node]

        if color[node] == BLACK:
            return False, []

        color[node] = GRAY
        path.append(node)

        for neighbor in dependencies.get(node, []):
            has_cycle, cycle = visit(neighbor, path[:])
            if has_cycle:
                return True, cycle

        path.pop()
        color[node] = BLACK
        return False, []

    for node in concepts:
        if color[node] == WHITE:
            has_cycle, cycle = visit(node)
            if has_cycle:
                return True, cycle

    return False, []

def analyze_graph(csv_path):
    """Analyze graph structure"""
    print("Loading graph...")
    concepts, dependencies = load_graph(csv_path)

    print(f"\nTotal concepts: {len(concepts)}")
    print(f"Concepts with dependencies: {len(dependencies)}")
    print(f"Foundational concepts: {len(concepts) - len(dependencies)}")

    # Check for self-dependencies
    print("\nChecking for self-dependencies...")
    self_deps = check_self_dependencies(concepts, dependencies)
    if self_deps:
        print(f"❌ Found {len(self_deps)} self-dependencies:")
        for concept_id, label in self_deps:
            print(f"  - {concept_id}: {label}")
    else:
        print("✓ No self-dependencies found")

    # Check for invalid dependencies
    print("\nChecking for invalid dependencies...")
    invalid = check_invalid_dependencies(concepts, dependencies)
    if invalid:
        print(f"❌ Found {len(invalid)} invalid dependencies:")
        for concept_id, label, dep in invalid:
            print(f"  - {concept_id}: {label} depends on non-existent concept {dep}")
    else:
        print("✓ No invalid dependencies found")

    # Check for cycles
    print("\nChecking for cycles...")
    has_cycle, cycle = has_cycle_dfs(concepts, dependencies)
    if has_cycle:
        print(f"❌ Found cycle:")
        cycle_labels = [f"{c}:{concepts[c]}" for c in cycle]
        print(f"  {' -> '.join(cycle_labels)}")
    else:
        print("✓ Graph is a valid DAG (no cycles)")

    # Calculate statistics
    print("\nDependency statistics:")
    dep_counts = [len(deps) for deps in dependencies.values()]
    if dep_counts:
        print(f"  Average dependencies per concept: {sum(dep_counts)/len(dep_counts):.2f}")
        print(f"  Max dependencies: {max(dep_counts)}")
        print(f"  Min dependencies (non-zero): {min(dep_counts)}")

    # Indegree analysis
    indegree = defaultdict(int)
    for deps in dependencies.values():
        for dep in deps:
            indegree[dep] += 1

    print("\nTop 10 most depended-upon concepts:")
    sorted_indegree = sorted(indegree.items(), key=lambda x: x[1], reverse=True)[:10]
    for concept_id, count in sorted_indegree:
        print(f"  {concept_id:3d}. {concepts[concept_id]:30s} ({count} dependencies)")

    return not (self_deps or invalid or has_cycle)

if __name__ == '__main__':
    import sys
    if len(sys.argv) > 1:
        csv_path = sys.argv[1]
    else:
        csv_path = 'learning-graph.csv'

    valid = analyze_graph(csv_path)
    sys.exit(0 if valid else 1)
