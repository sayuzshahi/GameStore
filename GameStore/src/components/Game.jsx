import React, { useEffect, useState } from "react";

function Game() {
  const [data, setData] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 4;

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=28904cf3cd68412d877339ecdeb1634f")
      .then((response) => response.json())
      .then((info) => setData(info.results));
  }, []);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = data.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(data.length / gamesPerPage);

  return (
    <div className="container mt-3">
      <h1 className="mb-5 text-center">Game List</h1>
      <div className="row">
        {currentGames.map((game) => (
          <div
            key={game.id}
            className="col-md-2 mb-4"
            style={{ width: "20rem", overflow: "hidden" }}>
            <div className="card" onClick={() => setSelectedGame(game)} style={{ cursor: "pointer" }}>
              <img
                src={game.background_image}
                className="card-img-top"
                style={{ height: "25rem", objectFit: "cover" }}
                alt={game.name} />
              <div className="card-body">
                <h2 className="title">{game.name}</h2>
                <p className="card-text d-flex ">
                  <span className="text-danger me-3">Released: {game.released}</span>
                  <span className="text-warning me-3">Rating: {game.rating}</span>
                  <span className="text-primary me-3">Playtime: {game.playtime}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center mt-4">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link text-success" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link text-success" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>

      {selectedGame && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedGame.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedGame(null)}></button>
              </div>
              <div className="modal-body">
                <img src={selectedGame.background_image} className="img-fluid mb-3" alt={selectedGame.name} />
                <p><strong className="text-danger me-2">Released:</strong> {selectedGame.released}</p>
                <p><strong className="text-warning me-2">Rating:</strong> {selectedGame.rating}</p>
                <p><strong className="text-primary me-2">Playtime:</strong> {selectedGame.playtime} hours</p>
                <p>{selectedGame.description || "No description available."}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
