// https://www.codewars.com/kata/reverse-inside-parentheses-inside-parentheses/javascript

const reverseInParens = str => {
  const rb = /[\[\]]/g;
  const rm = /\([^\(\)]*\)/;
  const mi = {'[':']', ']':'['};
  const mc = {'[':'(', ']':')'};
  let last;
  while (last !== str) {
    last = str;
    str = str.replace(rm, s => {
      s = s.substr(1, s.length-2).replace(rb, s => mi[s]);
      return [']',...s,'['].reverse().join``;
    });
  }
  str = str.replace(rb, s => mc[s]);
  return str;
};
