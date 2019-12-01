// https://www.codewars.com/kata/the-deaf-rats-of-hamelin/javascript

const countDeafRats = function(town) {
  const [l, r] = town.split('P');
  const cnt = s => {
    const c = [0, 0];
    const p = ['O~', '~O'];
    while (1) {
      let idx = p.map(p => s.indexOf(p));
      let min = Math.min(...idx);
      let max = Math.max(...idx);
      let sidx;
      if (0 <= min) {
        sidx = min;
      } else if (0 <= max) {
        sidx = max;
      } else {
        break;
      }
      const sp = s.slice(sidx, sidx+2);
      s = s.replace(sp, '');
      ++c[p.indexOf(sp)];
    }
    return c;
  };
  return cnt(l)[0] + cnt(r)[1];
};
