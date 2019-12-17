// https://www.codewars.com/kata/minimum-path-in-squares/javascript

// this solution taht works is not actually minimum path
function minPath(grid, x, y) {
  const [X, Y] = [0, 1];
  const row = new Array(x+1).fill(0);
  for (let i = 0; i <= y; ++i) {
    row[0] += grid[i][0];
    for (let j = 1; j <= x; ++j) {
      if (i === 0) {
        
      }
      if (i === 0) {
        row[j] = row[j-1] + grid[i][j];  
      } else {
        row[j] = Math.min(row[j-1], row[j]) + grid[i][j];
      }
    }
  }
  return row.pop();
}

// this solution calculates minimum path
function minPath2(grid, x, y) {
  const [X, Y] = [0, 1];
  const [w, h] = [grid[0].length, grid.length];
  const m = new Array(h).fill(0).map(_ => new Array(w).fill(Infinity));
  
  const check = [
    [0, 0, 0] // x, y, sum
  ];
  
  const path = (grid, m, x, y, sum) => {
    if (x < 0 || y < 0) return;
    if (w <= x || h <= y) return;
    const newSum = sum + grid[y][x];
    if (newSum < m[y][x]) {
      m[y][x] = newSum;
      [[-1, 0], [1, 0], [0, -1], [0, 1]].map(diff => {
        check.push([x+diff[X], y+diff[Y], newSum]);
      });
    }
  };
  
  let cnt = 0;
  while (check.length) {
    ++cnt;
    const ch = check.shift();
    path(grid, m, ...ch);
  }
  return m[y][x];
}
