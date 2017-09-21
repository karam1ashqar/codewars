// https://www.codewars.com/kata/path-finder-number-1-can-you-reach-the-exit/train/javascript

function pathFinder(maze) {
  let m = maze.split(/\n/).map(row=>row.split``);
  let h = m.length;
  let w = m[0].length;
  let mark = (xx, yy) => {
    [[1, 0], [-1, 0], [0, 1], [0, -1], [0, 0]].map(p => {
      let [x, y] = [p[0]+xx, p[1]+yy];
      if (0 <= x && x < w) {
        if (0 <= y && y < h) {
          if (m[y][x] === '.') {
            m[y][x] = '#';
            mark(x, y);
          }
        }
      }
    });
  };
  mark(0, 0);
  return m[h-1][w-1] !== '.';
}
