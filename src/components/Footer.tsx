import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of AI innovators at PIEAS
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/bootcamps" className="text-muted-foreground hover:text-primary transition-colors">
                  Bootcamps
                </a>
              </li>
              <li>
                <a href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/join" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-primary">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pieas.ai.society?utm_source=qr&igsh=ZTdpYnF2amtoaGJs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300 glow-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/pieas-artificial-intelligence-society-01/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CBe5LDZDJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:pieas.ai.society@gmail.com"
                className="p-2 bg-secondary rounded-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 PIEAS AI Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
