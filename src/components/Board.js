import React from 'react';
import Letter from './Letter';

const Board = ({ resp = null }) => {
  if (!resp) return null;
  
  const { size, board, candidate } = resp;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))`,
        gridGap: '20px',
        margin: '20px',
      }}
    >
      {Array(size.rows)
        .fill(0)
        .map((e, i) => {
          return Array(size.cols)
            .fill(0)
            .map((f, j) => {
              const isBoard = board.length > i && board[0].length > j;
              const boardLetter = isBoard && board[i][j];
              const cand = candidate.find(c => c.col === j && c.row === i);
              const isCandInside = cand && board.length > cand.row && board[0].length > cand.col;
              return (
                <div
                  key={j}
                  style={{
                    display: 'flex',
                    padding: '5px',
                    border: isBoard ? '2px solid black' : '0',
                  }}
                >
                  <Letter letter={boardLetter} />
                  <Letter letter={cand?.letter} isInside={isCandInside} isCandidate />
                </div>
              );
            });
        })
      }
    </div>
  );
};

export default Board;
