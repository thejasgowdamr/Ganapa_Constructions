import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Skandapurvaja Buildtech" className="h-12 w-auto" />
          <div>
            <p className={`font-bold text-sm leading-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              SKANDAPURVAJA
            </p>
            <p className={`text-xs leading-tight transition-colors ${scrolled ? 'text-yellow-500' : 'text-yellow-300'}`}>
              Buildtech Pvt. Ltd.
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-yellow-400 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="tel:+919945968200" className="hidden lg:flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90" style={{ backgroundColor: '#1B3A6B' }}>
          <Phone className="w-4 h-4" />
          +91 99459 68200
        </a>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium text-sm hover:text-yellow-500 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="tel:+919945968200" className="text-white text-sm font-semibold px-5 py-2.5 rounded text-center" style={{ backgroundColor: '#1B3A6B' }}>
              +91 99459 68200
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}