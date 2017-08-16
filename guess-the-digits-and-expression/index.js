function guessExpression(exp) {
  let m = exp.match(/([\w\d]+)/g);
  let sym = [m[0], m[1]];
  let res = +m[2];
  
  let uniq = (sym[0] + sym[1]).split('')
    .filter((el, i, arr) => arr.indexOf(el, i+1) === -1);
  
  let nums = new Array(uniq.length).fill(0);
  
  // brute force
  while (1) {
    let a = sym[0].replace(/./g, c => nums[uniq.indexOf(c)]);
    let b = sym[1].replace(/./g, c => nums[uniq.indexOf(c)]);
    if ((+a) * (+b) === res) {
      return `${a} * ${b} = ${res}`;
    }
    for (let i = 0; i < nums .length; ++i) {
      nums[i] += 1;
      if (nums[i] >= 10) {
        nums[i] = 0;
      } else {
        break;
      }
    }
  }
  
}
