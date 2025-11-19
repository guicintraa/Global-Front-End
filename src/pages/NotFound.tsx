import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">Página não encontrada.</p>
      <Link
        to="/"
        className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
      >
        Voltar para Home
      </Link>
    </section>
  );
}

export default NotFound;
