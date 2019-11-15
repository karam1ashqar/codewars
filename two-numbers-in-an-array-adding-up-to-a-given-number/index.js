// https://www.codewars.com/kata/two-numbers-in-an-array-adding-up-to-a-given-number

function hasPair(a, sum) {
  a.sort((a, b) => a - b);
  let [li, ui] = [0, a.length -1];
  while (li < ui) {
    const tmp = a[li] + a[ui];
    if (tmp === sum) return true;
    if (tmp < sum) {
      ++li;
    } else {
      --ui;
    }
  }
  return false;
}
