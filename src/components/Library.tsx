import React, { useState } from 'react';
import { BookOpen, FileText, Download, Search, Filter, Eye } from 'lucide-react';

const Library = () => {
  const [activeTab, setActiveTab] = useState('articulos');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      title: 'El Constitucionalismo Contemporáneo en América Latina',
      author: 'Dr. Juan Emigdio García Cuza',
      year: '2024',
      category: 'Derecho Constitucional',
      abstract: 'Análisis comparativo de las tendencias constitucionales modernas en la región latinoamericana.',
      downloadUrl: '#'
    },
    {
      title: 'Nuevas Perspectivas del Derecho Internacional Privado',
      author: 'Dr. Pablo Jiménez Serrano',
      year: '2023',
      category: 'Derecho Internacional',
      abstract: 'Estudio sobre las evoluciones recientes en el derecho internacional privado y su aplicación práctica.',
      downloadUrl: '#'
    },
    {
      title: 'Derechos Humanos y Justicia Constitucional',
      author: 'Dr. Elena Polo Maceira',
      year: '2024',
      category: 'Derechos Humanos',
      abstract: 'Investigación sobre la protección de derechos fundamentales a través de la justicia constitucional.',
      downloadUrl: '#'
    },
    {
      title: 'Derecho Penal y Política Criminal Moderna',
      author: 'Dr. Danelia Cutié Mustelier',
      year: '2023',
      category: 'Derecho Penal',
      abstract: 'Análisis de las tendencias actuales en política criminal y su impacto en la legislación penal.',
      downloadUrl: '#'
    },
    {
      title: 'Globalización y Derecho Comparado',
      author: 'Dr. Yoelsi Lafita Coba',
      year: '2024',
      category: 'Derecho Comparado',
      abstract: 'Estudio sobre los efectos de la globalización en los sistemas jurídicos contemporáneos.',
      downloadUrl: '#'
    }
  ];

  const books = [
    {
      title: 'Manual de Derecho Constitucional Latinoamericano',
      author: 'Dr. Juan Emigdio García Cuza',
      year: '2023',
      publisher: 'Editorial Jurídica AAEJ',
      isbn: '978-607-123-456-7',
      pages: '456',
      description: 'Obra completa sobre el derecho constitucional en América Latina con análisis comparativo.',
      coverUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      title: 'Tratado de Derecho Internacional Privado',
      author: 'Dr. Pablo Jiménez Serrano',
      year: '2022',
      publisher: 'Editorial Jurídica AAEJ',
      isbn: '978-607-123-457-8',
      pages: '612',
      description: 'Análisis exhaustivo del derecho internacional privado con casos prácticos.',
      coverUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      title: 'Fundamentos de Derechos Humanos',
      author: 'Dr. Elena Polo Maceira',
      year: '2024',
      publisher: 'Editorial Jurídica AAEJ',
      isbn: '978-607-123-458-9',
      pages: '389',
      description: 'Estudio integral de los derechos humanos desde una perspectiva jurídica contemporánea.',
      coverUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      title: 'Criminología y Sistema Penal',
      author: 'Dr. Danelia Cutié Mustelier',
      year: '2023',
      publisher: 'Editorial Jurídica AAEJ',
      isbn: '978-607-123-459-0',
      pages: '523',
      description: 'Obra especializada en criminología moderna y su relación con el sistema penal.',
      coverUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    }
  ];

  const categories = ['Todos', 'Derecho Constitucional', 'Derecho Internacional', 'Derechos Humanos', 'Derecho Penal', 'Derecho Comparado'];

  return (
    <section id="biblioteca" className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Biblioteca Digital</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Acceda a nuestra extensa colección de recursos académicos especializados en ciencias jurídicas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto mt-6"></div>
        </div>

        {}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-200">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar en la biblioteca..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-amber-600" />
                <select className="px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-xl border border-amber-200">
            <button
              onClick={() => setActiveTab('articulos')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'articulos'
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>Artículos</span>
            </button>
          </div>
          <div className="bg-white rounded-full p-2 shadow-xl border border-amber-200 ml-4">
            <button
              onClick={() => setActiveTab('libros')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'libros'
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Libros</span>
            </button>
          </div>
        </div>

        {}
        {activeTab === 'articulos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6 border border-amber-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-amber-700 font-medium mb-1">{article.author}</p>
                  <p className="text-amber-600 text-sm">{article.year}</p>
                </div>
                
                <p className="text-amber-700 text-sm mb-6 line-clamp-3">{article.abstract}</p>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver
                  </button>
                  <button className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors duration-300 flex items-center">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'libros' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden border border-amber-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-amber-200 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-amber-600" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-amber-900 mb-2 line-clamp-2">{book.title}</h3>
                  <p className="text-amber-700 font-medium mb-1">{book.author}</p>
                  <p className="text-amber-600 text-sm mb-3">{book.publisher}, {book.year}</p>
                  
                  <div className="text-xs text-amber-600 mb-4 space-y-1">
                    <p>ISBN: {book.isbn}</p>
                    <p>{book.pages} páginas</p>
                  </div>
                  
                  <p className="text-amber-700 text-sm mb-4 line-clamp-3">{book.description}</p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-3 py-2 rounded-lg font-medium text-sm hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center">
                      <Eye className="h-4 w-4 mr-1" />
                      Ver
                    </button>
                    <button className="bg-amber-100 text-amber-700 px-3 py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors duration-300 flex items-center">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Acceso Completo para Estudiantes
            </h3>
            <p className="text-lg text-amber-100 mb-6">
              Los estudiantes matriculados en nuestros programas tienen acceso completo 
              a toda la biblioteca digital y recursos académicos especializados.
            </p>
            <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-300 shadow-lg">
              Solicitar Acceso Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
