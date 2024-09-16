const readline = require('readline');

// Создаем интерфейс для чтения данных
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const result = restoreSetFromRanges(input);
    console.log(result.join(' '));
    rl.close();
});

function restoreSetFromRanges(input) {
    const resultSet = new Set(); // Множество для уникальных значений
    const parts = input.split(','); // Разделяем строку по запятым

    // Обрабатываем каждый элемент (это либо диапазон, либо одно число)
    parts.forEach(part => {
        if (part.includes('-')) {
            // Если это диапазон, разбиваем его по дефису
            const [start, end] = part.split('-').map(Number);
            for (let i = start; i <= end; i++) {
                resultSet.add(i); // Добавляем все числа из диапазона
            }
        } else {
            // Если это отдельное число
            resultSet.add(Number(part));
        }
    });

    // Преобразуем множество в массив, сортируем и возвращаем
    return Array.from(resultSet).sort((a, b) => a - b);
}