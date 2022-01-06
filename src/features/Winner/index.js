import React from 'react';
import PropTypes from 'prop-types';

function Winner(props) {
  return <h1>{`${props.value} WIN!`}</h1>;
}

Winner.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Winner;
