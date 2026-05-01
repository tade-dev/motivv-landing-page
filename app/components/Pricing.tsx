import ScrollReveal from "./ScrollReveal";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="ambient" />
      <div className="inner">
        <ScrollReveal>
          <p className="eyebrow">PRICING</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>
            £7.99.
            <br />
            Yours forever.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Most productivity apps charge that monthly. Motivv charges it once.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="price-card">
            <div className="pill">ONE-TIME PURCHASE</div>

            <div className="price-row">
              <div className="price">£7.99</div>
              <div className="forever">forever</div>
            </div>
            <p className="sub-line">
              No subscriptions. No upsells. No &ldquo;lifetime access&rdquo;
              trick.
            </p>

            <div className="feat-list">
              <div className="feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4A8" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                Real-time work rate scoring
              </div>
              <div className="feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4A8" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                Six-month activity heatmap
              </div>
              <div className="feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4A8" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                App-level focus tracking
              </div>
              <div className="feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4A8" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                Menu bar dashboard, CSV export, iCloud sync
              </div>
              <div className="feat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4A8" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                Every future v1.x update included
              </div>
            </div>

            <a href="#" className="cta">
              Get on Mac App Store
            </a>
            <p className="small">Free download &middot; Unlock with one purchase</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
