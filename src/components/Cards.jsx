import React, { useState } from "react";
import Slider from "react-slick";
import { FiExternalLink, FiZoomIn, FiX } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa tus imágenes
import Encuestas from "../image/Worfeel/Encuestas.png";
import Generales from "../image/Worfeel/Generales.png";
import Periodo from "../image/Worfeel/periodo.png";
import Catalogo from "../image/Semillarte/Catalogo.png";
import Contacto from "../image/Semillarte/Contacto.png";
import Inicio from "../image/Semillarte/Inicio.png";
import Logo1 from "../image/Worfeel/logo1.png";
import Nosotros from "../image/Semillarte/Nosotros.png";
import Ofrecemos from "../image/Semillarte/Ofrecemos.png";

const Cards = () => {
  const [dat] = useState([
    {
      id: 1,
      title: "Workfeel",
      description: "Software de clima laboral desarrollado localmente.",
      images: [Encuestas, Generales, Logo1, Periodo],
      link: "http://workfeel.netlify.app",
      tags: ["React", "Node.js", "Dashboard"],
    },
    {
      id: 2,
      title: "Semillarte",
      description: "Página web estática desarrollada con React y Bootstrap.",
      images: [Catalogo, Contacto, Inicio, Nosotros, Ofrecemos],
      link: "https://innova-tecnm.netlify.app/",
      tags: ["React", "Bootstrap", "Responsive"],
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Mis <span className="text-purple-600">Proyectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dat.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(124,58,237,0.1)] hover:-translate-y-1"
            >
              {/* Carrusel */}
              <div className="relative">
                <Slider {...sliderSettings}>
                  {item.images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt={`Captura ${index + 1} - ${item.title}`}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => {
                          setSelectedImage(img);
                          setModalIsOpen(true);
                        }}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30"
                      >
                        <FiZoomIn className="text-white text-3xl" />
                      </button>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-gray-600">{item.description}</p>

                <div className="mt-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Ver Proyecto
                    <FiExternalLink className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal con Tailwind puro */}
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-purple-300 p-2"
            >
              <FiX size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[80vh] max-w-full mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
