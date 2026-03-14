import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  /* Load random gallery images */
  useEffect(() => {
    // Add your image names here (from public/gallery folder)
    const galleryImages = [
      "/gallery/1.jpg",
      "/gallery/2.jpg",
      "/gallery/3.jpg",
      "/gallery/4.jpg",
      "/gallery/5.jpg",
      "/gallery/6.jpg"
    ];

    // Shuffle images randomly
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    setImages(shuffled);
  }, []);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section style={heroSection}>
        <div style={overlay}></div>

        <div style={heroContent}>
          <p style={eyebrow}>Welcome to</p>
          <h1 style={{ fontWeight: 900 }}>
              ACHARYA APL AUCTION
            </h1>

          <p style={{ fontWeight: 300 }}>
              Let the cricket fire begin.
            </p>

          <button
            style={cta}
            onClick={() => navigate("/auction")}
          >
            Enter Auction
          </button>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section style={gallerySection}>
        <h2 style={galleryTitle}>Gallery</h2>

        <div style={grid}>
          {images.map((img, index) => (
            <div key={index} style={card}>
              <img
                src={img}
                alt="Gallery"
                style={image}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ================= STYLES ================= */

const heroSection = {
  height: "calc(100vh - 72px)",
  backgroundImage: "url('public\home\bg.webp')",
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

const heroContent = {
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  color: "#ffffff",
  padding: "0 24px",
  maxWidth: "800px"
};

const eyebrow = {
  fontSize: "16px",
  letterSpacing: "2px",
  marginBottom: "12px",
  color: "#d1d5db",
  textTransform: "uppercase"
};

const title = {
  fontSize: "52px",
  fontWeight: "700",
  marginBottom: "18px"
};

const subtitle = {
  fontSize: "18px",
  marginBottom: "36px",
  color: "#e5e7eb"
};

const cta = {
  padding: "16px 36px",
  borderRadius: "40px",
  border: "none",
  fontSize: "16px",
  fontWeight: "600",
  background: "linear-gradient(135deg,#22c55e,#16a34a)",
  color: "#022c22",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(34,197,94,0.4)"
};

/* -------- GALLERY -------- */

const gallerySection = {
  padding: "80px 40px",
  background: "#0f172a",
  color: "#ffffff",
  textAlign: "center"
};

const galleryTitle = {
  fontSize: "32px",
  marginBottom: "40px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "24px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const card = {
  overflow: "hidden",
  borderRadius: "16px",
  background: "#1e293b",
  transition: "transform 0.3s ease"
};

const image = {
  width: "100%",
  height: "300px",
  objectFit: "cover"
};
