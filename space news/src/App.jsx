import { useState, useEffect } from "react";
import "./App.css";

// API link
const link = "https://api.spaceflightnewsapi.net/v4/articles/";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setNewsList(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="title"></div>
      <h1>Space News</h1>
      <div className="newsContainer">
        {newsList.map((val, key) => {
          return (
            <div
              key={key}
              className="article"
              onClick={() => {
                window.open(val.url, "_blank");
              }}
            >
              <h3>{val.title}</h3>
              <img src={val.image_url} alt="" />
              <p>{val.summary}</p>
              <h4>{val.published_at}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
