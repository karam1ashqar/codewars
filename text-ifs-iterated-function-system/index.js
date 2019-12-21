// https://www.codewars.com/kata/text-ifs-iterated-function-system/javascript

function ifs(m, d) {
  const expand = (m1, m2) => {
    let rm = [];
    const [i1s, j1s] = [m1.length, m1[0].length];
    const [i2s, j2s] = [m2.length, m2[0].length];
    for (let i1 = 0; i1 < i1s; ++i1) {
      for (let i2 = 0; i2 < i2s; ++i2) {
        const i = i1*i2s+i2;
        rm[i] = [];
        for (let j1 = 0; j1 < j1s; ++j1) {
          for (let j2 = 0; j2 < j2s; ++j2) {
            rm[i][j1*j2s+j2] = m1[i1][j1] * m2[i2][j2];
          }
        }
      }
    }
    return rm;
  }
  const print = m => m.map(r => r.map(c => ' #'[c]+' ').join``).join`\n`;
  let res = m;
  while (--d) {
    res = expand(res, m);
  }
  return print(res);
}
