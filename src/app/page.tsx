"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      style={{ textAlign: "center" }}
      initial={{ opacity: 0, y: 20 }}     // ⬅️ Mulai transparan & agak turun
      animate={{ opacity: 1, y: 0 }}      // ⬅️ Fade in + naik
      transition={{ duration: 0.8 }}      // ⬅️ Durasi animasi
    >
      <Image
        src="/fridorz.jpeg"   // cukup langsung "/fridorz.jpeg"
        alt="Frido Avan"
        width={200}
        height={200}
        style={{ borderRadius: "50%" }}
      />
      <h1 className="neon">Frido Avan Almuzaki</h1>
      <p>XI RPL B | Web Dev, Gamer, Basketball Athlete</p>
      <div style={{ marginTop: "20px" }}>
        <Link href="/about">About</Link> | <Link href="/projects">Projects</Link>
      </div>
    </motion.div>
  );
}
