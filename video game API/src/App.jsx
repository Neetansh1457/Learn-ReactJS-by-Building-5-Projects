import { useState } from "react";
import "./App.css";

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [searchGames, setSearchGames] = useState([]);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setSearchGames(data);
      });
  };

  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search For A Game</h1>
        <input
          type="text"
          placeholder="Minecraft..."
          onChange={(e) => {
            setGameTitle(e.target.value);
          }}
        />
        <button onClick={searchGame}>Search Game Title</button>
        <div className="games">
          {searchGames.map((game, key) => {
            return (
              <div className="game" key={key}>
                {game.external}
              </div>
            );
          })}
        </div>
      </div>
      <div className="dealsSection">
        <h1>
          Latest Deals <span role="img"> 🔥 </span>
        </h1>
      </div>
    </div>
  );
}

export default App;
