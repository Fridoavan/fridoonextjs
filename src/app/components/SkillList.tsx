type SkillProps = {
  skills: string[];
};

export default function SkillList({ skills }: SkillProps) {
  return (
    <div className="skill-list">
      {skills.map((skill, idx) => (
        <span key={idx}>{skill}</span>
      ))}
    </div>
  );
}
