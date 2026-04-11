import { useTeam } from "../context/TeamContext";
import { players } from "../data/players";
import PlayerCard from "./PlayerCard";

export default function PlayerList() {
  const { selectedPlayers, view, setView } = useTeam();

  if (view !== "available") return null;

  return (
    <section className="player-section">
      <div className="player-section__header">
        <h2 className="section-title">Available Players</h2>
        <div className="tab-group">
          <button
            className="tab-btn tab-btn--active"
            onClick={() => setView("available")}
          >
            Available
          </button>
          <button
            className="tab-btn tab-btn--selected-tab"
            onClick={() => setView("selected")}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div className="players-grid">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
}
