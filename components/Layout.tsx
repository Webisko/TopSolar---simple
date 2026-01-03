import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Phone, Mail, MapPin } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-stone-50">
      {/* Top Bar - Trust & Contact */}
      <div className="bg-andalusia-dark text-white py-2 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="flex gap-6">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-andalusia-yellow"/> Toda Andalucía</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-andalusia-yellow"/> +34 664 490 778</span>
            </div>
            <span className="font-semibold text-andalusia-yellow">¡Presupuesto gratuito en 24h!</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Sun className="w-8 h-8 text-andalusia-yellow group-hover:rotate-45 transition-transform duration-700" />
            <div className="leading-tight">
                <span className="block font-serif font-bold text-xl text-andalusia-dark tracking-tight">TopSolar</span>
                <span className="block text-[10px] uppercase tracking-widest text-andalusia-blue font-semibold">Andalucía</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium hover:text-andalusia-yellow transition-colors ${location.pathname === item.path ? 'text-andalusia-blue font-bold' : 'text-gray-600'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
                to="/contacto"
                className="bg-andalusia-yellow text-andalusia-dark font-bold px-5 py-2.5 rounded-full text-sm hover:bg-yellow-500 hover:shadow-lg transition-all"
            >
                Pedir Presupuesto
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-medium text-gray-700 py-2 border-b border-gray-100"
                >
                  {item.label}
                </Link>
              ))}
                <Link
                to="/contacto"
                className="bg-andalusia-yellow text-center text-andalusia-dark font-bold px-5 py-3 rounded-lg mt-2"
                >
                Pedir Presupuesto
                </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-andalusia-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Sun className="w-8 h-8 text-andalusia-yellow" />
                        <span className="font-serif font-bold text-2xl">TopSolar</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Expertos en llevar la independencia energética a los hogares andaluces. Calidad, garantía y cercanía.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Enlaces</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link to="/" className="hover:text-andalusia-yellow transition">Inicio</Link></li>
                        <li><Link to="/servicios" className="hover:text-andalusia-yellow transition">Servicios</Link></li>
                        <li><Link to="/proyectos" className="hover:text-andalusia-yellow transition">Proyectos Reales</Link></li>
                        <li><Link to="/contacto" className="hover:text-andalusia-yellow transition">Contacto</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Servicios</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>Instalación Residencial</li>
                        <li>Instalación Industrial</li>
                        <li>Mantenimiento y Limpieza</li>
                        <li>Gestión de Subvenciones</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Contacto</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-andalusia-yellow shrink-0 mt-1" size={18} />
                            <span>Servicio en toda Andalucía:<br/>Sevilla, Málaga, Cádiz, Huelva, Córdoba, Jaén, Granada, Almería.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-andalusia-yellow shrink-0" size={18} />
                            <span>+34 664 490 778</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-andalusia-yellow shrink-0" size={18} />
                            <span>info@topsolar.es</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                <p>&copy; 2025 TopSolar Andalucía. Todos los derechos reservados.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;