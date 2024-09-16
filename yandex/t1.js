/**
 * @param {{
*  graph: Record<string, string[]>,
*  startVertex: string,
*  endVertex: string,
* }}
* @returns {string[]}
*/

module.exports = function solution({ graph, startVertex, endVertex }) {
    const distances = {};
    const previous = {};

    Object.entries(graph).forEach(([vertex, neighbors]) => {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    });

    distances[startVertex] = 0;

    while (Object.keys(distances).length > 0) {
        const currentNode = findMinDistanceNode(distances);
        if (currentNode === undefined) break;

        const neighbors = graph[currentNode];
        for (const neighbor of neighbors) {
            const distanceToNeighbor = distances[currentNode] + 1; // Предполагаем, что расстояние между любыми двумя узлами равно 1
            if (distanceToNeighbor < distances[neighbor]) {
                distances[neighbor] = distanceToNeighbor;
                previous[neighbor] = currentNode;
            }
        }
    }

    return findShortestPath(startVertex, endVertex, previous);

    function findMinDistanceNode(distances) {
        let minDistance = Infinity;
        let minNode;
        for (const node in distances) {
            if (distances[node] < minDistance && distances[node] !== Infinity) {
                minDistance = distances[node];
                minNode = node;
            }
        }
        return minNode;
    }

    function findShortestPath(startNode, endNode, previous) {
        const path = [];
        let currentNode = endNode;
        while (currentNode !== startNode) {
            path.unshift(currentNode);
            currentNode = previous[currentNode];
        }
        path.unshift(startNode);
        return path;
    }
};
