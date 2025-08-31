"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(document.body.classList.contains("dark"));
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Biodata */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "20px",
          borderRadius: "12px",
          background: darkMode ? "#222" : "#fff",
          color: darkMode ? "#eee" : "#000",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>📌 Biodata</h2>
        <p>
          Nama: Frido Avan <br />
          Umur: 16 Tahun <br />
          Hobi: Basket, Renang, Ngoding, Gambar, Musik
        </p>
      </motion.div>

      {/* Motivasi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "20px",
          borderRadius: "12px",
          background: darkMode ? "#222" : "#fff",
          color: darkMode ? "#eee" : "#000",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>🔥 Motivasi</h2>
        <p style={{ fontStyle: "italic" }}>
          “Gagal itu biasa, yang penting jangan berhenti.  
          Setiap langkah kecil bakal bawa gue lebih deket ke tujuan besar.”
        </p>
      </motion.div>
    </main>
  );
}
