// https://www.codewars.com/kata/boggle-word-checker/train/javascript

function checkWord(board, word, pos) {
  let h = board.length;
  let w = board[0].length;
  let char = word[0];
  if (!char) return true;
  if (pos) {
    let ymin = Math.max(0, pos.y - 1);
    let xmin = Math.max(0, pos.x - 1);
    let ymax = Math.min(h, pos.y + 2);
    let xmax = Math.min(w, pos.x + 2);
    for (let y = ymin; y < ymax; ++y) {
      for (let x = xmin; x < xmax; ++x) {
        if (board[y][x] === char) {
          let c = clone(board);
          c[y][x] = '';
          if (checkWord(c, word.substr(1), {y, x})) return true;
        }
      }
    }
  } else {
    for (let i = 0; i < h; ++i) {
      for (let j = 0; j < w; ++j) {
        if (board[i][j] === char) {
          let c = clone(board);
          c[i][j] = '';
          if (checkWord(c, word.substr(1), {y:i, x:j})) return true;
        }
      }
    }
  }
  return false;
}

let clone = b => b.map(r => r.slice());