import { useTeam } from "../context/TeamContext";

export default function PlayerCard({ player }) {
  const { addPlayer, isSelected } = useTeam();
  const selected = isSelected(player.id);

  return (
    <div className={`player-card ${selected ? "player-card--selected" : ""}`}>
      <div className="player-card__img-wrap">
        <img
          src={player.image}
          alt={player.name}
          className="player-card__img"
          onError={(e) => {
            e.target.src = "https://placehold.co/300x200/e2e8f0/94a3b8?text=Player";
          }}
        />
      </div>
      <div className="player-card__body">
        <div className="player-card__header">
          <div className="player-card__name-row">
            <span className="player-icon">👤</span>
            <span className="player-card__name">{player.name}</span>
          </div>
          <div className="player-card__meta">
            <span className="player-flag">{player.flag} {player.country}</span>
            <span className="player-role-badge">{player.role}</span>
          </div>
        </div>
        <div className="player-card__divider" />
        <div className="player-card__stats">
          <div className="stat-col">
            <span className="stat-label">Rating</span>
            <span className="stat-value">{player.battingStyle}</span>
          </div>
          <div className="stat-col stat-col--right">
            <span className="stat-label stat-label--right">{player.battingStyle}</span>
          </div>
        </div>
        <div className="player-card__footer">
          <span className="player-price">Price: ${player.price.toLocaleString()}</span>
          <button
            className={`btn-choose ${selected ? "btn-choose--selected" : ""}`}
            onClick={() => !selected && addPlayer(player)}
            disabled={selected}
          >
            {selected ? "Selected ✓" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
