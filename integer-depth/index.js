// https://www.codewars.com/kata/integer-depth/javascript

function computeDepth(x) {
  const d = new Set();
  for (let i = 1;; ++i) {
    [...(x*i + '')].map(n => d.add(n));
    if (d.size === 10) return i;
  }
  return 10;
}
