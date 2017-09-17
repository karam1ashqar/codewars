// https://www.codewars.com/kata/hollow-array/train/javascript

function isHollow(x) {
  do {
    if (x.length < 3) return false;
    let f = x.shift();
    let l = x.pop();
    if (f === 0 && l === 0) {
      return 0 < x.length && isZeros(x);
    }
    if (f === 0 || l === 0) {
      return false;
    }
  } while (1);
}

function isZeros(x) {
  return x.every(n => n === 0);
}