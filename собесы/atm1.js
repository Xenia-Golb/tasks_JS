//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10
function iWantToGet(ammountRequired) {
  const availableNotes = [100, 50, 20, 10];
  const result = [];

  if (ammountRequired > 0) {
    for (let i = 0; i < availableNotes.length; i++) {
      let note = availableNotes[i];

      while (ammountRequired - note >= 0) {
        ammountRequired -= note;
        result.push(note);
      }
    }
  } else {
    console.log("Pls enter new amount");
  }

  return result;
}

console.log(iWantToGet(365));

// Напишите функцию calculateCoins(amount), принимающую на вход сумму денег amount.

// Функция должна возвращать минимальное количество монет разных номиналов для набора определенной суммы денег.

// Имеются монеты номиналом: 1, 2, 5, 10 рублей.
function calculateCoins(amount) {
  const coins = [2, 5, 10, 1];
  coins.sort((a, b) => b - a);
  if (amount === 0) {
    return {};
  }

  const result = {};

  for (let coin of coins) {
    if (amount >= coin) {
      const count = Math.floor(amount / coin);
      result[coin] = count;
      amount -= count * coin;
    }
  }

  return result;
}
console.log(calculateCoins(556));
