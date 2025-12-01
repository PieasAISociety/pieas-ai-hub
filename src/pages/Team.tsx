import { Users, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. [Advisor Name]",
    role: "Faculty Advisor",
    description: "Guiding the society towards excellence in AI research and education",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=advisor",
  },
  {
    name: "[President Name]",
    role: "President",
    description: "Leading strategic vision and initiatives for the society",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=president",
  },
  {
    name: "[VP Name]",
    role: "Vice President",
    description: "Supporting operations and coordinating major events",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=vp",
  },
  {
    name: "[GS Name]",
    role: "General Secretary",
    description: "Managing communications and administrative affairs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=gs",
  },
  {
    name: "[Treasurer Name]",
    role: "Treasurer",
    description: "Overseeing financial planning and resource allocation",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=treasurer",
  },
  {
    name: "[JS Name]",
    role: "Joint Secretary",
    description: "Assisting in organizational management and coordination",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=js",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 circuit-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Our Leadership</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated individuals driving innovation and excellence in AI education
            </p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-500 group-hover:glow-cyan">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                        {member.role}
                      </div>
                    </div>
                    
                    <div className="text-center mt-8">
                      <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                      
                      {/* Social links - hidden by default, revealed on hover */}
                      <motion.div 
                        className="flex justify-center gap-3 mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: 10 }}
                      >
                        <motion.a
                          href="#"
                          className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="h-4 w-4" />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="h-4 w-4" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </CardContent>
                  
                  {/* Overlay that appears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
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
