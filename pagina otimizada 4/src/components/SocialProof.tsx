import { useState, TouchEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import LazyImage from "./LazyImage";
import sp1 from "../assets/images/social-proof-1.webp";
import sp2 from "../assets/images/social-proof-2.webp";
import sp3 from "../assets/images/social-proof-3.webp";
import sp4 from "../assets/images/social-proof-4.webp";
import sp5 from "../assets/images/social-proof-5.webp";
import sp6 from "../assets/images/social-proof-6.webp";

export default function SocialProof() {
  const proofs = [
    { src: sp1, alt: "Comprovante de entrega no WhatsApp - Dinâmicas Inglês Premium" },
    { src: sp2, alt: "Prova social de entrega no WhatsApp 2" },
    { src: sp3, alt: "Prova social de entrega no WhatsApp 3" },
    { src: sp4, alt: "Prova social de entrega no WhatsApp 4" },
    { src: sp5, alt: "Prova social de entrega no WhatsApp 5" },
    { src: sp6, alt: "Prova social de entrega no WhatsApp 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? proofs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === proofs.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Mobile Optimization
  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="social-proof" className="py-16 md:py-20 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-headline text-gray-900 leading-tight">
            📦 Entregamos direto no WhatsApp
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como nossos clientes recebem seus materiais com segurança e rapidez após a compra.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800 border border-green-200 shadow-sm">
            <CheckCircle className="h-5 w-5" />
            <span>+1.600 entregas realizadas</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-1 sm:px-12">
          {/* Slide Window */}
          <div 
            className="overflow-hidden rounded-2xl p-2 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {proofs.map((proof, index) => (
                <div key={index} className="w-full shrink-0 px-2 sm:px-4">
                  <div className="flex flex-col items-center h-full max-w-[280px] sm:max-w-[320px] mx-auto">
                    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl flex items-center justify-center">
                      <LazyImage
                        alt={proof.alt}
                        width={320}
                        height={568}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="w-full h-full object-contain rounded-2xl hover:scale-102 transition-transform duration-300"
                        containerClassName="w-full h-full"
                        src={proof.src}
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 font-bold mt-3 text-sm sm:text-base">
                      <CheckCircle className="h-5 w-5" />
                      <span>Produto entregue com sucesso</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous / Next Navigation Arrows - Mobile Touch Optimized */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-1 sm:left-[-16px] md:left-[-20px] top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-gray-200 bg-white/95 hover:bg-white text-gray-800 shadow-lg cursor-pointer transition-transform active:scale-90 hover:scale-105 z-10 touch-manipulation"
          >
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-1 sm:right-[-16px] md:right-[-20px] top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-gray-200 bg-white/95 hover:bg-white text-gray-800 shadow-lg cursor-pointer transition-transform active:scale-90 hover:scale-105 z-10 touch-manipulation"
          >
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {proofs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  currentIndex === index ? "w-8 bg-green-600" : "w-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-extrabold text-base sm:text-xl px-6 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-xl w-full sm:w-auto min-h-[52px] transform transition-transform duration-200 active:scale-95 hover:scale-105 border-b-4 border-green-800 uppercase tracking-wide"
          >
            Quero receber o meu também!
          </a>
        </div>
      </div>
    </section>
  );
}
