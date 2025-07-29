import React, { useState } from 'react';
import { Menu, X, Scale, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Programas', href: '#programas' },
    { name: 'Claustro', href: '#claustro' },
    { name: 'Admisión', href: '#admision' },
    { name: 'Biblioteca', href: '#biblioteca' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-3 rounded-full shadow-lg">
              <Scale className="h-8 w-8 text-amber-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">AAEJ</h1>
              <p className="text-amber-200 text-sm">Academia Americana de Educación Jurídica - José Martí</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-amber-100 hover:text-yellow-300 transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-300 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-800 rounded-lg mb-4 shadow-xl">
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-amber-100 hover:text-yellow-300 transition-colors duration-300 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
