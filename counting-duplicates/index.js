// https://www.codewars.com/kata/counting-duplicates/javascript

function duplicateCount(text) {
  const m = text.toLowerCase().match(/[a-z0-9]/g) || [];
  const cnt = new Map();
  m.map(c => cnt.set(c, (cnt.get(c) || 0) + 1));
  return [...cnt].filter(([k,v])=>1<v).length;
}
