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
