import React from 'react';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Programas', href: '#programas' },
    { name: 'Claustro', href: '#claustro' },
    { name: 'Admisión', href: '#admision' },
    { name: 'Biblioteca', href: '#biblioteca' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const programs = [
    'Especializaciones',
    'Diplomados',
    'Maestrías',
    'Doctorados'
  ];

  const legalLinks = [
    'Términos y Condiciones',
    'Política de Privacidad',
    'Reglamento Académico',
    'Código de Ética',
    'Certificaciones'
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-950 via-yellow-900 to-amber-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-3 rounded-full">
                <Scale className="h-8 w-8 text-amber-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AAEJ</h3>
                <p className="text-amber-300 text-sm">Academia Americana de Educación Jurídica - José Martí</p>
              </div>
            </div>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Institución de excelencia académica en ciencias jurídicas, formando profesionales 
              del derecho con los más altos estándares internacionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-amber-200 hover:text-yellow-300 transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Programas Académicos</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a 
                    href="#programas" 
                    className="text-amber-200 hover:text-yellow-300 transition-colors duration-300 text-sm font-medium"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-xl font-bold text-white mb-6 mt-8">Información Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-amber-200 hover:text-yellow-300 transition-colors duration-300 text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-amber-200 text-sm">Correo General</p>
                  <p className="text-white font-medium">info@AAEJ.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-amber-200 text-sm">Teléfono</p>
                  <p className="text-white font-medium">+1 (305) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-amber-200 text-sm">Oficina Principal</p>
                  <p className="text-white font-medium">Hialeah, Florida, EE.UU.</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-200 text-sm">
              <p>&copy; 2025 Academia Americana de Educación Jurídica - José Martí (AAEJ). Todos los derechos reservados.</p>
            </div>
            <div className="text-amber-300 text-sm mt-4 md:mt-0">
              <p>Sitio web desarrollado con excelencia por Pablo Rodriguez • Versión 2025.1</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
