// Types pour les projets
export type Technology =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Angular"
  | "Vue"
  | "Next.js"
  | "Node.js"
  | "Express"
  | "PHP"
  | "Laravel"
  | "MySQL"
  | "PostgreSQL"
  | "MongoDB"
  | "Tailwind"
  | "Bootstrap"
  | "SASS"
  | "C"
  | "Golang"

export type ProjectCategory = "Frontend" | "Backend" | "Fullstack" | "Mobile" | "Design"

export interface ProjectFeature {
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  technologies: Technology[]
  features: ProjectFeature[]
  demoUrl?: string
  codeUrl?: string
  category: ProjectCategory
  date: string
}

// Données des projets
export const projects: Project[] = [
  {
    id: "youdemy",
    title: "Youdemy",
    description:
      "Plateforme d'apprentissage en ligne interactive développée avec HTML, CSS, Tailwind CSS, JavaScript, PHP et MySQL.",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Youdemy",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "MySQL"],
    features: [
      {
        title: "Interface utilisateur intuitive",
        description: "Développée avec HTML, CSS, Tailwind CSS et JavaScript pour une expérience utilisateur optimale.",
      },
      {
        title: "Back Office robuste",
        description: "Système d'administration en PHP et MySQL avec principes OOP.",
      },
      {
        title: "Base de données relationnelle",
        description: "Structure de données optimisée pour les cours et utilisateurs.",
      },
      {
        title: "Système d'authentification",
        description: "Authentification sécurisée avec gestion des rôles et permissions.",
      },
      {
        title: "Optimisation des performances",
        description: "Chargement rapide des pages et expérience utilisateur fluide.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
    category: "Fullstack",
    date: "2023",
  },
  {
    id: "eternia",
    title: "Eternia",
    description: "Site e-commerce développé en équipe avec HTML, CSS, Tailwind CSS et JavaScript.",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Eternia",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript"],
    features: [
      {
        title: "Interface utilisateur moderne",
        description: "Design responsive avec HTML, CSS, Tailwind CSS et JavaScript.",
      },
      {
        title: "Panier d'achat et devis PDF",
        description: "Système de panier interactif avec génération de devis en PDF.",
      },
      {
        title: "Galerie photo et carrousel",
        description: "Présentation visuelle des produits avec navigation intuitive.",
      },
      {
        title: "Tableau de bord KPI",
        description: "Visualisation des indicateurs clés de performance.",
      },
      {
        title: "Gestion des produits",
        description: "Système de filtrage, tri et pagination des produits.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
    category: "Frontend",
    date: "2023",
  },
]

// Fonction pour obtenir toutes les technologies uniques
export function getAllTechnologies(): Technology[] {
  const techSet = new Set<Technology>()

  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      techSet.add(tech)
    })
  })

  return Array.from(techSet).sort()
}

// Fonction pour obtenir toutes les catégories uniques
export function getAllCategories(): ProjectCategory[] {
  const categorySet = new Set<ProjectCategory>()

  projects.forEach((project) => {
    categorySet.add(project.category)
  })

  return Array.from(categorySet).sort()
}

// Fonction pour filtrer les projets
export function filterProjects(technologies: Technology[] = [], categories: ProjectCategory[] = []): Project[] {
  return projects.filter((project) => {
    // Si aucun filtre n'est appliqué, retourner tous les projets
    if (technologies.length === 0 && categories.length === 0) {
      return true
    }

    // Vérifier si le projet correspond aux technologies sélectionnées
    const matchesTech = technologies.length === 0 || technologies.some((tech) => project.technologies.includes(tech))

    // Vérifier si le projet correspond aux catégories sélectionnées
    const matchesCategory = categories.length === 0 || categories.includes(project.category)

    return matchesTech && matchesCategory
  })
}

