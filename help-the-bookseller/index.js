// https://www.codewars.com/kata/54dc6f5a224c26032800005c/solutions/javascript

function stockList(art, cat) {
  const arr = cat.map(c => {
    return [c, art.filter(a => a[0] === c).reduce((a, b) => {
      return a + +b.match(/\d+/);
    }, 0)];
  });
  return arr.reduce((a, [c, v]) => a + v, 0) && arr.map(([c, v]) => `(${c} : ${v})`).join` - ` || '';
}
