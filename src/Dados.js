import React from 'react';

function Dados({ dado1, dado2 }) {
  return (
    <div id="imgDados">
      <img src={`/imgs/dado${dado1}.png`} alt={`Dado ${dado1}`} width="120px" />
      <img src={`/imgs/dado${dado2}.png`} alt={`Dado ${dado2}`} width="120px" />
    </div>
  );
}

export default Dados;
