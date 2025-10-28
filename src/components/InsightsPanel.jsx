import React, { useState } from 'react';
import { Bot, Mic, Send, Sparkles } from 'lucide-react';

const InsightItem = ({ title, desc, colorFrom, colorTo }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-1 h-8 w-8 rounded-xl bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center text-white/90`}> 
      <Sparkles className="h-4 w-4" />
    </div>
    <div>
      <p className="text-sm font-medium text-white/90">{title}</p>
      <p className="text-xs text-white/60">{desc}</p>
    </div>
  </div>
);

const InsightsPanel = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'I can help plan your meals and investments. Ask me anything!' }
  ]);

  const onSend = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: 'user', content: input.trim() }, { role: 'assistant', content: 'This is a preview. In a full build, I will analyze your data and generate actionable steps.' }]);
    setInput('');
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-violet-300" />
            <h3 className="text-sm font-semibold">AI Insights</h3>
          </div>
          <span className="text-xs text-white/60">Personalized tips</span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3">
          <InsightItem
            title="Healthy dining option"
            desc="From your favorite restaurant: Grilled salmon bowl matches your protein goal and keeps sodium low."
            colorFrom="from-teal-400" colorTo="to-cyan-500"
          />
          <InsightItem
            title="Smart investment move"
            desc="Allocate 10% more to broad-market index funds to hit your 12-month savings target with lower risk."
            colorFrom="from-fuchsia-400" colorTo="to-violet-500"
          />
          <InsightItem
            title="Budget reminder"
            desc="Utilities bill due in 3 days. Paying early saves $5 in late fees this month."
            colorFrom="from-blue-400" colorTo="to-indigo-500"
          />
        </div>
      </div>

      {/* Chat mini widget */}
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 text-white">
        <div className="mb-2 flex items-center gap-2">
          <Bot className="h-5 w-5 text-fuchsia-300" />
          <p className="text-sm font-semibold">Ask LifeLedger AI</p>
        </div>
        <div className="h-28 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`text-xs ${m.role === 'assistant' ? 'text-white/70' : 'text-white/90'}`}>
              <span className="font-medium">{m.role === 'assistant' ? 'AI' : 'You'}: </span>
              {m.content}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button
            className="shrink-0 h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/15 transition"
            aria-label="Voice input"
          >
            <Mic className="h-4 w-4 text-pink-300" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSend()}
            placeholder="Ask about meals, budgets, or goals..."
            className="flex-1 h-10 rounded-xl bg-white/10 border border-white/20 px-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
          />
          <button
            onClick={onSend}
            className="shrink-0 h-10 px-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white text-sm font-medium hover:opacity-95 transition"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
