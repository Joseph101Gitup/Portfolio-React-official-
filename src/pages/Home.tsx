import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Shield, Code2, Terminal } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button, LinkButton } from "@/components/Button";

const stats = [
  { value: "3+", label: "Years Coding" },
  { value: "20+", label: "Projects Built" },
  { value: "5+", label: "Certifications" },
  { value: "∞", label: "Learning" },
];

const techStack = [
  "React", "TypeScript", "Node.js", "Python",
  "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker",
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm text-primary font-medium">Open for Opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Hi, I'm{" "}
                <span className="gradient-text">Joseph Paul</span>
                <br />
                <span className="text-muted-foreground">MCA Student & Developer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Passionate about building secure, scalable web applications. 
                Specializing in{" "}
                <span className="text-foreground font-medium">full-stack development</span> and{" "}
                <span className="text-foreground font-medium">cybersecurity</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects">
                  <Button variant="primary" size="lg">
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <LinkButton variant="outline" size="lg" href="/resume/joseph paul.pdf" external>
                  <Download className="h-4 w-4" />
                  Download CV
                </LinkButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                <span className="text-sm text-muted-foreground">Find me on</span>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/Joseph101Gitup"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/%C2%A0joseph-paul-790567253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Animated Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Orbiting Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="p-3 rounded-xl bg-card border border-border shadow-lg">
                      <Code2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8"
                >
                  <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                    <div className="p-3 rounded-xl bg-card border border-border shadow-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </motion.div>

                {/* Center Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                    <div className="relative p-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 glow">
                      <Terminal className="h-16 w-16 text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Rings */}
                <div className="absolute inset-0 border-2 border-dashed border-border/50 rounded-full animate-spin-slow" />
                <div className="absolute inset-8 border border-border/30 rounded-full" />
                <div className="absolute inset-16 border border-border/20 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="section-container">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Technologies I Work With</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Constantly learning and adapting to new technologies to build better solutions.
            </p>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                >
                  <span className="font-medium">{tech}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-border p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-muted-foreground mb-8">
                  I'm always excited to work on new projects and collaborate with like-minded individuals.
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
