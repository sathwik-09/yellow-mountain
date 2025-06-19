import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between border-b bg-white sticky top-0 z-50">
      <Link
        to="/"
        className="text-xl text-primary bg-yellow-300 rounded-full px-2 py-1  "
      >
        Yellow Mountain
      </Link>

      <nav className="hidden md:flex gap-4">
        <Link to="/services">
          <Button className="hover:bg-amber-300 cursor-pointer" variant="ghost">
            Services
          </Button>
        </Link>
        <Link to="/partners">
          <Button className="hover:bg-amber-300 cursor-pointer" variant="ghost">
            Partners
          </Button>
        </Link>
        <Link to="/contact">
          <Button className="hover:bg-amber-300 cursor-pointer" variant="ghost">
            Contact
          </Button>
        </Link>
        <Link to="/about">
          <Button className="hover:bg-amber-300 cursor-pointer" variant="ghost">
            About
          </Button>
        </Link>
      </nav>

      <button
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white border-b md:hidden"
        >
          <nav className="flex flex-col p-4 gap-2">
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full justify-start hover:bg-amber-300"
                variant="ghost"
              >
                Services
              </Button>
            </Link>
            <Link to="/partners" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full justify-start hover:bg-amber-300"
                variant="ghost"
              >
                Partners
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full justify-start hover:bg-amber-300"
                variant="ghost"
              >
                Contact
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full justify-start hover:bg-amber-300"
                variant="ghost"
              >
                About
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
