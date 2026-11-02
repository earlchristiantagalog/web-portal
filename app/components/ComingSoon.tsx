"use client";

const css = `
  .rocket-float   { animation: rocketFloat 3s ease-in-out infinite; }
  .rocket-flame   { animation: flameFlicker .25s ease-in-out infinite alternate;
                    transform-box: fill-box; transform-origin: center top; }
  .rocket-smoke   { animation: smokePuff 2.4s ease-out infinite;
                    transform-box: fill-box; transform-origin: center; }
  .rocket-smoke.s2 { animation-delay: .8s; }
  .rocket-smoke.s3 { animation-delay: 1.6s; }
  .star           { animation: twinkle 2s ease-in-out infinite; }
  .star.t2 { animation-delay: .5s; }
  .star.t3 { animation-delay: 1s; }
  .star.t4 { animation-delay: 1.5s; }

  @keyframes rocketFloat {
    0%, 100% { transform: translateY(6px) rotate(-1.5deg); }
    50%      { transform: translateY(-8px) rotate(1.5deg); }
  }
  @keyframes flameFlicker {
    from { transform: scaleY(0.8) scaleX(0.95); opacity: .9; }
    to   { transform: scaleY(1.25) scaleX(1.05); opacity: 1; }
  }
  @keyframes smokePuff {
    0%   { transform: translateY(0) scale(.5); opacity: .7; }
    100% { transform: translateY(18px) scale(1.5); opacity: 0; }
  }
  @keyframes twinkle {
    0%, 100% { opacity: .25; }
    50%      { opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rocket-float, .rocket-flame, .rocket-smoke, .star { animation: none; }
  }
`;

function RocketBadge() {
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      role="img"
      aria-label="Animated rocket"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2d8f" />
          <stop offset="1" stopColor="#8a4fc4" />
        </linearGradient>
        <linearGradient id="body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a79be0" />
          <stop offset="1" stopColor="#7d6fcf" />
        </linearGradient>
        <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde047" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
        <clipPath id="badge">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>

      <g clipPath="url(#badge)">
        <rect width="200" height="200" fill="url(#sky)" />

        {/* Stars */}
        <circle className="star" cx="40" cy="45" r="1.8" fill="#fff" />
        <circle className="star t2" cx="160" cy="55" r="1.5" fill="#fff" />
        <circle className="star t3" cx="150" cy="115" r="1.8" fill="#fff" />
        <circle className="star t4" cx="52" cy="105" r="1.4" fill="#fff" />
        <circle className="star t2" cx="130" cy="28" r="1.3" fill="#fff" />

        {/* Smoke */}
        <circle
          className="rocket-smoke"
          cx="82"
          cy="172"
          r="14"
          fill="#c9b8ec"
        />
        <circle
          className="rocket-smoke s2"
          cx="118"
          cy="174"
          r="16"
          fill="#d6c9f2"
        />
        <circle
          className="rocket-smoke s3"
          cx="100"
          cy="178"
          r="18"
          fill="#c9b8ec"
        />

        {/* Rocket */}
        <g className="rocket-float" style={{ transformOrigin: "100px 110px" }}>
          {/* Flame */}
          <g className="rocket-flame">
            <path d="M88 134 Q100 190 112 134 Z" fill="url(#flame)" />
          </g>

          {/* Fins */}
          <path d="M78 98 L56 132 L80 124 Z" fill="#ef4444" />
          <path d="M122 98 L144 132 L120 124 Z" fill="#ef4444" />

          {/* Body */}
          <path
            d="M100 24 C122 46 128 84 124 126 L76 126 C72 84 78 46 100 24 Z"
            fill="url(#body)"
          />
          {/* Nose */}
          <path
            d="M100 24 C108 33 114 43 117 54 L83 54 C86 43 92 33 100 24 Z"
            fill="#ef4444"
          />
          {/* Window */}
          <circle
            cx="100"
            cy="82"
            r="14"
            fill="#38bdf8"
            stroke="#4c3f9e"
            strokeWidth="4"
          />
          <circle cx="95" cy="77" r="4" fill="#fff" opacity=".6" />
          {/* Base */}
          <rect x="82" y="124" width="36" height="10" rx="3" fill="#3b2d6b" />
        </g>
      </g>
    </svg>
  );
}

export default function CominSoonPage() {
  return (
    <>
      <style>{css}</style>

      <main
        className="d-flex flex-column align-items-center justify-content-center text-center px-3 py-5 bg-body-tertiary"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="mb-3">
          <RocketBadge />
        </div>

        <h1
          className="display-2 fw-bolder text-uppercase text-secondary mb-2"
          style={{ letterSpacing: "0.04em" }}
        >
          Coming Soon
        </h1>

        <p
          className="fw-bold text-uppercase small mb-4"
          style={{ letterSpacing: "0.05em" }}
        >
          This page is under development. Please check back later.
        </p>

        <a
          href="/admindashboard"
          className="btn btn-primary text-white text-uppercase fw-semibold px-4"
        >
          Go Home
        </a>
      </main>
    </>
  );
}
