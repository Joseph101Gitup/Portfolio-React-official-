import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { 
  Code2, Shield, Database, Cloud, 
  Briefcase, GraduationCap, Award,
  Terminal, Globe, Lock, Cpu, Zap
} from "lucide-react";

// Placeholder image - Replace with your actual photo URL
const PROFILE_IMAGE = "/profile.jpeg";

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
      <section className="pt-20 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              I'm Joseph Paul, an MCA student with a deep passion for web development and cybersecurity.
              I believe in writing clean, secure code that makes a difference.
            </p>
          </AnimatedSection>

          {/* --- NEW INTERACTIVE IMAGE SECTION --- */}
          <AnimatedSection className="flex justify-center pb-10">
            <motion.div 
              className="relative w-full max-w-[400px] aspect-square flex items-center justify-center group"
              initial="initial"
              whileHover="hover"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500" />
              
              {/* Rotating Border Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dotted border-primary/20"
              />

              {/* Main Profile Image */}
              <div className="relative z-10 w-64 h-64 rounded-full p-2 bg-background/50 backdrop-blur-sm border border-primary/20">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src={PROFILE_IMAGE} 
                    alt="Joseph Paul" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Cyber Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50 group-hover:opacity-0 transition-opacity" />
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: 40, y: -20 }
                }}
                className="absolute top-10 right-10 z-20"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-card/90 backdrop-blur-md border border-primary/30 p-3 rounded-xl shadow-xl flex items-center gap-3"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Security</p>
                    <p className="text-sm font-bold">Ethical Hacker</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: -40, y: 20 }
                }}
                className="absolute bottom-10 left-10 z-20"
              >
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-card/90 backdrop-blur-md border border-primary/30 p-3 rounded-xl shadow-xl flex items-center gap-3"
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Cpu className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Stack</p>
                    <p className="text-sm font-bold">Full Stack Dev</p>
                  </div>
                </motion.div>
              </motion.div>

               {/* Floating Badge 3 - Bottom Right (Small) */}
               <motion.div
                variants={{
                  initial: { scale: 0.8, opacity: 0 },
                  hover: { scale: 1, opacity: 1, x: 20 }
                }}
                className="absolute bottom-20 right-0 z-20"
              >
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Open to Work</span>
                </div>
              </motion.div>

            </motion.div>
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
      {/* removed parts #1 */}

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
