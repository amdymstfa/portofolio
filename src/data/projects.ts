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
  | "Chart.js"
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
  | "Blade"
  | "Swagger"
  | "PHPUnit"

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
  },
  {
    "id": "savesmart",
    "title": "SaveSmart - Gestion Financière",
    "description": "Application web permettant de gérer les finances personnelles en famille, avec suivi des revenus, dépenses, objectifs d'épargne et visualisations graphiques.",
    "imageUrl": "/images/smartsave.webp",
    "technologies": ["Laravel", "PHP", "PostgreSQL", "Tailwind", "Chart.js"],
    "features": [
      {
        "title": "Gestion des utilisateurs",
        "description": "Inscription et authentification sécurisée, avec possibilité d'ajouter plusieurs utilisateurs sous un même compte familial."
      },
      {
        "title": "Suivi des finances",
        "description": "Saisie et suivi des revenus, dépenses et objectifs financiers via des formulaires CRUD intuitifs."
      },
      {
        "title": "Visualisation graphique",
        "description": "Tableaux et diagrammes dynamiques pour illustrer la répartition du budget."
      },
      {
        "title": "Catégories personnalisables",
        "description": "Ajout et gestion de catégories telles que Alimentation, Logement, Divertissement, Épargne."
      },
      {
        "title": "Objectifs d'épargne",
        "description": "Définition d'objectifs d'épargne avec affichage de la progression en fonction des montants économisés."
      },
      {
        "title": "Optimisation budgétaire",
        "description": "Algorithme de gestion du budget basé sur des règles logiques, incluant la méthode 50/30/20."
      },
      {
        "title": "Export des données",
        "description": "Possibilité d'exporter les données financières sous format PDF ou CSV."
      }
    ],
    "demoUrl": "#",
    "codeUrl": "https://github.com/amdymstfa/Moustapha-Ndiaye-SaveSmart.git",
    "category": "Fullstack",
    "date": "2025"
  },

  {
    "id": "customer-requests-api",
    "title": "API de gestion des requêtes clients",
    "description": "API avancée développée avec Laravel pour centraliser et gérer les requêtes clients des entreprises, avec documentation Swagger et gestion des accès via Laravel Sanctum.",
    "imageUrl": "/images/customer.webp",
    "technologies": ["Laravel", "PHP", "PostgreSQL", "Swagger", "PHPUnit", "JavaScript"],
    "features": [
      {
        "title": "Documentation API avec Swagger",
        "description": "API entièrement documentée avec Swagger pour faciliter son intégration et son utilisation."
      },
      {
        "title": "Tests unitaires et fonctionnels",
        "description": "Couverture de code avec PHPUnit pour garantir la stabilité et la robustesse de l'API."
      },
      {
        "title": "Service Layer Design Pattern",
        "description": "Organisation du code en couches pour améliorer la maintenabilité et la scalabilité de l'API."
      },
      {
        "title": "Gestion avancée des requêtes",
        "description": "Pagination, filtres et tri des requêtes clients pour une récupération efficace des données."
      },
      {
        "title": "Authentification et autorisation sécurisées",
        "description": "Utilisation de Laravel Sanctum pour gérer les accès et permissions des utilisateurs."
      },
      {
        "title": "Consommation de l’API",
        "description": "L’API peut être consommée avec n'importe quel framework JavaScript moderne."
      }
    ],
    "demoUrl": "#",
    "codeUrl": "https://github.com/amdymstfa/Moustapha-Ndiaye-CustomerCareAPI.git",
    "category": "Backend",
    "date": "2025"
  },

  {
    "id": "library-management-system",
    "title": "Système de gestion de bibliothèque",
    "description": "Application web développée avec Laravel pour digitaliser la gestion des ressources de la Bibliothèque Municipale de Saint-Marc.",
    "imageUrl": "/images/biblio.webp",
    "technologies": ["Laravel", "PHP", "PostgreSQL", "Blade", "Bootstrap"],
    "features": [
      {
        "title": "Authentification des utilisateurs",
        "description": "Système d'inscription, connexion et déconnexion sécurisé avec affichage des profils."
      },
      {
        "title": "Gestion des livres",
        "description": "Affichage des livres disponibles, ajout, modification et suppression de livres."
      },
      {
        "title": "Gestion des emprunts",
        "description": "Enregistrement des emprunts et des retours de livres avec suivi des disponibilités."
      }
    ],
    "demoUrl": "#",
    "codeUrl": "https://github.com/amdymstfa/Moustapha-Ndiaye-library-management.git",
    "category": "Backend",
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

