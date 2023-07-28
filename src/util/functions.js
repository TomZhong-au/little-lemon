export function numberToArr(number) {
  const arr = [];
  let rating = number;
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      arr.push(1);
    } else if (rating < 1 && rating >= 0.4) {
      arr.push(0.5);
    } else {
      arr.push(0);
    }
    rating--;
  }

  return arr;
}
