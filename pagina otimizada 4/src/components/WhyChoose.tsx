import React from "react";
import { Users, BadgeCheck, Calendar, Sparkles } from "lucide-react";

export default function WhyChoose() {
  const items = [
    {
      icon: Users,
      title: "Fundamental 1 e 2",
      description:
        "Atividades pensadas especificamente pra essas séries, não um material genérico",
    },
    {
      icon: BadgeCheck,
      title: "Compatível BNCC",
      description: "Material alinhado à Base Nacional Comum Curricular",
    },
    {
      icon: Calendar,
      title: "Atualizações Incluídas",
      description:
        "Novo conteúdo incluso no acesso, sem custo adicional",
    },
    {
      icon: Sparkles,
      title: "Aprendizado Brincando",
      description:
        "Dinâmicas pensadas pra prender a atenção da turma, não exercício repetitivo",
    },
  ];

  return (
    <section id="why-choose" className="py-14 sm:py-20 bg-gradient-to-b from-sky-50/60 to-blue-50/40 border-y border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 tracking-tight mb-10 sm:mb-14">
          Por que Escolher o nosso Kit de Inglês? ✨
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
              >
                <div className="mb-4 sm:mb-5 text-blue-600 flex items-center justify-center">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.75]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-14 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base sm:text-lg uppercase tracking-wider px-10 sm:px-14 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
          >
            COMEÇAR AGORA!
          </a>
        </div>
      </div>
    </section>
  );
}
