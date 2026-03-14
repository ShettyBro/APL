import "./PlayerCard.css";

export default function PlayerCard({ player }) {
  return (
    <div className={`player-card ${player.status === "SOLD" ? "sold" : ""}`}>
      
      {/* IMAGE */}
      <div className="player-image">
        <img
          src={player.image || "https://via.placeholder.com/300x400"}
          alt={player.name}
        />
        <span className="role-badge">{player.role}</span>
      </div>

      {/* DETAILS */}
      <div className="player-info">
        <h3 className="player-name">{player.name}</h3>

        <p className="player-style">
          Bat: {player.batting} | Bowl: {player.bowling}
        </p>

        <p className={`status ${player.status.toLowerCase()}`}>
          {player.status}
        </p>
      </div>

      {/* FOOTER */}
      <div className="player-footer">
        {player.status === "SOLD" ? (
          <>
            <span className="price">₹ {player.soldAmount}</span>
            <span className="team">{player.team}</span>
          </>
        ) : (
          <span className="unsold">NOT SOLD</span>
        )}
      </div>
    </div>
  );
}
