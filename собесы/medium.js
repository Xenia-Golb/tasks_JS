function zodiac(year) {
  let animals = [
    "крыса",
    "бык",
    "тигр",
    "кролик",
    "дракон",
    "змея",
    "лошадь",
    "овца",
    "обезьяна",
    "петух",
    "собака",
    "свинья",
  ];
  const startYear = 1924;
  const index = (year - startYear) % 12;
  let res = animals[index].charAt(0).toUpperCase() + animals[index].slice(1);

  return res;
}
console.log(zodiac(1999));

//Напишите функцию, которая получает строку и возвращает новую в виде хэштега
function generateHashtag(str) {
  let arr = str.split(" ");
  if (arr.length === 0 || str === "") return false;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    newArr.push(arr[i]);
  }
  newArr.unshift("#");
  newArr = newArr.join("");
  return newArr;
}

console.log(generateHashtag(""));

function decimalToBinary(digit) {
  if (typeof digit !== "number" || digit <= 0) {
    return "";
  } else {
    let binaryNumber = digit.toString(2);
    return binaryNumber;
  }
}
console.log(decimalToBinary(10));

function rle(str) {
  let arr = str.split("");
  let count = 1;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      result.push(`${count}${arr[i]}`);
      count = 1;
    }
  }

  return result.join("");
}

console.log(rle("aaabbcc"));
