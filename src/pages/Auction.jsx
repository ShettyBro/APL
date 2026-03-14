import { useState } from "react";
import PlayerCard from "../components/PlayerCard";

/* MOCK DATA – will be replaced by MongoDB later */
const mockPlayers = [
  {
    id: "APL11_01",
    name: "Arjun Kumar",
    role: "Batsman",
    image: "https://via.placeholder.com/300x400"
  },
  {
    id: "APL11_02",
    name: "Rohith Reddy B",
    role: "All-rounder",
    image: "https://via.placeholder.com/300x400"
  },
  {
    id: "APL11_03",
    name: "Ashitha Reddy",
    role: "Bowler",
    image: "https://via.placeholder.com/300x400"
  }
];

export default function Auction() {
  const [searchId, setSearchId] = useState("");
  const [player, setPlayer] = useState(null);
  const [bid, setBid] = useState("");
  const [team, setTeam] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);
  const [error, setError] = useState("");

  /* SEARCH PLAYER */
  const searchPlayer = () => {
    setError("");

    const fullId = `APL11_${searchId.trim()}`;

    const found = mockPlayers.find(
      (p) => p.id.toLowerCase() === fullId.toLowerCase()
    );

    if (!found) {
      setError("❌ Player not found. Check Player ID.");
      return;
    }

    setPlayer(found);
  };

  /* CONFIRM SALE */
  const confirmSale = () => {
    if (!team) {
      setError("❌ Please select a team or Not Sold");
      return;
    }

    if (team !== "Not Sold" && (!bid || Number(bid) <= 0)) {
      setError("❌ Enter a valid bid amount");
      return;
    }

    setError("");
    setShowCongrats(true);

    setTimeout(() => {
      setShowCongrats(false);
      setPlayer(null);
      setBid("");
      setTeam("");
      setSearchId("");
    }, 3000);
  };

  return (
    <div style={page}>
      <div style={overlay}></div>

      <div style={content}>
        {!player && !showCongrats && (
          <div style={searchCard}>
            <h2 style={pageTitle}>Auction</h2>

            <p style={searchLabel}>Search Player</p>

            {/* SINGLE SEARCH BAR */}
            <div style={searchBar}>
              <span style={prefix}>APL11_</span>

              <input
                style={input}
                placeholder="Enter Player Number (01,02...)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchPlayer();
                }}
              />
            </div>

            {error && <p style={errorText}>{error}</p>}

            <button style={searchButton} onClick={searchPlayer}>
              Search
            </button>
          </div>
        )}

        {player && !showCongrats && (
          <>
            <PlayerCard
              player={{
                ...player,
                status: "UNSOLD"
              }}
            />

            <div style={actionCard}>
              <h3 style={actionTitle}>Auction Action</h3>

              <input
                style={searchInput}
                placeholder="Bid Amount"
                type="number"
                value={bid}
                onChange={(e) => setBid(e.target.value)}
                disabled={team === "Not Sold"}
              />

              <select
                style={searchInput}
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              >
                <option value="">Select Team</option>
                <option>Rohith Reddy B</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>H</option>
                <option>I</option>
                <option>J</option>
                <option>K</option>
                <option>L</option>
                <option>Not Sold</option>
              </select>

              {error && <p style={errorText}>{error}</p>}

              <button style={searchButton} onClick={confirmSale}>
                Confirm
              </button>
            </div>
          </>
        )}

        {showCongrats && (
          <div style={congrats}>
            <h1>🎉 {team === "Not Sold" ? "UNSOLD" : "SOLD"} 🎉</h1>
            <p><b>{player.name}</b></p>
            <p>{team === "Not Sold" ? "No Team" : `Team ${team}`}</p>
            {team !== "Not Sold" && (
              <p>For ₹<b>{bid}</b></p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* STYLES */

const page = {
  minHeight: "calc(100vh - 72px)",
  backgroundImage: "url('/home/AucBG.avif')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.65)"
};

const content = {
  position: "relative",
  width: "100%",
  maxWidth: "720px",
  padding: "20px",
  textAlign: "center",
  color: "#ffffff"
};

const searchCard = {
  padding: "36px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.18)"
};

const pageTitle = {
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "20px"
};

const searchLabel = {
  fontSize: "14px",
  color: "#d1d5db",
  marginBottom: "10px"
};

const searchBar = {
  display: "flex",
  alignItems: "center",
  background: "#ffffff",
  borderRadius: "14px",
  padding: "0 12px",
  marginBottom: "18px"
};

const prefix = {
  fontWeight: "600",
  color: "#000",
  marginRight: "6px"
};

const input = {
  flex: 1,
  border: "none",
  outline: "none",
  padding: "14px 0",
  fontSize: "15px",
  background: "transparent"
};

const searchInput = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  fontSize: "15px",
  marginBottom: "16px",
  outline: "none"
};

const searchButton = {
  width: "100%",
  padding: "14px",
  borderRadius: "14px",
  border: "none",
  background: "linear-gradient(135deg,#22c55e,#16a34a)",
  color: "#022c22",
  fontWeight: "700",
  fontSize: "15px",
  cursor: "pointer"
};

const actionCard = {
  marginTop: "24px",
  padding: "28px",
  borderRadius: "18px",
  background: "rgba(0,0,0,0.45)"
};

const actionTitle = {
  marginBottom: "16px"
};

const errorText = {
  color: "#fca5a5",
  fontSize: "14px",
  marginBottom: "10px"
};

const congrats = {
  padding: "42px",
  background: "linear-gradient(135deg,#16a34a,#22c55e)",
  color: "#022c22",
  borderRadius: "18px"
};