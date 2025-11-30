import { ArrowRight, Sparkles, Zap, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Sparkles,
    title: "Transform Through Learning",
    description: "Intensive AI bootcamps designed to elevate your skills from fundamentals to cutting-edge applications",
  },
  {
    icon: Zap,
    title: "Build Real Impact",
    description: "Work on projects that matter - from research papers to deployed solutions solving real problems",
  },
  {
    icon: Target,
    title: "Connect & Grow",
    description: "Join a thriving community of innovators, researchers, and industry leaders shaping Pakistan's AI future",
  },
  {
    icon: Rocket,
    title: "Lead Innovation",
    description: "Host Orient AI and pioneering events that bring together the brightest minds in artificial intelligence",
  },
];

const achievements = [
  { value: "500+", label: "Active Members", gradient: "from-primary to-accent" },
  { value: "50+", label: "Events & Workshops", gradient: "from-accent to-primary" },
  { value: "10+", label: "Intensive Bootcamps", gradient: "from-primary via-accent to-primary" },
  { value: "100+", label: "AI Projects Delivered", gradient: "from-accent to-primary" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yOrb1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yOrb3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yOrb4 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yCenter = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Completely Redesigned */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particles Background */}
        <ParticlesBackground />
        
        {/* Multi-layer Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"
          style={{ opacity }}
        />
        <div className="absolute inset-0 mesh-gradient animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute inset-0 circuit-grid opacity-10" />
        
        {/* Interactive Floating Orbs - Multiple Layers with Parallax */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" 
          style={{ y: yOrb1, animationDelay: "0s" }} 
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" 
          style={{ y: yOrb2, animationDelay: "2s" }} 
        />
        <motion.div 
          className="absolute top-40 right-20 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" 
          style={{ y: yOrb3, animationDelay: "1s" }} 
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" 
          style={{ y: yOrb4, animationDelay: "3s" }} 
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl animate-glow-pulse"
          style={{ y: yCenter }}
        />

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 backdrop-blur-xl border border-primary/30 rounded-full mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              <span className="text-sm font-medium text-accent">Pakistan Institute of Engineering & Applied Sciences</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mb-6 leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="block mb-2 text-foreground/90">The Future of</span>
              <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift">
                Artificial Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Join PIEAS AI Society - where brilliant minds converge to pioneer breakthrough innovations, 
              master cutting-edge technologies, and shape the intelligence revolution
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button 
                asChild 
                size="lg" 
                className="text-base px-7 py-5 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl glow-primary group transition-all duration-300"
              >
                <Link to="/join">
                  Join the Revolution
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-base px-7 py-5 border-2 border-primary/50 text-foreground hover:bg-primary/10 rounded-xl backdrop-blur-sm"
              >
                <Link to="/bootcamps">
                  Explore Bootcamps
                </Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-accent rounded-full animate-glow-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <motion.section 
        className="py-32 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 1.2}s` }}
              >
                <div className={`text-3xl md:text-5xl font-orbitron font-black mb-3 bg-gradient-to-br ${achievement.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                  {achievement.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section - Completely Redesigned */}
      <motion.section 
        className="py-32 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 circuit-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-orbitron font-black mb-4">
              Why <span className="gradient-text">PAIS</span>?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We're not just another student society. We're a movement dedicated to transforming passion into expertise and ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card 
                  className="group relative bg-gradient-to-br from-card via-card to-secondary/50 border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden h-full"
                >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 inline-flex">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:glow-primary transition-all duration-500 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Dramatic Redesign */}
      <motion.section 
        className="py-32 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-br from-card/80 via-secondary/80 to-card/80 backdrop-blur-xl border-2 border-primary/50 glow-primary">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <CardContent className="p-12 md:p-16 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                  <Sparkles className="h-4 w-4 text-accent animate-glow-pulse" />
                  <span className="text-sm font-bold text-accent">Applications Open</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-orbitron font-black mb-5 leading-tight">
                  Ready to Pioneer
                  <br />
                  <span className="gradient-text">AI Innovation?</span>
                </h2>
                
                <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Join Pakistan's most ambitious AI community and turn your potential into groundbreaking achievements
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="text-base px-8 py-5 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl glow-primary"
                  >
                    <Link to="/join">
                      Apply for Membership
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="text-base px-8 py-5 border-2 border-primary text-foreground hover:bg-primary/10 rounded-xl"
                  >
                    <Link to="/team">
                      Meet the Team
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
