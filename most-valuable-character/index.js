// https://www.codewars.com/kata/most-valuable-character/javascript

function solve(st) {
  return [...new Set([...st])].map(c => {
    return [c, st.lastIndexOf(c) - st.indexOf(c)];
  }).sort((a, b) => {
    const c = b[1] - a[1];
    if (c === 0) return a[0].localeCompare(b[0]);
    return c;
  })[0][0];
}
