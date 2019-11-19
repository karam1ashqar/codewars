// https://www.codewars.com/kata/sum-of-pairs/train/javascript

const sum_pairs = (arr, sum) => {
  const map = new WeakMap();
  for (let i = 0; i < arr.length; ++i) {
    if (map[arr[i]]) {
      return [sum - arr[i], arr[i]];
    }
    map[sum - arr[i]] = true;
  }
  return [][0];
};
