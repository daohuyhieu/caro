import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/style.css';
function Clock(props) {
  const [timeRun, setTimeRun] = useState(120);
  useEffect(() => {
    if (props.switch && timeRun > 0) {
      const loopID = setInterval(() => {
        setTimeRun(timeRun - 1);
      }, 1000);
      return () => {
        clearInterval(loopID);
      };
    }
  });
  useEffect(() => {
    if (timeRun <= 0) {
      props.stopAll(props.value);
    }
  }, [timeRun]);
  return (
    <div className='clock'>
      <h3>{props.value}</h3>
      <h3>{timeRun}</h3>
    </div>
  );
}

Clock.propTypes = {
  value: PropTypes.string.isRequired,
  onActive: PropTypes.bool.isRequired,
  stopAll: PropTypes.func.isRequired,
};

export default Clock;
