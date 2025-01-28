import React, { useEffect, useState } from "react";

function Game() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=28904cf3cd68412d877339ecdeb1634f")
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        setData(info.results); // Use results from the API response
      })
  }, []);
  return (
    <div className="container mt-3">
      <h1 className="mb-5">Game List</h1>
      <div className="row">
        {data.map((game) => (
          <div className="col-md-2 mb-4" style={{ width: "35rem", overflow:"hidden" }}>
            <div className="card" >
              <img src={game.background_image} className="card-img-top" style={{ height: "12rem", objectFit: "cover" }} />
              <div className="card-body">
                <h2 className="title">{game.name}</h2>
                <p className="card-text d-flex ">
                  <span className="text-danger me-5">Released: {game.released}</span>
                  <span className="text-warning me-5">Rating: {game.rating}</span>
                  <span className="text-primary me-5">Playtime: {game.playtime}</span>
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
