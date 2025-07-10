import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Kiri: Info */}
        <div className="text-center md:text-left space-y-1">
          <h4 className="text-xl font-semibold">Hapsari Retno P.</h4>
          <p className="text-sm text-white/70">
            Front-End Developer & Graphic Designer
          </p>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Tengah: Socials */}
        <div className="flex gap-5 text-2xl text-white">
          <a
            href="https://github.com/wafi-dev"
            target="_blank"
            className="hover:text-blush transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/wafi"
            target="_blank"
            className="hover:text-blush transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/wfi_faa"
            target="_blank"
            className="hover:text-blush transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Kanan: Kontak */}
        <div className="text-center md:text-right text-sm text-white/70">
          <p>Email: hapsari.eno003@gmail.com</p>
          <p>Phone: +62 853-2805-1707</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
