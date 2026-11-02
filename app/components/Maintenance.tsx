const css = `
  .gear-cw  { animation: spinCw 8s linear infinite;
              transform-box: fill-box; transform-origin: center; }
  .gear-ccw { animation: spinCcw 5.33s linear infinite;
              transform-box: fill-box; transform-origin: center; }
  .spark    { animation: twinkle 2s ease-in-out infinite; }
  .spark.t2 { animation-delay: .6s; }
  .spark.t3 { animation-delay: 1.2s; }
  .badge-bob { animation: bob 3s ease-in-out infinite; }

  @keyframes spinCw  { to { transform: rotate(360deg); } }
  @keyframes spinCcw { to { transform: rotate(-360deg); } }
  @keyframes twinkle { 0%, 100% { opacity: .25; } 50% { opacity: 1; } }
  @keyframes bob     { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

  @media (prefers-reduced-motion: reduce) {
    .gear-cw, .gear-ccw, .spark, .badge-bob { animation: none; }
  }
`;

function GearsBadge() {
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      role="img"
      aria-label="Spinning gears"
      className="badge-bob"
    >
      <defs>
        <linearGradient id="mSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2d8f" />
          <stop offset="1" stopColor="#8a4fc4" />
        </linearGradient>
        <clipPath id="mBadge">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>

      <g clipPath="url(#mBadge)">
        <rect width="200" height="200" fill="url(#mSky)" />

        <circle className="spark" cx="38" cy="48" r="1.8" fill="#fff" />
        <circle className="spark t2" cx="165" cy="150" r="1.6" fill="#fff" />
        <circle className="spark t3" cx="45" cy="165" r="1.4" fill="#fff" />
        <circle className="spark t2" cx="160" cy="28" r="1.4" fill="#fff" />

        {/* Big gear */}
        <g className="gear-cw">
          <circle
            cx="82"
            cy="112"
            r="36"
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="9"
            strokeDasharray="10 8.85"
          />
          <circle cx="82" cy="112" r="34" fill="#8b7fd0" />
          <circle cx="82" cy="112" r="12" fill="#3b2d6b" />
          <circle cx="82" cy="112" r="5" fill="#c4b5fd" />
        </g>

        {/* Small gear */}
        <g className="gear-ccw">
          <circle
            cx="137"
            cy="70"
            r="24"
            fill="none"
            stroke="#fda4af"
            strokeWidth="9"
            strokeDasharray="10 8.85"
          />
          <circle cx="137" cy="70" r="22" fill="#ef4444" />
          <circle cx="137" cy="70" r="8" fill="#3b2d6b" />
          <circle cx="137" cy="70" r="3.5" fill="#fda4af" />
        </g>
      </g>
    </svg>
  );
}

export default function UnderMaintenance() {
  return (
    <>
      <style>{css}</style>

      <main
        className="d-flex flex-column align-items-center justify-content-center text-center px-3 py-5 bg-body-tertiary"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="mb-3">
          <GearsBadge />
        </div>

        <h1
          className="display-2 fw-bolder text-uppercase text-secondary mb-2"
          style={{ letterSpacing: "0.04em" }}
        >
          Under Maintenance
        </h1>

        <p
          className="fw-bold text-uppercase small mb-4"
          style={{ letterSpacing: "0.05em" }}
        >
          We&apos;re making some improvements. We&apos;ll be back shortly.
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
