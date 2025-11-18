import { FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";
import { Usuario } from "../types/Usuario";
import UserCard from "../components/UserCard";

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [interesse, setInteresse] = useState("tech");

  async function carregarUsuarios() {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.get<Usuario[]>("/usuarios");
      setUsuarios(data);
    } catch {
      setError("Erro ao carregar usuários. Verifique a API.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setError(null);
      await api.post("/usuarios", {
        nome,
        email,
        interesse,
      });
      setNome("");
      setEmail("");
      setInteresse("tech");
      await carregarUsuarios();
    } catch {
      setError(
        "Erro ao cadastrar usuário. Verifique se o e-mail já não está cadastrado."
      );
    }
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Usuários</h1>
        <p className="text-gray-700">
          Cadastre novos usuários e visualize a lista de perfis que poderão
          receber recomendações de carreira.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-3">Cadastrar novo usuário</h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-3">
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Nome</label>
            <input
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">E-mail</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Interesse principal</label>
            <select
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50"
              value={interesse}
              onChange={(e) => setInteresse(e.target.value)}
            >
              <option value="tech">Tech</option>
              <option value="data">Data</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="seguranca">Segurança</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
            >
              Cadastrar
            </button>
          </div>
        </form>
        {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
      </div>

      <div>
        <h2 className="font-semibold mb-3">Lista de usuários</h2>
        {loading ? (
          <p>Carregando...</p>
        ) : usuarios.length === 0 ? (
          <p>Nenhum usuário cadastrado ainda.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {usuarios.map((u) => (
              <UserCard key={u.idUsuario} usuario={u} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Usuarios;
