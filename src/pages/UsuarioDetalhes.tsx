import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { Usuario } from "../types/Usuario";
import { Recomendacao } from "../types/Recomendacao";
import { ClusterUsuario } from "../types/Cluster";
import RecommendationCard from "../components/RecommendationCard";

function UsuarioDetalhes() {
  const { id } = useParams();
  const idUsuario = Number(id);

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [historico, setHistorico] = useState<Recomendacao[]>([]);
  const [cluster, setCluster] = useState<ClusterUsuario | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function carregarUsuario() {
    try {
      const { data } = await api.get<Usuario>(`/usuarios/${idUsuario}`);
      setUsuario(data);
    } catch {
      setError("Usuário não encontrado.");
    }
  }

  async function carregarHistorico() {
    try {
      const { data } = await api.get<Recomendacao[]>(
        `/recomendacao/usuario/${idUsuario}`
      );
      setHistorico(data);
    } catch {
      // sem histórico ainda
    }
  }

  async function carregarCluster() {
    try {
      const { data } = await api.get<ClusterUsuario>(
        `/cluster/usuario/${idUsuario}`
      );
      setCluster(data);
    } catch {
      // usuário pode não ter cluster ainda
    }
  }

  async function gerarRecomendacao() {
    try {
      setLoading(true);
      setMsg(null);
      setError(null);
      const { data } = await api.post<Recomendacao>(
        `/recomendacao/${idUsuario}`
      );
      setMsg("Recomendação gerada com sucesso!");
      setHistorico((prev) => [data, ...prev]);
      await carregarCluster();
    } catch {
      setError("Erro ao gerar recomendação. Verifique a API.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!Number.isNaN(idUsuario)) {
      carregarUsuario();
      carregarHistorico();
      carregarCluster();
    }
  }, [idUsuario]);

  if (!idUsuario || Number.isNaN(idUsuario)) {
    return <p>Id de usuário inválido.</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!usuario) {
    return <p>Carregando usuário...</p>;
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold mb-1">{usuario.nome}</h1>
          <p className="text-sm text-gray-500">{usuario.email}</p>
          <p className="text-sm">
            Interesse principal:{" "}
            <span className="font-semibold">{usuario.interesse}</span>
          </p>
        </div>
        <button
          onClick={gerarRecomendacao}
          disabled={loading}
          className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? "Gerando..." : "Gerar nova recomendação"}
        </button>
      </div>

      {msg && <p className="text-sm text-green-600">{msg}</p>}

      {cluster && (
        <div className="border border-emerald-300 rounded-lg p-4 bg-emerald-50">
          <h2 className="font-semibold mb-1">
            Cluster atual: {cluster.clusterLabel}
          </h2>
          <p className="text-sm text-gray-700">{cluster.descricaoCluster}</p>
          {cluster.dtAtribuicao && (
            <p className="text-xs text-gray-500 mt-1">
              Última atribuição:{" "}
              {new Date(cluster.dtAtribuicao).toLocaleString()}
            </p>
          )}
        </div>
      )}

      <div>
        <h2 className="font-semibold mb-3">Histórico de recomendações</h2>
        {historico.length === 0 ? (
          <p className="text-sm text-gray-500">
            Nenhuma recomendação registrada ainda para este usuário.
          </p>
        ) : (
          <div className="space-y-3">
            {historico.map((rec) => (
              <RecommendationCard key={rec.idRecomendacao} recomendacao={rec} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default UsuarioDetalhes;
