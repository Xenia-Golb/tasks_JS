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

function chunkArray(array, size) {
  let result = [];
  for (let i = 0; i < Math.floor(array.length / size); i++) {
    result.push(array.slice(i * size, (i + 1) * size));
  }
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  if (!/[a-z]/.test(password)) {
    return false;
  }

  if (!/[0-9]/.test(password)) {
    return false;
  }

  return true;
}
console.log(isStrongPassword("Password123"));

// function formatText(text, size) {
//   let count = -1;
//   let result = [];
//   for (let i = 0; i < text.length; i++) {
//     result.push(text[i]);
//     count++;
//     if (count === size) {
//       result.push(`/n`);
//     }
//   }
//   return result.join("");
// }
// console.log(formatText("Helloy World", 5));

// function formatText(text, size) {
//   let result = [];
//   for (let i = 0; i < text.length; i++) {
//     result.push(text[i]);
//     if ((i + 1) % size === 0 && i !== text.length - 1) {
//       result.push(" ");
//       result.push("\n");
//     }
//   }
//   return result.join("");
// }

// console.log(formatText("Hello World", 4));

function formatText(text, size) {
  let words = text.split(" ");
  let result = [];
  let currentLine = "";

  for (let word of words) {
    if ((currentLine + word).length <= size) {
      currentLine += (currentLine ? " " : "") + word;
    } else {
      result.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    result.push(currentLine);
  }
  return result.join("\n");
}

function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // Сумма всех чисел от 0 до n
  const actualSum = nums.reduce((sum, num) => sum + num, 0); // Сумма чисел в массиве
  return expectedSum - actualSum;
}
console.log(missingNumber([0, 1, 2, 3, 5]));

function validPass(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
  if (password.length < 4 || password.length > 20) {
    return "INVALID";
  }
  if (regex.test(password)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}
console.log(validPass("Pa1"));

function cakes(recipe, available) {
  let count = Infinity;

  for (let ingredient in recipe) {
    if (available[ingredient] === undefined) {
      return 0;
    }
    let ingredientCount = Math.floor(
      available[ingredient] / recipe[ingredient]
    );
    if (ingredientCount < count) {
      count = ingredientCount;
    }
  }

  return count;
}

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
function doubleNumber(n) {
  function isDoubleNumber(num) {
    const digits = new Set(num.toString().split(""));
    return digits.size <= 2;
  }
  function findClosestDoubleNumberLessOrEqual(num) {
    for (let i = num; i >= 0; i--) {
      if (isDoubleNumber(i)) {
        return i;
      }
    }
    return null;
  }
  function findClosestDoubleNumberGreaterOrEqual(num) {
    for (let i = num; i <= Number.MAX_SAFE_INTEGER; i++) {
      if (isDoubleNumber(i)) {
        return i;
      }
    }
    return null;
  }
  const lessOrEqual = findClosestDoubleNumberLessOrEqual(n);
  const greaterOrEqual = findClosestDoubleNumberGreaterOrEqual(n);

  // Если оба числа найдены, возвращаем наименьшее из них
  if (lessOrEqual !== null && greaterOrEqual !== null) {
    return Math.min(lessOrEqual, greaterOrEqual);
  }

  // Если найдено только одно число, возвращаем его
  return lessOrEqual !== null ? lessOrEqual : greaterOrEqual;
}
console.log(doubleNumber(2234));

function countSmileys(arr) {
  const smileyRegex = /^[:;][-~]?[)D]$/;
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((count, str) => {
    if (smileyRegex.test(str)) {
      return count + 1;
    }
    return count;
  }, 0);
}

console.log(countSmileys([":)", ";(", ":-D", ":P", ";D", ":)", ";~"]));
