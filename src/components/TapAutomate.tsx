import "./styles/TapAutomate.css";

const TapAutomate = () => {
  return (
    <section className="tap-section">

      <div className="tap-glow" />

      <div className="tap-inner">

        <p className="tap-eyebrow">CREATOR OF</p>

        <div className="tap-brand">
          <div className="tap-hex">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="32,3 61,18 61,46 32,61 3,46 3,18"
                stroke="url(#hg)" strokeWidth="1.5" fill="rgba(196,129,255,0.07)" />
              <polygon points="32,12 53,23 53,41 32,52 11,41 11,23"
                stroke="rgba(79,255,176,0.3)" strokeWidth="0.8" fill="none" strokeDasharray="3 3" />
              <text x="32" y="38" textAnchor="middle" fill="white"
                fontSize="20" fontWeight="900" fontFamily="monospace">T</text>
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c481ff" />
                  <stop offset="100%" stopColor="#4fffb0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="tap-name">
            <span className="tap-name-tap">TAP</span>
            <span className="tap-name-auto">AUTOMATE</span>
          </h2>
        </div>

        <p className="tap-tagline">
          AI-powered automation platform — built for speed, scale &amp; simplicity.
        </p>

        <a href="https://tapautomate.in" target="_blank" rel="noopener noreferrer" className="tap-link">
          <span>tapautomate.in</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>

      </div>
    </section>
  );
};

export default TapAutomate;
