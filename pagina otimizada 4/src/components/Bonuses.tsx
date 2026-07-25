import LazyImage from "./LazyImage";
import bonus1Img from "../assets/images/bonus-1.webp";
import bonus2Img from "../assets/images/bonus-2.webp";
import bonus3Img from "../assets/images/bonus-3.webp";

export default function Bonuses() {
  const bonuses = [
    {
      title: "Certificado de Inglês",
      emoji: "📜",
      description: "Um certificado colorido e motivador para reconhecer o progresso da criança e incentivar o aprendizado de inglês com orgulho.",
      value: "27",
      image: bonus1Img,
      alt: "Certificado de Inglês",
    },
    {
      title: "Apostila de Vocabulário",
      emoji: "📚",
      description: "Material prático para ampliar o vocabulário em inglês com atividades organizadas e fáceis de aplicar no dia a dia.",
      value: "37",
      image: bonus2Img,
      alt: "Apostila de Vocabulário",
    },
    {
      title: "Apostila de conversação",
      emoji: "🗣️",
      description: "Atividades lúdicas que estimulam a fala, a compreensão e a confiança da criança ao se comunicar em inglês.",
      value: "33",
      image: bonus3Img,
      alt: "Apostila de conversação",
    },
  ];

  return (
    <section id="bonus" className="py-16 w-full" style={{ backgroundColor: "#E3F5EA" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-200/60 text-yellow-900 px-5 py-2.5 rounded-full font-extrabold mb-6 text-xs sm:text-sm uppercase tracking-wider shadow-sm border border-yellow-300/40">
            🎁 BÔNUS EXCLUSIVOS - VALOR R$ 97
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 px-4 leading-tight text-gray-900 font-headline">
            Receba 3 Bônus Incríveis GRÁTIS!
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Ao adquirir a oferta hoje, além do material principal, você leva sem custo adicional:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 text-center rounded-3xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 flex flex-col items-center h-full">
                <div className="mb-4 w-full aspect-square overflow-hidden rounded-2xl flex items-center justify-center">
                  <LazyImage
                    alt={bonus.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    containerClassName="w-full h-full"
                    src={bonus.image}
                  />
                </div>
                <div className="text-4xl mb-3 filter drop-shadow-sm">
                  {bonus.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 font-headline">
                  {bonus.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                  {bonus.description}
                </p>
                <div className="w-full mt-auto">
                  <div className="whitespace-nowrap inline-flex items-center rounded-full text-xs font-extrabold py-2 px-5 bg-yellow-100 border border-yellow-400 text-yellow-900 shadow-xs uppercase tracking-wider">
                    VALOR ORIGINAL: R$ {bonus.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4 border-t border-emerald-200/50">
          <div className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
            Total em bônus: <span className="text-red-600 line-through font-extrabold">R$ 97</span>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-green-700 tracking-wider">
            HOJE: <span className="bg-yellow-300 px-3 py-1 rounded-lg text-black inline-block transform -rotate-1 shadow-sm font-black">GRÁTIS!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
