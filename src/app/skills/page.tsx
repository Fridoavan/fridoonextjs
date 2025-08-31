import { FaBasketballBall, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { GiBroadsword } from "react-icons/gi"; // buat icon "Jungler ML"

export default function SkillsPage() {
  const skills = [
    { name: "Jungler ML", icon: <GiBroadsword size={40} /> },
    { name: "Basketball", icon: <FaBasketballBall size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "CSS", icon: <FaCss3 size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
  ];

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>My Skills</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #00ff99",
              borderRadius: "10px",
              padding: "1rem",
              background: "#111",
              color: "#00ff99",
              textAlign: "center",
            }}
          >
            {skill.icon}
            <p style={{ marginTop: "0.5rem" }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
