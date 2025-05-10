import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

function Cursos() {
  const videos = [
    {
      src: "https://www.youtube.com/embed/ph05J69j-EE",
      desc: "A NR 11 trata do transporte, movimentação, armazenagem e manuseio de materiais, com foco em segurança.",
    },
    {
      src: "https://www.youtube.com/embed/qKJt6f2crt0",
      desc: "A NR 12 define requisitos de segurança no uso de máquinas e equipamentos no ambiente de trabalho.",
    },
    {
      src: "https://www.youtube.com/embed/EGQ4nm4Fpvs",
      desc: "A NR 6 fala sobre os Equipamentos de Proteção Individual (EPIs) e a responsabilidade de seu uso.",
    },
    {
      src: "https://www.youtube.com/embed/_KSNyuKs4PE",
      desc: "A NR 18 aborda segurança na construção civil, com foco em condições de trabalho e prevenção de riscos.",
    },
    {
      src: "https://www.youtube.com/embed/q7nWYcIdCYg",
      desc: "A NR 1 trata de disposições gerais e da implementação do PGR (Programa de Gerenciamento de Riscos).",
    },
    {
      src: "https://www.youtube.com/embed/UoApZl_hyzk",
      desc: "A NR 7 trata do Programa de Controle Médico de Saúde Ocupacional (PCMSO), promovendo a saúde dos trabalhadores.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const nextVideo = () => {
    if (current === videos.length - 1) {
      setIsModalOpen(true); // Exibe o modal quando o último vídeo terminar
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="px-6 py-16 text-center bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-amber-400 mb-10">Cursos NR - Aulas e Demonstrações</h2>
      <div className="max-w-4xl mx-auto relative">
        <div id="video-container" className="rounded-xl overflow-hidden">
          <iframe
            id="video-frame"
            className="w-full h-[300px] md:h-[500px]"
            src={videos[current].src}
            title="Aula NR"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <p id="video-description" className="mt-4 text-gray-300">
          {videos[current].desc}
        </p>

        <div className="mt-6 flex justify-between items-center mb-[66px]">
          <button
            onClick={prevVideo}
            disabled={current === 0} // Desabilita o botão de "Anterior" na primeira aula
            className={`bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105 ${current === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span></span>
          </button>

          <span id="video-counter" className="text-sm text-gray-400">
            Aula {current + 1} de {videos.length}
          </span>

          <button
            onClick={nextVideo}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105"
          >
            {current === videos.length - 1 ? (
              <span>Finalizar</span> // Muda para "Finalizar" no último vídeo
            ) : (
              <>
                <span></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Modal de Conclusão */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg text-center text-white max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">Parabéns!</h2>
            <p className="text-lg mb-6">
              Você concluiu o curso! Agende suas aulas teóricas para continuar seu aprendizado.
            </p>
            <a
              href="https://wa.me/5531999999999?text=Olá%20terminei%20o%20curso%20te%C3%B3rico%20e%20desejo%20fazer%20as%20aulas%20pr%C3%A1ticas."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full"
            >
              <FaWhatsapp className="mr-2 text-2xl" />
              Agendar Aulas
            </a>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cursos;
