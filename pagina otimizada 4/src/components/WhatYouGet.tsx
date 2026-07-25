import { FileText, Code, Smartphone, Printer } from "lucide-react";

export default function WhatYouGet() {
  const items = [
    {
      title: "Material Completo em PDF",
      description: "+280 dinâmicas e Atividades interativas de Inglês organizadas do 1º ao 9º ano e prontas para usar",
      icon: FileText,
    },
    {
      title: "Atividades Estruturadas",
      description: "Todas as atividades organizadas por nível e habilidade linguística",
      icon: Code,
    },
    {
      title: "Acesso Digital Completo",
      description: "Acesse por celular, tablet ou computador a qualquer hora",
      icon: Smartphone,
    },
    {
      title: "Pronto para Imprimir",
      description: "Material formatado para impressão em qualquer tamanho",
      icon: Printer,
    },
  ];

  return (
    <section id="what-you-get" className="py-16 md:py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-headline text-gray-900 leading-tight">
            O Que Você Vai Receber
          </h2>
          <div className="mt-4 flex justify-center items-center">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-12 h-1 bg-green-500 rounded-full ml-1"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center justify-between"
              >
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-2xl inline-flex text-white shadow-md shadow-blue-200">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-headline">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
