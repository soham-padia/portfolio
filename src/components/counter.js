// src/lib/counter.js
const API_BASE = "https://api.counterapi.dev/v2";
const WORKSPACE = "pesonal-website";           // keep your (typo) ID
const NAME = "portfolio-soham-padia";

// --- helpers -------------------------------------------------
const todayKey = "lastCountedDay";
const myKey = "myVisits";

function todayISO() { return new Date().toISOString().slice(0, 10); }

export async function upViaFetch() {
  const url = `${API_BASE}/${WORKSPACE}/${NAME}/up`;
  const r = await fetch(url, { method: "GET", credentials: "omit", cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return true;
}

// Fallback for adblock/CORS: image GET to /up (we can't read the result, but it increments)
export function upViaImage() {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.referrerPolicy = "no-referrer";
    img.onload = () => resolve(true);
    img.onerror = () => reject(new Error("img error"));
    img.src = `${API_BASE}/${WORKSPACE}/${NAME}/up?cb=${Date.now()}`;
  });
}

export async function bumpOncePerDay() {
  try {
    if (localStorage.getItem(todayKey) === todayISO()) return false;

    // try fetch first, fall back to image ping if blocked
    let ok = false;
    try { ok = await upViaFetch(); } catch { /* blocked or CORS */ }
    if (!ok) {
      try { ok = await upViaImage(); } catch { /* also blocked */ }
    }
    if (ok) {
      localStorage.setItem(todayKey, todayISO());
      const mine = Number(localStorage.getItem(myKey) || 0) + 1;
      localStorage.setItem(myKey, String(mine));
    }
    return ok;
  } catch {
    return false;
  }
}

function extractTotals(statsJson) {
  const d = statsJson?.data || statsJson;
  const s = d?.stats || d;

  const candidates = [
    d?.up_count, s?.up_count, s?.total?.up, s?.totals?.up, s?.all_time?.up,
    s?.lifetime?.up, s?.summary?.up,
  ].filter((n) => typeof n === "number");

  const series = s?.by_day || s?.days || s?.daily || s?.series || s?.timeline || [];
  let seriesSum = 0;
  if (Array.isArray(series)) {
    seriesSum = series.reduce((acc, item) => {
      const v = typeof item?.up === "number" ? item.up :
                typeof item?.value === "number" ? item.value : 0;
      return acc + v;
    }, 0);
  } else if (series && typeof series === "object") {
    seriesSum = Object.keys(series).reduce((acc, k) => acc + (series[k]?.up || 0), 0);
  }

  const total = candidates.length ? Math.max(...candidates) : (seriesSum || null);
  const today = s?.today?.up ?? null;
  return { total, today };
}

export async function getTotals() {
  const url = `${API_BASE}/${WORKSPACE}/${NAME}/stats`;
  const r = await fetch(url, { cache: "no-store", credentials: "omit" });
  const j = await r.json().catch(() => ({}));
  return extractTotals(j);
}

export function myVisits() {
  return Number(localStorage.getItem(myKey) || 0);
}
