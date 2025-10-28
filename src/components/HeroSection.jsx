import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-72 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500/10 via-fuchsia-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient top overlay for neon glow, ensure no pointer blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

      <div className="relative z-10 h-full flex items-end">
        <div className="p-5 w-full">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-teal-400 to-fuchsia-500 shadow-[0_0_25px_rgba(56,189,248,0.6)]" />
            <div>
              <h1 className="text-white text-xl font-semibold tracking-tight">NutriWealth</h1>
              <p className="text-white/70 text-xs">AI Lifestyle Companion • Health + Finance</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-white/90 text-sm">Personalized guidance for your meals, money, and momentum.</p>
            </div>
            <button
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md border border-white/20 hover:bg-white/15 transition"
              aria-label="Get AI Suggestion"
            >
              <Sparkles className="h-4 w-4 text-fuchsia-300" />
              Quick Suggest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
