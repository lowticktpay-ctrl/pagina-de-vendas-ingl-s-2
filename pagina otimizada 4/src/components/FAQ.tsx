import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqItems = [
    {
      question: "Para qual idade é indicado?",
      answer: "O material é projetado para alunos do 1º ao 9º ano do Ensino Fundamental, o que corresponde aproximadamente a idades entre 6 e 15 anos. As +280 atividades são divididas por ano escolar para facilitar a aplicação.",
    },
    {
      question: "Meu filho/aluno não sabe nada de inglês. Serve para ele?",
      answer: "Sim! As atividades foram criadas pensando nos diferentes níveis de aprendizado, desde o iniciante absoluto. O foco é introduzir o inglês de forma lúdica e gradual, construindo uma base sólida.",
    },
    {
      question: "Posso imprimir as atividades?",
      answer: "Com certeza! Todo o material é entregue em formato PDF de alta qualidade, pronto para ser impresso em qualquer impressora caseira ou profissional. Você pode imprimir quantas vezes quiser.",
    },
    {
      question: "Como recebo o acesso ao material?",
      answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail e uma mensagem no WhatsApp com o link para baixar todo o conteúdo. O acesso é vitalício.",
    },
    {
      question: "Tem garantia?",
      answer: "Sim, oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não gostar do material ou achar que não é para você, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem perguntas.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 max-w-3xl mx-auto px-4 border-t border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-headline text-gray-900 leading-tight">
          Ainda tem dúvidas?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          Aqui estão as respostas para as perguntas mais comuns dos nossos clientes.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between p-6 text-left text-base sm:text-lg font-bold text-gray-950 hover:bg-gray-50/50 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ml-3 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </h3>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[300px] border-t border-gray-100" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="p-6 text-sm sm:text-base text-gray-600 leading-relaxed bg-gray-50/30">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
