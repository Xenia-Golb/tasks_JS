var size = 45; // Увеличиваем размер елки
var space = "";

var items = ["* ", "o ", "♥ ", "✾ ", "☃ ", "☂ ", "❅ ", "❄ ", "✿ "]; // Украшения

// Создаём начальное количество пробелов
for (var s = 0; s < size - 1; s++) {
  space += " ";
}

// Рисуем елку
for (var i = 0; i < size; i++) {
  if (i == 0) {
    // Первая строка - звезда на вершине
    console.log(space + "★");
  } else {
    var tree = "";
    // Добавляем украшения или звёзды
    for (var j = 0; j < i + 1; j++) {
      tree += items[getRandomInt(0, items.length)];
    }
    console.log(space + tree);
  }

  // Уменьшаем количество пробелов для следующего уровня
  space = space.substring(0, space.length - 1);
}

// Добавляем ствол елки
var trunkHeight = Math.floor(size / 3); // Высота ствола
for (var t = 0; t < trunkHeight; t++) {
  console.log(" ".repeat(size - 2) + "| |");
}

// Добавляем Деда Мороза
console.log(" ".repeat(size - 4) + "C НГ!");

// Функция для получения случайного числа
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
