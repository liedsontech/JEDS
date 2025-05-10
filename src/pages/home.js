import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para envio do formulário (pode ser integrado com uma API ou serviço de e-mail)
    console.log("Formulário enviado com os seguintes dados:", formData);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Torne-se Operador Profissional de Retroescavadeira
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Curso completo com prática, certificado e apoio para inserção no mercado de trabalho.
        </p>
        <Link
          to="#contato"
          className="inline-block text-white bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all"
        >
          Quero me inscrever
        </Link>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-20 bg-gray-950 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-400">Quem Somos</h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg mb-12">
          Somos referência no ensino de máquinas pesadas há mais de 10 anos, com foco total em prática, empregabilidade e certificação.
        </p>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Experiência */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-amber-400">Experiência Comprovada</h3>
            <p className="text-gray-300">Mais de 5.000 alunos formados e atuando em grandes obras no Brasil inteiro.</p>
          </div>
          {/* Infraestrutura */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-amber-400">Infraestrutura Real</h3>
            <p className="text-gray-300">Equipamentos modernos e pátios amplos para treinamento 100% prático.</p>
          </div>
          {/* Foco em Emprego */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-amber-400">Foco em Emprego</h3>
            <p className="text-gray-300">Parcerias com empresas e suporte na inserção no mercado de trabalho.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center px-6">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Certificado */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2 text-amber-400">Certificado Reconhecido</h2>
          <p className="text-gray-300">Receba um certificado válido em todo o Brasil e aumente suas chances no mercado.</p>
        </div>
        {/* Aulas Práticas */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2 text-amber-400">Aulas 100% Práticas</h2>
          <p className="text-gray-300">Você aprende na prática com retroescavadeiras reais e instrutores experientes.</p>
        </div>
        {/* Indicação Profissional */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2 text-amber-400">Indicação Profissional</h2>
          <p className="text-gray-300">Parcerias com empresas e suporte na busca pelo seu primeiro trabalho.</p>
        </div>
        </div>
      </section>

      {/* Seção Fale com a Gente */}
      <section className="px-6 py-16 bg-gray-950 text-white" id="contato">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-6">Fale com a Gente</h2>
        <p className="text-lg text-gray-300 mb-8">
        Caso tenha alguma dúvida ou queira mais informações, preencha o formulário abaixo e nossa equipe entrará em contato com você.
        </p>
    </div>

  <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
    {/* Nome */}
    <div className="mb-4">
      <label htmlFor="nome" className="block text-lg text-gray-200 mb-2">
        Nome
      </label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </div>

    {/* E-mail */}
    <div className="mb-4">
      <label htmlFor="email" className="block text-lg text-gray-200 mb-2">
        E-mail
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </div>

    {/* Telefone */}
    <div className="mb-4">
      <label htmlFor="telefone" className="block text-lg text-gray-200 mb-2">
        Telefone
      </label>
      <input
        type="tel"
        id="telefone"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </div>

    {/* Mensagem */}
    <div className="mb-4">
      <label htmlFor="mensagem" className="block text-lg text-gray-200 mb-2">
        Mensagem
      </label>
      <textarea
        id="mensagem"
        name="mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        rows="4"
        required
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
      ></textarea>
    </div>

    {/* Botão de Enviar */}
    <button
      type="submit"
      className="bg-amber-500 hover:bg-amber-600 text-white block mx-auto text-center px-8 py-4 rounded-full text-lg font-semibold transition-all"
    >
      Enviar Mensagem
    </button>
  </form>
</section>

    </main>
  );
}

export default Home;
