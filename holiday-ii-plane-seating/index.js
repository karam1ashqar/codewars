// https://www.codewars.com/kata/holiday-ii-plane-seating/javascript

function planeSeat(a) {
  const m = a.match(/^(\d+)(\w+)$/);
  const v = conditionalRange(+m[1], [
    { min: 1, max: 20, data: 'Front' },
    { min: 21, max: 40, data: 'Middle' },
    { min: 41, max: 60, data: 'Back' },
  ], false);
  const h = conditionalRange('ABCDEFGHK'.indexOf(m[2]), [
    { min: 0, max: 2, data: 'Left' },
    { min: 3, max: 5, data: 'Middle' },
    { min: 6, max: 8, data: 'Right' },
  ], false);
  return v && h ? [v, h].join`-` : 'No Seat!!';
}

// https://gist.github.com/gkucmierz/66ed209add3343db76482040d93d8a03
const conditionalRange = (n, ranges, def) => {
  for (let i = 0; i < ranges.length; ++i) {
    const r = ranges[i];
    if ('max' in r) {
      if ('min' in r) {
        if (r.min <= n && n <= r.max) return r.data;
      } else {
        if (n <= r.max) return r.data;
      }
    }
  }
  for (let i = ranges.length-1; 0 <= i; --i) {
    const r = ranges[i];
    if ('min' in r) {
      if (!('max' in r)) {
        if (r.min <= n) return r.data;
      }
    }
  }
  return def;
};
