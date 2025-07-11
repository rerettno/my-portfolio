import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center font-semibold">
        <Link to="/" className="text-lg text-blush">
          MyProfile
        </Link>
        <div className="space-x-4">
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#portofolio">Portofolio</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
