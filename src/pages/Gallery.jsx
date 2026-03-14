export default function Gallery() {
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg"
  ];

  // Randomize order
  const shuffled = [...images].sort(() => 0.5 - Math.random());

  return (
    <div style={page}>
      <h2 style={title}>Auction Gallery</h2>

      <div style={grid}>
        {shuffled.map((img, index) => (
          <div key={index} style={card}>
            <img src={img} alt="" style={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* STYLES */

const page = {
  minHeight: "calc(100vh - 72px)",
  padding: "40px",
  background: "#0f172a",
  color: "#fff"
};

const title = {
  textAlign: "center",
  marginBottom: "30px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px"
};

const card = {
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
};

const image = {
  width: "100%",
  height: "250px",
  objectFit: "cover"
};
