import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/style.css';
function Square(props) {
  const [touch, setTouch] = useState(props.color);
  const handleChangeColor = () => {
    if (touch) {
      props.changeValue();
      setTouch(!touch);
    }
  };
  return (
    <div
      className='square'
      style={{
        backgroundColor: `${
          props.color === 'O' ? 'red' : props.color === 'X' ? 'green' : 'white'
        }`,
      }}
      onClick={handleChangeColor}
    >
      {props.value}
    </div>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  color: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Square;
