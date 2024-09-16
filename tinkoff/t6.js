const readline = require('readline');

// Чтение данных
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const processes = [];
let dependencies = [];
let times = [];

rl.on('line', (input) => {
    if (!n) {
        // Первое число - это количество процессов
        n = parseInt(input);
    } else {
        // Обработка каждого процесса
        const data = input.split(' ').map(Number);
        const t = data[0];  // время выполнения процесса
        const deps = data.slice(1);  // зависимости процесса
        times.push(t);
        dependencies.push(deps);
        if (dependencies.length === n) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    // Функция для нахождения минимального времени
    function findMinTime(n, times, dependencies) {
        const graph = Array.from({ length: n }, () => []);
        const indegree = Array(n).fill(0);  // Массив входных степеней для процессов
        const executionTime = Array(n).fill(0);  // Время выполнения процесса с учётом зависимостей

        // Построение графа
        for (let i = 0; i < n; i++) {
            for (const dep of dependencies[i]) {
                graph[dep - 1].push(i);  // Добавляем ребро зависимости
                indegree[i]++;  // Увеличиваем входную степень для текущего процесса
            }
        }

        // Поиск процессов, которые можно выполнять сразу (без зависимостей)
        const queue = [];
        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
                executionTime[i] = times[i];  // Время выполнения процессов без зависимостей
            }
        }

        // Топологическая сортировка
        while (queue.length > 0) {
            const current = queue.shift();

            for (const neighbor of graph[current]) {
                executionTime[neighbor] = Math.max(executionTime[neighbor], executionTime[current] + times[neighbor]);

                indegree[neighbor]--;
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Результат — максимальное время выполнения среди всех процессов
        return Math.max(...executionTime);
    }

    // Вызов функции и вывод результата
    console.log(findMinTime(n, times, dependencies));
});
