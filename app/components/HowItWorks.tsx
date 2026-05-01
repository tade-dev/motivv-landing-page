import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="ambient" />
      <div className="container">
        <ScrollReveal>
          <div className="head">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>
              A timer that
              <br />
              understands you.
            </h2>
            <p className="sub">
              Three signals. One score. Real insight into how you actually work.
            </p>
          </div>
        </ScrollReveal>

        <div className="steps">
          <ScrollReveal className="step-card s1" style={{ "--stagger": "0s" } as React.CSSProperties}>
            <div className="num">01</div>
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a39aff" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Start the timer</h3>
            <p>
              Pick a target — 25 min, 90 min, whatever your rhythm is. Motivv
              starts watching how you work.
            </p>
          </ScrollReveal>

          <ScrollReveal className="step-card s2" style={{ "--stagger": "0.12s" } as React.CSSProperties}>
            <div className="num">02</div>
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4A8" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Live work rate</h3>
            <p>
              A real-time score from the apps you use, your focus blocks, and how
              steady you stay. Not just elapsed time.
            </p>
          </ScrollReveal>

          <ScrollReveal className="step-card s3" style={{ "--stagger": "0.24s" } as React.CSSProperties}>
            <div className="num">03</div>
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3>See your patterns</h3>
            <p>
              Six-month heatmap. Streaks. Per-app breakdowns. Find when you
              actually do your best work.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
