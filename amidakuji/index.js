// https://www.codewars.com/kata/amidakuji/javascript

function amidakuji(arr) {
  const swap = (arr, ai, bi) => [arr[ai], arr[bi]] = [arr[bi], arr[ai]];
  const res = new Array(arr[0].length+1).fill(0).map((_,i)=>i);
  arr.map((row, ri) => {
    [...row].map((d, di) => {
      d === '1' && swap(res, di, di + 1);
    });
  });
  return res;
}
