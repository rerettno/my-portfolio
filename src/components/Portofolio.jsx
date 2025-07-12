import React from "react";
import Slider from "react-slick";
import tailwindLogo from "../assets/logos/tailwindcss.svg";
import figmaLogo from "../assets/logos/figma.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import nextjsLogo from "../assets/logos/Nextjs.svg";
import laravelLogo from "../assets/logos/Laravel.svg";
import phpLogo from "../assets/logos/PHP.svg";
import bkHospitalProject from "../assets/projects/BKHospital.png";
import pingProject from "../assets/projects/Ping!.png";
import covaposhProject from "../assets/projects/Covaposh.png";
import peduliMangroveProject from "../assets/projects/PeduliMangrove.png";

const portofolioProjects = [
  {
    type: "Project Pribadi - Penelitian",
    title: "E-Catalog Covaposh",
    desc: `Sebuah katalog berbasis web yang terintegrasi dengan fitur chatbot untuk mempermudah layanan penjualan jasa buket secara online.`,
    image: covaposhProject,
    tools: [nextjsLogo, tailwindLogo, figmaLogo],
    link: "https://github.com/rerettno/covaposh",
    jurnal:
      "https://e-journal.hamzanwadi.ac.id/index.php/edumatic/article/view/29435",
  },
  {
    type: "Project Pribadi - Tugas",
    title: "BK Hospital",
    desc: `Aplikasi manajemen layanan rumah sakit yang dirancang untuk membantu pengelolaan data pasien, jadwal dokter, dan proses administrasi medis.`,
    image: bkHospitalProject,
    tools: [phpLogo, tailwindLogo, javascriptLogo],
    link: "https://github.com/rerettno/website-BKHospital",
  },
  {
    type: "Project Kelompok",
    title: "PING!",
    desc: `Aplikasi pengingat izin atas pelanggaran absensi kehadiran yang memungkinkan pengguna untuk melacak dan merekap data ketidakhadiran secara efisien.`,
    image: pingProject,
    tools: [laravelLogo, cssLogo, figmaLogo],
    link: "https://www.canva.com/design/DAGsZ71tIWk/...",
  },
  {
    type: "Project Kelompok",
    title: "Peduli Mangrove",
    desc: `Platform donasi online yang bertujuan meningkatkan partisipasi masyarakat dalam pelestarian mangrove, dengan sistem transparan dan efisien dalam penggunaan dana.`,
    image: peduliMangroveProject,
    tools: [htmlLogo, cssLogo, javascriptLogo, figmaLogo],
    link: "https://www.canva.com/design/DAGsZ9dM_iw/...",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio" className="mb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-white text-center mb-4">
        🎨 Portofolio Project
      </h2>
      <p className="text-center text-white/80 mb-12 max-w-xl mx-auto">
        Beberapa hasil project yang telah saya kerjakan.
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
          <div key={i} className="w-full px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden md:h-[400px] p-4 md:p-8">
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
                {/* Type project */}
                <p className="text-sm  tracking-wider text-white mb-1">
                  {project.type}
                </p>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/80 text-md leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex gap-4 items-center mb-6">
                  {project.tools.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt="tool logo"
                      className="w-10 h-10 object-contain hover:scale-110 transition"
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-white rounded-full hover:bg-white/20 transition"
                  >
                    View Project →
                  </a>

                  {project.jurnal && (
                    <a
                      href={project.jurnal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 border border-white rounded-full hover:bg-white/20 transition"
                    >
                      View Jurnal 📄
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Portofolio;
