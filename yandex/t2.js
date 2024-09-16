function countPulledBlocks(connections, startIndex) {
    const n = connections.length;
    const queue = [startIndex];
    const visited = new Set([startIndex]);

    while (queue.length > 0) {
        const currentIndex = queue.shift();
        for (const connection of connections) {
            const connectedIndex = parseInt(connection.split(' ')[1], 10);
            if (!visited.has(connectedIndex) && connectedIndex > currentIndex) {
                queue.push(connectedIndex);
                visited.add(connectedIndex);
            }
        }
    }

    return visited.size;
}

// Чтение входных данных
const [n, m] = readline().split(' ').map(Number);
const connections = [];
for (let i = 0; i < m; ++i) {
    connections.push(readline());
}

// Вывод результата
console.log(countPulledBlocks(connections, 1));