import React from 'react';
import HeroSection from './components/HeroSection';
import SummaryGrid from './components/SummaryGrid';
import InsightsPanel from './components/InsightsPanel';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1a] text-white">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-md px-4 pb-28 pt-6">
        <HeroSection />

        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white/90">Today’s Dashboard</h2>
            <button className="text-xs text-white/60 hover:text-white/80 transition">Customize</button>
          </div>
          <div className="mt-3">
            <SummaryGrid />
          </div>
        </section>

        <section className="mt-6">
          <InsightsPanel />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
