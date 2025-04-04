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
  | "Alpine.js"

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
    imageUrl: "/images/youdemy.png",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "MySQL",],
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
    codeUrl: "https://github.com/amdymstfa/Moustapha_Ndiaye_Youdemy.git",
    category: "Fullstack",
    date: "2023",
  },

  {
    "id": "portfolio-nextjs",
    "title": "Moustapha Ndiaye",
    "description": "Portfolio professionnel moderne développé avec Next.js, TypeScript et Tailwind CSS, avec système de filtrage de projets et modals interactifs.",
    "imageUrl": "/images/mstfaP.png",
    "technologies": ["Next.js", "TypeScript", "React", "Tailwind", "JavaScript"],
    "features": [
      {
        "title": "Architecture modulaire",
        "description": "Structure de code organisée et évolutive permettant d'ajouter facilement de nouveaux projets."
      },
      {
        "title": "Système de filtrage avancé",
        "description": "Filtrage dynamique des projets par technologies et catégories pour une meilleure expérience utilisateur."
      },
      {
        "title": "Modals interactifs",
        "description": "Affichage détaillé des projets dans des fenêtres modales pour une présentation claire et concise."
      },
      {
        "title": "Design responsive",
        "description": "Interface adaptative optimisée pour tous les appareils, du mobile au desktop."
      },
      {
        "title": "Composants réutilisables",
        "description": "Utilisation de composants UI modulaires avec shadcn/ui pour une cohérence visuelle."
      }
    ],
    "demoUrl": "#",
    "codeUrl": "https://github.com/amdymstfa/portofolio.git",
    "category": "Frontend",
    "date": "2024"
  },
  {
    "id": "karacompete",
    "title": "KaraCompete",
    "description": "Application web pour organiser, suivre et analyser les compétitions de karaté avec une gestion avancée des participants, combats, arbitres et résultats.",
    "imageUrl": "/images/karateApp.png",
    "technologies": ["Laravel", "Alpine.js", "PostgreSQL"],
    "features": [
      {
        "title": "Gestion des participants",
        "description": "Inscription complète des athlètes avec leurs informations personnelles, possibilité d'inscription autonome."
      },
      {
        "title": "Gestion des catégories",
        "description": "Création flexible de catégories selon âge, sexe, poids et grade, avec options personnalisées."
      },
      {
        "title": "Organisation des combats",
        "description": "Génération automatique de tableaux de compétition et attribution des arbitres avec suivi en temps réel."
      },
      {
        "title": "Planification des horaires",
        "description": "Planification précise des combats avec rappels automatiques et affichage des retards."
      },
      {
        "title": "Affichage des résultats",
        "description": "Diffusion en direct des résultats et génération automatique de certificats pour les gagnants."
      },
      {
        "title": "Statistiques et rapports",
        "description": "Analyse des performances, statistiques détaillées et rapports exportables pour les organisateurs."
      },
      {
        "title": "Système de notifications",
        "description": "Envoi de notifications push et emails pour les rappels de matchs, changements de planning ou annonces importantes."
      }
    ],
    "demoUrl": "#",
    "codeUrl": "https://github.com/amdymstfa/KaraCompete.git",
    "category": "Fullstack",
    "date": "2025"
  }
  
  
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

