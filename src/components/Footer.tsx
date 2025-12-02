import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AJ GROUPS</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Design for Decades
            </p>
            <p className="text-sm text-primary-foreground/70">
              Building excellence in construction, real estate, land development, and architecture since inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Construction</li>
              <li className="text-sm text-primary-foreground/80">Real Estate</li>
              <li className="text-sm text-primary-foreground/80">Land Development</li>
              <li className="text-sm text-primary-foreground/80">Architecture</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  C.N Road, Opp. Nethravathi Theatre,<br />
                  Bhadravathi, Karnataka – 577301
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:8088067247" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  8088067247
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="https://wa.me/917996545490" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  7996545490 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:ajgroupsconstruction@gmail.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  ajgroupsconstruction@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <pre className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} AJ Groups. All rights reserved.                                                                                 Developed by Rabiya Naaz A.F
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
