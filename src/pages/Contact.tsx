import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen pt-20 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Have a question, proposal, or want to collaborate? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="animate-slide-in-left">
                        <Card className="bg-card/50 backdrop-blur border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-orbitron text-2xl">Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <Input placeholder="John Doe" className="bg-background/50" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Subject</label>
                                        <Input placeholder="Collaboration Proposal" className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Message</label>
                                        <Textarea
                                            placeholder="Tell us about your project or inquiry..."
                                            className="min-h-[150px] bg-background/50"
                                        />
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                                        <Send className="mr-2 h-4 w-4" /> Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info & Sponsorship */}
                    <div className="space-y-8 animate-slide-in-right">
                        {/* Contact Details */}
                        <Card className="bg-card/50 backdrop-blur border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-orbitron text-2xl">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Visit Us</h3>
                                        <p className="text-muted-foreground">
                                            PIEAS University,<br />
                                            Nilore, Islamabad, Pakistan
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Email Us</h3>
                                        <p className="text-muted-foreground">pieas.ai.society@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Call Us</h3>
                                        <p className="text-muted-foreground">+92 343 3055357</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-border">
                                    <h3 className="font-bold mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://www.linkedin.com/company/pieas-artificial-intelligence-society-01/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary">
                                                <Linkedin className="h-5 w-5" />
                                            </Button>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/pieas.ai.society?utm_source=qr&igsh=ZTdpYnF2amtoaGJs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary">
                                                <div className="h-5 w-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-instagram"
                                                    >
                                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                                    </svg>
                                                </div>
                                            </Button>
                                        </a>
                                        <a
                                            href="https://www.facebook.com/share/1CBe5LDZDJ/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary">
                                                <div className="h-5 w-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-facebook"
                                                    >
                                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                    </svg>
                                                </div>
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sponsorship CTA */}
                        <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
                            <CardContent className="p-8 text-center">
                                <h3 className="font-orbitron text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Partner with PAIS to connect with top AI talent and support the next generation of innovators.
                                </p>
                                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                                    Download Sponsorship Deck
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
