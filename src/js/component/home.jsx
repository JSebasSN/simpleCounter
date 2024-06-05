import React, { useState, useEffect } from 'react';

const ContadorSegundos = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  
  const formatNumber = (num) => {
    return num.toString().padStart(6, '0').split('');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: 'white', background: 'black', padding: '20px', borderRadius: '10px' }}>
      {formatNumber(seconds).map((digit, index) => (
        <div key={index} style={{ margin: '0 5px', background: 'grey', padding: '10px', borderRadius: '5px' }}>
          {digit}
        </div>
      ))}
    </div>
  );
}

export default ContadorSegundos;