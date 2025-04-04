"use client"

import { useState } from "react"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"
import ProjectModal from "@/components/project-modal"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="aspect-video relative">
          <img
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>
              Détails
            </Button>
            {project.codeUrl && (
              <Button variant="outline" size="sm" asChild>
                <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Démo
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <ProjectModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

