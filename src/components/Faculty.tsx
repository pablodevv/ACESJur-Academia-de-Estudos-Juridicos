import React from 'react';
import { MapPin, Award, Calendar, GraduationCap, Star } from 'lucide-react';

const Faculty = () => {
  const leadership = [
    {
      name: 'Dr. Juan Emigdio García Cuza',
      role: 'Director General',
      specialty: 'Doctorado en Ciencias Jurídicas, Universidad de La Habana 1992',
      location: 'Hialeah, Florida, EE.UU.',
      description: 'Director AAEJ y Coordinador Campus Florida',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg'
    },
    {
      name: 'Dr. Pablo Jiménez Serrano',
      role: 'Coordinador Académico',
      specialty: 'Doctorado en Ciencias Jurídicas, Universidad de La Habana 1998',
      location: 'São Paulo, Brasil',
      description: 'Coordinación Académica de Estudios de Posgrado AAEJ',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg'
    }
  ];

  const faculty = [
    {
      name: 'Jaime Arrojo Perea',
      degree: 'Master en Ciencias Penales',
      institution: 'Centro Nacional de Investigaciones Jurídicas de México CENIJUR',
      location: 'Ciudad de México',
      role: 'Coordinador AAEJ Campus México',
      year: 'Campus Puebla y Acapulco'
    },
    {
      name: 'Dr. Elena Polo Maceira',
      degree: 'Doctora en Ciencias Jurídicas',
      institution: 'Universidad de La Habana',
      location: 'Ciudad de México',
      role: 'Profesora Permanente',
      year: '2008'
    },
    {
      name: 'Dr. Danelia Cutié Mustelier',
      degree: 'Doctora en Ciencias Jurídicas',
      institution: 'Universidad de La Habana',
      location: 'Ciudad de México',
      role: 'Profesora Permanente',
      year: '2003'
    },
    {
      name: 'Dr. Yoelsi Lafita Coba',
      degree: 'Doctora en Ciencias Jurídicas',
      institution: 'Universidad de La Habana',
      location: 'San Antonio, Texas, EE.UU.',
      role: 'Coordinadora Campus Texas, Arizona y California',
      year: '2012'
    },
    {
      name: 'Dr. Josefina Méndez López',
      degree: 'Doctora en Ciencias Jurídicas',
      institution: 'Universidad de La Habana',
      location: 'Miami, Florida, EE.UU.',
      role: 'Profesora Permanente',
      year: '2002'
    },
    {
      name: 'Dr. Fidel González García',
      degree: 'Doctor en Ciencias Jurídicas',
      institution: 'Universidad de La Habana',
      location: 'Santiago de Cuba',
      role: 'Profesor Permanente',
      year: '2009'
    },
    {
      name: 'Dr. Walter Modelo García',
      degree: 'Doctor en Ciencias Jurídicas',
      institution: 'Universidad de La Habana',
      location: 'Santiago de Cuba',
      role: 'Profesor Permanente',
      year: '2005'
    }
  ];

  return (
    <section id="claustro" className="py-20 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Claustro Académico</h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Nuestro prestigioso claustro está conformado por doctores especializados con amplia experiencia internacional
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto mt-6"></div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center">
            <Crown className="h-8 w-8 mr-3 text-yellow-400" />
            Dirección Académica
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full">
                    <GraduationCap className="h-12 w-12 text-amber-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2">{leader.name}</h4>
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                      {leader.role}
                    </div>
                    <p className="text-amber-200 mb-3">{leader.specialty}</p>
                    <div className="flex items-center text-amber-300 mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{leader.location}</span>
                    </div>
                    <p className="text-amber-100 text-sm italic">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center">
            <Users className="h-8 w-8 mr-3 text-yellow-400" />
            Docentes Permanentes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-amber-900" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                  <div className="bg-amber-600/30 text-amber-200 px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    {member.role}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-200">{member.degree}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-200">{member.institution}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-200">{member.location}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Calendar className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-200">{member.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
              Aprende de los Mejores Especialistas
            </h3>
            <p className="text-lg text-amber-800 mb-6">
              Nuestro claustro internacional te brindará una formación jurídica de clase mundial 
              con perspectiva global y metodología de vanguardia.
            </p>
            <button className="bg-amber-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-900 transition-colors duration-300 shadow-lg">
              Conocer Más Sobre Nuestros Docentes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;

import { Crown, Users } from 'lucide-react';
