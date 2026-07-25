import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  delayMs?: number;
  containerClassName?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
}

export default function LazyImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  delayMs = 0,
  loading = "lazy",
  width,
  height,
  ...props
}: LazyImageProps) {
  const [shouldLoad, setShouldLoad] = useState(loading === "eager");
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldLoad) return;
    let timeoutId: ReturnType<typeof setTimeout>;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              timeoutId = setTimeout(() => {
                setShouldLoad(true);
              }, delayMs);
            } else {
              setShouldLoad(true);
            }
            observer.disconnect();
          }
        });
      },
      { rootMargin: "300px 0px" } // Trigger 300px before entering viewport for seamless render
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delayMs, shouldLoad]);

  const aspectRatioStyle =
    width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  return (
    <div
      ref={containerRef}
      style={aspectRatioStyle}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      {shouldLoad ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          {...props}
        />
      ) : null}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100/80 animate-pulse rounded-xl pointer-events-none" />
      )}
    </div>
  );
}
