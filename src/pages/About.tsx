import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { 
  Code2, Shield, Database, Cloud, 
  Briefcase, GraduationCap, Award,
  Terminal, Globe, Lock
} from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Code2, items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { name: "Backend Development", icon: Database, items: ["Node.js", "Express", "Python", "PostgreSQL"] },
  { name: "Cybersecurity", icon: Shield, items: ["Penetration Testing", "Network Security", "OWASP", "Encryption"] },
  { name: "DevOps & Cloud", icon: Cloud, items: ["Docker", "AWS", "CI/CD", "Linux"] },
];

const tools = [
  "VS Code", "Git", "Figma", "Postman", "Burp Suite", 
  "Wireshark", "Nmap", "Docker", "Kubernetes", "Linux"
];

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer Intern",
    organization: "TechCorp Solutions",
    period: "June 2024 - Present",
    description: "Developing scalable web applications using React and Node.js. Implementing security best practices and conducting code reviews.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Master of Computer Applications",
    organization: "University of Technology",
    period: "2023 - 2025 (Expected)",
    description: "Specializing in Web Development and Cybersecurity. Current CGPA: 8.5/10",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council",
    period: "2024",
    description: "Comprehensive training in ethical hacking methodologies and penetration testing.",
    icon: Award,
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications",
    organization: "State University",
    period: "2020 - 2023",
    description: "Graduated with First Class Honors. Focus on programming fundamentals and software development.",
    icon: GraduationCap,
  },
];

const interests = [
  { icon: Terminal, label: "Open Source" },
  { icon: Shield, label: "CTF Competitions" },
  { icon: Globe, label: "Web3 & Blockchain" },
  { icon: Lock, label: "Bug Bounty" },
];

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              I'm Joseph Paul, an MCA student with a deep passion for web development and cybersecurity.
              I believe in writing clean, secure code that makes a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-card/50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of development skills and security knowledge to build robust applications.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Tools & Technologies</h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <StaggerItem key={tool}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all cursor-default"
                >
                  <span className="text-sm font-medium">{tool}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card/50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience & Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in tech - from academics to real-world experience.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              <StaggerContainer className="space-y-8">
                {experiences.map((exp, index) => (
                  <StaggerItem key={index}>
                    <div className="relative flex gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg"
                      >
                        <exp.icon className="h-6 w-6 text-primary" />
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-primary font-medium text-sm mb-2">
                          {exp.organization}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {exp.description}
                        </p>
                      </motion.div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interests & Hobbies</h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-6">
            {interests.map((interest) => (
              <StaggerItem key={interest.label}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <div className="p-4 rounded-xl bg-primary/10">
                    <interest.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium">{interest.label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
