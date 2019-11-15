// https://www.codewars.com/kata/hidden-cubic-numbers

function isSumOfCubes(s) {
  const cns = ['0', '1', '153', '370', '371', '407'];
  const n = s.match(/[0-9]+/g) || [];
  const nr = n.reduce((a, b) => [...a, ...b.match(/[0-9]{1,3}/g)], []).map(n=>(+n)+'');
  const f = nr.filter(n => cns.indexOf((+n)+'') !== -1);
  if (!f.length) return 'Unlucky';
  return `${f.join` `} ${f.reduce((a,b) => +b + a, 0)} Lucky`;
}
