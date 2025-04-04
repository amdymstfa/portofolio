"use client"

import { useState } from "react"
import { type Technology, type ProjectCategory, filterProjects } from "@/data/projects"
import ProjectCard from "@/components/project-card"
import ProjectFilters from "@/components/project-filters"

export default function ProjectsSection() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])
  const [selectedCategories, setSelectedCategories] = useState<ProjectCategory[]>([])

  const filteredProjects = filterProjects(selectedTechnologies, selectedCategories)

  return (
    <section id="projects" className="container py-24 sm:py-32 border-t">
      <h2 className="text-3xl font-bold mb-12 text-center">Mes Projets</h2>

      <ProjectFilters
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun projet ne correspond à vos critères de recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

