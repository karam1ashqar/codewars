// The position of a digital string in a infinite digital string
// https://www.codewars.com/kata/the-position-of-a-digital-string-in-a-infinite-digital-string/train/javascript

function findPosition(num) {
  let next = (function() {
    let n = 1;
    let cnt = 0;
    let buf = [];
    return (len) => {
      while (buf.length < len) {
        buf.push(...(''+(n++)).split(''));
      }
      let res = buf.join('').substr(0, len);
      buf.shift();
      return [res, cnt++];
    };
  }());
  
  while (1) {
    let n = next(num.length);
    // console.log(n[0]);
    if (n[0] === num) {
      return n[1];
    }
    if (1e8 < n[1]) {
      console.log(num);
      break;
    }
  }
}


console.log(findPosition('1000000071'));