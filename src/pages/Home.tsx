import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          FutureSkills – Descubra sua carreira em tecnologia
        </h1>
        <p className="text-gray-700 mb-4">
          A FutureSkills ajuda estudantes a entender qual carreira de tecnologia
          combina mais com seu perfil, usando Inteligência Artificial, Banco de
          Dados, API em Java e um front-end moderno em React.
        </p>
        <p className="text-gray-700 mb-6">
          Cadastre usuários, gere recomendações de carreira, visualize o cluster
          e consulte o histórico de decisões do modelo.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/usuarios"
            className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
          >
            Ver usuários
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 text-sm font-medium hover:bg-indigo-50"
          >
            Sobre o projeto
          </Link>
        </div>
      </div>

      <div className="border border-dashed border-indigo-300 rounded-xl p-6 text-sm text-gray-700">
        <h2 className="font-semibold mb-2">Tecnologias Integradas</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React + Vite + Typescript + Tailwind v4</li>
          <li>API Java (Quarkus) consumindo Oracle</li>
          <li>Modelo de IA inspirado em Python / Flask</li>
          <li>Global Solution Integrada – FIAP</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
