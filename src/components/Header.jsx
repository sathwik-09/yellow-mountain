import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b bg-white sticky top-0 z-50">
      <Link to="/" className="text-xl text-primary">Yellow Mountain</Link>
      <nav className="hidden md:flex gap-4">
        <Link to="/about"><Button className="cursor-pointer" variant="ghost">About</Button></Link>
        <Link to="/services"><Button className="cursor-pointer" variant="ghost">Services</Button></Link>
        <Link to="/contact"><Button className="cursor-pointer" variant="ghost">Contact</Button></Link>
        <Link to="/login"><Button className="cursor-pointer" variant="ghost">Sign in</Button></Link>
        <Link to="/signup"><Button className="cursor-pointer" variant="ghost">Sign up</Button></Link>
      </nav>
    </header>
  );
}
