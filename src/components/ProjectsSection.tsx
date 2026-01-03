import { projects } from "@/data/projects";
import ProjectRow from "./ProjectRow";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-[var(--color-bg-primary)]">
            <div className="max-w-7xl mx-auto">
                <ProjectRow title="Projects" projects={projects} />
            </div>
        </section>
    );
}
