import Navbar from "../components/Navbar";
import foto from "../assets/rere.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SkillBar from "../components/SkillBar"; // pastikan kamu buat komponen SkillBar ya

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-soft to-blush text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* 🧠 HEADER SECTION */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          {/* 📝 TEKS KIRI */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
              Creative Designer
            </h1>
            <h2 className="text-xl text-white/70 mb-6">
              Typography | Photography
            </h2>
            <p className="leading-relaxed max-w-xl text-white/80 mb-6 mx-auto md:mx-0">
              Kenalin, namaku wafi panggil aja klo lagi butuh:v, lahir di kota
              Perwira Jawa Tengah, belajar di kota Pelajar, sekarang lanjut ke
              kota Satria.
            </p>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 font-medium hover:scale-105 transition-all">
              Read more →
            </button>
          </div>

          {/* 🖼️ GAMBAR KANAN */}
          <div className="relative w-[280px] h-[380px] md:w-[420px] md:h-[580px] bg-gradient-to-tl from-pink-500 to-purple-500 rounded-t-full rounded-bl-full overflow-hidden shadow-2xl">
            <img
              src={foto}
              alt="Foto Profil"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-semibold whitespace-nowrap max-w-fit">
              Hapsari Retno Puspitaningrum
            </div>
          </div>
        </section>

        {/* 🧍 SECTION: TENTANG SAYA */}
        <section className="bg-soft text-gray-800 rounded-xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-10">
            Tentang Saya
          </h2>

          {/* Deskripsi */}
          <p className="text-center mb-8 leading-relaxed max-w-3xl mx-auto">
            Saya adalah seorang Web Developer dengan minat kuat di bidang
            Front-End Development. Saya suka menciptakan antarmuka pengguna yang
            responsif, bersih, dan mudah digunakan. Saat ini saya fokus
            memperdalam React.js, Tailwind CSS, dan Next.js.
          </p>

          <div className="flex flex-col md:flex-row gap-10">
            {/* KIRI: Biodata & Pendidikan */}
            <div className="flex-1 space-y-6">
              {/* Biodata */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Biodata
                </h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <strong>Nama:</strong> Wafi Fadlurrahman
                  </li>
                  <li>
                    <strong>Tanggal Lahir:</strong> 6 Juni 200x
                  </li>
                  <li>
                    <strong>Email:</strong> wafifadhlurrahman06@gmail.com
                  </li>
                  <li>
                    <strong>No HP:</strong> 08871832601
                  </li>
                  <li>
                    <strong>Residence:</strong> Purwokerto, Indonesia
                  </li>
                </ul>
              </div>

              {/* Pendidikan */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Pendidikan
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Universitas XYZ – Sistem Informasi</li>
                </ul>
              </div>
            </div>

            {/* KANAN: Skill + Sosmed + CV */}
            <div className="flex-1 space-y-6">
              {/* Front-End Skills */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Skill Front-End
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SkillBar
                    title="HTML & CSS"
                    value={90}
                    color="border-primary"
                  />
                  <SkillBar
                    title="Tailwind CSS"
                    value={85}
                    color="border-blush"
                  />
                  <SkillBar
                    title="JavaScript (React.js)"
                    value={80}
                    color="border-blue-500"
                  />
                  <SkillBar
                    title="Next.js"
                    value={70}
                    color="border-purple-500"
                  />
                  <SkillBar title="UI Design" value={75} color="border-soft" />
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Soft Skill
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Komunikasi Tim</li>
                  <li>Manajemen Waktu</li>
                  <li>Kolaborasi Project</li>
                  <li>Problem Solving</li>
                  <li>Adaptasi Cepat</li>
                </ul>
              </div>

              {/* Sosmed Icon */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Sosial Media
                </h3>
                <div className="flex gap-4 text-2xl text-primary">
                  <a href="https://github.com/wafi-dev" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/wafi" target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href="https://instagram.com/wfi_faa" target="_blank">
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* CV Download */}
              <div>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="inline-block mt-2 px-5 py-2 bg-blush text-primary rounded-full font-semibold hover:scale-105 transition-all"
                >
                  Download CV 📄
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-2">Some of My Design Results</h3>
          <p className="text-gray-600 mb-6 max-w-lg">
            Beberapa hasil desain ku, selama kurang lebih satu tahun di dunia
            desain grafis.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded">
              Gambar 1
            </div>
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded">
              Gambar 2
            </div>
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded">
              Gambar 3
            </div>
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded">
              Gambar 4
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-2">Expertise</h3>
          <p className="text-gray-600 mb-4">Beberapa aplikasi yang dipakai.</p>
          <div className="flex gap-4">
            <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">
              P
            </div>
            <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">
              Canva
            </div>
            <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">
              Lr
            </div>
            <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">
              IP
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">Contact</h3>
          <ul className="text-gray-700 space-y-1">
            <li>WhatsApp: 08871832601</li>
            <li>Instagram: @wfi_faa</li>
            <li>Twitter: @wfiili6</li>
            <li>Email: wafifadhlurrahman06@gmail.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
