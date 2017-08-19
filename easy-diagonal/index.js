// https://www.codewars.com/kata/easy-diagonal/train/javascript

function diagonal(n, p) {
  let rows = (n, fn) => {
    let l = [1];
    for (let i = 0; i <= n; ++i) {
      fn(l);
      let a = [];
      for (let j = 0; j <= i+1; ++j) {
        a[j] = (l[j-1] || 0) + (l[j] || 0);
      }
      l = a;
    }
  }
  
  let sum = 0;
  rows(n, row => {
    sum += row[p] || 0;
  });
  
  return sum;
}