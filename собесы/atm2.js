let iWantToGet = (ammountRequired, limits) => {
  function collect(amount, nominals) {
    if (amount === 0) return {}; // success

    if (!nominals.length) return; // failure

    let currentNominal = nominals[0];
    let avaiableNotes = limits[currentNominal];
    let notesNeeded = Math.floor(amount / currentNominal);
    let numberOfNotes = Math.min(avaiableNotes, notesNeeded);

    console.group("Count");
    console.log("amount", amount);
    console.log("nominals", nominals);
    console.log("currentNominal", currentNominal);
    console.log("avaiableNotes", avaiableNotes);
    console.log("notesNeeded", notesNeeded);
    console.log("numberOfNotes ", numberOfNotes);
    console.groupEnd();

    for (let i = numberOfNotes; i >= 0; i--) {
      let result = collect(amount - i * currentNominal, nominals.slice(1));

      console.log("i", i, "result", result);

      if (result) {
        return i ? { [currentNominal]: i, ...result } : result;
      }
    }
  }

  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  console.log(nominals);

  return collect(ammountRequired, nominals);
};

// count of nominals in ATM

let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

//console.log(iWantToGet(1000, limits)); // {1000: 1}
console.log(iWantToGet(230, limits)); // {30: 1, 100: 2}
//console.log(iWantToGet(200, limits)); // {100: 2}
//console.log(iWantToGet(150, limits)); // {50: 1, 100: 1}
//console.log(iWantToGet(120, limits)); // {30: 4}
//console.log(iWantToGet(275, limits));
