// https://www.codewars.com/kata/are-they-the-same/train/javascript

function comp(a1, a2) {
  if (!a2) return false;
  for (let i = 0; i < a1.length; ++i) {
    let n = a1[i] * a1[i];
    let idx = a2.indexOf(n);
    if (idx < 0) return false;
    a2.splice(idx, 1);
  }
  return (a2 || []).length === 0;
}
