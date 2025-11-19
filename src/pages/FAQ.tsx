function FAQ() {
  const faqs = [
    {
      pergunta: "A plataforma usa Inteligência Artificial real?",
      resposta:
        "Sim, o projeto foi baseado em um modelo de classificação e cluster desenvolvido em Python, e as regras foram traduzidas para a API Java.",
    },
    {
      pergunta: "Onde os dados dos usuários são armazenados?",
      resposta:
        "Os dados são persistidos em um banco de dados Oracle, utilizando tabelas específicas para usuários, recomendações, logs do modelo e clusters.",
    },
    {
      pergunta: "Preciso pagar para usar a FutureSkills?",
      resposta:
        "Não. O projeto é acadêmico e foi desenvolvido apenas para fins de estudo e demonstração.",
    },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">FAQ – Perguntas Frequentes</h1>
      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.pergunta}
            className="border border-gray-200 rounded-lg p-3 bg-white"
          >
            <summary className="cursor-pointer font-semibold">
              {item.pergunta}
            </summary>
            <p className="mt-2 text-sm text-gray-700">{item.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
