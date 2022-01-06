import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Square from './components/Square';
import './styles/style.css';
Chessboard.propTypes = {
  value: PropTypes.number.isRequired,
  onActive: PropTypes.bool.isRequired,
  onGame: PropTypes.bool.isRequired,
  stopAll: PropTypes.func.isRequired,
};

function Chessboard(props) {
  let row = 10;
  let col = 10;
  const [OX, setOX] = useState('X');
  const [matrix, setMatrix] = useState(() => {
    let mat = new Array(row);
    mat.fill(new Array(col));
    mat.forEach((i) => i.fill(' '));
    return mat;
  });
  const checkMatDR = (Mat, x, y) => {
    if (x === row - 1 || y === col - 1) return Mat[x][y];
    return `${Mat[x][y]}${checkMatDR(Mat, x + 1, y + 1)}`;
  };
  const checkMatUL = (Mat, x, y) => {
    if (x === 0 || y === 0) return Mat[x][y];
    return `${checkMatUL(Mat, x - 1, y - 1)}${Mat[x][y]}`;
  };
  const checkMatDL = (Mat, x, y) => {
    if (x === row - 1 || y === 0) return Mat[x][y];
    return `${checkMatDL(Mat, x + 1, y - 1)}${Mat[x][y]}`;
  };
  const checkMatUR = (Mat, x, y) => {
    if (x === 0 || y === col - 1) return Mat[x][y];
    return `${Mat[x][y]}${checkMatUR(Mat, x - 1, y + 1)}`;
  };
  const computedMatrix = (Mat, x, y) => {
    let testCase = [
      String(Mat[x].join('')),
      String(Mat.map((i) => i[y]).join('')),
      `${checkMatUL(Mat, x, y)}${
        y !== col - 1 && x !== row - 1 ? checkMatDR(Mat, x + 1, y + 1) : ''
      }`,
      `${checkMatDL(Mat, x, y)}${
        y !== col - 1 && x !== 0 ? checkMatUR(Mat, x - 1, y + 1) : ''
      }`,
    ];
    if (testCase.some((val) => val.includes('OOOOO') || val.includes('XXXXX')))
      props.stopAll(OX);
  };
  const changeValue = (a, b) => {
    if (props.onGame) {
      let matNew = [];
      matNew = matrix.map((i) => i.map((j) => j));
      matNew[a][b] = OX;
      computedMatrix(matNew, a, b);
      setOX(OX === 'O' ? 'X' : 'O');
      props.handleActive(OX === 'X' ? true : false);
      setMatrix(matNew);
    }
  };
  return (
    <div className='matrix'>
      {matrix.map((r, index1) => (
        <div value={index1} className='matrix-row'>
          {r.map((c, index2) => {
            return (
              <Square
                value={matrix[index1][index2]}
                row={index1}
                col={index2}
                color={c}
                className='matrix-col'
                changeValue={() => changeValue(index1, index2)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Chessboard;
