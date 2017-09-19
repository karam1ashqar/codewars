// https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript

function multiply(a, b) {
  return a.split('').reduceRight((sum, d, i, arr) => {
    return sumStrings(mul(b, +d) + '0'.repeat(arr.length - i - 1), sum);
  }, '0');
}

// mltiple any big int (string) by one digit (0-9)
function mul(str, d) {
  return d.toString(2).split('').reduceRight((obj, b) => {
    let {res, last} = obj;
    if (b === '1') res = sumStrings(res, last);
    last = sumStrings(last, last);
    return {res, last}
  }, {res: '0', last: str}).res;
}

// https://www.codewars.com/kata/sum-strings-as-numbers
function sumStrings(aa,bb) { 
  let a = aa.split('').reverse();
  let b = bb.split('').reverse();
  let c = 0;
  let r = [];
  
  for (let i = 0; i < Math.max(a.length, b.length); ++i) {
    let sum = (+a[i]|0) + (+b[i]|0) + c;
    if (sum >= 10) {
      r[i] = (sum - 10) + '';
      c = 1;
    } else {
      r[i] = sum + '';
      c = 0;
    }
  }
  if (c) {
    r.push('1');
  }
  return r.reverse().join('').replace(/^0*/, '') || '0';
}
