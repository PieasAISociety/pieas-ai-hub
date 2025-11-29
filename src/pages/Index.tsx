import { ArrowRight, Brain, Rocket, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import logo from "@/assets/pais-logo.png";

const features = [
  {
    icon: Brain,
    title: "AI Education",
    description: "Comprehensive bootcamps and workshops on cutting-edge AI technologies",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a vibrant community of AI enthusiasts and innovators",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Regular tech talks, competitions, and our flagship Orient AI summit",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Work on real-world AI projects and push the boundaries of technology",
  },
];

const stats = [
  { value: "500+", label: "Members" },
  { value: "50+", label: "Events" },
  { value: "10+", label: "Bootcamps" },
  { value: "100+", label: "Projects" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 circuit-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 leading-tight">
                Welcome to
                <br />
                <span className="text-primary">PIEAS AI Society</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Empowering the next generation of AI innovators at Pakistan Institute of Engineering and Applied Sciences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan group"
                >
                  <Link to="/join">
                    Join Us Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/events">
                    Explore Events
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
                <img 
                  src={logo} 
                  alt="PAIS Logo" 
                  className="relative h-64 w-64 md:h-96 md:w-96 object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the opportunities that await you in our AI community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group bg-card border-border hover:border-primary transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-500">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 circuit-grid">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card to-secondary border-primary glow-cyan">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join PIEAS AI Society today and be part of something extraordinary
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
              >
                <Link to="/join">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
