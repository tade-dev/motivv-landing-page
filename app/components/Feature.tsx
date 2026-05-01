import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Feature() {
  return (
    <section className="feature">
      <div className="feature-grid">
        <ScrollReveal>
          <p className="eyebrow">DASHBOARD</p>
          <h2>
            See six months
            <br />
            at a glance.
          </h2>
          <p className="lede">
            Every session, every streak, every hour of focus — laid out so you
            actually see your patterns. Not just for today. For the long arc.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a39aff" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="label">Activity heatmap</div>
                <div className="desc">
                  GitHub-style 6-month view of your focus days
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a39aff" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="label">Streaks &amp; daily stats</div>
                <div className="desc">
                  Current streak, best streak, today&apos;s focus hours
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a39aff" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="label">Session history with timelines</div>
                <div className="desc">
                  Click any past session, see the full focus curve
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="feature-img-wrap">
          <div className="mac-window">
            <div className="mac-chrome">
              <span />
              <span />
              <span />
            </div>
            <Image
              src="/dashboard.png"
              alt="Motivv dashboard with heatmap and recent sessions"
              width={920}
              height={580}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
