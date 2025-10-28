import React from 'react';
import { Home, Utensils, Wallet, BarChart3, User } from 'lucide-react';

const Tab = ({ icon: Icon, label, active = false }) => (
  <button
    className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 text-xs transition ${
      active ? 'text-white' : 'text-white/60 hover:text-white/80'
    }`}
    aria-label={label}
  >
    <div
      className={`h-9 w-9 rounded-xl flex items-center justify-center border ${
        active
          ? 'bg-gradient-to-br from-teal-400 to-fuchsia-500 border-white/20 shadow-[0_0_20px_rgba(236,72,153,0.35)]'
          : 'bg-white/5 border-white/10'
      }`}
    >
      <Icon className="h-4 w-4" />
    </div>
    <span>{label}</span>
  </button>
);

const BottomNav = () => {
  return (
    <nav className="fixed bottom-4 left-0 right-0 mx-auto max-w-md px-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white grid grid-cols-5">
        <Tab icon={Home} label="Home" active />
        <Tab icon={Utensils} label="Food" />
        <Tab icon={Wallet} label="Finance" />
        <Tab icon={BarChart3} label="Insights" />
        <Tab icon={User} label="Profile" />
      </div>
    </nav>
  );
};

export default BottomNav;
