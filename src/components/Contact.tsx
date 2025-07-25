import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const campuses = [
    {
      name: 'Campus México',
      coordinator: 'Jaime Arrojo Perea',
      location: 'Ciudad de México, México',
      coverage: 'Puebla y Acapulco',
      phone: '+52 55 1234-5678',
      email: 'mexico@acesjur.edu'
    },
    {
      name: 'Campus Florida',
      coordinator: 'Dr. Juan Emigdio García Cuza',
      location: 'Hialeah, Florida, EE.UU.',
      coverage: 'Florida',
      phone: '+1 (305) 555-0123',
      email: 'florida@acesjur.edu'
    },
    {
      name: 'Campus Texas',
      coordinator: 'Dr. Yoelsi Lafita Coba',
      location: 'San Antonio, Texas, EE.UU.',
      coverage: 'Texas, Arizona y California',
      phone: '+1 (210) 555-0456',
      email: 'texas@acesjur.edu'
    },
    {
      name: 'Campus Brasil',
      coordinator: 'Dr. Pablo Jiménez Serrano',
      location: 'São Paulo, Brasil',
      coverage: 'Brasil',
      phone: '+55 11 9876-5432',
      email: 'brasil@acesjur.edu'
    },
    {
      name: 'Campus Cuba',
      coordinator: 'Dr. Fidel González García',
      location: 'Santiago de Cuba, Cuba',
      coverage: 'Cuba',
      phone: '+53 22 123-456',
      email: 'cuba@acesjur.edu'
    }
  ];

  const contactReasons = [
    'Información General',
    'Admisiones',
    'Programas Académicos',
    'Biblioteca Digital',
    'Certificaciones',
    'Soporte Técnico',
    'Alianzas Institucionales',
    'Otro'
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contacto</h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Estamos aquí para responder todas sus consultas y acompañarlo en su camino hacia la excelencia académica
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-3 text-yellow-400" />
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-amber-300/30 rounded-lg text-white placeholder-amber-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Su nombre completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-amber-300/30 rounded-lg text-white placeholder-amber-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="su.email@ejemplo.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">Asunto</label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-amber-300/30 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="" className="text-amber-900">Seleccione un tema</option>
                  {contactReasons.map((reason) => (
                    <option key={reason} value={reason} className="text-amber-900">{reason}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-amber-300/30 rounded-lg text-white placeholder-amber-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Escriba su mensaje aquí..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/20">
              <h3 className="text-2xl font-bold text-white mb-6">Información General</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Correo Principal</p>
                    <p className="text-amber-200">info@acesjur.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Teléfono General</p>
                    <p className="text-amber-200">+1 (305) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Sitio Web</p>
                    <p className="text-amber-200">www.acesjur.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Horario de Atención</p>
                    <p className="text-amber-200">Lunes a Viernes: 9:00 AM - 6:00 PM (EST)</p>
                    <p className="text-amber-200">Sábados: 9:00 AM - 2:00 PM (EST)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">¿Necesita Hablar con Admisiones?</h3>
              <p className="text-amber-800 mb-6">
                Nuestro equipo especializado está listo para orientarlo en el proceso de admisión 
                y resolver todas sus dudas académicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors duration-300 flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar Ahora
                </button>
                <button className="border-2 border-amber-800 text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 hover:text-white transition-all duration-300">
                  Agendar Cita
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Locations */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center">
            <MapPin className="h-8 w-8 mr-3 text-yellow-400" />
            Nuestros Campus
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campuses.map((campus, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">{campus.name}</h4>
                <p className="text-yellow-300 font-medium mb-3">{campus.coordinator}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-400" />
                    <span className="text-amber-200">{campus.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-yellow-400" />
                    <span className="text-amber-200">Cobertura: {campus.coverage}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-yellow-400" />
                    <span className="text-amber-200">{campus.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-yellow-400" />
                    <span className="text-amber-200">{campus.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;