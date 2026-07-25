import React, { useState, useEffect } from 'react';
import wistiaPoster from '../assets/images/wistia-poster.webp';

interface WistiaVideoProps {
  mediaId?: string;
  aspect?: string;
}

export default function WistiaVideo({ mediaId = 's0ps4otuen', aspect = '0.5625' }: WistiaVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      // Inject player.js script on demand
      if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
        const script1 = document.createElement('script');
        script1.src = 'https://fast.wistia.com/player.js';
        script1.async = true;
        document.head.appendChild(script1);
      }

      // Inject media embed script on demand
      const embedScriptUrl = `https://fast.wistia.com/embed/${mediaId}.js`;
      if (!document.querySelector(`script[src="${embedScriptUrl}"]`)) {
        const script2 = document.createElement('script');
        script2.src = embedScriptUrl;
        script2.async = true;
        script2.type = 'module';
        document.head.appendChild(script2);
      }
    }
  }, [isPlaying, mediaId]);

  return (
    <div 
      className="w-full max-w-[260px] sm:max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200/80 my-3 bg-black relative min-h-[440px] group cursor-pointer"
      style={{ aspectRatio: "9/16" }}
      onClick={!isPlaying ? handlePlay : undefined}
      role={!isPlaying ? "button" : undefined}
      tabIndex={!isPlaying ? 0 : undefined}
      onKeyDown={!isPlaying ? (e) => { if (e.key === 'Enter' || e.key === ' ') handlePlay(); } : undefined}
      aria-label="Assistir vídeo de apresentação do material"
    >
      {!isPlaying ? (
        <>
          {/* LCP Optimized Poster Thumbnail */}
          <img
            src={wistiaPoster}
            alt="Thumbnail do Vídeo de Apresentação"
            width={280}
            height={498}
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 flex flex-col items-center justify-center p-4">
            {/* Play Button Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 border-4 border-white/90 animate-pulse">
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            <span className="mt-4 text-white font-extrabold text-sm sm:text-base tracking-wide bg-black/60 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/20 shadow-md text-center">
              TOQUE PARA ASSISTIR 🎬
            </span>
          </div>
        </>
      ) : (
        <>
          <style>{`
            wistia-player[media-id='${mediaId}']:not(:defined) {
              background: center / cover no-repeat url('${wistiaPoster}');
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              inset: 0;
            }
          `}</style>
          {React.createElement('wistia-player', {
            'media-id': mediaId,
            aspect: aspect,
            'auto-play': 'true',
          })}
        </>
      )}
    </div>
  );
}
