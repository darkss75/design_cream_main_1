
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="z-10">
          <h1 className="text-2xl font-serif font-semibold">
            <span className="text-gold">DESIGN</span> CREAM
          </h1>
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium hover:text-gold transition-colors ${
                isActive ? "text-gold" : ""
              }`
            }
          >
            회사소개
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-medium hover:text-gold transition-colors ${
                isActive ? "text-gold" : ""
              }`
            }
          >
            서비스안내
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium hover:text-gold transition-colors ${
                isActive ? "text-gold" : ""
              }`
            }
          >
            문의/연락처
          </NavLink>
          <Button
            asChild
            className="bg-gold hover:bg-gold-dark text-white ml-2"
          >
            <NavLink to="/contact">상담 신청</NavLink>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <NavLink
              to="/"
              className="font-medium hover:text-gold"
              onClick={closeMenu}
            >
              홈
            </NavLink>
            <NavLink
              to="/about"
              className="font-medium hover:text-gold"
              onClick={closeMenu}
            >
              회사소개
            </NavLink>
            <NavLink
              to="/services"
              className="font-medium hover:text-gold"
              onClick={closeMenu}
            >
              서비스안내
            </NavLink>
            <NavLink
              to="/contact"
              className="font-medium hover:text-gold"
              onClick={closeMenu}
            >
              문의/연락처
            </NavLink>
            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-white mt-4"
            >
              <NavLink to="/contact" onClick={closeMenu}>
                상담 신청
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
