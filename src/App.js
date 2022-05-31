import './index.css';
import React, { useState } from 'react';
import LevelControl from './components/LevelControl';
import Board from './components/Board';
import { getSize } from './utils';
import { fetchBoardGame } from './api/scrabble';

export default function App () {
  const [resp, setResp] = useState(null);

  const fetchCrossWords = async (val) => {
    const resp = await fetchBoardGame(val);
    resp.size = getSize(resp.board, resp.candidate);
    setResp(resp);
  };


  return (
    <div className='App'>
      <h3>Scrabble Cross Word Game - Current State</h3>
      <LevelControl fetchCrossWords={fetchCrossWords} />
      <Board resp={resp} />
    </div>
  );
}