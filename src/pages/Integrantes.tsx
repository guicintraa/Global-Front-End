function Integrantes() {
  const integrantes = [
    {
      nome: "Guilherme Batista Cintra",
      rm: "RM 562850",
      turma: "1TDSPV",
      github: "https://github.com/guicintraa",
      linkedin: "https://www.linkedin.com/in/guilherme-cintra-507771333/",
    },
    {
      nome: "Caio Felipe Silva",
      rm: "RM 564615",
      turma: "1TDSPV",
      github: "https://github.com/caio-F1",
      linkedin: "https://www.linkedin.com/in/caiofelipesilva-f1/",
    },
    {
      nome: "Davi Tagawa Schincaglia Lima Lemos",
      rm: "RM 563457",
      turma: "1TDSPV",
      github: "https://github.com/dtagawa",
      linkedin: "https://www.linkedin.com/in/davi-lemos-2b2618285/",
    },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Integrantes</h1>
      <p className="mb-4 text-gray-700">
        Página de integrantes da Global Solution, com os principais contatos da
        equipe.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {integrantes.map((i) => (
          <div
            key={i.rm}
            className="border border-gray-200 rounded-lg p-4 bg-white"
          >
            <h2 className="font-semibold">{i.nome}</h2>
            <p className="text-sm text-gray-500">{i.rm}</p>
            <p className="text-sm text-gray-500">Turma: {i.turma}</p>
            <div className="mt-3 flex flex-col gap-1 text-sm">
              <a
                href={i.github}
                target="_blank"
                className="text-indigo-600 underline"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={i.linkedin}
                target="_blank"
                className="text-indigo-600 underline"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Integrantes;
