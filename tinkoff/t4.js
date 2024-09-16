const readline = require('readline');

// Создание интерфейса для чтения данных из консоли
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для проверки, является ли число простым
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Функция для нахождения всех делителей числа
function getDivisorsCount(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count++;
            if (i !== n / i) count++; // Если делители не равны, добавляем оба
        }
    }
    return count;
}

// Функция для проверки, является ли число составным
function isComposite(n) {
    return n > 1 && !isPrime(n);
}

// Основная функция для подсчета чисел на отрезке
function countCompositeWithPrimeDivisors(l, r) {
    let count = 0;

    for (let i = l; i <= r; i++) {
        if (isComposite(i)) {
            const divisorsCount = getDivisorsCount(i);
            if (isPrime(divisorsCount)) {
                count++;
            }
        }
    }

    return count;
}

// Чтение входных данных через readline
rl.question('Введите два числа (l и r): ', (input) => {
    const [l, r] = input.split(' ').map(Number);

    // Вызов основной функции и вывод результата
    const result = countCompositeWithPrimeDivisors(l, r);
    console.log(result);

    // Закрытие интерфейса readline
    rl.close();
});
// const readline = require('readline');

// // Создание интерфейса для чтения данных из консоли
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Функция для проверки, является ли число простым (работает с BigInt)
// function isPrime(n) {
//     if (n < 2n) return false;
//     for (let i = 2n; i * i <= n; i++) {
//         if (n % i === 0n) return false;
//     }
//     return true;
// }

// // Функция для нахождения всех делителей числа (работает с BigInt)
// function getDivisorsCount(n) {
//     let count = 0n;
//     for (let i = 1n; i * i <= n; i++) {
//         if (n % i === 0n) {
//             count++;
//             if (i !== n / i) count++;
//         }
//     }
//     return count;
// }

// // Функция для проверки, является ли число составным (работает с BigInt)
// function isComposite(n) {
//     return n > 1n && !isPrime(n);
// }

// // Основная функция для подсчета чисел на отрезке (работает с BigInt)
// function countCompositeWithPrimeDivisors(l, r) {
//     let count = 0n;

//     for (let i = l; i <= r; i++) {
//         if (isComposite(i)) {
//             const divisorsCount = getDivisorsCount(i);
//             if (isPrime(divisorsCount)) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// // Чтение входных данных через readline
// rl.question('Введите два числа (l и r): ', (input) => {
//     let [l, r] = input.split(' ').map(BigInt);

//     // Проверка на диапазон
//     const maxLimit = 10n ** 14n;

//     if (l < 1n || r < l || r > maxLimit) {
//         console.log("Ошибка: значения l и r должны быть в пределах 1 ≤ l ≤ r ≤ 10^14.");
//         rl.close();
//         return;
//     }

//     // Вызов основной функции и вывод результата
//     const result = countCompositeWithPrimeDivisors(l, r);
//     console.log(result);

//     // Закрытие интерфейса readline
//     rl.close();
// });
