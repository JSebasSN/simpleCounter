import React, { useState } from 'react';

const ContadorSegundos = () => {
  const [seconds, setSeconds] = useState(0);

  
  const updateCounter = () => {
    setSeconds(prevSeconds => {
      
      setTimeout(updateCounter, 1000);
      return prevSeconds + 1;
    });
  };

  
  if (seconds === 0) {
    setTimeout(updateCounter, 1000);
  }

  
  const formatNumber = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: 'white', background: 'black', padding: '20px', borderRadius: '10px' }}>
      {formatNumber(seconds).map((digit, index) => (
        <div key={index} style={{ margin: '0 5px', background: 'grey', padding: '10px', borderRadius: '5px' }}>
          {digit}
        </div>
      ))}
    </div>
  );
};

export default ContadorSegundos;
