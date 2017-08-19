// https://www.codewars.com/kata/clever-split/train/javascript

function cleverSplit(s) {
  return s.match(/(\[[^\]]+\])|([!\w]+)/g);
}