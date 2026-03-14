const INITIAL_PURSE = 100000;
const MIN_PLAYERS = 11;

const teams = [
  { name: "A", batsmen: 3, bowlers: 2, allrounders: 1, spent: 45000 },
  { name: "B", batsmen: 2, bowlers: 3, allrounders: 2, spent: 52000 },
  { name: "C", batsmen: 4, bowlers: 1, allrounders: 1, spent: 38000 },
  { name: "D", batsmen: 3, bowlers: 3, allrounders: 1, spent: 61000 },
  { name: "E", batsmen: 2, bowlers: 2, allrounders: 2, spent: 40000 },
  { name: "F", batsmen: 1, bowlers: 4, allrounders: 1, spent: 47000 },
  { name: "G", batsmen: 3, bowlers: 2, allrounders: 2, spent: 56000 },
  { name: "H", batsmen: 2, bowlers: 3, allrounders: 1, spent: 43000 },
  { name: "I", batsmen: 4, bowlers: 2, allrounders: 0, spent: 49000 },
  { name: "J", batsmen: 3, bowlers: 1, allrounders: 2, spent: 36000 },
  { name: "K", batsmen: 2, bowlers: 2, allrounders: 1, spent: 30000 },
  { name: "L", batsmen: 1, bowlers: 3, allrounders: 2, spent: 54000 }
];

export default function Teams() {
  return (
    <div style={page}>
      <h2 style={title}>Teams Overview</h2>

      <div style={tableContainer}>
        {/* HEADER */}
        <div style={{ ...row, ...headerRow }}>
          <span>Team</span>
          <span>Batsmen</span>
          <span>Bowlers</span>
          <span>All-rounders</span>
          <span>Total</span>
          <span>Spent (₹)</span>
          <span>Left (₹)</span>
          <span>Needed</span>
        </div>

        {/* ROWS */}
        {teams.map((t) => {
          const total = t.batsmen + t.bowlers + t.allrounders;
          const left = INITIAL_PURSE - t.spent;
          const needed = Math.max(MIN_PLAYERS - total, 0);

          return (
            <div key={t.name} style={row}>
              <strong>{t.name}</strong>
              <span>{t.batsmen}</span>
              <span>{t.bowlers}</span>
              <span>{t.allrounders}</span>
              <strong>{total}</strong>
              <span>{t.spent}</span>
              <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                {left}
              </span>
              <span
                style={{
                  color: needed > 0 ? "#ef4444" : "#22c55e",
                  fontWeight: "bold"
                }}
              >
                {needed}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const page = {
  padding: "40px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const title = {
  marginBottom: "20px",
  fontSize: "26px"
};

const tableContainer = {
  width: "95%",
  maxWidth: "1100px",
  background: "#1f2937",
  borderRadius: "18px",
  padding: "14px"
};

const row = {
  display: "grid",
  gridTemplateColumns: "0.8fr 1fr 1fr 1.3fr 1fr 1.4fr 1.2fr 1.2fr",
  alignItems: "center",
  background: "#2a3341",
  padding: "12px 16px",
  borderRadius: "12px",
  marginBottom: "10px",
  textAlign: "center"
};

const headerRow = {
  background: "transparent",
  fontWeight: "600",
  color: "#9ca3af",
  marginBottom: "14px"
};
