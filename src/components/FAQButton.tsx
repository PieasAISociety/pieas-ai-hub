import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircleQuestion } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How can I join PAIS?",
        answer: "You can join PAIS by visiting our 'Join Us' page and filling out the membership application form. We open recruitment drives at the start of each semester.",
    },
    {
        question: "Are the bootcamps free?",
        answer: "Most of our introductory bootcamps are free for PIEAS students. Specialized workshops may have a nominal fee to cover resources and certification.",
    },
    {
        question: "Can I participate in events if I'm not a member?",
        answer: "Yes! Many of our events, seminars, and hackathons are open to the entire student body and sometimes external participants.",
    },
    {
        question: "How can I collaborate on a project?",
        answer: "Visit our 'Projects' page to see active projects. You can reach out to the project leads or submit a proposal via the 'Contact' page.",
    },
    {
        question: "Do you offer certifications?",
        answer: "Yes, we provide certificates of completion for our bootcamps and workshops, which are valuable additions to your portfolio.",
    },
];

export const FAQButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <Button
                        size="icon"
                        className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-primary to-accent hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                    >
                        <MessageCircleQuestion className="h-7 w-7 text-white animate-pulse" />
                        <span className="sr-only">Open FAQ</span>
                    </Button>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-xl border-primary/20">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 font-orbitron text-2xl">
                        <HelpCircle className="h-6 w-6 text-primary" />
                        Frequently Asked Questions
                    </DialogTitle>
                    <DialogDescription>
                        Quick answers to common questions about PAIS.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-rajdhani font-semibold text-lg hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </DialogContent>
        </Dialog>
    );
};
