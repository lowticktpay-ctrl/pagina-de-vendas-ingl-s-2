import { useState } from "react";
import { Check, Gift, HelpCircle, X, ArrowDown } from "lucide-react";
import pricingBundle from "../assets/images/pricing-bundle.webp";
import pricingMockup from "../assets/images/pricing-mockup.webp";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basicCheckoutUrl = "https://ggcheckout.app/checkout/v4/zE4lwSIhkqWqpbq7E1Ox";
  const popupCheckoutUrl = "https://ggcheckout.app/checkout/v4/KaEx38bl5uIHhthYKU5E";
  const premiumCheckoutUrl = "https://ggcheckout.app/checkout/v4/jmR5xXzkKJMmJYQkP7JQ";

  const handleInitiateCheckout = (value: number) => {
    try {
      if (typeof window !== "undefined") {
        if (typeof (window as any).trackInitiateCheckout === "function") {
          (window as any).trackInitiateCheckout(value, "BRL");
        } else if (typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "InitiateCheckout", {
            value: value,
            currency: "BRL",
          });
        }
      }
    } catch (e) {
      console.warn("InitiateCheckout tracking error:", e);
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-20 border-t border-gray-100 relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 px-4 font-headline text-gray-900 leading-tight">
            Tenha acesso imediato a todo o material
          </h2>

          <div className="max-w-3xl mx-auto mt-6">
            <div className="inline-flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-left">
              <img
                alt="Whatsapp Icon"
                loading="lazy"
                decoding="async"
                width="24"
                height="24"
                className="w-6 h-6 object-contain shrink-0"
                src={pricingBundle}
              />
              <span className="text-sm font-semibold text-gray-700 leading-relaxed">
                Após a confirmação da compra, você recebe o acesso digital completo diretamente no seu WhatsApp e também no seu e-mail.
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mt-12 px-4">
          {/* Plan 1: Plano Básico */}
          <div className="border border-gray-200 bg-white text-gray-800 rounded-3xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col space-y-1.5 p-8 text-center bg-gray-50/50 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-extrabold font-headline mb-2 text-gray-900">
                Plano Básico
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">Ideal para testar o material.</p>
              <div className="space-y-1 pt-4">
                <div className="text-xl line-through text-red-500 font-bold decoration-2">R$ 47</div>
                <div className="text-4xl sm:text-5xl font-black text-green-600">R$ 10,60</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">PAGAMENTO ÚNICO</div>
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col justify-between">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-yellow-500 shrink-0 font-extrabold" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    +280 Atividades de Inglês (1º ao 9º ano em PDF)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-yellow-500 shrink-0 font-extrabold" />
                  <span className="text-sm sm:text-base text-gray-600">
                    Acesso imediato ao material
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-yellow-500 shrink-0 font-extrabold" />
                  <span className="text-sm sm:text-base text-gray-600">
                    Garantia incondicional de 7 dias
                  </span>
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-700 font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-md border-2 border-green-600 transform transition duration-150 hover:scale-[1.02] cursor-pointer"
                >
                  QUERO O BÁSICO
                </button>

                <div className="w-full bg-amber-50 border border-amber-200/80 p-3 sm:p-3.5 rounded-2xl flex items-center justify-between shadow-sm">
                  <span className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight leading-none pl-1">
                    92%
                  </span>
                  <div className="text-center text-xs sm:text-sm font-extrabold leading-tight text-gray-800 px-2">
                    <p>das pessoas aproveitam a</p>
                    <p className="text-amber-700">oferta completa</p>
                  </div>
                  <ArrowDown className="h-5 w-5 text-amber-600 shrink-0 pr-1 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Plan 2: Plano Premium Completo */}
          <div className="bg-white text-gray-800 rounded-3xl border-2 border-blue-600 shadow-2xl relative flex flex-col justify-between overflow-hidden transform transition duration-300 hover:scale-[1.01]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 font-black px-4 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-widest bg-yellow-400 text-black rounded-b-xl shadow-sm z-10 whitespace-nowrap">
              MAIS ESCOLHIDO
            </div>

            <div className="flex flex-col space-y-1.5 p-8 text-center pt-12 bg-blue-50/20 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-extrabold font-headline mb-1 text-gray-900">
                Plano Premium Completo
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">Acesso vitalício ao material completo + bônus.</p>

              {/* Mockup Image inside Premium Card */}
              <div className="my-3 max-w-[280px] sm:max-w-[320px] mx-auto px-2">
                <img
                  src={pricingMockup}
                  alt="Mockup do Plano Premium Completo + Bônus"
                  width={320}
                  height={240}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-52 drop-shadow-md mx-auto"
                />
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xl line-through text-red-500 font-bold decoration-2">R$ 147</div>
                <div className="text-4xl sm:text-5xl font-black text-green-600">R$ 27,00</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">PAGAMENTO ÚNICO, ACESSO VITALÍCIO</div>
                <div className="text-green-600 font-extrabold text-xs sm:text-sm pt-1 uppercase tracking-wide">
                  Economize R$120 + R$97 em Bônus!
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                  <span>1.736 pessoas escolheram essa oferta today</span>
                </div>
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col justify-between">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-yellow-500 shrink-0 font-black" />
                  <span className="text-sm sm:text-base font-extrabold text-gray-900">
                    +280 Atividades de Inglês (1º ao 9º ano em PDF)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Gift className="h-5 w-5 text-yellow-500 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    BÔNUS 1: Certificado de Inglês
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Gift className="h-5 w-5 text-yellow-500 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    BÔNUS 2: Apostila de Vocabulário
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Gift className="h-5 w-5 text-yellow-500 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    BÔNUS 3: Apostila de conversação
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-yellow-500 shrink-0 font-black" />
                  <span className="text-sm sm:text-base font-extrabold text-gray-900">
                    Acesso a futuras atualizações (sem custo)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-yellow-500 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">
                    Suporte prioritário via WhatsApp
                  </span>
                </li>
                <li className="flex items-center gap-3 font-extrabold">
                  <Check className="h-5 w-5 text-yellow-500 shrink-0 font-black" />
                  <span className="text-sm sm:text-base text-gray-900">
                    Garantia de 7 dias ou seu dinheiro de volta
                  </span>
                </li>
              </ul>

              <div className="w-full">
                <a
                  href={premiumCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleInitiateCheckout(27.00)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg sm:text-xl py-4.5 px-6 rounded-2xl shadow-xl border-b-4 border-green-800 animate-heartbeat text-center cursor-pointer"
                >
                  QUERO O PLANO COMPLETO!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Discount Modal Pop-up (R$ 17,00 Discount Option) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300">
          <div 
            className="bg-[#f0f7ff] rounded-[32px] max-w-sm w-full p-6 sm:p-8 shadow-2xl relative border border-blue-100 flex flex-col items-center animate-heartbeat"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-blue-100 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Gift Box Header Icon */}
            <div className="text-6xl my-2 drop-shadow-md">
              🎁
            </div>

            {/* Modal Heading & Subtitles */}
            <h4 className="text-xl sm:text-2xl font-black text-gray-950 text-center leading-tight mt-3 font-headline">
              Espere! Oferta Exclusiva!
            </h4>
            <p className="text-center text-sm sm:text-base text-gray-600 font-semibold mt-2">
              Upgrade para o Premium com <span className="text-green-600 font-black">DESCONTO EXTRA</span>
            </p>

            {/* Inside Price Frame */}
            <div className="w-full bg-white/95 rounded-2xl p-5 my-5 text-center shadow-md border border-blue-50">
              <p className="text-sm text-gray-400 line-through font-bold">
                De R$27,00
              </p>
              <p className="text-3xl sm:text-4xl font-black text-green-600 mt-1">
                Por apenas R$17,00
              </p>
              <p className="text-sm font-extrabold text-red-600 mt-2 bg-red-50 py-1 px-3 rounded-full inline-block">
                Economize R$10 agora!
              </p>
            </div>

            {/* Checkmark List */}
            <div className="w-full space-y-3 mb-6 px-1">
              <div className="flex items-center gap-3 text-left">
                <Check className="h-5 w-5 text-green-600 shrink-0 font-bold" />
                <span className="text-xs sm:text-sm font-bold text-gray-700">Todos os 3 bônus inclusos</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Check className="h-5 w-5 text-green-600 shrink-0 font-bold" />
                <span className="text-xs sm:text-sm font-bold text-gray-700 font-sans">Atualizações mensais</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Check className="h-5 w-5 text-green-600 shrink-0 font-bold" />
                <span className="text-xs sm:text-sm font-bold text-gray-700">Suporte prioritário</span>
              </div>
            </div>

            {/* Direct Prominent Checkout CTA Button */}
            <a
              href={popupCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleInitiateCheckout(17.00)}
              className="w-full inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-extrabold text-base sm:text-lg py-4.5 px-6 rounded-2xl shadow-lg border-b-4 border-green-800 transition duration-150 transform hover:scale-[1.02] text-center"
            >
              SIM, QUERO O DESCONTO!
            </a>

            {/* Close modal and continue to Basic Checkout option */}
            <button
              onClick={() => {
                handleInitiateCheckout(10.60);
                setIsModalOpen(false);
                window.open(basicCheckoutUrl, "_blank", "noopener,noreferrer");
              }}
              className="mt-3 text-sm font-bold text-gray-500 hover:text-gray-700 hover:underline transition-colors py-2"
            >
              Não, quero o básico
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

