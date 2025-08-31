"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Data dikirim:", formData);
    alert("Pesan berhasil dicetak di console 🚀");
  }

  return (
    <main style={{ padding: "2rem", color: "#00ff99", fontFamily: "monospace" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
          marginBottom: "2rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            background: "black",
            border: "1px solid #00ff99",
            color: "#00ff99",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            background: "black",
            border: "1px solid #00ff99",
            color: "#00ff99",
          }}
        />
        <textarea
          name="message"
          placeholder="Pesan"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            background: "black",
            border: "1px solid #00ff99",
            color: "#00ff99",
            minHeight: "100px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#00ff99",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Kirim
        </button>
      </form>

      {/* Social Links */}
      <div>
        <h2 style={{ marginBottom: "0.5rem" }}>Find me on:</h2>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem" }}>
          <li>
            <a
              href="https://github.com/Fridoavan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00ff99" }}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/4lmuzakyy_?igsh=eHVwODR0M3o4MmQ1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00ff99" }}
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
