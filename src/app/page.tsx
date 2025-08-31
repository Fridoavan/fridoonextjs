import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
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
    </div>
  );
}
