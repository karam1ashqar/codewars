// https://www.codewars.com/kata/which-are-in/train/javascript

function inArray(a1, a2) {
  let s2 = a2.join('_');
  return a1.filter(w => 0 <= s2.indexOf(w)).sort((a, b) => a.localeCompare(b));
}