// https://www.codewars.com/kata/sort-two-arrays/javascript

function sortArrays(a1, a2) {
  return [sortUsing(a1, a2), sortUsing(a2, a1)];
}

// https://gist.github.com/gkucmierz/cbfd265a699b3f36c609453289363f49
function sortUsing(a1, a2) {
  const a = [];
  for (let i = 0; i < a1.length; ++i) {
    a[i] = [a1[i], a2[i], i];
  }
  return a.sort((a, b) => {
    const d = a[1]-b[1];
    return d === 0 ? a[2]-b[2] : d;
  }).map(a => a[0]);
}
