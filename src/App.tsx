import { useState, useEffect, useCallback, useRef } from "react";

import { RenderSlide } from "./components/RenderSlide";

import { SLIDES, C } from "./lib/common";

function App() {
  const [current, setCurrent] = useState(0);
  const [_, setDir] = useState(1);
  const [transiting, setTransiting] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const containerRef = useRef(null);
  const total = SLIDES.length;

  const goTo = useCallback(
    (idx: any, direction = 1) => {
      if (transiting || idx === current || idx < 0 || idx >= total) return;
      setDir(direction);
      setTransiting(true);
      setOverlay(true);
      setTimeout(() => {
        setCurrent(idx);
        setTimeout(() => {
          setOverlay(false);
          setTransiting(false);
        }, 50);
      }, 280);
    },
    [transiting, current, total],
  );

  const next = useCallback(() => goTo(current + 1, 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1, -1), [goTo, current]);

  useEffect(() => {
    const handler = (e: any) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Touch swipe
  const touchStart = useRef(0);
  const progress = (current / (total - 1)) * 100;

  return (
    <>
      <style />

      {/* Main container */}
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: `linear-gradient(160deg, #FAF6EF 0%, #F2EBD9 100%)`,
          position: "relative",
          fontFamily: "'Lato',sans-serif",
        }}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const dx = touchStart.current - e.changedTouches[0].clientX;
          if (Math.abs(dx) > 50) dx > 0 ? next() : prev();
        }}
      >
        {/* Transition overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: C.gold,
            zIndex: 999,
            opacity: overlay ? 1 : 0,
            transition: "opacity 0.28s ease",
            pointerEvents: overlay ? "all" : "none",
          }}
        />

        {/* Progress bar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `rgba(180,135,40,.15)`,
            zIndex: 200,
          }}
        >
          <div
            className="progress-fill"
            style={{
              height: "100%",
              width: `${progress}%`,
              background: `linear-gradient(90deg,${C.red},${C.gold})`,
            }}
          />
        </div>

        {/* Logo top-left */}
        <div
          style={{
            position: "fixed",
            top: 18,
            left: 36,
            zIndex: 150,
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            letterSpacing: 3,
            color: C.gold,
            textTransform: "uppercase",
          }}
        >
          SFS · Moldova
        </div>

        {/* Author top-right */}
        <div
          style={{
            position: "fixed",
            top: 18,
            right: 36,
            zIndex: 150,
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            letterSpacing: 2,
            color: C.muted,
          }}
        >
          Cristina Abagică · 2026
        </div>

        {/* Slide counter bottom-right */}
        <div
          style={{
            position: "fixed",
            bottom: 28,
            right: 40,
            zIndex: 150,
            fontFamily: "'DM Mono',monospace",
            fontSize: 12,
            letterSpacing: 2,
            color: C.muted,
          }}
        >
          <span style={{ color: C.gold, fontWeight: 700 }}>
            {String(current + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(total).padStart(2, "0")}
        </div>

        {/* Dot navigation left */}
        <div
          style={{
            position: "fixed",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            zIndex: 150,
          }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className={`nav-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              title={s.label}
              style={{
                width: i === current ? 8 : 6,
                height: i === current ? 8 : 6,
                borderRadius: "50%",
                background: i === current ? C.gold : "rgba(180,135,40,.35)",
                animation: i === current ? "pulseDot 2s infinite" : "none",
              }}
            />
          ))}
        </div>

        {/* Slide title bottom-left */}
        <div
          style={{
            position: "fixed",
            bottom: 28,
            left: 80,
            zIndex: 150,
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            letterSpacing: 2,
            color: C.muted,
            textTransform: "uppercase",
          }}
        >
          {SLIDES[current]?.label}
        </div>

        {/* Keyboard hint */}
        <div
          style={{
            position: "fixed",
            bottom: 26,
            left: "50%",
            transform: "translateX(-50%)",
            gap: 8,
            alignItems: "center",
            zIndex: 150,
          }}
          className="hidden lg:flex"
        >
          {[
            ["←", "anterior"],
            ["→", "următor"],
          ].map(([k, l]) => (
            <div
              key={k}
              style={{ display: "flex", gap: 4, alignItems: "center" }}
            >
              <span
                style={{
                  border: `1px solid rgba(180,135,40,.35)`,
                  padding: "1px 6px",
                  borderRadius: 3,
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 10,
                  color: C.gold,
                }}
              >
                {k}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 9,
                  color: C.muted,
                }}
              >
                {l}
              </span>
            </div>
          ))}
        </div>

        {/* Nav buttons */}
        <button
          className="nav-btn"
          onClick={prev}
          disabled={current === 0}
          style={{
            position: "fixed",
            left: 36,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 150,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1.5px solid rgba(180,135,40,.4)`,
            background: C.white,
            color: C.gold,
            fontSize: 18,
            cursor: "pointer",
            transition: "all .2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,.06)",
          }}
        >
          ‹
        </button>
        <button
          className="nav-btn"
          onClick={next}
          disabled={current === total - 1}
          style={{
            position: "fixed",
            right: 36,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 150,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1.5px solid rgba(180,135,40,.4)`,
            background: C.white,
            color: C.gold,
            fontSize: 18,
            cursor: "pointer",
            transition: "all .2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,.06)",
          }}
        >
          ›
        </button>

        {/* Slide container */}
        <div style={{ width: "100%", height: "100%", padding: "52px 0 60px" }}>
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              style={{
                position: "absolute",
                inset: "52px 0 60px",
                opacity: i === current ? 1 : 0,
                pointerEvents: i === current ? "all" : "none",
                transition: "opacity 0.05s",
                overflowY: "auto", // ← scroll instead of clip
                overflowX: "hidden",
              }}
            >
              <RenderSlide id={s.id} active={i === current} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
