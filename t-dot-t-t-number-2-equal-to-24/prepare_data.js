
function equalTo24(a,b,c,d) {
  // const ops = [
  //   (a, b) => a + b,
  //   (a, b) => a - b,
  //   (a, b) => a * b,
  //   (a, b) => a / b
  // ];
  const ops = [
    (a, b) => `(${a}+${b})`,
    (a, b) => `(${a}-${b})`,
    (a, b) => `(${a}*${b})`,
    (a, b) => `(${a}/${b})`,
  ];
  const opsLen = ops.length;
  const arr = [a, b, c, d];
  let res = [];
  for (let i = 0; i < 3; ++i) {    
    for (let iop = 0; iop < opsLen; ++iop) {
      for (let j = 0; j < 2; ++j) {
        for (let jop = 0; jop < opsLen; ++jop) {
          for (let kop = 0; kop < opsLen; ++kop) {
            let n = [...arr.slice(0, i), ops[iop](arr[i], arr[i+1]), ...arr.slice(i+2)];
            n = [...n.slice(0, j), ops[jop](n[j], n[j+1]), ...n.slice(j+2)];
            const resStr = ops[kop](n[0], n[1]);
            if (eval(resStr) === 24) {
              res.push(resStr);
            }
          }
        }
      }
    }
  }
  return res;
}

let res = [];

for (let i = 1; i <= 13; ++i) {
  for (let j = 1; j <= 13; ++j) {
    for (let k = 1; k <= 13; ++k) {
      for (let l = 1; l <= 13; ++l) {
        let arr = [i, j, k, l];
        arr.sort((a, b) => a - b);
        let codes = equalTo24(i, j, k, l);
        if (codes.length) {
          if (!res[arr[0]]) res[arr[0]] = [];
          if (!res[arr[0]][arr[1]]) res[arr[0]][arr[1]] = [];
          if (!res[arr[0]][arr[1]][arr[2]]) res[arr[0]][arr[1]][arr[2]] = [];
          if (!res[arr[0]][arr[1]][arr[2]][arr[3]]) res[arr[0]][arr[1]][arr[2]][arr[3]] = codes[0];
        }
      }
    }
  }
}
