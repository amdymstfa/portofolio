"use client"
import type { Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="my-4">
          <img
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-auto rounded-md object-cover aspect-video"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Fonctionnalités</h4>
            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">{feature.title}</h5>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Catégorie:</span>
            <Badge variant="outline">{project.category}</Badge>
            <span className="text-sm text-muted-foreground ml-4">Date:</span>
            <span>{project.date}</span>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between gap-4 flex-wrap">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
          <div className="flex gap-2">
            {project.codeUrl && (
              <Button variant="outline" asChild>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  Voir le code
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Voir la démo
                </a>
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

