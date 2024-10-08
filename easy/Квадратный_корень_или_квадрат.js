/* 
Нужно написать функцию squareOrSquareRoot(array), которая будет получать целочисленный массив в качестве параметра и обрабатывать каждое число из этого массива.

Если число является полным квадратом, извлеките его корень, иначе возведите число в квадрат.

Функция должна вернуть новый массив, с обработанными числами полученного массива. 
*/

function squareOrSquareRoot(array) {
    // Создаем пустой массив для новых чисел.
    let newArr = [];
    // Выполняем обработку каждого числа в массиве с помощью map и возвращаем новый массив с обработанными числами.
    array.map(num => {
        // Если число положительное и корень из него целое, возвращаем его корень.
        if (num > 0 && Math.sqrt(num) % 1 === 0) {
            newArr.push(Math.sqrt(num));
        }
        else {
            // Иначе возвращаем число в квадрат.
            newArr.push(num * num);
        }

    });
    // Возвращаем новый массив с обработанными числами.
    return newArr;
}

// Пример использования:
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));