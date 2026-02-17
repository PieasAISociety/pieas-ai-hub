import { motion } from "framer-motion";
import {
    Cpu,
    Globe,
    Server,
    Database,
    Cloud,
    Shield,
    Wifi,
    Code
} from "lucide-react";

// Placeholder partners since no logos are available yet
const partners = [
    { name: "TechCorp", icon: Cpu },
    { name: "Global AI", icon: Globe },
    { name: "DataSystems", icon: Server },
    { name: "NeuralNet", icon: Database },
    { name: "CloudScale", icon: Cloud },
    { name: "SecureCyber", icon: Shield },
    { name: "ConnectX", icon: Wifi },
    { name: "DevStudio", icon: Code },
];

export const Partners = () => {
    return (
        <section className="py-10 bg-black/50 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-6">
                <p className="text-center text-sm font-rajdhani font-semibold text-muted-foreground uppercase tracking-widest">
                    Trusted by Industry Leaders & Partners
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks for Fade Effect */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Infinite Scroll Animation */}
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Adjust speed here
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the list to ensure seamless looping */}
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="flex items-center gap-3 text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-pointer"
                        >
                            <partner.icon className="h-8 w-8" strokeWidth={1.5} />
                            <span className="text-xl font-orbitron font-bold opacity-80">{partner.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
