import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Figma,
  GitBranch,
  Server,
  Globe,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Moustapha Ndiaye</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Compétences
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projets
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Formation
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://drive.google.com/file/d/1e_l3wllQlZywQl1UwU3Zjw3WcxR4SNLG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Moustapha <span className="text-primary">Ndiaye</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Développeur Full Stack passionné par la création d&apos;applications web modernes et performantes
              </p>
              <div className="flex gap-4 mt-4">
                <Button asChild>
                  <Link href="#contact">
                    Me contacter <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">Voir mes projets</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src="/placeholder.svg?height=256&width=256&text=MN"
                  alt="Moustapha Ndiaye"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-24 sm:py-32 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=400&text=Moustapha+Ndiaye"
                alt="Moustapha Ndiaye"
                className="rounded-lg shadow-lg"
                width={400}
                height={400}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
              <p className="text-muted-foreground mb-6">
                Je suis un développeur Full Stack avec une solide formation en mathématiques et informatique.
                Actuellement en formation à YOUCODE-UM6P pour approfondir mes compétences en développement web et
                mobile.
              </p>
              <p className="text-muted-foreground mb-6">
                Passionné par les technologies web modernes, je maîtrise aussi bien le développement front-end que
                back-end, avec une expertise particulière en JavaScript et ses frameworks comme React et Angular.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="text-primary">
                  HTML/CSS
                </Badge>
                <Badge variant="outline" className="text-primary">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-primary">
                  React
                </Badge>
                <Badge variant="outline" className="text-primary">
                  Angular
                </Badge>
                <Badge variant="outline" className="text-primary">
                  PHP/Laravel
                </Badge>
                <Badge variant="outline" className="text-primary">
                  Node.js
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-24 sm:py-32 border-t bg-muted/40">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                <CardTitle>Front-end</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>React</Badge>
                    <Badge>Angular</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Tailwind CSS</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Server className="h-6 w-6 text-primary" />
                <CardTitle>Back-end</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>PHP</Badge>
                    <Badge>Laravel</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express.js</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>C</Badge>
                    <Badge>Golang</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                <CardTitle>Base de données</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>MySQL</Badge>
                    <Badge>PostgreSQL</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>MongoDB</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Figma className="h-6 w-6 text-primary" />
                <CardTitle>Design & Analyse</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>Figma</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <GitBranch className="h-6 w-6 text-primary" />
                <CardTitle>Outils de collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Trello</Badge>
                    <Badge>Jira</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>GitHub Projects</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                <CardTitle>Langues</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>Français (C2)</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Anglais (B1)</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Wolof (Natif)</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="container py-24 sm:py-32 border-t">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Youdemy"
                  alt="Projet Youdemy"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Youdemy</h3>
                <p className="text-muted-foreground mb-4">
                  Plateforme d&apos;apprentissage en ligne interactive développée avec HTML, CSS, Tailwind CSS,
                  JavaScript, PHP et MySQL.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Fonctionnalités clés:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Interface utilisateur intuitive avec HTML, CSS, Tailwind CSS et JavaScript</li>
                    <li>Back Office en PHP et MySQL avec principes OOP</li>
                    <li>Base de données relationnelle</li>
                    <li>Système sécurisé d&apos;authentification</li>
                    <li>Optimisation des performances</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>PHP</Badge>
                  <Badge>MySQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Démo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Eternia"
                  alt="Projet Eternia"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Eternia</h3>
                <p className="text-muted-foreground mb-4">
                  Site e-commerce développé en équipe avec HTML, CSS, Tailwind CSS et JavaScript.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Fonctionnalités clés:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Interface utilisateur avec HTML, CSS, Tailwind CSS et JavaScript</li>
                    <li>Panier d&apos;achat et génération de devis PDF</li>
                    <li>Galerie photo et carrousel des produits</li>
                    <li>Tableau de bord pour les KPI</li>
                    <li>Gestion des produits avec filtres, tri et pagination</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>JavaScript</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Démo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="education" className="container py-24 sm:py-32 border-t bg-muted/40">
          <h2 className="text-3xl font-bold mb-12 text-center">Formation & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <h3 className="text-xl font-bold mb-6">Formation</h3>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">YOUCODE-UM6P</h4>
                      <p className="text-muted-foreground">Développeur web et mobile</p>
                    </div>
                    <Badge>2024-2026</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">Université Cheikh Anta Diop, Sénégal</h4>
                      <p className="text-muted-foreground">L3 Mathématiques Informatique</p>
                    </div>
                    <Badge>2023</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">Lycée El Hadj Ibrahima Diop, Dakar</h4>
                      <p className="text-muted-foreground">Baccalauréat - Science expérimentale</p>
                    </div>
                    <Badge>2019</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold mb-6">Certifications</h3>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">Développement FullStack MEAN Stack</h4>
                      <p className="text-muted-foreground">EDACY</p>
                    </div>
                    <Badge>2024</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="container py-24 sm:py-32 border-t">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Me Contacter</h2>
            <p className="text-muted-foreground mb-8">
              Vous avez un projet en tête ou vous souhaitez simplement discuter ? N&apos;hésitez pas à me contacter !
            </p>
            <div className="space-y-4 mb-8 text-left">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+212 6 84 63 49 21</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>Mstfa.ndiaye23@gmail.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>Safi, Maroc</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:Mstfa.ndiaye23@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
            <Button className="w-full" asChild>
              <Link href="mailto:Mstfa.ndiaye23@gmail.com">Envoyer un email</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Moustapha Ndiaye. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:Mstfa.ndiaye23@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

