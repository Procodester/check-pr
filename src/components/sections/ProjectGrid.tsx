import { projects } from "@/data/project.data"

import { ProjectCard } from "@/components/blocks/ProjectCard"

export function ProjectGrid() {
  return (
    <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 ">
    {projects.map((project, index) => (
      <div key={index} className="lg:*:h-full">
        <ProjectCard
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          liveUrl={project.liveUrl}
          repoUrl={project.repoUrl}
          techStack={project.techStack}
        />
      </div>
    ))}
  </div>
  )
};