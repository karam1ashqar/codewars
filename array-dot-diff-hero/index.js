// https://www.codewars.com/kata/array-dot-diff-hero

function array_diff_very_fast(a, b) {
  const diff = [];
  const set = new Set();
  for (let i = 0; i < b.length; ++i) {
    set.add(b[i]);
  }
  for (let i = 0; i < a.length; ++i) {
    if (!set.has(a[i])) {
      diff.push(a[i]);
    }
  }
  return diff;
}
