import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo neon">Frido Avan</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
