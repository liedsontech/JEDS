import React from "react";
import { Link } from "react-router-dom";

function Conclusao() {
  return (
    <section className="px-6 py-20 text-center bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-amber-400 mb-6">Parabéns, você concluiu o curso!</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Agora você está pronto para se tornar um operador profissional de retroescavadeira. Use o certificado para
        conquistar novas oportunidades de emprego.
      </p>
      <Link
        to="/home"
        className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all"
      >
        Voltar para a Home
      </Link>
    </section>
  );
}

export default Conclusao;
