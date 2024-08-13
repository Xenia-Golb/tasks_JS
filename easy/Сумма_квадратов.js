/*
Напишите функцию с именем squareSum, которая принимает массив чисел numbers,  и возводит каждое число в квадрат и затем складывает все полученные значения вместе. 

Функция должна вернуть сумму квадратов всех чисел из массива.
*/
function squareSum(numbers) {
    // Возводим каждое число в квадрат и складываем все полученные значения
    return numbers.map(num => num ** 2).reduce((sum, num) => sum + num, 0);
}

// Проверка работы функции
console.log(squareSum([1, 2, 2]));
console.log(squareSum([3, 3]));