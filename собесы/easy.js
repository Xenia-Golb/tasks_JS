// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
function getPosition() {
  let str = "abc123def8";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(parseInt(str[i]))) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getPosition());

/*
 Дан массив с некоторыми числами, например, вот такой:
[123, 456, 789]
Напишите код, который перевернет числа в этом массиве по следующему принципу:
[321, 654, 987]
 */
function reverseArr() {
  let arr = [123, 456, 789];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].toString().split("").reverse().join("");
    res.push(Number(temp));
  }
  return res;
}
console.log(reverseArr());

// Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'
function reverseRegister() {
  let str = "AbCdE";
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}

console.log(reverseRegister());

// Дан некоторый массив с числами, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
// [12, 34, 56]
function mergeArr() {
  let arr = [1, 2, 3, 4, 5, 6];
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i].toString() + arr[i + 1].toString();
    res.push(Number(temp));
  }
  return res;
}
console.log(mergeArr());

// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'
function changeFirstChar() {
  let str = "aaa bbb ccc eee fff";
  let arr = str.split(" ");
  for (let i = 1; i < arr.length; i += 2) {
    let temp = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    arr[i] = temp;
  }
  return arr.join(" ");
}
console.log(changeFirstChar());

// Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'
function changeRegisterChar() {
  let str = "a bc def ghij";
  let arr = str.split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join(" ");
}
console.log(changeRegisterChar());

//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
function checkCharCase(char) {
  if (char === char.toUpperCase() && char !== char.toLowerCase()) {
    return "Верхний регистр";
  } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
    return "Нижний регистр";
  } else {
    return "Не является буквой";
  }
}
console.log(checkCharCase("A"));

// Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28

function removeNum() {
  let num = 123789;
  let str = num.toString();
  let arr = str.split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      res.push(Number(arr[i]));
    }
  }
  return res.join("");
}
console.log(removeNum());

// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

function checkUpChar() {
  let str = "AAvhubhD";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      count++;
    }
  }
  return count <= 2;
}
console.log(checkUpChar());

// Дана некоторая строка:
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'
function deleteSymbols() {
  let str = "1 22 333 4444 22 5555 1";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      arr.splice(i, 1);
    }
  }
  return arr.join(" ");
}
console.log(deleteSymbols());

// Слейте эти массивы в новый массив следующим образом:

// [1, 2, 'a', 'b', 'c', 3]
function mergeArrs() {
  let arr1 = [1, 2, 3];
  let arr2 = ["a", "b", "c"];
  let arr3 = [];
  arr3.push(arr1[arr1.length - 1]);
  arr1.pop();
  return [...arr1, ...arr2, ...arr3];
}
console.log(mergeArrs());

// Дано некоторое число:
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

function getSum2Num() {
  let num = 123456;
  let arr = num.toString().split("");
  let res = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i].toString() + arr[i + 1];
    res.push(temp);
  }
  return res.map((item) => Number(item)).reduce((acc, item) => acc + item);
}
console.log(getSum2Num());

// Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

function printReverseArr() {
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();
  console.log(...arr);
}
printReverseArr();

// Дана строка с буквами и цифрами.
// Проверьте, что в этой строке не более трех букв.

function getAllLetter() {
  let str = "adы1234";
  let count = 0;
  for (char of str) {
    if (isNaN(char)) {
      count++;
    }
  }
  return count <= 3;
}
console.log(getAllLetter());

// Дано число. Получите первую четную цифру с конца этого числа.

function getFig() {
  let num = 1234567;
  let arr = num.toString().split("").reverse();
  let result = arr.find((item) => item % 2 === 0);
  return result;
}
console.log(getFig());

// Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

function changeSymbol() {
  let str = "abcde abcde abcde";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i].charAt(0), "!");
  }
  return arr.join(" ");
}
console.log(changeSymbol());

// Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
function test2El() {
  let arr = [1, 2, 3, 3, 4, 5];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(test2El());

function isValidTime(s) {
  let arr = s.split(":");
  if (arr.length != 2) {
    return false;
  }
  let hours = parseInt(arr[0]);
  let minutes = parseInt(arr[1]);
  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return false;
  }
  return true;
}
console.log(isValidTime("23:59"));

function highAndLow(numbers) {
  let arr = numbers.split(" ").map((item) => Number(item));
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `${max} ${min}`;
}
console.log(highAndLow("4 5 29 54 4 0 -10"));

function moveZeros(arr) {
  let arr2 = [];
  arr.forEach((el) => {
    if (el === 0) {
      arr2.push(el);
    }
  });
  return [...arr.filter((el) => el !== 0), ...arr2];
}
console.log(moveZeros([1, 2, 0, 3, 12]));

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] <= arr[i]) {
      return false;
    }
  }
  return true;
}
console.log(inAscOrder([1, 2, 3, 5]));

function oddElimination(str) {
  if (str.length === 1) {
    return str;
  }
  let arr = str.split("");
  let result = arr.filter((el, index) => {
    index % 2 !== 0;
  });
  return result.join("");
}
console.log(oddElimination("Hello World"));
function number(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(`${i + 1}: ${array[i]}`);
  }
  return res;
}
console.log(number([1, 2, 3, 4, 5]));
