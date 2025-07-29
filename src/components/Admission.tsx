import React, { useState } from 'react';
import { FileText, CheckCircle, Clock, Send, Phone, Mail, Calendar } from 'lucide-react';

const Admission = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    pais: '',
    programa: '',
    experiencia: '',
    motivacion: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Solicitud en Línea',
      description: 'Complete el formulario de solicitud con sus datos personales y académicos',
      icon: <FileText className="h-8 w-8" />
    },
    {
      step: 2,
      title: 'Documentación',
      description: 'Envíe los documentos requeridos apostillados y traducidos',
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      step: 3,
      title: 'Evaluación',
      description: 'Revisión de su expediente por el comité académico',
      icon: <Clock className="h-8 w-8" />
    },
    {
      step: 4,
      title: 'Admisión',
      description: 'Reciba su carta de aceptación y proceda con la inscripción',
      icon: <Send className="h-8 w-8" />
    }
  ];

  const requiredDocuments = [
    'Título universitario apostillado',
    'Expediente académico oficial',
    'Cédula de identidad o pasaporte',
    'Fotografías recientes',
    'Carta de motivación',
    'Curriculum vitae actualizado',
    'Certificados de cursos complementarios',
    'Cartas de recomendación (para maestrías y doctorados)'
  ];

  return (
    <section id="admision" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Proceso de Admisión</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Inicie su camino hacia la excelencia académica con nuestro proceso de admisión transparente y eficiente
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Admission Steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">Pasos para la Admisión</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200 text-center h-full">
                  <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold text-amber-900 mb-3">{step.title}</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-yellow-600" />
              Solicitud de Admisión
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">País de Residencia</label>
                  <input
                    type="text"
                    name="pais"
                    value={formData.pais}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">Programa de Interés</label>
                <select
                  name="programa"
                  value={formData.programa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Seleccione un programa</option>
                  <option value="especializacion">Especialización</option>
                  <option value="diplomado">Diplomado</option>
                  <option value="maestria">Maestría</option>
                  <option value="doctorado">Doctorado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">Años de Experiencia Profesional</label>
                <select
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Seleccione</option>
                  <option value="0-2">0-2 años</option>
                  <option value="3-5">3-5 años</option>
                  <option value="6-10">6-10 años</option>
                  <option value="10+">Más de 10 años</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">Motivación para el Programa</label>
                <textarea
                  name="motivacion"
                  value={formData.motivacion}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Describa brevemente sus motivaciones para cursar este programa..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Required Documents & Contact */}
          <div className="space-y-8">
            {/* Required Documents */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-yellow-600" />
                Documentos Requeridos
              </h3>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-800 font-medium text-sm">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
                <p className="text-amber-800 text-sm">
                  <strong>Importante:</strong> Todos los documentos deben estar apostillados y traducidos al español 
                  por traductor oficial cuando corresponda.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-yellow-300" />
                  <div>
                    <p className="font-medium">Correo Electrónico</p>
                    <p className="text-amber-200">admisiones@AAEJ.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-yellow-300" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-amber-200">+1 (305) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-yellow-300" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-amber-200">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <p className="text-sm">
                  Nuestro equipo de admisiones está disponible para resolver todas sus consultas 
                  y acompañarlo durante todo el proceso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
