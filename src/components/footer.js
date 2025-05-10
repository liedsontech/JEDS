import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} JEDS Construção e Locação. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
