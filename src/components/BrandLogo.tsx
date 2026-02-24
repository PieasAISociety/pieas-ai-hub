import { motion } from "framer-motion";
import logo from "@/assets/pais-logo.png";

export const BrandLogo = () => {
    return (
        <div className="flex items-center gap-4 group relative cursor-pointer">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.5 }}
                className="relative"
            >
                {/* Animated Glow Behind */}
                <div className="absolute inset-0 bg-primary/60 blur-2xl rounded-full group-hover:bg-accent/80 transition-all duration-700 animate-pulse" />

                {/* Logo Container with Circular Mask and Glassmorphism */}
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_15px_rgba(0,0,255,0.3)] bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:border-accent/80 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                        src={logo}
                        alt="PAIS Logo"
                        className="h-full w-full object-cover scale-110 pointer-events-none mix-blend-screen"
                    // Using mix-blend-screen assuming the logo has a black background, or object-cover to simple fill the circle
                    />
                </div>
            </motion.div>

            {/* Text Section */}
            <div className="flex flex-col">
                <div className="flex items-center gap-1">
                    <span className="font-orbitron text-3xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] tracking-wider">
                        PAIS
                    </span>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="h-2 w-2 rounded-full bg-accent animate-pulse"
                    />
                </div>
                <span className="text-[10px] text-muted-foreground/90 font-rajdhani tracking-[0.3em] uppercase group-hover:text-primary transition-colors duration-300 font-semibold border-t border-primary/20 pt-1 mt-0.5">
                    AI Society
                </span>
            </div>
        </div>
    );
};
