import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between border-b bg-white sticky top-0 z-50">
      <Link
        to="/"
        className="text-xl text-primary bg-yellow-300 rounded-full px-2 py-1"
      >
        Yellow Mountain
      </Link>

      <nav className="hidden md:flex gap-4">
        {["services", "partners", "contact", "about", "career"].map((item) => (
          <Link key={item} to={`/${item}`}>
            <Button variant="ghost" className="hover:bg-amber-300 cursor-pointer">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          </Link>
        ))}
      </nav>

      <div className="md:hidden relative z-50">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1 p-2"
        >
          <div className="w-6 h-0.5 bg-black" />
          <div className="w-6 h-0.5 bg-black" />
          <div className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-md md:hidden z-40">
          <nav className="flex flex-col p-4 gap-2">
            {["services", "partners", "contact", "about", "career"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button
                  className="w-full justify-start hover:bg-amber-300"
                  variant="ghost"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
