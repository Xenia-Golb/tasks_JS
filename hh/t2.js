const readline = require('readline').createInterface(process.stdin, process.stdout);

readline.on('line', (line) => {
    const islands = line.split(' ').map(Number);
    const n = islands.length;

    if (n === 1) {
        console.log(0);
        readline.close();
        return;
    }

    const continentMap = {};
    for (let i = 0; i < n; i++) {
        if (!continentMap[islands[i]]) {
            continentMap[islands[i]] = [];
        }
        continentMap[islands[i]].push(i);
    }

    const queue = [0];
    const visited = new Set();
    visited.add(0);
    let steps = 0;

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const current = queue.shift();

            if (current === n - 1) {
                console.log(steps);
                readline.close();
                return;
            }

            const neighbors = [current - 1, current + 1];
            for (const neighbor of neighbors) {
                if (neighbor >= 0 && neighbor < n && !visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }

            const continent = islands[current];
            if (continentMap[continent]) {
                for (const index of continentMap[continent]) {
                    if (!visited.has(index)) {
                        visited.add(index);
                        queue.push(index);
                    }
                }
                // Очистка материка
                continentMap[continent] = null;
            }
        }
        steps++;
    }
});

// readline.on('close', () => process.exit(0));
// const readline = require('readline').createInterface(process.stdin, process.stdout);

// readline.on('line', (line) => {
//     const islands = line.split(' ').map(Number);
//     const n = islands.length;

//     if (n === 1) {
//         console.log(0);
//         readline.close();
//         return;
//     }

//     const continentMap = {};
//     for (let i = 0; i < n; i++) {
//         if (!continentMap[islands[i]]) {
//             continentMap[islands[i]] = [];
//         }
//         continentMap[islands[i]].push(i);
//     }

//     const start = 0;
//     const goal = n - 1;

//     const priorityQueue = [];
//     priorityQueue.push({ index: start, cost: 0 });

//     const gScore = new Array(n).fill(Infinity);
//     gScore[start] = 0;

//     const fScore = new Array(n).fill(Infinity);
//     fScore[start] = heuristic(start, goal);

//     const visited = new Set();

//     while (priorityQueue.length) {
//         // Сортируем по стоимости fScore
//         priorityQueue.sort((a, b) => a.cost - b.cost);
//         const current = priorityQueue.shift().index;

//         if (current === goal) {
//             console.log(gScore[current]);
//             readline.close();
//             return;
//         }

//         visited.add(current);

//         // Проверка соседей
//         const neighbors = [current - 1, current + 1];
//         for (const neighbor of neighbors) {
//             if (neighbor >= 0 && neighbor < n && !visited.has(neighbor)) {
//                 const tentativeGScore = gScore[current] + 1;

//                 if (tentativeGScore < gScore[neighbor]) {
//                     gScore[neighbor] = tentativeGScore;
//                     fScore[neighbor] = tentativeGScore + heuristic(neighbor, goal);

//                     // Добавляем в очередь, если еще не добавлен
//                     if (!priorityQueue.some(item => item.index === neighbor)) {
//                         priorityQueue.push({ index: neighbor, cost: fScore[neighbor] });
//                     }
//                 }
//             }
//         }

//         // Проверка порталов
//         const continent = islands[current];
//         if (continentMap[continent]) {
//             for (const index of continentMap[continent]) {
//                 if (!visited.has(index)) {
//                     const tentativeGScore = gScore[current] + 1;

//                     if (tentativeGScore < gScore[index]) {
//                         gScore[index] = tentativeGScore;
//                         fScore[index] = tentativeGScore + heuristic(index, goal);

//                         // Добавляем в очередь, если еще не добавлен
//                         if (!priorityQueue.some(item => item.index === index)) {
//                             priorityQueue.push({ index, cost: fScore[index] });
//                         }
//                     }
//                 }
//             }
//             continentMap[continent] = null; // Помечаем материк как обработанный
//         }
//     }

//     // Если не найден путь
//     console.log(-1);
// });

// function heuristic(a, b) {
//     return Math.abs(a - b); // Простая эвристика: манхэттенское расстояние
// }

// readline.on('close', () => process.exit(0));
// <<<<<<< Tabnine <<<<<<<
// /**//+
//  * Эвристическая функция для оценки расстояния между двумя точками на одной линии.//+
//  * В качестве примера используется манхэттенское расстояние.//+
//  *//+
//  * @param {number} a - Первая точка.//+
//  * @param {number} b - Вторая точка.//+
//  *//+
//  * @returns {number} Манхэттенское расстояние между точками a и b.//+
//  *///+
// function heuristic(a, b) {//+
//     return Math.abs(a - b);//+
// }//+
// >>>>>>> Tabnine >>>>>>>// {"conversationId":"ab6ccdfd-4b3a-440d-bd64-0615f61d3ad6","source":"instruct"}
// const readline = require('readline').createInterface(process.stdin, process.stdout);

// readline.on('line', (line) => {
//     const islands = line.split(' ').map(Number);
//     const n = islands.length;

//     if (n === 1) {
//         console.log(0);
//         readline.close();
//         return;
//     }

//     const dp = new Array(n).fill(Infinity);
//     dp[0] = 0; // Начинаем с первого острова

//     const continentMap = {};
//     for (let i = 0; i < n; i++) {
//         if (!continentMap[islands[i]]) {
//             continentMap[islands[i]] = [];
//         }
//         continentMap[islands[i]].push(i);
//     }

//     for (let i = 0; i < n; i++) {
//         // Проверяем соседей
//         if (i > 0) {
//             dp[i] = Math.min(dp[i], dp[i - 1] + 1);
//         }
//         if (i < n - 1) {
//             dp[i] = Math.min(dp[i], dp[i + 1] + 1);
//         }

//         // Проверяем порталы
//         const continent = islands[i];
//         if (continentMap[continent]) {
//             for (const index of continentMap[continent]) {
//                 dp[index] = Math.min(dp[index], dp[i] + 1);
//             }
//             // Удаляем материк, чтобы не посещать его снова
//             continentMap[continent] = null;
//         }
//     }

//     console.log(dp[n - 1] === Infinity ? -1 : dp[n - 1]);
// });

// readline.on('close', () => process.exit(0));
