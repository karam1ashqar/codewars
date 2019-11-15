// https://www.codewars.com/kata/anagram-difference

function anagramDifference([...a1], [...a2]) {
  return a1.length + a2.length - intersection(a1, a2).length * 2;
}

// https://gist.github.com/gkucmierz/8ee04544fa842411f7553ef66ac2fcf0
const intersection = (a1, a2) => {
  const cnt = new Map();
  a2.map(el => cnt[el] = el in cnt ? cnt[el] + 1 : 1);
  return a1.filter(el => el in cnt && 0 < cnt[el]--);
};
