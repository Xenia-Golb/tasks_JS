function oddElimination(str) {
  while (str.length > 1) {
    let arr = str.split("");
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result.push(arr[i]);
      }
    }

    str = result.join("");
  }

  return str;
}
