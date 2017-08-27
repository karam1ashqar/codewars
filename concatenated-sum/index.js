// https://www.codewars.com/kata/concatenated-sum/train/javascript

const checkConcatenatedSum = (num, n) => {
  num = Math.abs(num);
  return (num+'').split('').map(d=>d.repeat(n)).reduce((a,n)=>a+(+n),0) === num;
};