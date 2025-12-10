import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Summary', href: '#summary' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`max-w-6xl mx-auto px-4 ${isScrolled ? 'glass-card rounded-2xl mx-4' : ''}`}>
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="text-xl font-bold neon-text">
            Portfolio
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 glass-card rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
