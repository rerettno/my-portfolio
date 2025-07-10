import Navbar from "../components/Navbar";
import foto from "../assets/rere.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-soft to-blush text-white">
      <Navbar />

      <div className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* 🧠 HEADER */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl font-extrabold mb-2">Retno's Portfolio</h1>
            <h2 className="text-xl text-white/70 mb-6">
              Typography | Photography
            </h2>
            <p className="leading-relaxed max-w-xl text-white/80 mb-6 mx-auto md:mx-0">
              Kenalin, namaku Retno, lulusan S1 Teknik Komputer Universitas Dian
              Nuswantoro.
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

        {/* 🧍 TENTANG SAYA */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kiri */}
            <div className="space-y-10">
              <h2 className="text-4xl font-extrabold text-white">
                Tentang Saya 👩‍💻
              </h2>

              {/* Biodata */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border-l-4 border-white">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    🪪 Biodata
                  </h3>
                  <table className="table-auto w-full text-sm text-white/90">
                    <tbody>
                      <tr className="border-b border-white/30">
                        <td className="font-semibold py-2 pr-4">Nama</td>
                        <td>: Hapsari Retno Puspitaningrum</td>
                      </tr>
                      <tr className="border-b border-white/30">
                        <td className="font-semibold py-2 pr-4">
                          Tanggal Lahir
                        </td>
                        <td>: 11 Maret 2004</td>
                      </tr>
                      <tr className="border-b border-white/30">
                        <td className="font-semibold py-2 pr-4">Email</td>
                        <td>: hapsari.eno003@gmail.com</td>
                      </tr>
                      <tr className="border-b border-white/30">
                        <td className="font-semibold py-2 pr-4">No HP</td>
                        <td>: +62-853-2805-1707</td>
                      </tr>
                      <tr>
                        <td className="font-semibold py-2 pr-4">Domisili</td>
                        <td>: Indonesia</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-6 text-2xl text-white">
                <a
                  href="https://github.com/wafi-dev"
                  target="_blank"
                  className="hover:scale-125 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/wafi"
                  target="_blank"
                  className="hover:scale-125 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/wfi_faa"
                  target="_blank"
                  className="hover:scale-125 transition"
                >
                  <FaInstagram />
                </a>
              </div>

              {/* CV */}
              <div>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="inline-block px-6 py-3 bg-white/10 border border-white text-white font-semibold rounded-full hover:bg-white/20 transition"
                >
                  📄 Download CV
                </a>
              </div>
            </div>

            {/* Kanan */}
            <div className="space-y-10">
              <p className="text-white/90 text-base leading-relaxed">
                Saya adalah Front-End Developer yang antusias dengan desain UI
                modern dan pengembangan web berbasis React & Tailwind CSS. Saya
                menyukai pengalaman pengguna yang bersih dan cepat ✨.
              </p>

              {/* Skill */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold text-white mb-6">
                  ⚙️ Keahlian
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <SkillBar
                    title="HTML & CSS"
                    value={90}
                    color="text-primary"
                  />
                  <SkillBar
                    title="Tailwind CSS"
                    value={80}
                    color="text-blush"
                  />
                  <SkillBar
                    title="React / Next.js"
                    value={75}
                    color="text-blue-500"
                  />
                  <SkillBar
                    title="PHP (Native)"
                    value={50}
                    color="text-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow border-l-4 border-white">
              <h3 className="text-xl font-semibold text-white mb-3">
                🎓 Pendidikan
              </h3>
              <ul className="list-disc list-inside text-sm text-white/90 space-y-1">
                <li>Universitas Dian Nuswantoro – S1 Teknik Informatika</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🎨 PORTFOLIO */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-white text-center mb-4">
            🎨 Portfolio Project
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-xl mx-auto">
            Beberapa hasil desainku selama lebih dari satu tahun berkarya di
            dunia desain grafis.
          </p>

          <div className="space-y-8">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="flex flex-col md:flex-row items-start gap-6 bg-white/10 backdrop-blur-sm p-5 rounded-2xl hover:shadow-lg transition text-white"
              >
                <div className="w-full md:w-1/3">
                  <div className="aspect-[4/3] bg-white/10 rounded-xl flex items-center justify-center text-white/70 text-lg font-semibold">
                    Gambar {id}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    {
                      [
                        "Desain Social Media",
                        "UI Landing Page",
                        "Poster Webinar",
                        "Logo Brand Fashion",
                      ][id - 1]
                    }
                  </h3>
                  <p className="text-sm text-white/80">
                    {
                      [
                        "Desain branding feeds Instagram untuk UMKM lokal.",
                        "Mockup UI/UX landing page untuk startup edukasi.",
                        "Poster promosi untuk webinar nasional.",
                        "Logo minimalist untuk brand fashion lokal.",
                      ][id - 1]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
