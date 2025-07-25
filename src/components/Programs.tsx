import React, { useState } from 'react';
import { GraduationCap, BookOpen, Award, Crown, Clock, Users, CheckCircle } from 'lucide-react';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState('especializacion');

  const programs = {
    especializacion: {
      title: 'Especializaciones',
      icon: <BookOpen className="h-8 w-8" />,
      duration: '6-8 meses',
      modality: 'Virtual y Presencial',
      description: 'Programas especializados que profundizan en áreas específicas del derecho',
      courses: [
        'Derecho Penal Avanzado',
        'Derecho Constitucional Contemporáneo',
        'Derecho Internacional Privado',
        'Derecho Laboral y Seguridad Social',
        'Derecho Administrativo Moderno'
      ],
      requirements: [
        'Título universitario en Derecho',
        'Experiencia profesional mínima de 2 años',
        'Dominio del idioma español',
        'Documentos apostillados'
      ]
    },
    diplomados: {
      title: 'Diplomados',
      icon: <Award className="h-8 w-8" />,
      duration: '4-6 meses',
      modality: 'Virtual',
      description: 'Cursos intensivos de actualización profesional con certificación UNAM',
      courses: [
        'Diplomado en Derecho Procesal Civil',
        'Diplomado en Derecho Mercantil',
        'Diplomado en Derechos Humanos',
        'Diplomado en Derecho Fiscal',
        'Diplomado en Derecho de Familia'
      ],
      requirements: [
        'Título universitario o estudiante avanzado',
        'Carta de motivación',
        'Curriculum vitae actualizado',
        'Fotografía reciente'
      ]
    },
    maestrias: {
      title: 'Maestrías',
      icon: <GraduationCap className="h-8 w-8" />,
      duration: '18-24 meses',
      modality: 'Semipresencial',
      description: 'Programas de maestría con reconocimiento internacional y tesis de grado',
      courses: [
        'Maestría en Derecho Constitucional',
        'Maestría en Derecho Internacional',
        'Maestría en Derecho Empresarial',
        'Maestría en Criminología y Política Criminal',
        'Maestría en Derecho Procesal'
      ],
      requirements: [
        'Licenciatura en Derecho con promedio mínimo 8.0',
        'Experiencia profesional de 3 años',
        'Proyecto de investigación',
        'Entrevista académica'
      ]
    },
    doctorados: {
      title: 'Doctorados',
      icon: <Crown className="h-8 w-8" />,
      duration: '3-4 años',
      modality: 'Investigación dirigida',
      description: 'El más alto grado académico con investigación original y tesis doctoral',
      courses: [
        'Doctorado en Ciencias Jurídicas',
        'Doctorado en Derecho Constitucional',
        'Doctorado en Derecho Internacional',
        'Doctorado en Filosofía del Derecho',
        'Doctorado en Derecho Comparado'
      ],
      requirements: [
        'Maestría en área afín con excelencia académica',
        'Propuesta de investigación doctoral',
        'Publicaciones académicas previas',
        'Aprobación del comité doctoral'
      ]
    }
  };

  const currentProgram = programs[activeProgram];

  return (
    <section id="programas" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Programas Académicos</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de programas de posgrado diseñados para impulsar tu carrera profesional
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Program Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(programs).map(([key, program]) => (
            <button
              key={key}
              onClick={() => setActiveProgram(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                activeProgram === key
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white transform scale-105'
                  : 'bg-white text-amber-700 hover:bg-amber-50 border-2 border-amber-200'
              }`}
            >
              {program.icon}
              <span>{program.title}</span>
            </button>
          ))}
        </div>

        {/* Program Details */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-200">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 p-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                {currentProgram.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold">{currentProgram.title}</h3>
                <p className="text-amber-100">{currentProgram.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-yellow-300" />
                <span className="text-lg">Duración: {currentProgram.duration}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-yellow-300" />
                <span className="text-lg">Modalidad: {currentProgram.modality}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-yellow-600" />
                  Cursos Disponibles
                </h4>
                <div className="space-y-3">
                  {currentProgram.courses.map((course, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-yellow-600" />
                  Requisitos de Admisión
                </h4>
                <div className="space-y-3">
                  {currentProgram.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200 hover:bg-yellow-100 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800 font-medium">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Solicitar Información Detallada
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;