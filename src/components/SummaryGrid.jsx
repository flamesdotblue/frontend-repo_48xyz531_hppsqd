import React from 'react';
import { Activity, Utensils, Wallet, BarChart3 } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 text-white ${className}`}
  >
    {children}
  </div>
);

const Sparkline = ({ color = '#22d3ee' }) => (
  <svg viewBox="0 0 100 30" className="w-full h-10">
    <defs>
      <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.7" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
    <polyline
      fill="url(#grad)"
      stroke="none"
      points="0,20 10,15 20,18 30,10 40,14 50,8 60,12 70,9 80,13 90,7 100,10 100,30 0,30"
    />
    <polyline
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      points="0,20 10,15 20,18 30,10 40,14 50,8 60,12 70,9 80,13 90,7 100,10"
    />
  </svg>
);

const SummaryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
              <Utensils className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-white/70">Calories today</p>
          </div>
          <span className="text-xs text-teal-200">-12% vs avg</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold">1,480 kcal</h3>
        <Sparkline color="#2dd4bf" />
        <div className="mt-2 flex justify-between text-[10px] text-white/60">
          <span>Protein 86g</span>
          <span>Carbs 132g</span>
          <span>Fat 42g</span>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-400 to-violet-500 flex items-center justify-center">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-white/70">Health score</p>
          </div>
          <span className="text-xs text-fuchsia-200">+4 this week</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold">82 / 100</h3>
        <Sparkline color="#e879f9" />
        <div className="mt-2 flex justify-between text-[10px] text-white/60">
          <span>Sleep 7.2h</span>
          <span>Steps 8.4k</span>
          <span>Water 2.1L</span>
        </div>
      </Card>

      <Card className="col-span-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <Wallet className="h-4 w-4 text-white" />
            </div>
            <p className="text-xs text-white/70">Monthly cash flow</p>
          </div>
          <span className="text-xs text-sky-200">Goal: $1,200 saved</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-3">
          <div>
            <p className="text-[10px] text-white/60">Income</p>
            <p className="text-base font-semibold">$4,850</p>
          </div>
          <div>
            <p className="text-[10px] text-white/60">Expenses</p>
            <p className="text-base font-semibold">$3,320</p>
          </div>
          <div>
            <p className="text-[10px] text-white/60">Savings</p>
            <p className="text-base font-semibold text-emerald-300">$1,530</p>
          </div>
        </div>
        <div className="mt-2">
          <Sparkline color="#60a5fa" />
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
          <BarChart3 className="h-4 w-4 text-sky-300" />
          Diversified across index funds, bonds, and emergency savings.
        </div>
      </Card>
    </div>
  );
};

export default SummaryGrid;
