import { motion } from "framer-motion";
import {
    Cpu,
    Globe,
    Server,
    Database,
    Cloud,
    Shield,
    Wifi,
    Code,
    Settings,
    Network,
    GraduationCap,
    Rocket
} from "lucide-react";

// Placeholder partners since no logos are available yet
// Real university AI societies and partners
const partners = [
    { name: "COMSATS AI Society", icon: Cpu, color: "#026537" }, // COMSATS Green
    { name: "UET AI Club", icon: Settings, color: "#800000" },    // UET Maroon
    { name: "FAST-NU AI Society", icon: Network, color: "#00AEF0" }, // Electric Blue
    { name: "GDGoC", icon: Globe, color: "#4285F4" },            // Google Blue
    { name: "NUST AI Club", icon: GraduationCap, color: "#002366" }, // NUST Royal Blue
    { name: "Air University AI", icon: Cloud, color: "#00BFFF" },
    { name: "IST AI Society", icon: Rocket, color: "#000080" },
];


export const Partners = () => {
    // Dynamic width calculation for seamless loop
    const setWidth = partners.length * 300; // Estimated spacing

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
                    animate={{ x: [0, -setWidth] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the list to ensure seamless looping */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer group/partner"
                            style={{ color: partner.color }}
                        >
                            <partner.icon className="h-8 w-8 transition-transform duration-300 group-hover/partner:scale-110" strokeWidth={2} />
                            <span className="text-xl font-orbitron font-bold tracking-tight">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
