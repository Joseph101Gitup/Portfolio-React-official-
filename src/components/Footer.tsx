import { Github, Linkedin, Twitter, Mail, Heart, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/Joseph101Gitup", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/%C2%A0joseph-paul-790567253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/joseph_paul2244?igsh=ejJ0NTYxczg3MGNx", label: "Instagram" },
  { icon: Mail, href: "mailto:josephpaul200416@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-4 w-4 text-primary fill-primary" />
            </motion.span>
            <span>by</span>
            <span className="gradient-text font-medium">Joseph Paul</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
