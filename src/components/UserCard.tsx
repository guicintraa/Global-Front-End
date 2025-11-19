import { Link } from "react-router-dom";
import { Usuario } from "../types/Usuario";

interface Props {
  usuario: Usuario;
}

function UserCard({ usuario }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-1 bg-white shadow-sm">
      <h3 className="font-semibold text-lg">{usuario.nome}</h3>
      <p className="text-sm text-gray-500">{usuario.email}</p>
      <p className="text-sm">
        Interesse em <span className="font-medium">{usuario.interesse}</span>
      </p>
      <Link
        to={`/usuarios/${usuario.idUsuario}`}
        className="mt-3 inline-flex justify-center px-3 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Ver detalhes
      </Link>
    </div>
  );
}

export default UserCard;