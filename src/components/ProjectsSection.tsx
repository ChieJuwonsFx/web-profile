import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';
import BlindSonic from '../assets/BlindSonic.png';
import TembakauKu from '../assets/TembakauKu.png';
import JournoTechSpot from '../assets/JournoTechSpot.png';
import Prelovedia from '../assets/Prelovedia.png';
import TourHomie from '../assets/TourHomie.png';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Blind Sonic',
      description: 'Blind Sonic adalah aplikasi game interaktif untuk penyandang tunanetra yang memanfaatkan teknologi audio. Pengguna dapat menjelajahi dunia virtual melalui suara dan kontrol sederhana menggunakan earphone, keyboard braille, dan gamepad joystick, meningkatkan keterampilan kognitif dan motorik.',
      image: BlindSonic,
    },
    {
      id: 2,
      title: 'TembakauKu',
      description: 'TembakauKu adalah aplikasi yang dirancang untuk membantu petani tembakau, terutama di daerah terpencil, dalam mengakses informasi tentang pupuk, benih, pasar, dan teknologi yang bertujuan memberdayakan petani dengan menyediakan akses mudah ke sumber daya yang dibutuhkan.',
      image: TembakauKu,
    },
    {
      id: 3,
      title: 'JournoTechSpot',
      description: 'JournoTechSpot adalah sebuah platform inovatif yang menggabungkan kecerdasan buatan (AI) dengan jurnalisme untuk menciptakan ekosistem berita yang lebih cerdas, efisien, dan interaktif. Platform ini dapat mempercepat pengumpulan informasi dan meningkatkan akurasi.',
      image: JournoTechSpot,
    },
    {
      id: 4,
      title: 'Prelovedia',
      description: 'Prelovedia adalah platform online berbasis website yang didedikasikan untuk jual beli barang bekas berkualitas. Pengguna dapat dengan mudah dan aman menjual serta membeli berbagai jenis barang preloved (pre-owned atau second-hand) melalui platform ini.',
      image: Prelovedia,
    },
    {
      id: 5,
      title: 'Tour Homie',
      description: 'TourHomie adalah aplikasi yang membantu wisatawan asing menemukan destinasi wisata sesuai preferensi mereka, menyediakan informasi tentang tempat wisata, kuliner, budaya lokal, serta akomodasi. Aplikasi ini juga memfasilitasi pemesanan tiket dan akomodasi.',
      image: TourHomie,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll('#slider-item .item');
    
    function loadShow() {
      let stt = 0;
      items[activeIndex].setAttribute('style', 'transform: none; z-index: 1; filter: none; opacity: 1;');
      
      for (let i = activeIndex + 1; i < items.length; i++) {
        stt++;
        items[i].setAttribute(
          'style',
          `transform: translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg);
           z-index: -${stt};
           filter: blur(5px);
           opacity: ${stt > 2 ? 0 : 0.6};`
        );
      }

      stt = 0;
      for (let i = activeIndex - 1; i >= 0; i--) {
        stt++;
        items[i].setAttribute(
          'style',
          `transform: translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg);
           z-index: -${stt};
           filter: blur(5px);
           opacity: ${stt > 2 ? 0 : 0.6};`
        );
      }
    }

    loadShow();
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1 < projects.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : projects.length - 1));
  };

  return (
    <section id="projects" className="py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-primary">Explore my projects, they might surprise you!</p>
      </div>
      <div id="slider-item" className="slider">
        <div className="container mx-auto md:px-10 max-w-screen-xl slider relative h-[530px] overflow-hidden flex items-center justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="item absolute w-[330px] sm:w-[330px] md:w-[370px] lg:w-[400px] h-[430px] text-justify bg-gray-800 rounded-lg shadow-md transition-all flex items-center justify-center"
            >
              <div className="bg-gray-800 rounded-lg shadow-2xl h-[455px] mt-12 w-[300px] sm:w-[290px] md:w-[330px] lg:w-[370px]">
                <img className="rounded-t-lg w-full object-cover" src={project.image} alt={project.title} />
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold text-white text-left">{project.title}</h5>
                  <p className="mb-3 text-sm font-normal text-gray-400 text-left">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
          <button
            id="prev"
            className="absolute top-1/2 z-50 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300 sm:left-8 ring-2 ring-white"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            id="next"
            className="absolute top-1/2 z-50 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300 sm:right-8 ring-2 ring-white"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;