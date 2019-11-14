// https://www.codewars.com/kata/594fae1a0462da7beb000046

const canJump = (arr, pos = 0) => {
  if (pos >= arr.length) return true;
  if (pos === arr.length - 1) return false;
  for (let i = arr[pos]; i > 0; --i) {
    if (canJump(arr, pos + i)) return true;
  }
  return false;
};
