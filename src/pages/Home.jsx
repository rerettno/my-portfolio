import Navbar from "../components/Navbar";
import foto from "../assets/rere.png";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";
import Portofolio from "../components/Portofolio";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-soft to-blush text-white">
      <Navbar />

      <div id="header" className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* 🧠 HEADER */}
        <section
          className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20"
          data-aos="fade-up"
        >
          <div
            className="text-center md:text-left flex-1"
            data-aos="fade-right"
          >
            <h1 className="text-5xl font-extrabold mb-2">Retno's Profile</h1>
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

          <div
            className="relative w-[280px] h-[380px] md:w-[420px] md:h-[580px] bg-gradient-to-tl  from-soft to-blush rounded-t-full rounded-bl-full overflow-hidden shadow-2xl"
            data-aos="fade-left"
          >
            <img
              src={foto}
              alt="Foto Profil"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 🧍 TENTANG SAYA */}
        <section
          id="about"
          className="mb-20 text-white px-6 md:px-12 max-w-6xl mx-auto text-center"
          data-aos="fade-up"
        >
          <div className="mb-10">
            <div className="text-3xl mb-2">ℹ️</div>
            <h2 className="text-4xl font-bold mb-4">Who Am I</h2>
            <p className="text-white/80 max-w-4xl mx-auto">
              Lulusan S1 Teknik Informatika dengan ketertarikan pada web
              development, khususnya di bidang front-end. Selama masa studi,
              telah mengerjakan berbagai proyek web menggunakan beragam
              teknologi dan mulai fokus mengembangkan kemampuan di bidang ini.
              Terbiasa bekerja secara mandiri maupun dalam tim, serta aktif
              dalam kegiatan organisasi dan program magang yang mendukung
              pengembangan keterampilan teknis dan komunikasi. Saat ini sedang
              fokus mengasah kemampuan dan siap berkontribusi di lingkungan
              profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Personal Details */}
            <div
              className="bg-white/5 p-6 rounded-xl shadow border border-white/10"
              data-aos="fade-right"
            >
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
            <div
              className="bg-white/5 p-6 rounded-xl shadow border border-white/10"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                🎯 My Interests
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center text-sm">
                {[
                  { label: "Photography", icon: "📷" },
                  { label: "Music", icon: "🎵" },
                  { label: "Travel", icon: "✈️" },
                  { label: "UI/UX", icon: "💻" },
                  { label: "Crafting", icon: "🧶" },
                  { label: "Flowers", icon: "🌸" },
                  { label: "Make Up", icon: "💄" },
                  { label: "Journaling", icon: "📔" },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 ease-in-out shadow-sm"
                    data-aos="zoom-in"
                  >
                    <div className="text-2xl">{icon}</div>
                    <div className="text-white">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CV Download */}
          <div className="mt-10" data-aos="zoom-in">
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
        <section
          className="mb-20 text-white px-6 md:px-12 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <div className="text-center mb-12">
            <div className="text-3xl mb-2">⚙️</div>
            <h2 className="text-4xl font-bold mb-4">Skill & Experience</h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Berikut adalah beberapa skill utama saya dalam pengembangan dan
              komunikasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className="bg-white/5 p-6 rounded-xl shadow border border-white/10"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-6">
                💻 Technical Skills
              </h3>
              <div className="space-y-6">
                <SkillBar title="HTML & CSS" value={85} />
                <SkillBar title="Tailwind CSS" value={85} />
                <SkillBar title="React / Next.js" value={70} />
                <SkillBar title="PHP (Native)" value={40} />
              </div>
            </div>

            <div
              className="bg-white/5 p-6 rounded-xl shadow border border-white/10"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-6">
                🧠 Professional Skills
              </h3>
              <div className="space-y-6">
                <SkillBar title="Communication" value={70} />
                <SkillBar title="Teamwork" value={90} />
                <SkillBar title="Creativity" value={80} />
                <SkillBar title="Problem Solving" value={80} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 🎨 PORTFOLIO */}
      <div data-aos="fade-up">
        <Portofolio />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
