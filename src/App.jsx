import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Auction from "./pages/Auction";
import Gallery from "./pages/Gallery";
import Players from "./pages/Players";
import Teams from "./pages/Teams";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </>
  );
}
