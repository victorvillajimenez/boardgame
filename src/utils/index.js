export function getSize (board, candidate) {
  return {
    rows: candidate
      .reduce(
        (max, e) => Math.max(max, e.row + 1),
        board.length
      ),
    cols: candidate
      .reduce(
        (max, e) => Math.max(max, e.col + 1),
        board[0].length
      )
  };
}
