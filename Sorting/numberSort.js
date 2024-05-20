let numbers = [1, 100, 67, 48, 30, 57];

let sortedArrAcendingOrder = numbers.slice().sort((a, b) => {
  return a - b;
});

let sortedArrDecendingOrder = numbers.slice().sort((a, b) => {
  return b - a;
});
console.log(sortedArrAcendingOrder);
console.log(sortedArrDecendingOrder);
