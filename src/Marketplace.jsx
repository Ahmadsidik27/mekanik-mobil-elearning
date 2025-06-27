import React, { useState } from "react";
import "./LandingPage.css";

const simulasiData = {
  ECM: {
    title: "ECM (Engine Control Module)",
    desc:
      "ECM adalah otak pengendalian mesin kendaraan. Modul ini mengatur waktu pembakaran, suplai bahan bakar, dan kinerja mesin secara otomatis berdasarkan data sensor.",
    simulasi:
      "Ketika pedal gas diinjak, ECM membaca sensor throttle, mengatur suplai bahan bakar dan waktu pengapian secara presisi agar mesin responsif dan irit bahan bakar."
  },
  BCM: {
    title: "BCM (Body Control Module)",
    desc:
      "BCM mengendalikan fitur-fitur bodi kendaraan seperti lampu, central lock, alarm, wiper, dan jendela otomatis.",
    simulasi:
      "Saat tombol central lock ditekan, BCM menerima sinyal dan mengaktifkan motor pengunci pintu, serta dapat mengatur alarm dan lampu hazard secara otomatis."
  },
  TCM: {
    title: "TCM (Transmission Control Module)",
    desc:
      "TCM bertugas mengatur perpindahan gigi secara elektronik pada transmisi otomatis.",
    simulasi:
      "Saat RPM dan kecepatan kendaraan naik, TCM memerintahkan transmisi untuk berpindah ke gigi lebih tinggi sehingga perpindahan gigi terasa halus dan efisien."
  }
};

function LandingPage() {
  const [simulasi, setSimulasi] = useState(null);

  return (
    <div className="container">
      <header className="hero" id="profil">
        <div className="hero-content">
          <h1>Selamat Datang di Platform E-Learning Mekanik Mobil</h1>
          <p>
            PT Mekanik Digital Indonesia adalah platform edukasi dan marketplace otomotif modern untuk mekanik dan penggemar otomotif Indonesia. Kami menyediakan pembelajaran, konsultasi AI, serta jual beli sparepart & eBook.
          </p>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" alt="Bengkel" />
        </div>
      </header>
      <main>
        <section className="simulasi-section" id="simulasi">
          <h2>Simulasi Cara Kerja Modul Kendaraan</h2>
          <div className="modules">
            {Object.entries(simulasiData).map(([key, value]) => (
              <div className="module-card" key={key}>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
                <button className="btn" onClick={() => setSimulasi(key)}>
                  Simulasikan
                </button>
                {simulasi === key && (
                  <div className="simulasi-animasi">
                    <ModuleAnimation type={key} />
                    <div className="simulasi-result">{value.simulasi}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div>
          Kontak: info@mekanikdigital.id | © 2025 PT Mekanik Digital Indonesia
        </div>
      </footer>
    </div>
  );
}

function ModuleAnimation({ type }) {
  if (type === "ECM")
    return (
      <svg width="80" height="40">
        <rect x="10" y="10" width="60" height="20" rx="7" fill="#2a7fff" />
        <text x="40" y="25" textAnchor="middle" fill="#fff" fontSize="14">
          Mesin 🔥
        </text>
      </svg>
    );
  if (type === "BCM")
    return (
      <svg width="80" height="40">
        <rect x="10" y="10" width="60" height="20" rx="7" fill="#ffb92a" />
        <text x="40" y="25" textAnchor="middle" fill="#fff" fontSize="14">
          Body 🚪
        </text>
      </svg>
    );
  if (type === "TCM")
    return (
      <svg width="80" height="40">
        <rect x="10" y="10" width="60" height="20" rx="7" fill="#2affaa" />
        <text x="40" y="25" textAnchor="middle" fill="#fff" fontSize="14">
          Gigi ⚙️
        </text>
      </svg>
    );
  return null;
}

export default LandingPage;
