import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, X, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import LazyImage from "./LazyImage";

import sol1 from "../assets/images/solution-sample-1.webp";
import sol2 from "../assets/images/solution-sample-2.webp";
import sol3 from "../assets/images/solution-sample-3.webp";
import sol4 from "../assets/images/solution-sample-4.webp";
import sol5 from "../assets/images/solution-sample-5.webp";
import sol6 from "../assets/images/solution-sample-6.webp";
import sol7 from "../assets/images/solution-sample-7.webp";
import sol8 from "../assets/images/solution-sample-8.webp";
import sol9 from "../assets/images/solution-sample-9.webp";

import "swiper/css";

export default function Solution() {
  const samples6to9 = [
    { id: 1, url: sol1, title: "Amostra 1 - 6º ao 9º Ano" },
    { id: 2, url: sol2, title: "Amostra 2 - 6º ao 9º Ano" },
    { id: 3, url: sol3, title: "Amostra 3 - 6º ao 9º Ano" },
    { id: 4, url: sol4, title: "Amostra 4 - 6º ao 9º Ano" },
    { id: 5, url: sol5, title: "Amostra 5 - 6º ao 9º Ano" },
    { id: 6, url: sol6, title: "Amostra 6 - 6º ao 9º Ano" },
    { id: 7, url: sol7, title: "Amostra 7 - 6º ao 9º Ano" },
    { id: 8, url: sol8, title: "Amostra 8 - 6º ao 9º Ano" },
    { id: 9, url: sol9, title: "Amostra 9 - 6º ao 9º Ano" },
  ];

  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [loadIframe, setLoadIframe] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // Lazy load iframe on scroll intersection
  useEffect(() => {
    if (!iframeContainerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(iframeContainerRef.current);
    return () => observer.disconnect();
  }, []);

  const prevZoom = () => {
    if (zoomIndex !== null) {
      setZoomIndex((prev) => (prev === 0 ? samples6to9.length - 1 : (prev ?? 0) - 1));
    }
  };

  const nextZoom = () => {
    if (zoomIndex !== null) {
      setZoomIndex((prev) => (prev === samples6to9.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="solution" className="pt-16 md:pt-20 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
      {/* Section 1: 1º ao 5º Ano */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs sm:text-sm font-bold rounded-full mb-3 border border-green-200">
            ENSINO FUNDAMENTAL I
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-headline mb-4 text-center text-gray-900">
            Amostras das Atividades – 1º ao 5º Ano
          </h3>
          <p className="text-gray-600 text-sm sm:text-base text-center max-w-2xl mb-6">
            Confira algumas das páginas interativas preparadas especialmente para as turmas dos primeiros anos.
          </p>

          <div
            ref={iframeContainerRef}
            className="w-full relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-slate-900 max-w-3xl"
            style={{ paddingTop: "max(60%, 380px)", height: 0 }}
          >
            {loadIframe ? (
              <iframe
                className="absolute inset-0 w-full h-full border-none"
                src="https://heyzine.com/flip-book/cd7bb08e29.html"
                title="Amostras das Atividades - 1º ao 5º Ano"
                scrolling="no"
                loading="lazy"
                allowFullScreen
                allow="autoplay; fullscreen; clipboard-write"
              />
            ) : (
              <div
                onClick={() => setLoadIframe(true)}
                className="absolute inset-0 flex flex-col items-center justify-center text-white cursor-pointer group bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 p-6 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current translate-x-0.5" />
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold mb-1">
                  Clique para abrir a Amostra Interativa
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md">
                  Toque para carregar o livro interativo do 1º ao 5º ano em PDF
                </p>
              </div>
            )}
          </div>
          <p className="mt-3 text-xs sm:text-sm text-gray-500 italic text-center">
            Clique acima para folhear algumas amostras reais!
          </p>
        </div>
      </div>

      {/* Section 2: 6º ao 9º Ano - Full Width Rich Navy Background Section */}
      <div className="w-full bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-12 sm:py-16 text-white shadow-xl overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-center flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-bold rounded-full mb-3 border border-blue-400/30 uppercase tracking-wider">
            Ensino Fundamental II — 6º ao 9º Ano
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-headline text-white tracking-tight">
            Veja como são os exercícios por dentro
          </h3>
          <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-xl">
            Atividades e exercícios interativos para turmas do 6º ao 9º ano.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={14}
            slidesPerView={1.3}
            centeredSlides={false}
            loop={true}
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 1.8, spaceBetween: 16 },
              640: { slidesPerView: 2.5, spaceBetween: 18 },
              768: { slidesPerView: 3.5, spaceBetween: 20 },
              1024: { slidesPerView: 4.8, spaceBetween: 22 },
              1280: { slidesPerView: 5.5, spaceBetween: 24 },
            }}
            className="swiper-linear-ticker py-2 w-full"
          >
            {samples6to9.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => setZoomIndex(index)}
                  className="group relative cursor-pointer transform transition-all duration-300 hover:scale-[1.03]"
                >
                  <div className="aspect-[3/4] w-full flex items-center justify-center overflow-hidden relative rounded-xl bg-slate-800">
                    <LazyImage
                      src={item.url}
                      alt={item.title}
                      width={280}
                      height={370}
                      className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 rounded-xl">
                      <span className="bg-white/95 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <ZoomIn className="w-3.5 h-3.5 text-blue-600" /> Ampliar
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Fullscreen Modal for Zooming */}
      {zoomIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
          <button
            onClick={() => setZoomIndex(null)}
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 p-2.5 rounded-full transition-all z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Modal Button */}
          <button
            onClick={prevZoom}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center p-2">
            <img
              src={samples6to9[zoomIndex].url}
              alt={samples6to9[zoomIndex].title}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white text-sm font-semibold mt-3 bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-xs">
              Amostra 6º ao 9º Ano — Página {zoomIndex + 1} de {samples6to9.length}
            </p>
          </div>

          {/* Next Modal Button */}
          <button
            onClick={nextZoom}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all z-10"
            aria-label="Próxima"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}


