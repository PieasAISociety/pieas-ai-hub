import { Users, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Import team photos
import presidentImg from "@/assets/team/president.jpg";
import vpImg from "@/assets/team/vice-president.jpg";
import gsImg from "@/assets/team/general-secretary.jpg";
import treasurerImg from "@/assets/team/treasurer.jpg";
import jsImg from "@/assets/team/joint-secretary.jpg";

const teamMembers = [
  {
    name: "[President Name]",
    role: "President",
    description: "Leading strategic vision and initiatives for the society",
    image: presidentImg,
  },
  {
    name: "[VP Name]",
    role: "Vice President",
    description: "Supporting operations and coordinating major events",
    image: vpImg,
  },
  {
    name: "[GS Name]",
    role: "General Secretary",
    description: "Managing communications and administrative affairs",
    image: gsImg,
  },
  {
    name: "[Treasurer Name]",
    role: "Treasurer",
    description: "Overseeing financial planning and resource allocation",
    image: treasurerImg,
  },
  {
    name: "[JS Name]",
    role: "Joint Secretary",
    description: "Assisting in organizational management and coordination",
    image: jsImg,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 circuit-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-6"
            >
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-rajdhani font-semibold text-primary">Our Leadership</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-oxanium font-bold mb-6"
            >
              Meet Our <span className="bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-rajdhani"
            >
              Dedicated individuals driving innovation and excellence in AI education
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="relative mb-6">
                      {/* Image container with hexagon-like clip */}
                      <div className="relative w-36 h-36 mx-auto">
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary animate-pulse opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-background">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        {/* Corner accents */}
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent rounded-tr-lg" />
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent rounded-bl-lg" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg" />
                      </div>
                      
                      {/* Role badge */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1.5 rounded-full text-xs font-oxanium font-bold shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                      >
                        {member.role}
                      </motion.div>
                    </div>
                    
                    <div className="text-center mt-8">
                      <h3 className="text-xl font-oxanium font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-rajdhani mb-4">{member.description}</p>
                      
                      {/* Social links */}
                      <div className="flex justify-center gap-3 mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <motion.a
                          href="#"
                          className="p-2.5 bg-secondary/50 border border-border/50 rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="h-4 w-4" />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="p-2.5 bg-secondary/50 border border-border/50 rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
