import { useEffect, useState } from "react";
import WistiaVideo from "./WistiaVideo";
import professoresImg from "../assets/images/professores-satisfeitos.webp";

export default function Hero() {
  const [todayDate, setTodayDate] = useState("18/07/2026");

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    setTodayDate(`${dd}/${mm}/${yyyy}`);
  }, []);

  return (
    <section id="hero" className="w-full">
      {/* Dynamic Date Sticky Alert Banner */}
      <div className="w-full bg-red-600 text-white py-2.5 text-center font-bold text-sm sm:text-base tracking-wide shadow-md">
        <p>OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <b>{todayDate}</b></p>
      </div>

      <div className="text-center px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center py-8 sm:py-12 space-y-5">

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              +280 Atividades e Dinâmicas
              <br />
              <span className="text-red-600">do 1º ao 9º ano</span>
            </h1>
            <div>
              <span className="bg-yellow-400 text-gray-900 font-black text-xl sm:text-2xl px-4 py-1.5 rounded-xl uppercase tracking-wider inline-block shadow-sm border border-yellow-500/40">
                + BÔNUS
              </span>
            </div>
          </div>

          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Cada atividade vem pronta para você aplicar na aula ou em casa, com orientações claras, material dinâmico e divertido, sem precisar improvisar e fácil de adaptar do 1º ao 9º ano.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2 min-h-[36px]">
            <img
              alt="Professores satisfeitos"
              loading="eager"
              // @ts-ignore
              fetchPriority="high"
              decoding="async"
              width="140"
              height="32"
              className="w-auto h-7 sm:h-8 object-contain"
              src={professoresImg}
            />
            <p className="text-gray-700 font-semibold text-xs sm:text-sm">
              +5.000 professores recomendam
            </p>
          </div>

          {/* Hero Sales Video Embed */}
          <div className="pt-2 sm:pt-4 w-full text-center">
            <div className="max-w-xs sm:max-w-md md:max-w-lg mx-auto">
              <WistiaVideo mediaId="s0ps4otuen" aspect="0.5625" />
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-extrabold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-md transform transition-transform duration-200 active:scale-95 hover:scale-105 border-b-4 border-green-800 uppercase tracking-wide"
              >
                Quero as atividades agora!
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-xs">
                <span>✉️</span>
                <span>Você recebe tudo na hora, direto no seu e-mail e WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
