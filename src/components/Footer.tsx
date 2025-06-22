
import { MapPin, Mail, Phone, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sage-50 border-t border-cream-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-sage-600">MicroRoots</h3>
            <p className="text-cream-700 text-sm leading-relaxed">
              Growing goodness, one microgreen at a time. Join our community of urban farmers and health enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-600 hover:text-sage-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-600 hover:text-sage-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-sage-600">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/stories" className="block text-cream-700 hover:text-sage-500 transition-colors text-sm">
                Community Stories
              </Link>
              <Link to="/nutrition" className="block text-cream-700 hover:text-sage-500 transition-colors text-sm">
                Nutrition Guide
              </Link>
              <Link to="/store" className="block text-cream-700 hover:text-sage-500 transition-colors text-sm">
                Shop Microgreens
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-sage-600">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-cream-700 text-sm">
                <MapPin className="h-4 w-4 text-sage-400" />
                <span>Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center space-x-2 text-cream-700 text-sm">
                <Mail className="h-4 w-4 text-sage-400" />
                <a href="mailto:hello@microroots.in" className="hover:text-sage-500 transition-colors">
                  hello@microroots.in
                </a>
              </div>
              <div className="flex items-center space-x-2 text-cream-700 text-sm">
                <Phone className="h-4 w-4 text-sage-400" />
                <a href="tel:+919876543210" className="hover:text-sage-500 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-300/50 mt-8 pt-8 text-center">
          <p className="text-cream-600 text-sm">
            © 2024 MicroRoots. All rights reserved. Made with 🌱 in Kerala.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
