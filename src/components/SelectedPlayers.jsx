import { useTeam } from "../context/TeamContext";

function TrashIcon() {
  return (
    <svg className="trash-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

export default function SelectedPlayers() {
  const { selectedPlayers, removePlayer, setView, MAX_PLAYERS, view } = useTeam();

  if (view !== "selected") return null;

  return (
    <section className="player-section">
      <div className="player-section__header">
        <h2 className="section-title">
          Selected Player ({selectedPlayers.length}/{MAX_PLAYERS})
        </h2>
        <div className="tab-group">
          <button className="tab-btn" onClick={() => setView("available")}>
            Available
          </button>
          <button className="tab-btn tab-btn--active tab-btn--selected-tab">
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      <div className="selected-list">
        {selectedPlayers.length === 0 ? (
          <p className="no-players">No players selected yet. Go to Available tab to add players.</p>
        ) : (
          selectedPlayers.map((player) => (
            <div key={player.id} className="selected-item">
              <div className="selected-item__img-wrap">
                <img
                  src={player.image}
                  alt={player.name}
                  className="selected-item__img"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/60x60/f3f4f6/9ca3af?text=P";
                  }}
                />
              </div>
              <div className="selected-item__info">
                <span className="selected-item__name">{player.name}</span>
                <span className="selected-item__style">{player.battingStyle}</span>
              </div>
              <button
                className="btn-remove"
                onClick={() => removePlayer(player.id)}
                title="Remove player"
              >
                <TrashIcon />
              </button>
            </div>
          ))
        )}
      </div>

      <button className="btn-add-more" onClick={() => setView("available")}>
        Add More Player
      </button>
    </section>
  );
}
