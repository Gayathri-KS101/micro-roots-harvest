
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Stories', href: '/stories' },
    { name: 'Nutrition', href: '/nutrition' },
    { name: 'Store', href: '/store' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-cream-300/50 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <Leaf className="h-8 w-8 text-sage-400" />
            <span className="font-serif font-bold text-xl text-sage-600">MicroRoots</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(item.href)
                    ? 'text-sage-600'
                    : 'text-cream-700 hover:text-sage-500'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sage-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cream-700 hover:text-sage-500 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream-300/50 bg-white/95 animate-fade-in">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-sage-600 bg-sage-50'
                    : 'text-cream-700 hover:text-sage-500 hover:bg-cream-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
