import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chessboard from '../../features/Chessboard';
import Timer from '../../features/Timer';
import './styles/style.css';
import Winner from '../../features/Winner';
function Board(props) {
  const [onActive, setOnActive] = useState(true);
  const [onGame, setOnGame] = useState(true);
  const [sw, setSw] = useState(true);
  const [winner, setWinner] = useState("Who's");
  const handleActive = (e) => {
    setOnActive(!onActive);
    setSw(!e);
  };
  const stopAll = (e) => {
    setOnActive(!onActive);
    setOnGame(!onGame);
    setWinner(e === 'X' ? 'O' : 'X');
  };
  return (
    <div className='board'>
      <Winner value={winner} />
      <Chessboard
        onGame={onGame}
        handleActive={(e) => handleActive(e)}
        stopAll={(e) => stopAll(e === 'X' ? 'O' : 'X')}
      />
      <Timer switch={sw} onActive={onActive} stopAll={(e) => stopAll(e)} />
    </div>
  );
}

Board.propTypes = {};

export default Board;
