// https://www.codewars.com/kata/min-factor-distance/train/javascript

function minDistance(n){
  let f = factors(n);
  f.unshift(1);
  let min = Infinity;
  for (let i = 1; i < f.length; ++i) {
    let diff = f[i] - f[i-1];
    if (0 < diff) {
      min = Math.min(min, diff);
    }
  }
  return min;
}

// https://gist.github.com/gkucmierz/41d47edbd0e5c3753915e9bbfe4ae1b2
function factors(n) {
  let max = Math.floor(Math.sqrt(n));
  let res = [];
  for (let i = 2; i <= max; ++i) {
    if (n % i === 0) {
      res.push(i);
      n /= i;
      max = Math.floor(Math.sqrt(n));
      i = (Math.min(...res) || 2) - 1;
    }
  }
  res.push(n);
  return res;
}