"use client";

import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* Tombol toggle dark mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "fixed",
            top: "20px", // jarak dari atas
            left: "50%", // taruh di tengah
            transform: "translateX(-50%)", // biar pas tengah
            padding: "8px 14px",
            background: darkMode ? "#111" : "#eee",
            color: darkMode ? "#0f0" : "#03a366ff",
            border: "1px solid gray",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 50,
          }}
        >
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
