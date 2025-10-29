import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">EIRTM 2025</h3>
            <p className="text-sm opacity-90 mb-4">
              International Conference on Emerging Innovations in Research,
              Technology, and Management
            </p>
            <p className="text-sm opacity-90">
              Organized by Institute of Engineering & Management, Kolkata
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/call-for-papers" className="hover:text-secondary transition-colors">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/submission" className="hover:text-secondary transition-colors">
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-secondary transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Institute of Engineering & Management, Kolkata, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@eirtm2025.org" className="hover:text-secondary transition-colors">
                  info@eirtm2025.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 XX XXXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 pb-8 border-b border-primary-foreground/20">
          <a
            href="#"
            className="hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-90">
          <p>
            © 2025 EIRTM | Organized by IEM Kolkata | In association with Smart
            Society
          </p>
        </div>
      </div>
    </footer>
  );
};
