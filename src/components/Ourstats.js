import React from 'react';
import './Ourstats.css';
import CountUp, { useCountUp } from 'react-countup';

function Ourstats() {
 

  return (
    <div className='stats-container'>
        <div className='stats-items'>
        <div className='stat'> <CountUp end={90} duration={5} suffix={"+ members"}  enableScrollSpy useEasing scrollSpyOnce /> </div>
        <div className='stat'> <CountUp end={1000} duration={3} suffix={"+ memories created"}  enableScrollSpy useEasing scrollSpyOnce /> </div>
        <div className='stat'> <CountUp end={1} duration={4} suffix={" amazing community"}  enableScrollSpy useEasing  scrollSpyOnce /> </div>
        </div>
    </div>  
  );
}

export default Ourstats;