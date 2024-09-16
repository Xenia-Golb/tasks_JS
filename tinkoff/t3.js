// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function findPassword(sequence, requirements, maxLength) {
//     let bestPassword = null;

//     for (let start = 0; start < sequence.length; start++) {
//         for (let length = 1; length <= maxLength && start + length <= sequence.length; length++) {
//             const substring = sequence.slice(start, start + length);
//             const substringSet = new Set(substring);

//             // Check if substring contains all required characters
//             if (requirements.every(char => substringSet.has(char))) {
//                 if (bestPassword === null || start > bestPassword.start ||
//                     (start === bestPassword.start && length > bestPassword.length)) {
//                     bestPassword = { start, length, value: substring };
//                 }
//             }
//         }
//     }

//     return bestPassword ? bestPassword.value : '-1';
// }

// rl.question('Введите последовательность: ', (sequence) => {
//     rl.question('Введите набор символов: ', (requirements) => {
//         rl.question('Введите максимальную длину пароля: ', (maxLength) => {
//             const result = findPassword(sequence, requirements.split(''), parseInt(maxLength, 10));
//             console.log(result);
//             rl.close();
//         });
//     });
// });
const readline = require('readline');

// Создаем интерфейс для чтения данных
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length === 3) {
        rl.close();
    }
});

rl.on('close', () => {
    const sequence = input[0]; // последовательность символов
    const requiredChars = input[1]; // набор символов для пароля
    const k = parseInt(input[2], 10); // максимальная длина пароля

    // Ограничения
    const n = sequence.length;
    const m = requiredChars.length;

    if (n < 1 || n > 2 * 10 ** 5 || m < 1 || m > n || k < 1 || k > n) {
        console.log("Ошибка: Введенные данные не соответствуют ограничениям.");
        return;
    }

    const result = findPassword(sequence, requiredChars, k);
    console.log(result);
});

function findPassword(sequence, requiredChars, k) {
    const requiredSet = new Set(requiredChars.split('')); // Множество обязательных символов
    const requiredCount = {}; // Счетчик символов из набора
    for (let char of requiredChars) {
        if (!requiredCount[char]) requiredCount[char] = 0;
        requiredCount[char]++;
    }

    let currentCount = {}; // Счетчик символов в текущем окне
    let have = 0; // Количество уникальных символов, которые есть в текущем окне
    let need = Object.keys(requiredCount).length;

    let left = 0;
    let right = 0;
    let bestStart = -1;
    let bestLength = Infinity;

    while (right < sequence.length) {
        const char = sequence[right];
        if (requiredSet.has(char)) {
            if (!currentCount[char]) currentCount[char] = 0;
            currentCount[char]++;
            if (currentCount[char] === requiredCount[char]) {
                have++;
            }
        }

        while (have === need) {
            // Проверяем длину текущего окна
            const windowLength = right - left + 1;
            if (windowLength <= k && windowLength <= bestLength) {
                if (windowLength < bestLength || left > bestStart) {
                    bestStart = left;
                    bestLength = windowLength;
                }
            }

            // Сжимаем окно
            const leftChar = sequence[left];
            if (requiredSet.has(leftChar)) {
                currentCount[leftChar]--;
                if (currentCount[leftChar] < requiredCount[leftChar]) {
                    have--;
                }
            }
            left++;
        }

        right++;
    }

    if (bestStart === -1) {
        return '-1';
    } else {
        return sequence.slice(bestStart, bestStart + bestLength);
    }
}
