import PlayerCard from "../components/PlayerCard";

const players = [
  {
    id: "P1",
    name: "Arjun Kumar",
    role: "All-rounder",
    batting: "Right",
    bowling: "Medium",
    image: "https://via.placeholder.com/300x400"
  },
  {
    id: "P2",
    name: "Rohith R",
    role: "Batsman",
    batting: "Left",
    bowling: "Spin",
    image: "https://via.placeholder.com/300x400"
  },
  {
    id: "P3",
    name: "Ashitha Reddy",
    role: "Bowler",
    batting: "Left",
    bowling: "Spin",
    image: "https://via.placeholder.com/300x400"
  }
];

export default function Players() {
  return (
    <div style={page}>
      <div style={overlay}></div>

      <div style={content}>
        <h1 style={title}>Players</h1>

        <div style={grid}>
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={{
                ...player,
                status: "UNSOLD"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  paddingTop: "120px",  // space for header
  backgroundImage: "url('/home/PlrBG.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative"
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.7)"
};

const content = {
  position: "relative",
  zIndex: 1,
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "40px 20px"
};

const title = {
  fontSize: "42px",
  fontWeight: 900,
  textAlign: "center",
  marginBottom: "60px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "40px",
  justifyItems: "center"
};
