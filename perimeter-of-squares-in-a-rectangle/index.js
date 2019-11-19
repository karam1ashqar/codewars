// https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle/javascript

const perimeter = (() => {
  const map = new WeakMap();
  const f = n => {
    if (n in map) return map[n];
    if (n === 0) return fib(n) * 4;
    return map[n] = 4 * fib(n) + f(n-1);
  };
  return f;
})();

// https://gist.github.com/gkucmierz/9bc8126bdb8d42a17ccb25f81bf02519
const fib = ((fst, snd) => {
  const map = new WeakMap();
  const f = n => {
    if (n in map) return map[n];
    if (n === 0) return fst;
    if (n === 1) return snd;
    return map[n] = f(n-1) + f(n-2);
  };
  return f;
})(1, 1);
