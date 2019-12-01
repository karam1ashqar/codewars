// https://www.codewars.com/kata/decimal-to-factorial-and-back/javascript

const [
  dec2FactString,
  factString2Dec
] = (() => {
  const bases = [1, 1];
  let fact = 1;
  for (let i = 2; i < 36; ++i) {
    fact *= i;
    bases[i] = fact;
  }
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return [
    nb => {
      const res = [];
      for (let i = bases.length-1; 0 <= i; --i) {
        if (1 <= nb/bases[i]) {
          const tmp = Math.floor(nb/bases[i]);
          nb = nb - tmp * bases[i];
          res.push(tmp);
        } else {
          res.push(0);
        }
      }
      return res.map(n=>chars[n]).join``.replace(/^0+/, '') || '0';
    },
    str => {
      const r = [...str].reduceRight((acc, ch, i, arr) => {
        return acc + bases[arr.length - i - 1] * chars.indexOf(ch);
      }, 0);
      return r;
    }
  ];
})();
