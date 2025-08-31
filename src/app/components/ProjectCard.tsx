type ProjectProps = {
  name: string;
  description: string;
  link: string;
};

export default function ProjectCard({ name, description, link }: ProjectProps) {
  return (
    <div className="project-card">
      <h3 className="neon">{name}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}
