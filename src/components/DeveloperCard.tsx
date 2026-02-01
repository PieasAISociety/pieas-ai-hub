import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DeveloperCardProps {
    name: string;
    role: string;
    image: string;
    socials: {
        linkedin?: string;
        github?: string;
        email?: string;
    };
}

export const DeveloperCard = ({ name, role, image, socials }: DeveloperCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className="group relative h-[450px] w-full max-w-sm rounded-xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-black pointer-events-none" />

            {/* Image Section */}
            <div className="relative h-[240px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Holographic Overlay on Hover */}
                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%]"
                    variants={{
                        hover: { x: "100%" }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Content Section */}
            <div className="relative z-20 p-6 -mt-12">
                {/* Name Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Terminal className="w-3 h-3 text-primary animate-pulse" />
                    <span className="text-xs font-mono text-primary font-bold tracking-wider">DEV_PROFILE</span>
                </div>

                <h3 className="text-3xl font-orbitron font-bold text-white mb-1 tracking-wide group-hover:text-primary transition-colors duration-300 drop-shadow-md">
                    {name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                    {role.split(", ").map((r, i) => (
                        <span key={i} className="text-xs font-rajdhani font-semibold text-zinc-400 uppercase tracking-widest border-b border-zinc-700 pb-0.5">
                            {r}
                        </span>
                    ))}
                </div>

                {/* Tech Decor */}
                <div className="absolute right-4 top-[50%] opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                    <Sparkles className="w-12 h-12 text-accent rotate-12" />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-4">
                    {[
                        { icon: Linkedin, href: socials.linkedin },
                        { icon: Github, href: socials.github },
                        { icon: Mail, href: socials.email }
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="relative p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/50 transition-all duration-300 group/icon overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover/icon:translate-y-0 transition-transform duration-300" />
                            <social.icon className="w-5 h-5 text-zinc-400 group-hover/icon:text-primary relative z-10 transition-colors" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Hover Reveal Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={style}
            >
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
            </motion.div>
        </div>
    );
};
