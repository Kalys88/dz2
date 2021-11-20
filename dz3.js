let size = 4;
let board = '';

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size * 2; col++) {
    if ((row + col) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);


