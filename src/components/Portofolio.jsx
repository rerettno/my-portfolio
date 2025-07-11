import React from "react";
import Slider from "react-slick";
import mockImage from "../assets/mockup.jpg";

const portofolioProjects = [
  {
    title: "Website E-Catalog Covaposh",
    desc: `Desain katalog online yang elegan dan interaktif untuk brand fashion Covaposh. 
    Tampilan responsif dan navigasi smooth menjadikan katalog mudah diakses di berbagai device.`,
    image: mockImage,
  },
  {
    title: "BK Hospital",
    desc: `Mockup UI sistem booking rumah sakit dengan tampilan modern dan mudah digunakan oleh pasien dan staf. 
    Proyek ini mengintegrasikan desain bersih dengan elemen interaktif.`,
    image: mockImage,
  },
  {
    title: "PING! (Realtime Chat App)",
    desc: `Aplikasi diskusi realtime berbasis web untuk kolaborasi tim dan organisasi. 
    Dirancang dengan UI minimalis, disertai fitur dark mode dan sistem tag diskusi.`,
    image: mockImage,
  },
  {
    title: "Peduli Mangrove",
    desc: `Landing page kampanye pelestarian lingkungan berbasis mangrove. 
    Menampilkan visual hero kuat dan CTA jelas untuk meningkatkan awareness masyarakat.`,
    image: mockImage,
  },
];

const Portofolio = () => {
  return (
    <section id="portfolio" className="mb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-white text-center mb-4">
        🎨 Portofolio Project
      </h2>
      <p className="text-center text-white/80 mb-12 max-w-xl mx-auto">
        Beberapa hasil desainku selama lebih dari satu tahun berkarya di dunia
        desain grafis.
      </p>

      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        autoplay={true}
        autoplaySpeed={6000}
      >
        {portofolioProjects.map((project, i) => (
          <div key={i} className="w-full px-2">
            <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden md:h-[400px]">
              {/* Left image block */}
              <div className="w-full md:w-1/2 h-64 md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right text block */}
              <div className="w-full md:w-1/2 p-6 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {project.desc}
                </p>
                <button className="self-start px-6 py-2 border border-white rounded-full hover:bg-white/20 transition">
                  View Project →
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Portofolio;
