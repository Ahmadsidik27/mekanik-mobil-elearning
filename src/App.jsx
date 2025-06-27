import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Marketplace from "./Marketplace";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <div>
      <nav className="navbar">
        <div className="logo">🚗 PT Mekanik Digital Indonesia</div>
        <ul>
          <li>
            <button className="nav-btn" onClick={() => setPage("landing")}>Profil</button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setPage("landing")}>Simulasi</button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setPage("marketplace")}>Marketplace</button>
          </li>
        </ul>
      </nav>
      {page === "landing" && <LandingPage />}
      {page === "marketplace" && <Marketplace />}
    </div>
  );
}

export default App;
