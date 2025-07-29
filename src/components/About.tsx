import React from 'react';
import { Globe, Target, Star, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Quiénes Somos?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-amber-300/20">
              <p className="text-xl text-amber-100 leading-relaxed mb-6">
                <strong className="text-yellow-300">ACESJur</strong> es una institución académica de excelencia 
                que ofrece <strong className="text-yellow-300">Cursos de Posgrado</strong> en estrecha 
                colaboración con profesores doctores vinculados a diversas instituciones y universidades 
                de prestigio internacional.
              </p>
              <p className="text-lg text-amber-200 leading-relaxed">
                Nuestros programas responden a las <strong className="text-yellow-300">orientaciones de las metodologias activas</strong> para la educación
                continua y el <strong className="text-yellow-300">perfeccionamiento eficaz</strong> de los estudiantes y profesionales del derecho.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
              <Globe className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Alcance Global</h3>
              <p className="text-amber-200 text-sm">Presencia en México, Estados Unidos, Brasil y Cuba</p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
              <Target className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Misión Clara</h3>
              <p className="text-amber-200 text-sm">Formar juristas de excelencia con perspectiva internacional</p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
              <Star className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Calidad Superior</h3>
              <p className="text-amber-200 text-sm">Estándares académicos de clase mundial</p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-amber-300/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Crecimiento</h3>
              <p className="text-amber-200 text-sm">Expansión continua y mejora constante</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Nuestra Visión</h3>
            <p className="text-lg text-amber-800 leading-relaxed">
              Ser la institución de referencia en la formación de posgrado en ciencias jurídicas, 
              reconocida por la excelencia académica, la innovación pedagógica y el compromiso 
              con el desarrollo profesional integral de nuestros estudiantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
