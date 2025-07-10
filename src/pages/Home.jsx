import Navbar from "../components/Navbar";
import foto from "../assets/rere.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";

import Slider from "react-slick";
import mockImage from "../assets/mockup.jpg"; // Ganti dengan gambarmu sendiri

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-soft to-blush text-white">
      <Navbar />

      <div className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* 🧠 HEADER */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl font-extrabold mb-2">Retno's Profil</h1>
            <h2 className="text-xl text-white/70 mb-6">
              Fresh Graduate | Front-End Developer
            </h2>
            <p className="leading-relaxed max-w-xl text-white/80 mb-6 mx-auto md:mx-0">
              Hai! Aku Retno, fresh graduate dari S1 Teknik Informatika
              Universitas Dian Nuswantoro. Sekarang aku fokus ngembangin skill
              sebagai front-end developer di bidang web development.
            </p>
            <button className="px-6 py-2 rounded-full bg-white/10 border border-white font-medium hover:bg-white/20 transition">
              Read more →
            </button>
          </div>

          <div className="relative w-[280px] h-[380px] md:w-[420px] md:h-[580px] bg-gradient-to-tl from-pink-500 to-purple-500 rounded-t-full rounded-bl-full overflow-hidden shadow-2xl">
            <img
              src={foto}
              alt="Foto Profil"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-semibold">
              Hapsari Retno Puspitaningrum
            </div>
          </div>
        </section>
        {/* 🧍 TENTANG SAYA (REMAKE STYLE) */}
        <section className="mb-20 text-white px-6 md:px-12 max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="mb-10">
            <div className="text-3xl mb-2">ℹ️</div>
            <h2 className="text-4xl font-bold mb-4">Who Am I</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Hai! Aku Retno, fresh graduate dari S1 Teknik Informatika
              Universitas Dian Nuswantoro. Sekarang aku fokus ngembangin skill
              sebagai front-end developer di bidang web development.
            </p>
          </div>

          {/* Grid Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Personal Details */}
            <div className="bg-white/5 p-6 rounded-xl shadow border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white">
                📄 Personal Details
              </h3>
              <ul className="text-sm space-y-3 text-white/90">
                <li>
                  <span className="font-semibold w-32 inline-block">Nama</span>:
                  Hapsari Retno Puspitaningrum
                </li>
                <li>
                  <span className="font-semibold w-32 inline-block">
                    Tanggal Lahir
                  </span>
                  : 11 Maret 2004
                </li>
                <li>
                  <span className="font-semibold w-32 inline-block">Email</span>
                  : hapsari.eno003@gmail.com
                </li>
                <li>
                  <span className="font-semibold w-32 inline-block">No HP</span>
                  : +62-853-2805-1707
                </li>
                <li>
                  <span className="font-semibold w-32 inline-block">
                    Domisili
                  </span>
                  : Semarang, Indonesia
                </li>
                <li>
                  <span className="font-semibold w-32 inline-block">
                    Status
                  </span>
                  :{" "}
                  <span className="px-2 py-1 rounded bg-teal-500 text-xs font-bold text-black">
                    FRESH GRADUATE
                  </span>
                </li>
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-white/5 p-6 rounded-xl shadow border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white">
                🎯 My Interests
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center text-sm">
                {[
                  { label: "Photography", icon: "🎮" },
                  { label: "Music", icon: "🎵" },
                  { label: "Travel", icon: "✈️" },
                  { label: "UI/UX", icon: "💻" },
                  { label: "", icon: "🎬" },
                  { label: "Coffee", icon: "☕" },
                  { label: "Cook", icon: "🚗" },
                  { label: "Journaling", icon: "📚" },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition"
                  >
                    <div className="text-2xl">{icon}</div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CV Download */}
          <div className="mt-10">
            <a
              href="/cvRetno.pdf"
              download
              className="px-6 py-2 bg-white/10 border border-white rounded-full hover:bg-white/20 transition"
            >
              📄 Download CV
            </a>
          </div>
        </section>
        {/* ⚙️ SKILL & EXPERIENCE */}
        <section className="mb-20 text-white px-6 md:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-3xl mb-2">⚙️</div>
            <h2 className="text-4xl font-bold mb-4">Skill & Experience</h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Berikut adalah beberapa skill utama saya dalam pengembangan dan
              komunikasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <div className="bg-white/5 p-6 rounded-xl shadow border border-white/10">
              <h3 className="text-xl font-semibold text-teal-400 mb-6">
                💻 Technical Skills
              </h3>
              <div className="space-y-6">
                <SkillBar title="HTML & CSS" value={90} />
                <SkillBar title="Tailwind CSS" value={85} />
                <SkillBar title="React / Next.js" value={75} />
                <SkillBar title="PHP (Native)" value={50} />
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-white/5 p-6 rounded-xl shadow border border-white/10">
              <h3 className="text-xl font-semibold text-teal-400 mb-6">
                🧠 Professional Skills
              </h3>
              <div className="space-y-6">
                <SkillBar title="Communication" value={85} />
                <SkillBar title="Teamwork" value={90} />
                <SkillBar title="Creativity" value={80} />
                <SkillBar title="Problem Solving" value={70} />
              </div>
            </div>
          </div>
        </section>

        {/* 🎨 PORTFOLIO */}
        <section className="mb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-4">
            🎨 Portfolio Project
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-xl mx-auto">
            Beberapa hasil desainku selama lebih dari satu tahun berkarya di
            dunia desain grafis.
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
            {[
              {
                title: "Website E-Catalog Covaposh",
                desc: `Desain katalog online yang elegan dan interaktif untuk brand fashion Covaposh. 
        Tampilan responsif dan navigasi smooth menjadikan katalog mudah diakses di berbagai device.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim optio laborum minus tempore!`,
                image: mockImage,
              },
              {
                title: "BK Hospital",
                desc: `Mockup UI sistem booking rumah sakit dengan tampilan modern dan mudah digunakan oleh pasien dan staf. 
        Proyek ini mengintegrasikan desain bersih dengan elemen interaktif.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio dolore sed!`,
                image: mockImage,
              },
              {
                title: "PING! (Realtime Chat App)",
                desc: `Aplikasi diskusi realtime berbasis web untuk kolaborasi tim dan organisasi. 
        Dirancang dengan UI minimalis, disertai fitur dark mode dan sistem tag diskusi. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laudantium molestias!`,
                image: mockImage,
              },
              {
                title: "Peduli Mangrove",
                desc: `Landing page kampanye pelestarian lingkungan berbasis mangrove. 
        Menampilkan visual hero kuat dan CTA jelas untuk meningkatkan awareness masyarakat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus.`,
                image: mockImage,
              },
            ].map((project, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-10 items-center bg-white/5 p-6 md:p-10 rounded-2xl"
              >
                {/* Gambar di kiri */}
                <div className="w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-xl object-cover w-full h-full"
                  />
                </div>

                {/* Teks di kanan */}
                <div className="text-white space-y-4 text-left">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-justify">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
