// https://www.codewars.com/kata/random-substitution-cipher/javascript

function randomSub() {
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split``;
  const rnd = alph.slice().sort(() => Math.random()-0.5);
  return alph.reduce((res, k, i) => (res[k] = rnd[i], res), {});
}