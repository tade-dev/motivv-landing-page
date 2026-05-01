import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Privacy() {
  return (
    <section className="privacy" id="privacy">
      <div className="inner">
        <ScrollReveal>
          <div className="privacy-card">
            <div className="head">
              <div className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4A8" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Private by default.</h3>
            </div>
            <p>
              Motivv runs entirely on your Mac. No accounts, no analytics
              servers, no third-party data sharing. Your sessions sync through
              your private iCloud — end-to-end encrypted by Apple. The developer
              can&apos;t see your data, even if we wanted to.
            </p>
            <div className="links">
              <Link href="/privacy">Privacy Policy &rarr;</Link>
              <Link href="/terms">Terms of Service &rarr;</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
