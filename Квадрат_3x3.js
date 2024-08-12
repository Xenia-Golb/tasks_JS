/* 
Двумерный массив - массив, элементами которого являются другие массивы. Он формирует таблицу с рядами и столбцами, где каждый элемент имеет два индекса: для строки и столбца.

Напишите функцию checkSquare(square), которая принимает двумерный массив и проверяет уникальность каждого элемента массива - числа. 

Функция возвращает true, если каждое число является уникальным, и false - в противном случае.
*/

function checkSquare(square) {
    // Перебираем все элементы двумерного массива
    for (let i = 0; i < square.length; i++) {
        for (let j = 0; j < square[i].length; j++) {
            // Проверяем, есть ли в массиве square[i][j] встречающиеся числа
            for (let k = 0; k < square.length; k++) {
                for (let l = 0; l < square[k].length; l++) {
                    if (square[i][j] === square[k][l] && (i !== k || j !== l)) {
                        // Если число уже встречается в массиве, возвращаем false
                        return false;
                    }
                }
            }
        }
    }
    // Если все числа уникальны, возвращаем true
    return true;
}
// Проверка работы функции
console.log(checkSquare([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
console.log(checkSquare([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]));
console.log(checkSquare([
    [9, 2, 4],
    [3, 5, 8],
    [1, 6, 7]
]));