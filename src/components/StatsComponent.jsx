// src/components/StatsComponent.jsx
import React, { useEffect, useRef, useState } from "react";
import { Glass } from "./glass";
import { getTotals, myVisits } from "./counter";

const StatRow = ({ big, label }) => (
  <div className="flex items-baseline gap-3">
    <p className="tabular-nums font-extrabold text-3xl md:text-4xl">{big}</p>
    <p className="text-lg font-medium opacity-80">{label}</p>
  </div>
);

const StatsComponent = ({ className = "" }) => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);
  const [today, setToday] = useState(null);
  const [mine, setMine] = useState(myVisits());
  const ran = useRef(false); // StrictMode guard

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    let alive = true;
    (async () => {
      const { total: T, today: D } = await getTotals().catch(() => ({ total: null, today: null }));
      if (!alive) return;
      setTotal(T ?? 0);
      setToday(D ?? 0);
      setMine(myVisits());
      setLoading(false);
    })();

    return () => { alive = false; };
  }, []);

  return (
    <Glass className={`p-5 flex flex-col justify-between ${className}`}>
      <div>
        <h2 className="font-mono font-light text-2xl mb-4">Visitor Stats</h2>

        {loading ? (
          <div className="grid gap-3 animate-pulse">
            <div className="h-7 w-24 rounded bg-white/10" />
            <div className="h-6 w-20 rounded bg-white/10" />
            <div className="h-6 w-24 rounded bg-white/10" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            <StatRow big={total ?? "—"} label="Total Views" />
            <StatRow big={today ?? "—"} label="Today" />
            <StatRow big={mine} label="Your Visits (this browser)" />
          </div>
        )}
      </div>
      <p className="mt-4 text-sm opacity-60">
        Dev note: StrictMode can double-run effects; this component guards against that.
      </p>
    </Glass>
  );
};

export default StatsComponent;
