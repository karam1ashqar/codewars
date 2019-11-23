// https://www.codewars.com/kata/cycle-detection-floyds-the-tortoise-and-the-the-hare/javascript

const floyd = function(f, x0) {
  let x = x0;
  let i = 0;
  const map = new WeakMap();
  
  while (!(x in map)) {
    map[x] = i++;
    x = f(x);
  }
  
  return  [map[x], i - map[x]];
}
