import React from 'react';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg')] bg-cover bg-center opacity-5"></div>
      
      {/* Classical Pillars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Pillar */}
        <div className="absolute left-4 md:left-8 lg:left-16 top-0 bottom-0 w-12 md:w-16 lg:w-20 opacity-15">
          <div className="h-full flex flex-col">
            {/* Pillar Capital */}
            <div className="w-full h-8 md:h-12 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-lg relative">
              <div className="absolute -top-2 -left-2 -right-2 h-4 bg-gradient-to-b from-amber-500 to-amber-600 rounded-lg"></div>
              <div className="absolute top-2 left-1 right-1 bottom-1 bg-gradient-to-b from-amber-400 to-amber-500 rounded-sm"></div>
            </div>
            {/* Pillar Shaft */}
            <div className="flex-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 relative">
              {/* Fluting lines */}
              <div className="absolute inset-y-0 left-1/4 w-px bg-amber-700 opacity-50"></div>
              <div className="absolute inset-y-0 left-2/4 w-px bg-amber-400 opacity-30"></div>
              <div className="absolute inset-y-0 left-3/4 w-px bg-amber-700 opacity-50"></div>
            </div>
            {/* Pillar Base */}
            <div className="w-full h-6 md:h-8 bg-gradient-to-t from-amber-700 to-amber-600 relative">
              <div className="absolute -bottom-1 -left-2 -right-2 h-3 bg-gradient-to-t from-amber-800 to-amber-700 rounded-b-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Right Pillar */}
        <div className="absolute right-4 md:right-8 lg:right-16 top-0 bottom-0 w-12 md:w-16 lg:w-20 opacity-15">
          <div className="h-full flex flex-col">
            {/* Pillar Capital */}
            <div className="w-full h-8 md:h-12 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-lg relative">
              <div className="absolute -top-2 -left-2 -right-2 h-4 bg-gradient-to-b from-amber-500 to-amber-600 rounded-lg"></div>
              <div className="absolute top-2 left-1 right-1 bottom-1 bg-gradient-to-b from-amber-400 to-amber-500 rounded-sm"></div>
            </div>
            {/* Pillar Shaft */}
            <div className="flex-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 relative">
              {/* Fluting lines */}
              <div className="absolute inset-y-0 left-1/4 w-px bg-amber-700 opacity-50"></div>
              <div className="absolute inset-y-0 left-2/4 w-px bg-amber-400 opacity-30"></div>
              <div className="absolute inset-y-0 left-3/4 w-px bg-amber-700 opacity-50"></div>
            </div>
            {/* Pillar Base */}
            <div className="w-full h-6 md:h-8 bg-gradient-to-t from-amber-700 to-amber-600 relative">
              <div className="absolute -bottom-1 -left-2 -right-2 h-3 bg-gradient-to-t from-amber-800 to-amber-700 rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
            Excelencia Académica en
            <span className="text-yellow-700 block">Ciencias Jurídicas</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed">
            Formando profesionales del derecho con los más altos estándares académicos internacionales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center">
              Solicitar Admisión
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              Conocer Programas
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-amber-900" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Certificación Reconocida</h3>
            <p className="text-amber-700 leading-relaxed">
              Todos nuestros curso son impratidos por profesores de Alto Reconocimiento Internacional, 
              garantizando la más alta calidad académica.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-amber-900" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Claustro Internacional</h3>
            <p className="text-amber-700 leading-relaxed">
              Doctores especializados ubicados en México, Estados Unidos, Brasil y Cuba, 
              brindando una perspectiva global del derecho.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-amber-900" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Metodología Avanzada</h3>
            <p className="text-amber-700 leading-relaxed">
              Programas diseñados bajo las orientaciones de las metodologias activas para la educación 
              continua y el perfeccionamiento eficaz de los estudiantes y profesionales del derecho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
