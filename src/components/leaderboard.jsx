const podium = [
  {
    place: 2,
    label: "2nd",
    name: "Sanusha Senarathna",
    team: "Procrastinators",
    tier: "silver",
    order: "order-1",
    earned: 213,
    bonus: 0,
    score: 213,
  },
  {
    place: 1,
    label: "1st",
    name: "Vishwa Kumar",
    team: "Knurdz Neural",
    tier: "gold",
    order: "order-2",
    earned: 220,
    bonus: 0,
    score: 220,
  },
  {
    place: 3,
    label: "3rd",
    name: "I. A Saajidh",
    team: "VORTEX",
    tier: "bronze",
    order: "order-3",
    earned: 211,
    bonus: 0,
    score: 211,
  },
];

const tierStyles = {
  gold: {
    border: "border-yellow-500/40 hover:border-yellow-400/80",
    corner: "border-yellow-400",
    text: "text-yellow-300",
    card: "card-gold",
  },
  silver: {
    border: "border-slate-400/30 hover:border-slate-300/70",
    corner: "border-slate-300",
    text: "text-slate-200",
    card: "card-silver",
  },
  bronze: {
    border: "border-amber-600/30 hover:border-amber-500/70",
    corner: "border-amber-500",
    text: "text-amber-400",
    card: "card-bronze",
  },
};

const CARD_HEIGHT = "min-h-[210px] sm:min-h-[260px] md:min-h-[320px]";

export default function Leaderboard() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-6" id="leaderboard">
      <style>{`
        @keyframes podiumPulseGold {
          0%, 100% { box-shadow: 0 0 20px rgba(234,179,8,0.14), inset 0 0 20px rgba(234,179,8,0.04); }
          50%       { box-shadow: 0 0 48px rgba(234,179,8,0.40), inset 0 0 34px rgba(234,179,8,0.11); }
        }
        @keyframes podiumPulseSilver {
          0%, 100% { box-shadow: 0 0 14px rgba(203,213,225,0.09), inset 0 0 14px rgba(203,213,225,0.03); }
          50%       { box-shadow: 0 0 34px rgba(203,213,225,0.26), inset 0 0 24px rgba(203,213,225,0.07); }
        }
        @keyframes podiumPulseBronze {
          0%, 100% { box-shadow: 0 0 14px rgba(217,119,6,0.09), inset 0 0 14px rgba(217,119,6,0.03); }
          50%       { box-shadow: 0 0 34px rgba(217,119,6,0.26), inset 0 0 24px rgba(217,119,6,0.07); }
        }
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .card-gold   { animation: podiumPulseGold 3s ease-in-out infinite; }
        .card-silver { animation: podiumPulseSilver 3.4s ease-in-out infinite; }
        .card-bronze { animation: podiumPulseBronze 3.8s ease-in-out infinite; }

        .podium-enter { animation: floatUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .podium-enter:nth-child(1) { animation-delay: 0.15s; }
        .podium-enter:nth-child(2) { animation-delay: 0s; }
        .podium-enter:nth-child(3) { animation-delay: 0.3s; }

        @media (prefers-reduced-motion: reduce) {
          .card-gold, .card-silver, .card-bronze,
          .podium-enter { animation: none; }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto w-full relative">
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-20 flex flex-col items-center text-center px-2">
          <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-indigo-400 mb-2 sm:mb-3">
            LeaderBoard
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Spotlight{" "}<span className="text-blue-500">challenge</span>
          </h2>
          <div className="h-px w-20 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-4 sm:mt-5" />
        </div>

        {/* Podium — always a true 3-column layout, scales down for mobile */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 items-end max-w-3xl mx-auto pt-6 sm:pt-8 md:pt-10">
          {podium.map((p) => {
            const s = tierStyles[p.tier];
            return (
              <div
                key={p.place}
                className={`${p.order} podium-enter ${
                  p.place === 1 ? "-translate-y-4 sm:-translate-y-7 md:-translate-y-10" : ""
                }`}
              >
                <div
                  className={`${s.card} ${CARD_HEIGHT} relative flex flex-col items-center text-center p-2.5 sm:p-5 md:p-8 bg-slate-900 border ${s.border} transition-colors duration-300 group overflow-hidden`}
                >
                  {/* HUD corners */}
                  <div className={`absolute top-0 left-0 w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t-2 border-l-2 ${s.corner} opacity-50 transition-all duration-300 group-hover:w-6 group-hover:h-6 md:group-hover:w-8 md:group-hover:h-8`} />
                  <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b-2 border-r-2 ${s.corner} opacity-50 transition-all duration-300 group-hover:w-6 group-hover:h-6 md:group-hover:w-8 md:group-hover:h-8`} />

                  <div className="flex flex-col items-center flex-1 justify-center min-h-0">
                    <span className={`${s.text} text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] mb-1 sm:mb-2`}>
                      {p.label} Place
                    </span>

                    <div className="flex items-center justify-center min-h-[22px] sm:min-h-[34px] md:min-h-[52px] px-0.5">
                      <h3
                        className="font-black text-[10px] sm:text-sm md:text-xl uppercase tracking-tight text-white leading-tight break-words"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {p.name}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-[8px] sm:text-xs md:text-sm leading-relaxed mt-0.5 sm:mt-1 break-words px-0.5">
                      {p.team}
                    </p>
                  </div>

                  {/* Scoreboard readout */}
                  <div className="mt-1.5 sm:mt-4 md:mt-6 pt-1.5 sm:pt-4 md:pt-5 border-t border-white/10 w-full flex flex-col items-center shrink-0">
                    <span className="text-slate-500 text-[6px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] mb-0.5 sm:mb-1">
                      Score
                    </span>
                    <span
                      className={`${s.text} font-black text-base sm:text-2xl md:text-4xl font-mono tabular-nums leading-none`}
                    >
                      {p.score}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}