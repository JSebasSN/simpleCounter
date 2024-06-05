import React from 'react';

const BotonReiniciar = ({ onClick }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <button onClick={onClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px' }}>
      Reiniciar
    </button>
    </div>
  );
};

export default BotonReiniciar;