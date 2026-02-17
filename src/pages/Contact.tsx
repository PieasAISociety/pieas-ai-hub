import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Globe, Download, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // Sponsorship Form State
    const [sponsorshipOpen, setSponsorshipOpen] = useState(false);
    const [isSponsorshipSubmitting, setIsSponsorshipSubmitting] = useState(false);
    const [sponsorshipData, setSponsorshipData] = useState({
        name: "",
        email: "",
        organization: "",
        role: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSponsorshipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSponsorshipData({
            ...sponsorshipData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit');

            toast({
                title: "Message Sent Successfully!",
                description: "We'll get back to you as soon as possible.",
            });

            // Reset form
            setFormData({ name: "", email: "", subject: "", message: "" });

        } catch (error) {
            toast({
                title: "Error Sending Message",
                description: "Please try again later or contact us directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSponsorshipSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSponsorshipSubmitting(true);

        try {
            const response = await fetch('/api/sponsorship', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sponsorshipData),
            });

            if (!response.ok) throw new Error('Failed to request sponsorship');

            toast({
                title: "Request Received!",
                description: "We've sent the Sponsorship Deck to your email.",
            });
            setSponsorshipOpen(false);
            setSponsorshipData({ name: "", email: "", organization: "", role: "" });
        } catch (error) {
            toast({
                title: "Error Requesting Deck",
                description: "Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSponsorshipSubmitting(false);
        }
    };

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
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="bg-background/50" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-background/50" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Subject</label>
                                        <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Collaboration Proposal" className="bg-background/50" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Message</label>
                                        <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className="min-h-[150px] bg-background/50" required />
                                    </div>
                                    <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                                        <Send className="mr-2 h-4 w-4" /> {isSubmitting ? "Sending..." : "Send Message"}
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
                                    <div className="p-3 bg-primary/10 rounded-lg"><MapPin className="h-6 w-6 text-primary" /></div>
                                    <div><h3 className="font-bold mb-1">Visit Us</h3><p className="text-muted-foreground">PIEAS University,<br />Nilore, Islamabad, Pakistan</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg"><Mail className="h-6 w-6 text-primary" /></div>
                                    <div><h3 className="font-bold mb-1">Email Us</h3><p className="text-muted-foreground">pieas.ai.society@gmail.com</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg"><Phone className="h-6 w-6 text-primary" /></div>
                                    <div><h3 className="font-bold mb-1">Call Us</h3><p className="text-muted-foreground">+92 343 3055357</p></div>
                                </div>
                                <div className="pt-6 border-t border-border">
                                    <h3 className="font-bold mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="https://www.linkedin.com/company/pieas-artificial-intelligence-society-01/" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary"><Linkedin className="h-5 w-5" /></Button></a>
                                        <a href="https://www.instagram.com/pieas.ai.society?utm_source=qr&igsh=ZTdpYnF2amtoaGJs" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary"><div className="h-5 w-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></div></Button></a>
                                        <a href="https://www.facebook.com/share/1CBe5LDZDJ/" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary"><div className="h-5 w-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></div></Button></a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sponsorship CTA - Premium Design */}
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-primary/50 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                                <CardContent className="p-8 text-center relative z-10">
                                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-white">
                                        Interested in <span className="text-primary">Sponsoring?</span>
                                    </h3>
                                    <p className="text-gray-300 mb-8 max-w-sm mx-auto">
                                        Partner with PAIS to connect with top AI talent and support the next generation of innovators.
                                    </p>

                                    <Dialog open={sponsorshipOpen} onOpenChange={setSponsorshipOpen}>
                                        <DialogTrigger asChild>
                                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 shadow-lg shadow-primary/25">
                                                <Download className="mr-2 h-5 w-5" /> Request Sponsorship Deck
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
                                            <DialogHeader>
                                                <DialogTitle className="font-orbitron text-2xl text-center">Request Sponsorship Deck</DialogTitle>
                                                <DialogDescription className="text-center">
                                                    Enter your details below and we'll email you the complete sponsorship dossier immediately.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <form onSubmit={handleSponsorshipSubmit} className="space-y-4 mt-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Full Name</label>
                                                    <Input name="name" value={sponsorshipData.name} onChange={handleSponsorshipChange} placeholder="Jane Smith" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Work Email</label>
                                                    <Input name="email" type="email" value={sponsorshipData.email} onChange={handleSponsorshipChange} placeholder="jane@company.com" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Organization / Company</label>
                                                    <Input name="organization" value={sponsorshipData.organization} onChange={handleSponsorshipChange} placeholder="Acme AI Corp" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Role / Position</label>
                                                    <Input name="role" value={sponsorshipData.role} onChange={handleSponsorshipChange} placeholder="Marketing Director" required />
                                                </div>
                                                <Button type="submit" disabled={isSponsorshipSubmitting} className="w-full mt-2">
                                                    {isSponsorshipSubmitting ? "Processing..." : "Get Sponsorship Deck"}
                                                </Button>
                                            </form>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
