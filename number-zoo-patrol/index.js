// https://www.codewars.com/kata/number-zoo-patrol/train/javascript

function findNumber(arr) {
  let max = Math.max(...arr);
  for (let i = 1; i < max; ++i) {
    if (arr.indexOf(i) < 0) {
      return i;
    }
  }
}