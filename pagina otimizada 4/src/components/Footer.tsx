export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full border-t border-gray-100 py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 font-semibold">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-green-600 transition-colors cursor-pointer"
          >
            Suporte ao cliente
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-green-600 transition-colors cursor-pointer"
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-green-600 transition-colors cursor-pointer"
          >
            Termos de Uso
          </a>
        </div>
        <p className="max-w-md mx-auto leading-relaxed text-gray-400">
          Material 100% digital. Entrega imediata por e-mail e WhatsApp após a confirmação da compra.
        </p>
        <p className="mt-6 text-xs text-gray-400">
          © {currentYear} Inglês Divertido Kids. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
