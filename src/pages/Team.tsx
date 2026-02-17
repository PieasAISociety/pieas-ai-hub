import { Users, Mail, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { DeveloperCard } from "@/components/DeveloperCard";

// Import team photos
import advisorImg from "@/assets/team/advisor.jpg";
import presidentImg from "@/assets/team/president.jpg";
import vpImg from "@/assets/team/vice-president.jpg";
import gsImg from "@/assets/team/general-secretary.jpg";
import treasurerImg from "@/assets/team/treasurer.jpg";
import jsImg from "@/assets/team/joint-secretary.jpg";
import developerAvatar from "@/assets/developer-avatar.png";
import darainPhoto from "@/assets/darain.jpg";

const teamMembers = [
  {
    name: "Dr. Naeem Akhtar",
    role: "Advisor - Head PIEAS AI Centre",
    description: "Guiding the society's academic and research direction",
    image: advisorImg,
    imagePosition: "object-top",
  },
  {
    name: "Syed Darain Hyder Kazmi",
    role: "President",
    description: "Leading strategic vision and initiatives for the society",
    image: presidentImg,
  },
  {
    name: "Abdul Basit",
    role: "Vice President",
    description: "Supporting operations and coordinating major events",
    image: vpImg,
  },
  {
    name: "Muhammad Awais",
    role: "General Secretary",
    description: "Managing communications and administrative affairs",
    image: gsImg,
  },
  {
    name: "Noor ul Huda",
    role: "Treasurer",
    description: "Overseeing financial planning and resource allocation",
    image: treasurerImg,
  },
  {
    name: "Aqsa Majeed",
    role: "Joint Secretary",
    description: "Assisting in organizational management and coordination",
    image: jsImg,
  },
];

const developers = [
  {
    name: "Mansoob-e-Zahra",
    role: "Web developer, ML/AI Practitioner",
    image: developerAvatar,
    socials: {
      linkedin: "https://www.linkedin.com/in/mansoob-e-zahra-3126ba257?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/MansoobeZahra",
      email: "mailto:mansoobzehra@gmail.com"
    }
  },
  {
    name: "Darain Hyder",
    role: "Data Scientist Practitioner, Web developer",
    image: darainPhoto,
    socials: {
      linkedin: "https://www.linkedin.com/in/syed-darain-hyder-kazmi",
      github: "https://github.com/DarainHyder",
      email: "mailto:darainhyder21@gmail.com"
    }
  }
];

const MemberCard = ({ member }: { member: any }) => (
  <Card className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full shadow-lg hover:shadow-primary/20 max-w-[280px] mx-auto">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <CardContent className="p-4 relative z-10">
      <div className="relative mb-3">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-pulse opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-[2px] rounded-full overflow-hidden bg-background border-2 border-background">
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover ${member.imagePosition || 'object-center'} group-hover:scale-110 transition-transform duration-700`}
            />
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-max max-w-[95%]">
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-[10px] font-oxanium font-bold shadow-[0_0_10px_rgba(0,255,255,0.4)] text-center truncate">
            {member.role}
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <h3 className="text-base font-oxanium font-bold mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
          {member.name}
        </h3>
        <p className="text-xs text-muted-foreground font-rajdhani mb-2 line-clamp-2">{member.description}</p>
      </div>
    </CardContent>
  </Card>
);

const Team = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-8 circuit-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-full mb-4"
            >
              <Users className="h-4 w-4 text-primary" />
              <span className="text-xs font-rajdhani font-semibold text-primary">Our Leadership</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-oxanium font-bold mb-3"
            >
              Meet Our <span className="bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-muted-foreground font-rajdhani"
            >
              Dedicated individuals driving innovation and excellence in AI education
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Hierarchy Tree */}
      <section className="pb-16 pt-4 relative">
        <div className="container mx-auto px-4">

          {/* Level 1: Advisor */}
          <div className="flex justify-center mb-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[280px] relative"
            >
              {/* Vertical Line Down */}
              <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-primary to-primary/50 -translate-x-1/2 hidden md:block" />

              <MemberCard member={teamMembers[0]} />
            </motion.div>
          </div>

          {/* Level 2: President */}
          <div className="flex justify-center mb-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-[280px] relative"
            >
              {/* Vertical Line Up */}
              <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary -translate-x-1/2 hidden md:block" />
              {/* Vertical Line Down */}
              <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-primary to-accent -translate-x-1/2 hidden md:block" />

              <MemberCard member={teamMembers[1]} />
            </motion.div>
          </div>

          {/* Level 3: Vice President */}
          <div className="flex justify-center mb-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-[280px] relative"
            >
              {/* Vertical Line Up */}
              <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-gradient-to-b from-accent to-accent/50 -translate-x-1/2 hidden md:block" />
              {/* Vertical Line Down to Connector */}
              <div className="absolute left-1/2 -bottom-6 w-0.5 h-6 bg-accent/50 -translate-x-1/2 hidden md:block" />

              <MemberCard member={teamMembers[2]} />
            </motion.div>
          </div>

          {/* Connectors to Level 4 */}
          <div className="relative h-8 mb-6 hidden md:block max-w-4xl mx-auto">
            {/* Horizontal Line connecting the 3 columns */}
            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-accent/50 rounded-full" />

            {/* Vertical Line from VP (Top Center) */}
            <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-accent/50 -translate-x-1/2" />

            {/* Vertical Lines down to each child */}
            <div className="grid grid-cols-3 w-full h-full">
              <div className="relative"><div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-accent/50 to-transparent -translate-x-1/2" /></div>
              <div className="relative"><div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-accent/50 to-transparent -translate-x-1/2" /></div>
              <div className="relative"><div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-accent/50 to-transparent -translate-x-1/2" /></div>
            </div>
          </div>

          {/* Level 4: Executives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
            {teamMembers.slice(3).map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* Background Circuit Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-[20%] left-0 w-full h-[1px] bg-primary" />
            <div className="absolute top-[50%] left-0 w-full h-[1px] bg-accent" />
          </div>

        </div>
      </section>

      {/* Developers Section - The Code Matrix */}
      <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh] bg-[#0d1117]">

        {/* Matrix / IDE Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0 opacity-50" />

        {/* Floating Code Syntax */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden font-mono text-primary/20 select-none">
          {['{ }', '</>', 'npm', 'git', '&&', '||', '=>', 'func', 'div', '01', ';', '[]'].map((symbol, i) => (
            <div
              key={i}
              className="absolute animate-float-up font-bold text-xl md:text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

          {/* Typing Terminal Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 relative font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block relative"
            >
              <div className="inline-flex items-center text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                <span className="text-primary mr-4">&lt;</span>
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">DEVELOPERS</span>
                <span className="text-primary ml-4">/&gt;</span>
                <span className="w-4 h-12 md:h-16 bg-primary ml-4 animate-pulse" /> {/* Blinking Cursor */}
              </div>
            </motion.div>

            <p className="text-primary/60 text-lg md:text-xl font-medium tracking-wide">
              InitializeSystem( <span className="text-white">"Innovation"</span> )
            </p>
          </div>

          {/* Cards Container - Floating in 3D Space */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 w-full max-w-7xl relative perspective-[2000px]">
            {/* IDE Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full -z-10" />

            {developers.map((dev, index) => (
              <motion.div
                key={dev.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: index % 2 === 0 ? 15 : -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 0,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50,
                  damping: 20
                }}
                className="relative z-20"
              >
                <div className="group relative">
                  {/* Retro Glitch Border Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-white to-primary opacity-0 group-hover:opacity-50 blur transition-opacity duration-300 rounded-xl" />

                  <DeveloperCard
                    name={dev.name}
                    role={dev.role}
                    image={dev.image}
                    socials={dev.socials}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div >
  );
};

export default Team;
