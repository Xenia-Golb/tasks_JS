//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function getTrue(number) {
  return number < 0 ? "true" : "false";
}
console.log(getTrue(-5));

//Дана строка. Выведите в консоль длину этой строки.
function getStringLength(str) {
  return str.length;
}
console.log(getStringLength("Hello, World!"));

//Дана строка. Выведите в консоль последний символ строки.
function getLastChar(str) {
  return str[str.length - 1];
}
console.log(getLastChar("Hello, World"));

//Дано число. Проверьте, четное оно или нет.
function getEvenNumber(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(getEvenNumber(5));

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.
function findFirstChar(str1, str2) {
  if (str1[0] === str2[0]) {
    return true;
  } else {
    return false;
  }
}
console.log(findFirstChar("Hello", "Horld"));

//Дана строка. Нужно вывести последний символ, если 'ь', то предпоследнюю
function findLastChar(str) {
  if (str[str.length - 1] === "ь") {
    return str[str.length - 2];
  }
  return str[str.length - 1];
}
console.log(findLastChar("hellкь"));

//Дано число. Выведите в консоль первую цифру этого числа.
function getFirstNum(number) {
  return Math.floor(number / 100);
}
console.log(getFirstNum(123));

//Дано число. Выведите в консоль последнюю цифру этого числа.
function getLastNum(number) {
  return Math.floor(number % 10);
}
console.log(getLastNum(123));

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function getSumNumber(number) {
  return Math.floor(number / 100 + (number % 10));
}
console.log(getSumNumber(323));

//Дано число. Выведите количество цифр в этом числе.
function getLenghtNum(number) {
  return number.toString().length;
}
console.log(getLenghtNum(3234));

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function equalityNumber(number1, number2) {
  let string1 = number1.toString().slice(0, 1);
  let string2 = number2.toString().slice(0, 1);
  return string1 === string2;
}
console.log(equalityNumber(35234, 31145));

// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function getStrChar(str) {
  if (str.length > 1) {
    return str[str.length - 2];
  } else {
    return "error";
  }
}
console.log(getStrChar("123"));

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function getNum(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  }
  return false;
}
console.log(getNum(65, 8));

//Выведите в консоль все целые числа от 1 до 100.
// function getAllNum() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }
// getAllNum();

//Выведите в консоль все целые числа от -100 до 0.
// function getAllNum2() {
//   for (let i = -100; i <= 0; i++) {
//     console.log(i);
//   }
// }
// getAllNum2();

//Выведите в консоль все целые числа от 100 до 1.
// function getAllNum3() {
//   for (let i = 100; i >= 1; i--) {
//     console.log(i);
//   }
// }
// getAllNum3();

//Выведите в консоль все четные числа из промежутка от 1 до 100.
// function getAllEvNum() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// getAllEvNum();

//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// function getAllNotEvNum() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
// }
// getAllNotEvNum();

//Найдите сумму всех целых чисел от 1 до 100.
function getSumNum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}
getSumNum();

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
function getSumEvNum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
getSumEvNum();

//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
function getSumNotEvNum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
}
getSumNotEvNum();
//Даны два целых числа. Найдите остаток от деления первого числа на второе.
function getDivNum(num1, num2) {
  return Math.floor(((num1 / num2) * 10) % 10);
}
console.log(getDivNum(9, 7));

//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
function getChars(str) {
  let arr = str.split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
getChars("Hello");

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function getSumSq(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}
console.log(getSumSq([2, 3]));

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function getSumSqr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.sqrt(arr[i]);
  }
  return sum;
}

console.log(getSumSqr([4, 16]));

//Дан массив с числами. Найдите сумму положительных элементов этого массива.
function getEvSumFromArr(arr) {
  let sum = 0;
  arr.forEach((el) => {
    if (el % 2 === 0) {
      sum += el;
    }
  });
  return sum;
}
console.log(getEvSumFromArr([1, 2, 3, 4, 5, 6, 8]));

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function getSumFromArr(arr) {
  let sum = 0;
  arr.forEach((el) => {
    if (el > 0 && el < 10) {
      sum += el;
    }
  });
  return sum;
}
console.log(getSumFromArr([1, -1, -2, 11, 9]));

function getArrChar(str) {
  return str.split("");
}
console.log(getArrChar("abcde"));

function getArrNumChar(number) {
  let str = number.toString();
  return str.split("").map(Number);
}
console.log(getArrNumChar(1234));

function reverseNumber(number) {
  let str = number.toString();
  return str.split("").reverse().join("");
}
console.log(reverseNumber(12345));

//Найдите сумму цифр числа.
function getSumDig(num) {
  let sum = 0;
  let str = num.toString();
  let arr = Array.from(str, Number);
  arr.forEach((el) => {
    sum += el;
  });

  return sum;
}
console.log(getSumDig(2253));

function pushArr() {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(pushArr());

//Заполните массив четными числами из промежутка от 1 до 100.
function pushEvArr() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(pushEvArr());

//Округлите эти дроби до одного знака в дробной части.
function pushFloatArr() {
  let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
  return arr.map((number) => parseFloat(number.toFixed(1)));
}
console.log(pushFloatArr());

//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function findHTTP(arr) {
  let res = [];
  arr.forEach((el) => {
    if (el.includes("http")) {
      res.push(el);
    }
  });
  return res;
}
console.log(
  findHTTP([
    "https://www.example.com",
    "http://example.com",
    "ftp://example.com",
  ])
);
//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function findHTML(arr) {
  let res = [];
  arr.forEach((el) => {
    if (el.endsWith(".html")) {
      res.push(el);
    }
  });
  return res;
}
console.log(findHTML(["index.html", "about.html", "contact.html", "faq.htl"]));

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов
function getNewArr(arr) {
  return arr.map((number) => number + (number * 10) / 100);
}
console.log(getNewArr([50, 10, 30]));

//Заполните массив случайными числами из промежутка от 1 до 100.

function getArrRandom() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    arr.push(randomNumber);
  }
  return arr;
}
console.log(getArrRandom());

//Выведите в консоль все его символы с конца.

function getNumCh(number) {
  let str = number.toString();
  return Number(str.split("").reverse().join(""));
}
console.log(getNumCh(12345));

// function getPartialArr(array, size) {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }
// console.log(getPartialArr([1, 2, 3, 4, 5, 6], 2));
function printSubarrays(array, size) {
  for (let i = 0; i < array.length; i += size) {
    const subarray = array.slice(i, i + size);
    console.log(subarray);
  }
}
printSubarrays([1, 2, 3, 4, 5, 6], 2);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = array1.concat(array2);
// console.log(combinedArray);

//Дана некоторая строка. Найдите позицию первого нуля в строке.

function getZero(str) {
  return str.indexOf("0");
}
console.log(getZero("1110101"));

//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
function getArra() {
  let arr = [];
  for (let number = 1; number <= 1000; number++) {
    let str = number.toString();
    let firstDigit = Number(str[0]);
    let lastDigit = Number(str[str.length - 1]);
    if (firstDigit + lastDigit === 5) {
      arr.push(Number(str));
    }
  }
  return arr;
}

console.log(getArra());

//Дан массив. Удалите из него элементы с заданным значением.
function removeEl(arr, arrEl) {
  return arr.filter((item) => !arrEl.includes(item));
}

console.log(removeEl([1, 2, 3, 4, 5, 7, 8, 6], [7, 8]));

// Найдите сумму первой половины элементов этого массива.
function findSumPartArr(arr) {
  let middle = Math.floor(arr.length / 2);
  return arr.slice(0, middle).reduce((acc, item) => {
    return acc + item;
  }, 0);
}

console.log(findSumPartArr([1, 2, 3, 6, 5, 6, 7, 8]));
//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
function findNotPosNumArr(arr) {
  return arr
    .map((item) => {
      return item < 0 ? item : 0;
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);
}
console.log(findNotPosNumArr([-1, -3, -3, 4, 5, 6]));

//Дан массив с числами. Оставьте в нем только положительные числа.
function getPositiveArr(arr) {
  return arr.filter((item) => {
    return item > 0;
  });
}
console.log(getPositiveArr([1, 2, 3, 4, -6, -8]));

////Дана строка. Удалите предпоследний символ из этой строки.

function removeCharStr(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.slice(0, str.length - 2) + str.slice(str.length - 1);
}
console.log(removeCharStr("bobba"));

////Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

function findSumPar2tArr(arr) {
  let middle = Math.floor(arr.length / 2);
  let end = Math.floor(arr.length);
  let firstPart = arr.slice(0, middle).reduce((acc, item) => {
    return acc + item;
  }, 0);
  let secondPart = arr.slice(middle, end).reduce((acc, item) => {
    return acc + item;
  }, 0);
  return firstPart / secondPart;
}
console.log(findSumPar2tArr([11, 10, 9, 4, 5, 6]));

//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
function getThrueWords(str1, str2) {
  return str1[str1.length - 1] === str2[0];
}
console.log(getThrueWords("киса", "абаюдна"));

//Дана некоторая строка. Найдите позицию третьего нуля в строке.
function findThirdZero(str) {
  let count = 0;
  let index = -1;

  while (count < 3) {
    index = str.indexOf("0", index + 1);
    if (index === -1) {
      return -1;
    }
    count++;
  }

  return index;
}
console.log(findThirdZero("01010"));

//Даны числа, разделенные запятыми:
//Найдите сумму этих чисел.
function getSumNums(str) {
  let arr = str.split(",");
  return arr
    .map((item) => Number(item))
    .reduce((acc, item) => {
      return acc + item;
    }, 0);
}
console.log(getSumNums("12,34,54"));
/**
 * Дана дата в следующем формате:

'2025-12-31'
Преобразуйте эту дату в следующий объект:

{
	year: '2025',
	month: '12',
	day: '31',
}
 */
function convertDateToObject(dateString) {
  const [year, month, day] = dateString.split("-");
  return {
    year: year,
    month: month,
    day: day,
  };
}
const dateString = "2025-12-31";
console.log(convertDateToObject(dateString));

//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

function getN(str) {
  const regExp = /[0-9]/;
  return str.search(regExp);
}

console.log(getN("abc123def"));

//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

function get2ArrFromObj(obj) {
  let arr1 = Object.keys(obj);
  let arr2 = Object.values(obj);

  return `${arr1}, ${arr2}`;
}
console.log(get2ArrFromObj({ a: 1, b: 2, c: 3 }));

//Дано число. Выведите в консоль количество четных цифр в этом числе.

function getEvNInNumber(number) {
  let count = 0;
  let arr = number.toString().split("").map(Number);
  for (let item of arr) {
    if (item % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(getEvNInNumber(12345));

//Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
function toUpperCaseOddLetters(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}

console.log(toUpperCaseOddLetters("abcde"));

//Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
function toUpperFirstCh(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
console.log(toUpperFirstCh("aaa bbb ccc"));

//Получите массив позиций всех нулей в этой в строке.
function findPositionZero() {
  let str = "023m0df0dfg00";
  let arr = str.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      result.push(i);
    }
  }
  return result;
}
console.log(findPositionZero());

//Удалите из этой строки каждый третий символ.
function removeThirdChar() {
  let str = "abcdefg";
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i % 2 == 0) {
      arr.splice(i, 1);
    }
  }
  return arr.join("");
}
console.log(removeThirdChar());

//Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
function getSum2PartArr() {
  let arr = [10, 2, 10, 4, 15, 1];
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  let sumEven = even.reduce((a, b) => a + b, 0);
  let sumOdd = odd.reduce((a, b) => a + b, 0);
  return sumEven / sumOdd;
}
console.log(getSum2PartArr());
