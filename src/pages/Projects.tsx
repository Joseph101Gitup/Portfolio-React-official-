import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/Button";

type ProjectCategory = "all" | "web" | "security" | "fullstack";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProjectCategory[];
  tags: string[];
  github?: string;
  live?: string;
  features: string[];
}

// Sample Projects Data - replace with real data as needed ------------------------

const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "SecureAuth System",
  //   description: "A robust authentication system with 2FA, OAuth, and session management.",
  //   longDescription: "Built a comprehensive authentication solution featuring multi-factor authentication, OAuth integration with major providers, secure session handling, and rate limiting. Implements best practices for password hashing and JWT token management.",
  //   image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  //   category: ["security", "fullstack"],
  //   tags: ["Node.js", "React", "PostgreSQL", "JWT"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   features: ["Two-factor authentication", "OAuth 2.0 integration", "Secure session management", "Rate limiting"],
  // },
  // {
  //   id: 2,
  //   title: "VulnScanner Pro",
  //   description: "Automated vulnerability scanning tool for web applications.",
  //   longDescription: "A comprehensive web vulnerability scanner that automates the detection of common security issues including SQL injection, XSS, CSRF, and more. Features detailed reporting and remediation suggestions.",
  //   image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  //   category: ["security"],
  //   tags: ["Python", "Selenium", "OWASP", "Docker"],
  //   github: "https://github.com",
  //   features: ["SQL injection detection", "XSS vulnerability scanning", "CSRF token validation", "Detailed PDF reports"],
  // },
  // {
  //   id: 3,
  //   title: "DevConnect",
  //   description: "A social platform for developers to connect and collaborate.",
  //   longDescription: "Full-stack social networking platform designed for developers. Features include real-time messaging, project collaboration tools, skill endorsements, and job posting capabilities.",
  //   image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  //   category: ["web", "fullstack"],
  //   tags: ["React", "Node.js", "MongoDB", "Socket.io"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   features: ["Real-time messaging", "Project collaboration", "Skill endorsements", "Job postings"],
  // },
  // {
  //   id: 4,
  //   title: "CryptoTracker",
  //   description: "Real-time cryptocurrency portfolio tracker with analytics.",
  //   longDescription: "A sleek dashboard for tracking cryptocurrency investments with real-time price updates, portfolio analytics, price alerts, and historical performance charts.",
  //   image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
  //   category: ["web"],
  //   tags: ["React", "TypeScript", "Chart.js", "CoinGecko API"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   features: ["Real-time prices", "Portfolio tracking", "Price alerts", "Performance analytics"],
  // },
  // {
  //   id: 5,
  //   title: "SecureNotes",
  //   description: "End-to-end encrypted note-taking application.",
  //   longDescription: "A privacy-focused note-taking app with end-to-end encryption. Notes are encrypted locally before being stored, ensuring only the user can access their content.",
  //   image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
  //   category: ["security", "fullstack"],
  //   tags: ["React", "Node.js", "AES-256", "IndexedDB"],
  //   github: "https://github.com",
  //   features: ["End-to-end encryption", "Offline support", "Markdown editor", "Secure sharing"],
  // },
  {
    id: 6,
    title: "TaskFlow",
    description: "Kanban-style project management with team collaboration.",
    longDescription: "A modern project management tool featuring Kanban boards, sprint planning, time tracking, and team collaboration features. Built with a focus on developer workflows.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    category: ["web", "fullstack"],
    tags: ["Next.js", "Prisma", "PostgreSQL", "tRPC"],
    github: "https://github.com",
    live: "https://example.com",
    features: ["Kanban boards", "Sprint planning", "Time tracking", "Team collaboration"],
  },
];

const filters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "security", label: "Cybersecurity" },
  { value: "fullstack", label: "Full Stack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category.includes(activeFilter)
  );

  return (
    <PageTransition>
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of projects showcasing my skills in web development and cybersecurity.
              Each project is a learning experience and a step towards mastery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="section-container">
          <AnimatedSection className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="section-container">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all"
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {project.category.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2.5 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-12 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="md">
                        <Github className="h-4 w-4" />
                        View Code
                      </Button>
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="md">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
