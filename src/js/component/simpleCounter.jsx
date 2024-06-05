import React, { useState, useEffect } from 'react';
import BotonReiniciar from './btnReiniciar';



const ContadorSegundos = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const resetCounter = () => {
    setSeconds(0);
  };

  const formatNumber = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
        
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: 'white', background: 'black', padding: '20px', borderRadius: '10px' }}>
      <i className="fa fa-clock icon me-3"></i>
        {formatNumber(seconds).map((digit, index) => (
          <div key={index} style={{ margin: '0 5px', background: 'grey', padding: '10px', borderRadius: '5px' }}>
            {digit}
          </div>
        ))}
      </div>
      
      <BotonReiniciar onClick={resetCounter} />
    </div>
  );
};

export default ContadorSegundos;
