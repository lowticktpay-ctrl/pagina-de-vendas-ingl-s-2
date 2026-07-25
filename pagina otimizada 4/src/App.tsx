import { lazy, Suspense } from "react";
import Hero from "./components/Hero";

// Lazy load below-the-fold components to minimize initial bundle size
const WhatYouGet = lazy(() => import("./components/WhatYouGet"));
const Solution = lazy(() => import("./components/Solution"));
const WhyChoose = lazy(() => import("./components/WhyChoose"));
const Bonuses = lazy(() => import("./components/Bonuses"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const SocialProof = lazy(() => import("./components/SocialProof"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));
const Guarantee = lazy(() => import("./components/Guarantee"));
const Footer = lazy(() => import("./components/Footer"));
const PurchaseNotification = lazy(() => import("./components/PurchaseNotification"));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-950 font-sans selection:bg-green-100 selection:text-green-900 overflow-x-hidden w-full">
      <main className="flex-grow">
        {/* Above the fold: Hero Section rendered immediately */}
        <Hero />

        {/* Below the fold: Lazy loaded sections */}
        <Suspense fallback={<div className="min-h-[100px] bg-white animate-pulse" />}>
          <div className="cv-auto">
            <WhatYouGet />
          </div>

          <div className="cv-auto">
            <Solution />
          </div>

          <div className="cv-auto">
            <WhyChoose />
          </div>

          <div className="cv-auto">
            <Bonuses />
          </div>

          <div className="cv-auto">
            <Testimonials />
          </div>

          <div className="cv-auto">
            <SocialProof />
          </div>

          <div className="cv-auto">
            <Pricing />
          </div>

          <div className="cv-auto">
            <FAQ />
          </div>

          <div className="cv-auto">
            <Guarantee />
          </div>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <div className="cv-auto">
          <Footer />
        </div>
        <PurchaseNotification />
      </Suspense>
    </div>
  );
}
