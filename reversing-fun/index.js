// https://www.codewars.com/kata/reversing-fun/javascript

function flipNumber(n) {
  let cnt = 0;
  const arr = [...n];
  const res = [];
  while (1) {
    let c = arr[++cnt % 2 ? 'pop' : 'shift']();
    if (!c) return res.join``;
    res.push(c);
  }
}