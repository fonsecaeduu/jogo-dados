import React, { useState } from 'react';
import Dados from './Dados';
import './index.css';

function App() {
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);
  const [resultado, setResultado] = useState('');
  const [jogadas, setJogadas] = useState(0);
  const [vitorias, setVitorias] = useState(0);
  const [cooldown, setCooldown] = useState(false);

  const girarDadosGradativamente = () => {
    setCooldown(true);

    let contador = 0;
    const intervalo = setInterval(() => {
      const novoDado1 = Math.floor(Math.random() * 6) + 1;
      const novoDado2 = Math.floor(Math.random() * 6) + 1;
      setDado1(novoDado1);
      setDado2(novoDado2);

      contador++;

      if (contador === 5) {
        clearInterval(intervalo);

        const soma = novoDado1 + novoDado2;
        setJogadas((prevJogadas) => prevJogadas + 1);

        if (soma === 7 || soma === 11) {
          setResultado(`Você ganhou! Soma dos dados: ${soma}`);
          setVitorias((prevVitorias) => prevVitorias + 1);
        } else {
          setResultado(`Você perdeu! Soma dos dados: ${soma}`);
        }

        setTimeout(() => setCooldown(false), 1000);
      }
    }, 300);
  };

  const percentualVitorias = jogadas === 0 ? 0 : ((vitorias / jogadas) * 100).toFixed(2);

  return (
    <div id="card">
      <h1>Jogo de Dados</h1>
      <p>{resultado}</p>
      <Dados dado1={dado1} dado2={dado2} />
      <button onClick={girarDadosGradativamente} disabled={cooldown}>
        {cooldown ? 'Girando...' : 'Girar'}
      </button>
      <div id="resultado">
        <div id="left">
          <p>Giros</p>
          <p>{jogadas}</p>
        </div>
        <div id="divisor"></div>
        <div id="right">
          <p>Vitórias</p>
          <p>{vitorias}</p>
        </div>
      </div>
      <p id="percentualVit">Percentual de vitórias: {percentualVitorias}%</p>
    </div>
  );
}

export default App;
