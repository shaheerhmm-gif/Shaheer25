import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'AR Menu', path: '/ar-menu' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Clients', path: '/clients' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tracking-tight">DineUp</div>
              <div className="text-xs text-slate-500 font-medium">Restaurant Growth</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-slate-900'
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:9096500303"
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>9096500303</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4 border-t border-gray-100 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium ${
                  isActive(link.path)
                    ? 'text-slate-900'
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:9096500303"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium w-full"
            >
              <Phone className="w-4 h-4" />
              <span>9096500303</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
