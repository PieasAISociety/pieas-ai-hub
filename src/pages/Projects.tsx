import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Brain, Bot, Eye } from "lucide-react";

const projects = [
    {
        title: "Urdu Voice Assistant",
        description: "A voice-activated AI assistant capable of understanding and responding in Urdu, built for accessibility.",
        tags: ["NLP", "Speech-to-Text", "Python"],
        category: "NLP",
        icon: Bot,
        github: "#",
        demo: "#",
    },
    {
        title: "Crop Disease Detection",
        description: "Computer vision model to detect early signs of disease in wheat crops using drone imagery.",
        tags: ["Computer Vision", "PyTorch", "Agriculture"],
        category: "Computer Vision",
        icon: Eye,
        github: "#",
        demo: "#",
    },
    {
        title: "Campus Chatbot",
        description: "RAG-based chatbot for PIEAS students to query university policies, schedules, and events.",
        tags: ["LLM", "RAG", "LangChain"],
        category: "NLP",
        icon: Brain,
        github: "#",
        demo: "#",
    },
    {
        title: "Autonomous Rover",
        description: "Navigation stack for a small-scale autonomous rover using SLAM and path planning.",
        tags: ["Robotics", "ROS", "C++"],
        category: "Robotics",
        icon: Code2,
        github: "#",
        demo: "#",
    },
];

const categories = ["All", "NLP", "Computer Vision", "Robotics"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen pt-20 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                        Innovation <span className="text-primary">Lab</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Showcasing groundbreaking projects built by our community members
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className="rounded-full min-w-[100px]"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                            <project.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                <Github className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <CardTitle className="font-orbitron text-xl mb-2">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
