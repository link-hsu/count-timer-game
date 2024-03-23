import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [ enteredPlayerName, setEnteredPlayeName ] = useState(null);

  function handleClick() {
    setEnteredPlayeName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
