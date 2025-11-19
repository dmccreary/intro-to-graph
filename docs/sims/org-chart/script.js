// Fetch and initialize the organization chart
async function initOrgChart() {
    try {
        // Load data from data.json
        const response = await fetch('data.json');
        const data = await response.json();

        // Create vis.js DataSets
        const nodes = new vis.DataSet(data.nodes);
        const edges = new vis.DataSet(data.edges);

        // Get the network container
        const container = document.getElementById('mynetwork');

        // Prepare data object
        const networkData = {
            nodes: nodes,
            edges: edges
        };

        // Configure network options
        const options = {
            layout: {
                hierarchical: {
                    direction: 'UD', // Up-Down (top-down)
                    sortMethod: 'directed',
                    nodeSpacing: 150,
                    levelSeparation: 120,
                    treeSpacing: 200
                }
            },
            nodes: {
                shape: 'box',
                margin: 10,
                widthConstraint: {
                    maximum: 150
                },
                font: {
                    size: 12,
                    face: 'Arial',
                    multi: true
                },
                borderWidth: 2,
                shadow: true
            },
            edges: {
                arrows: {
                    to: {
                        enabled: true,
                        scaleFactor: 0.5
                    }
                },
                color: {
                    color: '#848484',
                    highlight: '#2B7CE9'
                },
                width: 2,
                smooth: {
                    type: 'cubicBezier',
                    forceDirection: 'vertical',
                    roundness: 0.4
                }
            },
            interaction: {
                dragNodes: true,
                dragView: true,
                zoomView: true,
                hover: true
            },
            physics: {
                enabled: false
            }
        };

        // Create the network
        const network = new vis.Network(container, networkData, options);

        // Fit the network to the container after initialization
        network.once('stabilizationIterationsDone', function() {
            network.fit();
        });

    } catch (error) {
        console.error('Error loading organization chart:', error);
    }
}

// Initialize the chart when the page loads
document.addEventListener('DOMContentLoaded', initOrgChart);
