"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { type Technology, type ProjectCategory, getAllTechnologies, getAllCategories } from "@/data/projects"

interface ProjectFiltersProps {
  selectedTechnologies: Technology[]
  setSelectedTechnologies: (technologies: Technology[]) => void
  selectedCategories: ProjectCategory[]
  setSelectedCategories: (categories: ProjectCategory[]) => void
}

export default function ProjectFilters({
  selectedTechnologies,
  setSelectedTechnologies,
  selectedCategories,
  setSelectedCategories,
}: ProjectFiltersProps) {
  const [techOpen, setTechOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)

  const technologies = getAllTechnologies()
  const categories = getAllCategories()

  const toggleTechnology = (tech: Technology) => {
    if (selectedTechnologies.includes(tech)) {
      setSelectedTechnologies(selectedTechnologies.filter((t) => t !== tech))
    } else {
      setSelectedTechnologies([...selectedTechnologies, tech])
    }
  }

  const toggleCategory = (category: ProjectCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const clearFilters = () => {
    setSelectedTechnologies([])
    setSelectedCategories([])
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Popover open={techOpen} onOpenChange={setTechOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={techOpen} className="justify-between">
              Technologies
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Rechercher..." />
              <CommandList>
                <CommandEmpty>Aucune technologie trouvée.</CommandEmpty>
                <CommandGroup>
                  {technologies.map((tech) => (
                    <CommandItem key={tech} value={tech} onSelect={() => toggleTechnology(tech)}>
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedTechnologies.includes(tech) ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {tech}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={categoryOpen} onOpenChange={setCategoryOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={categoryOpen} className="justify-between">
              Catégories
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Rechercher..." />
              <CommandList>
                <CommandEmpty>Aucune catégorie trouvée.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem key={category} value={category} onSelect={() => toggleCategory(category)}>
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedCategories.includes(category) ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {category}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {(selectedTechnologies.length > 0 || selectedCategories.length > 0) && (
          <Button variant="ghost" onClick={clearFilters} className="h-10">
            Effacer les filtres
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {(selectedTechnologies.length > 0 || selectedCategories.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {selectedTechnologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="flex items-center gap-1">
              {tech}
              <X className="h-3 w-3 cursor-pointer" onClick={() => toggleTechnology(tech)} />
            </Badge>
          ))}

          {selectedCategories.map((category) => (
            <Badge key={category} variant="outline" className="flex items-center gap-1">
              {category}
              <X className="h-3 w-3 cursor-pointer" onClick={() => toggleCategory(category)} />
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

