/* 

Изограмма - это слово, в котором нет повторяющихся букв, неважно последовательных или непоследовательных. 

Реализуйте функцию isIsogram(str), которая определяет, является ли строка передаваяемая str, содержащая только буквы, изограммой. 

Функция должна вернуть true, если строка является изограммой, в противном случае функция должна вернуть false.

Пусть пустая строка является изограммой. Алгоритм не должен обращать внимание на регистр букв.
*/
function isIsogram(str) {
    str = str.toLowerCase();
    const set = new Set();

    for (let char of str) {
        if (set.has(char)) {
            return false;
        }
        set.add(char);
    }
    return true;
}

// Проверка работы функции
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));