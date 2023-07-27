export function numberToArr(number) {
  const arr = Array(Math.floor(number)).fill(1);
  const remainder = Math.round((number % 1) * 10) / 10;
  arr.push(remainder);
  return arr;
}
