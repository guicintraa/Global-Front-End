import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Integrantes from "../pages/Integrantes";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Usuarios from "../pages/Usuarios";
import UsuarioDetalhes from "../pages/UsuarioDetalhes";
import NotFound from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/usuarios/:id" element={<UsuarioDetalhes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}