// https://www.codewars.com/kata//javascript

function scoreHand(cards) {
  const cnt = (c, s = 0) => {
    if (c.length === 0) return [s]; 
    const [f, ...o] = c;
    if ((+f)+'' === f) return cnt(o, +f + s);
    if ('JQK'.indexOf(f) !== -1) return cnt(o, 10 + s);
    if ('A'.indexOf(f) !== -1) return [...cnt(o, 11 + s), ...cnt(o, 1 + s)];
  };
  const all = cnt(cards);
  const be21 = all.filter(s => s <= 21);
  if (be21.length) return Math.max(...be21);
  return Math.min(...all);
}
