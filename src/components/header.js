import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo4.png";

function Header() {
  return (
    <header className="bg-gray-900 p-4 shadow-md flex justify-between items-center">
      <img src={logo} alt="Logo da Empresa" className="h-16" />
      <nav className="flex gap-4 text-sm">
        <Link to="/JEDS" className="text-white hover:text-amber-400 transition">
          Home
        </Link>
        <Link to="/JEDS/cursos" className="text-white hover:text-amber-400 transition">
          Cursos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
