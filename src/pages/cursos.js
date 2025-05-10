import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaWhatsapp } from "react-icons/fa";

function Cursos() {
  const videos = [
    {
      src: "https://www.youtube.com/watch?v=ph05J69j-EE",
      desc: "A NR 11 trata do transporte, movimentação, armazenagem e manuseio de materiais, com foco em segurança.",
    },
    {
      src: "https://www.youtube.com/watch?v=qKJt6f2crt0",
      desc: "A NR 12 define requisitos de segurança no uso de máquinas e equipamentos no ambiente de trabalho.",
    },
    {
      src: "https://www.youtube.com/watch?v=EGQ4nm4Fpvs",
      desc: "A NR 6 fala sobre os Equipamentos de Proteção Individual (EPIs) e a responsabilidade de seu uso.",
    },
    {
      src: "https://www.youtube.com/watch?v=_KSNyuKs4PE",
      desc: "A NR 18 aborda segurança na construção civil, com foco em condições de trabalho e prevenção de riscos.",
    },
    {
      src: "https://www.youtube.com/watch?v=q7nWYcIdCYg",
      desc: "A NR 1 trata de disposições gerais e da implementação do PGR (Programa de Gerenciamento de Riscos).",
    },
    {
      src: "https://www.youtube.com/watch?v=UoApZl_hyzk",
      desc: "A NR 7 trata do Programa de Controle Médico de Saúde Ocupacional (PCMSO), promovendo a saúde dos trabalhadores.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playedPercent, setPlayedPercent] = useState(0);

  const handleProgress = (state) => {
    setPlayedPercent(state.played);
  };

  const nextVideo = () => {
    if (current === videos.length - 1) {
      setIsModalOpen(true);
    } else {
      setCurrent((prev) => prev + 1);
      setPlayedPercent(0);
    }
  };

  return (
    <section className="px-6 py-16 text-center bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-amber-400 mb-10">Cursos NR - Aulas e Demonstrações</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="rounded-xl overflow-hidden">
          <ReactPlayer
            url={videos[current].src}
            width="100%"
            height="500px"
            controls
            onProgress={handleProgress}
          />
        </div>

        <p className="mt-4 text-gray-300">{videos[current].desc}</p>

        <div className="mt-6 flex justify-between items-center mb-[66px]">
          <button
            onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
            disabled={current === 0}
            className={`bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105 ${
              current === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Anterior
          </button>

          <span className="text-sm text-gray-400">
            Aula {current + 1} de {videos.length}
          </span>

          <div
            title={
              playedPercent < 0.8
                ? "Você precisa assistir pelo menos 80% da aula para avançar"
                : ""
            }
          >
            <button
              onClick={nextVideo}
              disabled={playedPercent < 0.8}
              className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105 ${
                playedPercent < 0.8
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-amber-500 hover:bg-amber-600 text-white"
              }`}
            >
              {current === videos.length - 1 ? "Finalizar" : "Próximo"}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg text-center text-white max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">Parabéns!</h2>
            <p className="text-lg mb-6">
              Você concluiu o curso! Agende suas aulas teóricas para continuar seu aprendizado.
            </p>
            <a
              href="https://wa.me/5531999999999?text=Olá%20terminei%20o%20curso%20teórico%20e%20desejo%20fazer%20as%20aulas%20práticas."
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
