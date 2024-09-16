// const readline = require('readline');

// Функция для обработки журнала снега
// function processSnowJournal(n, journal) {
//     const a = journal;
//     const b = new Array(n);
//     const maxSnow = Math.pow(10, 9);  // Ограничение до 10^9

//     let currentSnow = 0;
//     for (let i = 0; i < n; i++) {
//         if (a[i] === -1) {
//             b[i] = 1;  // Если -1, считаем, что на этот день выпало 1 единица снега
//         } else {
//             // Количество снега на день i должно быть достаточным для соответствия a[i]
//             if (a[i] < currentSnow) {
//                 return ["NO"];
//             }
//             b[i] = a[i] - currentSnow;
//             if (b[i] <= 0) {
//                 return ["NO"];
//             }
//             currentSnow = a[i];
//         }
//     }

//     // Если последовательность валидна, создаем последовательность чисел с ограничением до 10^9
//     const resultArray = b.map(value => Math.min(value, maxSnow));

//     // Возвращаем YES и последовательность
//     return ["YES", resultArray.join(' ')];
// }

// // Используем readline для чтения ввода
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let n;
// let journal = [];

// // Объясняем пользователю, что нужно ввести
// console.log("Введите количество дней:");

// rl.on('line', (input) => {
//     if (!n) {
//         // Первая строка - количество дней
//         n = parseInt(input, 10);

//         // После ввода количества дней просим ввести журнал
//         console.log("Введите журнал в формате: -1 10 -1 14 17");
//     } else {
//         // Вторая строка - сам журнал
//         journal = input.split(' ').map(x => parseInt(x, 10));

//         // Обрабатываем данные и выводим результат
//         const result = processSnowJournal(n, journal);
//         console.log(result[0]);
//         if (result[0] === "YES") {
//             console.log(result[1]);
//         }

//         // Завершаем интерфейс readline
//         rl.close();
//     }
// });

// const readline = require('readline');

// // Функция для обработки журнала снега
// function processSnowJournal(n, journal) {
//     const a = journal;
//     const b = new Array(n);  // Массив для хранения восстановленных значений

//     let currentSnow = 0;  // Текущее накопленное количество снега

//     for (let i = 0; i < n; i++) {
//         if (a[i] === -1) {
//             b[i] = currentSnow + 1;  // Восстанавливаем минимальное возможное значение
//             currentSnow = b[i];  // Обновляем текущее значение снега
//         } else {
//             // Проверяем, что текущее значение больше или равно текущему накопленному снегу
//             if (a[i] < currentSnow) {
//                 return ["NO"];
//             }
//             b[i] = a[i] - currentSnow + currentSnow;
//             currentSnow = a[i];
//         }
//     }

//     // Если последовательность валидна, возвращаем "YES" и восстановленный массив
//     return ["YES", b.join(' ')];
// }

// // Используем readline для чтения ввода
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let n;
// let journal = [];

// // Объясняем пользователю, что нужно ввести
// console.log("Введите количество дней:");

// rl.on('line', (input) => {
//     if (!n) {
//         // Первая строка - количество дней
//         n = parseInt(input, 10);

//         // После ввода количества дней просим ввести журнал
//         console.log("Введите журнал в формате: -1 10 -1 14 17");
//     } else {
//         // Вторая строка - сам журнал
//         journal = input.split(' ').map(x => parseInt(x, 10));

//         // Обрабатываем данные и выводим результат
//         const result = processSnowJournal(n, journal);
//         console.log(result[0]);
//         if (result[0] === "YES") {
//             console.log(result[1]);  // Выводим числа через пробел
//         }

//         // Завершаем интерфейс readline
//         rl.close();
//     }
// });
const readline = require('readline');

// Функция для обработки журнала снега
function processSnowJournal(n, journal) {
    const b = new Array(n);  // Массив для хранения восстановленных значений

    for (let i = 0; i < n; i++) {
        if (journal[i] === -1) {
            // Восстанавливаем минимальное возможное значение, последовательность должна увеличиваться
            b[i] = (i === 0) ? 1 : b[i - 1] + 1;
        } else {
            // Проверяем, что текущее значение больше предыдущего
            if (i > 0 && journal[i] <= b[i - 1]) {
                return ["NO"];  // Нарушение последовательности
            }
            b[i] = journal[i];  // Устанавливаем значение из журнала
        }
    }

    // Если последовательность валидна, возвращаем "YES" и восстановленный массив
    return ["YES", b.join(' ')];
}

// Используем readline для чтения ввода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let journal = [];

// Объясняем пользователю, что нужно ввести
console.log("Введите количество дней:");

rl.on('line', (input) => {
    if (!n) {
        // Первая строка - количество дней
        n = parseInt(input, 10);

        // После ввода количества дней просим ввести журнал
        console.log("Введите журнал в формате: -1 10 -1 14 17");
    } else {
        // Вторая строка - сам журнал
        journal = input.split(' ').map(x => parseInt(x, 10));

        // Обрабатываем данные и выводим результат
        const result = processSnowJournal(n, journal);
        console.log(result[0]);
        if (result[0] === "YES") {
            console.log(result[1]);  // Выводим числа через пробел
        }

        // Завершаем интерфейс readline
        rl.close();
    }
});
