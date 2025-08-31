import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="neon">Projects</h2>
      {projects.map((p, idx) => (
        <ProjectCard key={idx} {...p} />
      ))}
    </div>
  );
}
