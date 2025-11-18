function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs md:text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <span>
          FutureSkills • Global Solution FIAP • {new Date().getFullYear()}
        </span>
        <span>Front-End Design Engineering • React + Vite + TS + Tailwind</span>
      </div>
    </footer>
  );
}

export default Footer;
