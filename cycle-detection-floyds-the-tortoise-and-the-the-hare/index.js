// https://www.codewars.com/kata/cycle-detection-floyds-the-tortoise-and-the-the-hare/javascript

const floyd = function(f, x0) {
  let x = x0;
  let i = 0;
  const map = new WeakMap();
  
  while (1) {
    map[x] = i++;
    x = f(x);
    if (x in map) break;
  }
  
  return  [map[x], i - map[x]];
}
