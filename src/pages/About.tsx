function About() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Sobre o Projeto</h1>
      <p className="text-gray-700">
        A FutureSkills é uma plataforma desenvolvida como parte da Global
        Solution FIAP, integrando as disciplinas de Banco de Dados, Java,
        Front-End e Inteligência Artificial.
      </p>
      <p className="text-gray-700">
        O sistema permite cadastrar usuários, gerar recomendações de carreira
        utilizando regras inspiradas em modelos de IA, registrar os clusters de
        perfil no banco Oracle e visualizar todo o histórico pela interface
        web.
      </p>
      <p className="text-gray-700">
        Todo o front-end foi construído com React, Vite, Typescript e
        TailwindCSS v4, consumindo a API Java publicada remotamente.
      </p>
    </section>
  );
}

export default About;
