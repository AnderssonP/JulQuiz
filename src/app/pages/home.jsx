'use client'
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [playerNamesArray, setPlayerNamesArray] = useState([]);
  const [team1Array, setTeam1Array] = useState([]);
  const [team2Array, setTeam2Array] = useState([]);
  const [team3Array, setTeam3Array] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const playerNameInput = event.target.elements.players;
    const playerName = playerNameInput.value.trim();
    if (playerName !== '') {
      setPlayerNamesArray((prevPlayerNames) => [...prevPlayerNames, playerName]);
      playerNameInput.value = '';
    }
  };

  const handleMakeTeams = (event) => {
    event.preventDefault();
  
    const shuffledPlayers = [...playerNamesArray];
  
    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
    }
  
    const numberOfPlayers = shuffledPlayers.length;
    const teamSize = Math.ceil(numberOfPlayers / 3);
  
    
    const team1 = shuffledPlayers.slice(0, teamSize);
    const team2 = shuffledPlayers.slice(teamSize, 2 * teamSize);
    const team3 = shuffledPlayers.slice(2 * teamSize);
  
    setTeam1Array(team1);
    setTeam2Array(team2);
    setTeam3Array(team3);
  };
  
  
  

  return (
    <>
      <h1>Julquiz 2023</h1>
      <div className="make-players">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="players" className='header-Name'>Ange namn på spelare!</label>
          <input type="text" id="players" name="players" className='name-input'/>
          <input type="submit" value="Lägg till spelare" className="button" />
        </form>
      </div>
      <div className="player-names">
        <p>{playerNamesArray.join(', ')}</p>
      </div>
      <button onClick={handleMakeTeams} className='make-teams'>Dela upp i lag</button>
      <div className="player-names">
        <div className="team">

          <h2>Lag 1</h2>
          {team1Array.map((playerName, index) => (
            <p key={index}>{playerName}</p>
          ))}
        </div>
        <div className="team">
          <h2>Lag 2</h2>
          {team2Array.map((playerName, index) => (
            <p key={index}>{playerName}</p>
          ))}
        </div>
        <div className="team">

          <h2>Lag 3</h2>
          {team3Array.map((playerName, index) => (
            <p key={index}>{playerName}</p>
          ))}
        </div>
      </div>
      <Link href="/game">
        <button className='button'>Starta spel</button>
      </Link>
    </>
  );
};

export default Home;

