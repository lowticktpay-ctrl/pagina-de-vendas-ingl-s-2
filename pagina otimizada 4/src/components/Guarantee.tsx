import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-16 md:py-20 border-t border-gray-100">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>

        <div className="flex flex-col items-center text-center gap-6 relative z-10">
          <div className="p-4 bg-green-50 rounded-full">
            <ShieldCheck className="h-16 w-16 sm:h-20 sm:w-20 text-green-600" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-headline text-gray-900 leading-tight">
              Sua satisfação ou seu dinheiro de volta
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Teste todo o material por 7 dias. Se você não ficar 100% satisfeito com o conteúdo, basta pedir o reembolso e devolveremos todo o seu investimento. Risco zero para você.
            </p>
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg border-b-4 border-green-800 transform transition-transform hover:scale-105"
          >
            Comprar sem risco
          </a>
        </div>
      </div>
    </section>
  );
}
