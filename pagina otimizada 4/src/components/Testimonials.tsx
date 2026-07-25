import { MessageSquare, Heart, Check, CheckCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import avatar1 from "../assets/images/avatar-1.webp";
import avatar2 from "../assets/images/avatar-2.webp";
import avatar3 from "../assets/images/avatar-3.webp";
import avatar4 from "../assets/images/avatar-4.webp";

import "swiper/css";

export default function Testimonials() {
  const chatCards = [
    {
      id: 1,
      type: "whatsapp",
      messages: [
        { sender: "them", text: "Vou imprimir e encadernar. Quero trabalhar com evento de pessoas e tudo que é bom para agregar. Mas aí da estou em estudos ainda.", time: "18:02" },
        { sender: "me", text: "Que bom que deu certo! 😊", time: "18:01" },
        { sender: "me", text: "Muito obrigada pela confiança!", time: "18:02" },
        { sender: "them", text: "Eu que agradeço ❤️ Se tiver novidades nesse sentido me envia aqui.", time: "18:03" },
      ]
    },
    {
      id: 2,
      type: "whatsapp",
      messages: [
        { sender: "them", text: "Muito obrigado, recebi. Obrigado pela atenção.", time: "18:33" },
        { sender: "me", text: "Por nada, nós que agradecemos! 😊", time: "18:33" },
        { sender: "them", text: "Irei indicar os materiais para os colegas adquirirem.", time: "18:34" },
      ]
    },
    {
      id: 3,
      type: "chat",
      avatar: avatar1,
      name: "Mariana S.",
      messages: [
        { sender: "them", text: "Obrigada, consegui o acesso!" },
        { sender: "them", text: "Já deixei o feedback positivo na sua página, sucesso nas vendas e obrigada pelo atendimento. ❤️" }
      ]
    },
    {
      id: 4,
      type: "purple-chat",
      avatar: avatar2,
      name: "Marjorie",
      messages: [
        { sender: "them", text: "Consegui ❤️" },
        { sender: "them", text: "Amei o material! ❤️" },
        { sender: "me-purple", text: "Que bom que conseguiu, Marjorie! 🥳 Fico muito feliz que você gostou do material! 💜 Tenho certeza de que ele vai agregar bastante na sua prática. ❤️" }
      ]
    },
    {
      id: 5,
      type: "purple-chat-long",
      avatar: avatar3,
      name: "Edgar",
      topQuote: "Usei o contato dos exercícios hoje mesmo na sala de aula. ❤️",
      messages: [
        { sender: "me-purple", text: "Que legal saber disso Edgar! 😊 Fico muito feliz que você já tenha colocado o exercício em prática. Me conta uma coisa: como foi a experiência com a turma? You percebeu alguma reação ou resultado diferente durante a aula?", time: "11 de Jul, 12:41" },
        { sender: "them", text: "Sim! Os alunos ficaram hiper engajados do início ao fim; senti a atenção de todos de volta de forma incrível. ❤️", time: "Ter, 00:38" }
      ]
    },
    {
      id: 6,
      type: "instagram",
      avatar: avatar4,
      username: "priscilag.educadora",
      time: "1 sem",
      text: "Parabéns 👏 entrega o que promete. Gostei do material. Confesso que estava com receio da compra, mas me surpreendi positivamente. 🙏",
      likes: 1
    },
    {
      id: 7,
      type: "whatsapp",
      messages: [
        { sender: "them", text: "Boa tarde! O material chegou direitinho no e-mail e WhatsApp. As atividades do 6º ao 9º ano são sensacionais!", time: "14:10" },
        { sender: "me", text: "Que ótimo! Ficamos muito felizes! Qualquer dúvida estamos à disposição! 😊", time: "14:12" },
        { sender: "them", text: "Já imprimi para a aula de amanhã! Muito obrigada pela agilidade! ❤️", time: "14:15" },
      ]
    },
  ];

  // Triplicate for uninterrupted infinite continuous scrolling
  const infiniteCards = [...chatCards, ...chatCards, ...chatCards];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* QUEM COMPROU, APROVOU Badge */}
        <div className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-500/80 px-5 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider shadow-sm mb-6 hover:shadow transition-all uppercase">
          <MessageSquare className="w-4 h-4 text-blue-600 fill-blue-50" />
          <span>QUEM COMPROU, APROVOU!</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-headline text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Aprovado por professores na prática
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Confira o que diz quem já aplica as atividades no dia a dia:
        </p>
      </div>

      {/* Infinite Continuous Carousel */}
      <div className="mt-12 sm:mt-16 w-full overflow-hidden py-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={false}
          loop={true}
          loopAdditionalSlides={10}
          speed={5500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 18 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 2.8, spaceBetween: 22 },
            1024: { slidesPerView: 3.5, spaceBetween: 24 },
            1280: { slidesPerView: 4.2, spaceBetween: 26 },
          }}
          className="swiper-linear-ticker py-2 w-full"
        >
          {infiniteCards.map((card, index) => (
            <SwiperSlide key={`${card.id}-${index}`} className="!h-auto flex items-center justify-center">
              <div className="w-full h-full max-w-sm bg-[#121b22] text-white rounded-3xl p-4 sm:p-5 shadow-xl border border-gray-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                
                {/* WhatsApp Style */}
                {card.type === "whatsapp" && (
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    {card.messages.map((m, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-2xl max-w-[88%] shadow-sm relative ${
                          m.sender === "me"
                            ? "bg-[#005c4b] text-white ml-auto rounded-tr-none"
                            : "bg-[#202c33] text-gray-100 mr-auto rounded-tl-none"
                        }`}
                      >
                        <p className="leading-snug pr-8">{m.text}</p>
                        <span className="text-[10px] text-gray-300/80 absolute bottom-1 right-2 flex items-center gap-0.5">
                          {m.time}
                          {m.sender === "me" && <CheckCheck className="w-3 h-3 text-sky-300 inline" />}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Simple Dark Chat */}
                {card.type === "chat" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 mb-2 pb-2 border-b border-gray-800">
                      <img src={card.avatar} alt={card.name} width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover" />
                      <span className="text-xs font-bold text-gray-300">{card.name}</span>
                    </div>
                    {card.messages.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-[#202c33] text-gray-100 p-3 rounded-2xl text-xs sm:text-sm leading-snug rounded-tl-none max-w-[92%]"
                      >
                        {m.text}
                      </div>
                    ))}
                  </div>
                )}

                {/* Purple Bubble Chat (Instagram/Messenger Style) */}
                {(card.type === "purple-chat" || card.type === "purple-chat-long") && (
                  <div className="space-y-3">
                    {card.topQuote && (
                      <div className="bg-[#1f2937] text-gray-200 text-xs p-2.5 rounded-xl border border-gray-700/50 mb-2 flex items-center gap-1.5">
                        <span className="text-red-400">❤️</span>
                        <span className="truncate">{card.topQuote}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2.5 mb-1">
                      <img src={card.avatar} alt={card.name} width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover" />
                      <span className="text-xs font-bold text-gray-300">{card.name}</span>
                    </div>
                    {card.messages.map((m, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-2xl text-xs sm:text-sm leading-snug max-w-[90%] ${
                          m.sender.includes("purple")
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white ml-auto rounded-tr-none"
                            : "bg-[#202c33] text-gray-100 mr-auto rounded-tl-none"
                        }`}
                      >
                        <p>{m.text}</p>
                        {m.time && (
                          <span className="text-[9px] text-gray-300 block text-right mt-1 opacity-75">
                            {m.time}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Instagram Comment Style */}
                {card.type === "instagram" && (
                  <div className="bg-[#1a1a1a] p-3 sm:p-4 rounded-2xl border border-gray-800 text-xs sm:text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img src={card.avatar} alt="" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-white text-xs">{card.username}</p>
                          <span className="text-[10px] text-gray-400">{card.time} • pelo autor</span>
                        </div>
                      </div>
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    </div>
                    <p className="text-gray-200 leading-snug mt-2">{card.text}</p>
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 mt-3 pt-2 border-t border-gray-800">
                      <span>Responder</span>
                      <span>Responder com um reel</span>
                      <span>Ocultar</span>
                    </div>
                  </div>
                )}

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

