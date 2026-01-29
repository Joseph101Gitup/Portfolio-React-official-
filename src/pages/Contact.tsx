import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { PageTransition } from "@/components/PageTransition";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { toast } from "@/hooks/use-toast";
import { 
  Mail, MapPin, Phone, Send, 
  Github, Linkedin, Twitter, 
  MessageSquare, Clock, CheckCircle, 
  Instagram
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "josephpaul200416@gmail.com", href: "mailto:josephpaul200416@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kerala, India", href: null },
  { icon: Phone, label: "Phone", value: "+91 8891200711", href: "tel:+919447214229" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Joseph101Gitup", username: "@josephpaul" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/%C2%A0joseph-paul-790567253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", username: "Joseph Paul" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/joseph_paul2244?igsh=ejJ0NTYxczg3MGNx", username: "@josephpaul" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("xkWDVYc2UdhA31e9M"); // Get this from emailjs.com
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_y6hd961", // Get from emailjs.com
        "template_xubqw2h", // Get from emailjs.com
        {
          from_name: data.name,
          from_email: data.email,
          to_email: "josephpaul200416@gmail.com",
          subject: data.subject,
          message: data.message,
        }
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Email send failed:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
      });
    }
  };

  return (
    <PageTransition>
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach out!
              I'm always excited to discuss new opportunities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                
                {/* Contact Details */}
                <StaggerContainer className="space-y-4">
                  {contactInfo.map((info) => (
                    <StaggerItem key={info.label}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                      >
                        <div className="p-3 rounded-lg bg-primary/10">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={0.2}>
                <h3 className="font-semibold mb-4">Find me on</h3>
                <StaggerContainer className="space-y-3">
                  {socialLinks.map((social) => (
                    <StaggerItem key={social.label}>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                      >
                        <social.icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </motion.a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>

              {/* Availability */}
              <AnimatedSection delay={0.3}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Availability</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Currently available for:
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Freelance projects
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Full-time opportunities
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Open source collaboration
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">Send a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          {...register("name")}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="Your Name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="name@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        {...register("subject")}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Project Inquiry"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
