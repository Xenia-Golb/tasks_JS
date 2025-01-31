/** Задача1
 * Есть банкомат, человек подходит к банкомату и хочет снять сумму денег.
В банкомате есть определенные купюры, надо выдать человеку сумму, 
самыми крупными купюрами.
Надо написать функцию подсчета, каких купюр сколько выдать, пример на скрине. 
1 массив - номиналы купюр, число - сколько хочет снять, 
2 массив - количество купюр которое надо выдать
 */
const arr1 = [5000, 1000, 500, 100, 50];
const cash = 350;
function iWantToGet(arr, cash) {
  const result = [];
  let remainingCash = cash;

  for (let i = 0; i < arr.length; i++) {
    let nominal = arr[i];
    while (remainingCash >= nominal) {
      remainingCash -= nominal;
      result.push(nominal);
    }
  }

  if (remainingCash !== 0) {
    console.log("error sum");
    return [];
  }

  return result;
}
console.log(iWantToGet(arr1, cash));
/** Задача2
[{ name: 'name1', value: 'value1' }, { name: 'name2', value: 'value2' }],
и вернет объект вида { name1: value1, .....}
 */
const inputArray = [
  { name: "name1", value: "value1" },
  { name: "name2", value: "value2" },
];
function transformArrayToObject(array) {
  return array.reduce((acc, item) => {
    acc[item.name] = item.value;
    return acc;
  }, {});
}

function transformArrayToObject(arr) {
  const obj = {};
  arr.forEach((item) => {
    obj[item.name] = item.value;
  });
  return obj;
}
const result = transformArrayToObject(inputArray);
console.log(result);

/** Задача3
 * Напишите функцию, которая принимает отсортированный массив
[1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 56, 57] и вернет строку вида: "1-9,34,56-57".
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 56, 57];

function getStr(arr) {
  let start;
  let end;
  const arr2 = [];

  if (!start) {
    start = arr[0];
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      end = arr[i + 1];
    } else {
      if (end) {
        arr2.push([start, end]);
        start = arr[i + 1];
        end = null;
      } else {
        arr2.push([start]);
        start = arr[i + 1];
      }
    }
  }

  // Обработка последнего элемента
  if (end) {
    arr2.push([start, end]);
  } else {
    arr2.push([start]);
  }

  let str = arr2.map((item) => item.join("-")).join(",");

  return str;
}

function getStr(arr) {
  if (arr.length === 0) return "";

  let result = [];
  let start = arr[0];
  let end = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === end + 1) {
      end = arr[i];
    } else {
      result.push(start === end ? `${start}` : `${start}-${end}`);
      start = arr[i];
      end = arr[i];
    }
  }

  // Добавляем последний диапазон
  result.push(start === end ? `${start}` : `${start}-${end}`);

  return result.join(",");
}

console.log(getStr(arr));
