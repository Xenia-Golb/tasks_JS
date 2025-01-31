/**Напишите функцию frequentSymbol(text), принимающую на вход текст, в котором нужно найти самый часто используемый символ и вывести его.

Если же в тексте одинаковое количество символов встречается одинаковое количество раз, то функция будет выводить тот символ, который находится первым в тексте.

Строчная и прописная буква - это разные символы. */

function frequentSymbol(text) {
  const frequency = {};
  let maxCount = 0;
  let maxSymbol = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (frequency[char] === undefined) {
      frequency[char] = 0;
    }
    frequency[char]++;

    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxSymbol = char;
    }
  }

  return maxSymbol;
}

// Напишите функцию longestSequence(text), которая принимает на вход строку text и возвращает самый длинный символ, который встречается в строке подряд. Если несколько символов имеют одинаковую длину последовательности, верните первый из них в порядке их появления в тексте.

function longestSequence(text) {
  let maxCount = 0;
  let maxSymbol = "";
  for (let i = 0; i < text.length; i++) {}
}
