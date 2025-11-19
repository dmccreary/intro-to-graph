# Org Chart

[Run the Org Chart App Full Screen](./main.html)

1.  **[data.json](vscode-webview://08906frugkcjuhehir9l843jekr64n5is84lkogihp7nehmj0l2a/docs/sims/org-chart/data.json)** \- Contains all organizational data:

    -   50 employee nodes with names, titles, levels, and colors
    -   Hierarchical reporting relationships (edges)
2.  **[style.css](vscode-webview://08906frugkcjuhehir9l843jekr64n5is84lkogihp7nehmj0l2a/docs/sims/org-chart/style.css)** \- All CSS styling:

    -   Page layout and typography
    -   Header and legend styling
    -   Network container dimensions
3.  **[script.js](vscode-webview://08906frugkcjuhehir9l843jekr64n5is84lkogihp7nehmj0l2a/docs/sims/org-chart/script.js)** \- All JavaScript logic:

    -   Async data loading from data.json
    -   vis-network initialization
    -   Network configuration options
    -   Error handling
4.  **[main.html](vscode-webview://08906frugkcjuhehir9l843jekr64n5is84lkogihp7nehmj0l2a/docs/sims/org-chart/main.html)** \- Clean HTML structure:

    -   Only markup and structure
    -   Links to external CSS and JS files
    -   Reduced from 334 lines to just 41 lines

Benefits
--------

-   **Maintainability**: Each concern is separated into its own file
-   **Reusability**: CSS and JS can be reused or modified independently
-   **Data-driven**: Organizational data can be easily updated in JSON format
-   **Cleaner**: HTML is now much more readable and focused on structure
-   **Standard pattern**: Follows the MicroSim best practices for the project