import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Clock from './components/Clock';
import './styles/style.css';
function Timer(props) {
  const stopAllClock = (e) => {
    props.stopAll(e);
  };
  return (
    <div className='timer-container'>
      <Clock
        value={'X'}
        onActive={props.onActive}
        switch={props.switch}
        stopAll={(e) => stopAllClock(e)}
      />
      <Clock
        value={'O'}
        onActive={props.onActive}
        switch={!props.switch}
        stopAll={(e) => stopAllClock(e)}
      />
    </div>
  );
}

Timer.propTypes = {
  switch: PropTypes.bool.isRequired,
};

export default Timer;
