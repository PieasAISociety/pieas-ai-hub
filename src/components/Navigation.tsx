import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/pais-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
  { name: "Bootcamps", path: "/bootcamps" },
  { name: "Events", path: "/events" },
  { name: "Join Us", path: "/join" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,255,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full group-hover:bg-primary/50 transition-all duration-300" />
              <img 
                src={logo} 
                alt="PAIS Logo" 
                className="h-12 w-auto object-contain relative z-10"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-oxanium text-xl font-bold bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">
                PAIS
              </span>
              <span className="text-xs text-muted-foreground font-rajdhani tracking-wider">
                AI Society
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 p-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-primary/20 shadow-lg">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="relative px-6 py-2.5 rounded-xl font-rajdhani font-bold text-sm tracking-wider transition-all duration-300 text-foreground hover:text-primary"
                >
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 ${isActive(link.path) ? "!text-white drop-shadow-md" : ""}`}>
                    {link.name}
                    {link.name === "Join Us" && (
                      <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden rounded-full border border-primary/30 bg-secondary/30 backdrop-blur-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-primary/20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-rajdhani font-semibold transition-all duration-300 ${
                        isActive(link.path)
                          ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30"
                          : "text-foreground/80 hover:bg-secondary/50 hover:text-primary"
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive(link.path) ? "bg-primary" : "bg-muted-foreground"}`} />
                      {link.name}
                      {link.name === "Join Us" && (
                        <Sparkles className="h-4 w-4 ml-auto text-accent animate-pulse" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
