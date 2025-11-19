import { Recomendacao } from "../types/Recomendacao";

interface Props {
  recomendacao: Recomendacao;
}

function RecommendationCard({ recomendacao }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <h4 className="font-semibold text-indigo-600">
        {recomendacao.carreira}
      </h4>
      <p className="text-sm text-gray-500">Trilha: {recomendacao.trilha}</p>
      <p className="text-sm mt-1">
        Score do modelo:{" "}
        <span className="font-semibold">
          {(recomendacao.scoreModelo * 100).toFixed(1)}%
        </span>
      </p>
      {recomendacao.dtRecomendacao && (
        <p className="text-xs text-gray-400 mt-1">
          Data: {new Date(recomendacao.dtRecomendacao).toLocaleString()}
        </p>
      )}
    </div>
  );
}

export default RecommendationCard;
