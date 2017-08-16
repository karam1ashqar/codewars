//  0  0 0 0 0
//  1  0 0 0 1
//  2  0 0 1 0
//  3  0 0 1 1
//  4  0 1 0 0
//  5  0 1 0 1
//  6  0 1 1 0
//  7  0 1 1 1
//  8  1 0 0 0
//  9  1 0 0 1
// 10  1 0 1 0
// 11  1 0 1 1
// 12  1 1 0 0
// 13  1 1 0 1
// 14  1 1 1 0
// 15  1 1 1 1


// count column bits
function ccb(col, n) {
  let div = (n + 1) / (2 << col);
  let sum = Math.floor(div);
  let rest = Math.max(0, (div - sum) * (2 << col) - (1 << col));
  return sum * (1 << col) + rest;
}

// count all bits
function cab(n) {
  // n < 1e9 => log2(1e9) ~= 30
  let bits = 0;
  for (let i = 0; i < 30; ++i) {
    bits += ccb(i, n);
  }
  return bits;
}

// calc between range
function cbr(a, b) {
  return cab(b) - cab(a-1)
}

// for (let i = 0; i < 16; ++i) {
//   console.log(i, cab(i));
// }

function countOnes(left, right) {
  return cbr(left, right);
}