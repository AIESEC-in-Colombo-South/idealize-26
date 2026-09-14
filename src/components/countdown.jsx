import { useState, useEffect } from "react";
import WalkingSpider from "./spiderwalk";

// ==========================================
// --- CENTRAL CONFIGURATION ---
// Update these values as the event phases change
// ==========================================
const CONFIG = {
  // Use ISO 8601 format. By default, this uses the user's local timezone.
  // TODO: set the exact finals start time if it's not midnight.
  finalsDate: new Date("2026-09-20T08:00:00"),

  labels: {
    closingInMsg: "Finals begin in",
  },
};

// ==========================================
// --- LOGIC HOOK ---
// ==========================================
function useCountdown(targetDate) {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

// ==========================================
// --- UI COMPONENTS ---
// ==========================================
function Digit({ value, label, bgIcon }) {
  return (
    <div
      className="group relative p-1"
      style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.5), rgba(212,175,55,0) 70%)" }}
    >
      <div className="bg-surface relative overflow-hidden flex flex-col items-center justify-center py-4 px-2 md:py-8 md:px-6">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
          <span className="material-symbols-outlined text-[4rem] md:text-[8rem]" style={{ color: "#d4af37" }}>{bgIcon}</span>
        </div>
        <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2" style={{ borderColor: "#d4af37" }}></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2" style={{ borderColor: "#f8d675" }}></div>
        <div
          className="font-headline font-black text-3xl md:text-7xl tabular-nums relative z-10"
          style={{
            background: "linear-gradient(135deg, #fceabb 0%, #f8d675 30%, #d4af37 55%, #f8d675 80%, #fceabb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 18px rgba(212,175,55,0.55))"
          }}
        >
          {String(value).padStart(2, "0")}
        </div>
        <div
          className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.3em] font-bold mt-2 md:mt-3 relative z-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#c9a84c" }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(CONFIG.finalsDate);

  const units = [
    { value: days,    label: "Days",    bgIcon: "calendar_today" },
    { value: hours,   label: "Hours",   bgIcon: "schedule"       },
    { value: minutes, label: "Minutes", bgIcon: "timer"          },
    { value: seconds, label: "Seconds", bgIcon: "bolt"           },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center py-12 md:py-32 relative" id="countdown">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Golden Finals Title + smaller date underneath, both gold gradient */}
        <div className="text-center mb-8 md:mb-10">
          <h2
            className="font-headline font-black text-3xl md:text-6xl uppercase tracking-wide"
            style={{
              background: "linear-gradient(135deg, #fceabb 0%, #f8d675 25%, #d4af37 50%, #f8d675 75%, #fceabb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(212,175,55,0.45)",
              filter: "drop-shadow(0 0 12px rgba(212,175,55,0.35))"
            }}
          >
            The Finals
          </h2>
          <p
            className="font-headline font-bold text-sm md:text-lg uppercase tracking-wide mt-2"
            style={{
              background: "linear-gradient(135deg, #fceabb 0%, #f8d675 25%, #d4af37 50%, #f8d675 75%, #fceabb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 8px rgba(212,175,55,0.35))"
            }}
          >
            September 20
          </p>
        </div>

        {/* Status label — only shown before the countdown finishes */}
        {!isExpired && (
          <p
            className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-center mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#64748b" }}
          >
            {CONFIG.labels.closingInMsg}
          </p>
        )}

        {/* Countdown */}
        {!isExpired && (
          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
            {units.map((unit) => (
              <Digit key={unit.label} {...unit} />
            ))}
          </div>
        )}

        {/* Spider Theme Component */}
        <div className="mt-16">
          <WalkingSpider count={1} size={80} speeds={[0.04, 0.07]} />
        </div>

      </div>
    </section>
  );
}