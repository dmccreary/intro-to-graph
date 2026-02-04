// Simple Graph MicroSim
// A fixed-position graph demonstrating nodes and edges with property inspection

let network;
let nodes;
let edges;

function initNetwork() {
    const container = document.getElementById('network');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculate positions and size
    const nodeSize = containerWidth / 7; // 1/10th of canvas width
    const yPosition = containerHeight / 2; // Halfway down
    const danX = containerWidth * 0.12; // 25% from left
    const annX = containerWidth * 0.65; // 50% from left

    // Create nodes with properties
    nodes = new vis.DataSet([
        {
            id: 1,
            label: 'Person',
            shape: 'ellipse',
            x: danX,
            y: yPosition,
            fixed: true,
            widthConstraint: { minimum: nodeSize, maximum: nodeSize },
            heightConstraint: { minimum: nodeSize * 0.6, maximum: nodeSize * 0.6 },
            color: {
                background: 'lightblue',
                border: 'blue',
                highlight: {
                    background: 'red',
                    border: 'black'
                }
            },
            font: {
                color: 'white',
                size: 24,
                face: 'Arial',
                multi: true
            },
            // Custom properties
            type: 'Person',
            age: 65
        },
        {
            id: 2,
            label: 'Person',
            shape: 'ellipse',
            x: annX,
            y: yPosition,
            fixed: true,
            widthConstraint: { minimum: nodeSize, maximum: nodeSize },
            heightConstraint: { minimum: nodeSize * 0.6, maximum: nodeSize * 0.6 },
            color: {
                background: 'lightblue',
                border: 'blue',
                highlight: {
                    background: 'red',
                    border: 'black'
                }
            },
            font: {
                color: 'white',
                size: 24,
                face: 'Arial',
                multi: true
            },
            // Custom properties
            type: 'Person',
            age: 69
        }
    ]);

    // Create edge with properties
    edges = new vis.DataSet([
        {
            id: 'e1',
            from: 1,
            to: 2,
            label: 'FRIEND_OF',
            arrows: 'to',
            color: {
                color: '#95a5a6',
                highlight: '#7f8c8d'
            },
            width: 3,
            font: {
                size: 14,
                color: '#2c3e50',
                background: 'white',
                strokeWidth: 0
            },
            // Custom properties
            since: 2002
        }
    ]);

    // Network options with physics disabled
    const options = {
        physics: {
            enabled: false
        },
        interaction: {
            dragNodes: false,
            dragView: true,
            zoomView: true
        },
        nodes: {
            shape: 'dot',
            borderWidth: 3
        },
        edges: {
            smooth: {
                type: 'continuous'
            }
        }
    };

    // Create network
    const data = {
        nodes: nodes,
        edges: edges
    };

    network = new vis.Network(container, data, options);

    // Add click event listeners
    network.on('click', function(params) {
        if (params.nodes.length > 0) {
            // Node was clicked
            showNodeProperties(params.nodes[0]);
        } else if (params.edges.length > 0) {
            // Edge was clicked
            showEdgeProperties(params.edges[0]);
        } else {
            // Empty space clicked
            clearInspector();
        }
    });
}

function showNodeProperties(nodeId) {
    const node = nodes.get(nodeId);
    const inspectorContent = document.getElementById('inspector-content');

    let html = '';
    html += createPropertyRow('ID', node.id);
    html += createPropertyRow('Label', node.label);
    html += createPropertyRow('Type', node.type);
    html += createPropertyRow('Age', node.age);
    html += createPropertyRow('Position X', Math.round(node.x));
    html += createPropertyRow('Position Y', Math.round(node.y));
    html += createPropertyRow('Size', Math.round(node.size));
    html += createPropertyRow('Fixed Position', node.fixed ? 'Yes' : 'No');

    inspectorContent.innerHTML = html;
}

function showEdgeProperties(edgeId) {
    const edge = edges.get(edgeId);
    const fromNode = nodes.get(edge.from);
    const toNode = nodes.get(edge.to);
    const inspectorContent = document.getElementById('inspector-content');

    let html = '';
    html += createPropertyRow('ID', edge.id);
    html += createPropertyRow('Type', edge.label);
    html += createPropertyRow('From', `${fromNode.label} (ID: ${fromNode.id})`);
    html += createPropertyRow('To', `${toNode.label} (ID: ${toNode.id})`);
    html += createPropertyRow('Since', edge.since);
    html += createPropertyRow('Direction', 'Directed (→)');
    html += createPropertyRow('Width', edge.width);

    inspectorContent.innerHTML = html;
}

function createPropertyRow(label, value) {
    return `
        <div class="property-row" style="padding: 5px 0;">
            <span class="property-label" style="font-weight: bold;">${label}:</span>
            <span class="property-value"> ${value}</span>
        </div>
    `;
}

function clearInspector() {
    const inspectorContent = document.getElementById('inspector-content');
    inspectorContent.innerHTML = '<div class="no-selection">Click on a node or edge to view properties</div>';
}

// Handle window resize
function handleResize() {
    const container = document.getElementById('network');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const nodeSize = containerWidth / 10;
    const yPosition = containerHeight / 2;
    const danX = containerWidth * 0.25;
    const annX = containerWidth * 0.5;

    // Update node positions and sizes
    nodes.update([
        {
            id: 1,
            x: danX,
            y: yPosition,
            widthConstraint: { minimum: nodeSize, maximum: nodeSize },
            heightConstraint: { minimum: nodeSize * 0.6, maximum: nodeSize * 0.6 }
        },
        {
            id: 2,
            x: annX,
            y: yPosition,
            widthConstraint: { minimum: nodeSize, maximum: nodeSize },
            heightConstraint: { minimum: nodeSize * 0.6, maximum: nodeSize * 0.6 }
        }
    ]);

    // Redraw network
    if (network) {
        network.redraw();
    }
}

// Initialize on load
window.addEventListener('load', function() {
    initNetwork();
});

// Handle window resize with debouncing
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
});
