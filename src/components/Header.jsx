import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header style={wrapper}>
      <div style={container}>
        {/* LOGO */}
        <div
          style={logoBox}
          onClick={() => navigate("/")}
        >
          <span style={logoIcon}>🏏</span>
          <span style={logoText}>HABBA APL AUCTION</span>
        </div>

        {/* NAV */}
        <nav style={nav}>
          <NavLink to="/players" style={navLink}>
            Players
          </NavLink>
          <NavLink to="/auction" style={navLink}>
            Auction
          </NavLink>
          <NavLink to="/teams" style={navLink}>
            Teams
          </NavLink>
        </nav>

        {/* CTA */}
        <button
          style={cta}
          onClick={() => navigate("/auction")}
        >
          Live Auction
        </button>
      </div>
    </header>
  );
}

/* ================= STYLES ================= */

const wrapper = {
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  background: "transparent"   // completely clean
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "18px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const logoBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer"
};

const logoIcon = {
  fontSize: "22px"
};

const logoText = {
  fontSize: "16px",
  letterSpacing: "1px",
  fontWeight: "600",
  color: "#ffffff"
};

const nav = {
  display: "flex",
  gap: "28px"
};

const navLink = ({ isActive }) => ({
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: isActive ? 700 : 500
});


const cta = {
  padding: "10px 20px",
  borderRadius: "30px",
  border: "1px solid rgba(255,255,255,0.4)",
  background: "transparent",
  color: "#ffffff",
  cursor: "pointer",
  transition: "all 0.2s ease"
};
