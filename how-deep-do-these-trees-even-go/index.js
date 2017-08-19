// https://www.codewars.com/kata/how-deep-do-these-trees-even-go/train/javascript

function arrayDeepness(arr) {
  let deep = (arr, lvl, fn) => {
    if (arr && arr.map) {
//       arr.map(el => deep(el, lvl + 1, fn));
      for (let i = 0; i < arr.length; ++i) {
        deep(arr[i], lvl + 1, fn);
      }
    } else {
      fn(lvl);
    }
  };
  let res = [];
  deep(arr, 0, lvl => res.push(lvl));
  let min = Math.min(...res);
  let max = Math.max(0, ...res);
  let mean = +(res.reduce((a, b) => a + b, 0) / res.length).toFixed(3);
  return {min, max, mean};
}