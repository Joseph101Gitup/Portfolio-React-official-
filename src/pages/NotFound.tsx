import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-8xl md:text-9xl font-bold gradient-text">404</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/">
                <Button variant="primary" size="lg">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;