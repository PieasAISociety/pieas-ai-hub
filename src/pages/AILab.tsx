import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Monitor, Brain, Terminal } from "lucide-react";

import lab1 from "@/assets/ai-lab/lab-1.jpg";
import lab2 from "@/assets/ai-lab/lab-2.jpg";
import lab3 from "@/assets/ai-lab/lab-3.jpg";
import lab4 from "@/assets/ai-lab/lab-4.jpg";
import lab5 from "@/assets/ai-lab/lab-5.jpg";
import lab6 from "@/assets/ai-lab/lab-6.jpg";
import lab7 from "@/assets/ai-lab/lab-7.jpg";

const labImages = [
    {
        src: lab1,
        title: "Main Research Hub",
        category: "Workspace",
        description: "State-of-the-art workstations equipped with high-performance GPUs for deep learning research."
    },
    {
        src: lab2,
        title: "Hardware Station",
        category: "Robotics",
        description: "Dedicated area for hardware assembly and testing of autonomous systems and IoT devices."
    },
    {
        src: lab3,
        title: "Component Inventory",
        category: "Resources",
        description: "Extensive collection of sensors, microcontrollers, and development boards for prototyping."
    },
    {
        src: lab4,
        title: "Robotic Arms & VR",
        category: "Advanced Tech",
        description: "Access to advanced robotic manipulators and VR headsets for immersive simulation projects."
    },
    {
        src: lab5,
        title: "Equipment Storage",
        category: "Inventory",
        description: "Secure storage for specialized equipment ensuring longevity and organized access for students."
    },
    {
        src: lab6,
        title: "Project Development",
        category: "Projects",
        description: "Ongoing student projects featuring custom robotic implementations."
    },
    {
        src: lab7,
        title: "Advanced Robotics",
        category: "Research",
        description: "Experimental setups for advanced robotic control and automation research."
    }
];

const features = [
    { icon: Cpu, label: "High-Performance Computing" },
    { icon: Monitor, label: "Dual-Monitor Workstations" },
    { icon: Brain, label: "AI & ML Specialized Hardware" },
    { icon: Terminal, label: "Collaborative Coding Spaces" },
];

const AILab = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 circuit-grid">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-fade-in">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-6"
                        >
                            <Cpu className="h-5 w-5 text-primary" />
                            <span className="text-sm font-rajdhani font-semibold text-primary">State of the Art Facilities</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-oxanium font-bold mb-6"
                        >
                            PIEAS <span className="text-primary glow-text">AI Infrastructure</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground font-rajdhani mb-12"
                        >
                            A hub of innovation equipped with cutting-edge hardware to fuel the next generation of AI research and development.
                        </motion.p>

                        {/* Features Pill Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4 mb-16"
                        >
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur rounded-full border border-white/5">
                                    <feature.icon className="h-4 w-4 text-accent" />
                                    <span className="text-sm font-semibold">{feature.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-10 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                        {labImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                            >
                                <Card className="group relative overflow-hidden h-[400px] border-none bg-black/50">
                                    {/* Background Image */}
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + (index * 0.1) }}
                                        >
                                            <Badge className="mb-3 bg-primary/80 backdrop-blur text-white border-none">
                                                {image.category}
                                            </Badge>
                                            <h3 className="text-3xl font-orbitron font-bold text-white mb-2 drop-shadow-md">
                                                {image.title}
                                            </h3>
                                            <p className="text-gray-300 font-rajdhani text-lg max-w-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                {image.description}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Decorative Border */}
                                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-lg" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AILab;
