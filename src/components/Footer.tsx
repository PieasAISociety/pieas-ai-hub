import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/pais-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="PAIS Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-orbitron text-lg font-bold">PAIS</h3>
                <p className="text-sm text-muted-foreground">AI Society</p>
              </div>
            </div>
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
                href="https://www.instagram.com/pieas.ai.society"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-cyan"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@pieas-ai.org"
                className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
