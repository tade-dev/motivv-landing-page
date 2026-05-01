import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Motivv",
  description: "Motivv privacy policy. Your data stays on your Mac.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <nav className="top">
        <Link href="/" className="logo">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="13" stroke="#5B4FFF" strokeOpacity="0.45" strokeWidth="1.8" />
            <path d="M 7 20 A 13 13 0 0 1 33 20" stroke="#5B4FFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="33" cy="20" r="3.4" fill="#00D4A8" />
          </svg>
          <span>Motivv</span>
        </Link>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </nav>

      <main className="legal-page">
        <div className="legal-container">
          <p className="legal-eyebrow">PRIVACY POLICY</p>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: 1 May 2026</p>

          <section>
            <h2>Overview</h2>
            <p>
              Motivv is designed with privacy at its core. The app runs entirely
              on your Mac and does not collect, transmit, or store any personal
              data on external servers. This policy explains what data Motivv
              handles, how it is stored, and your rights.
            </p>
          </section>

          <section>
            <h2>Data We Do Not Collect</h2>
            <p>Motivv does not collect:</p>
            <ul>
              <li>Personal information (name, email, phone number)</li>
              <li>Usage analytics or telemetry</li>
              <li>Advertising identifiers</li>
              <li>Crash reports sent to us</li>
              <li>Any data about the content of your work</li>
            </ul>
          </section>

          <section>
            <h2>Data Stored Locally</h2>
            <p>
              Motivv stores session data — including timer duration, work rate
              scores, and app usage summaries — locally on your Mac. This data
              never leaves your device unless you choose to enable iCloud sync.
            </p>
          </section>

          <section>
            <h2>iCloud Sync</h2>
            <p>
              If you enable iCloud sync, your session data is stored in your
              private iCloud container using Apple&apos;s CloudKit framework. This
              data is end-to-end encrypted by Apple and is only accessible by
              devices signed into your Apple Account. The developer has no
              ability to access, read, or decrypt your iCloud data.
            </p>
          </section>

          <section>
            <h2>App Usage Monitoring</h2>
            <p>
              Motivv monitors which applications are in the foreground during a
              focus session to calculate your work rate. This information is
              processed entirely on-device and is stored only as aggregate
              summaries (e.g., &ldquo;Xcode — 45 min&rdquo;). Motivv does not
              record screen content, keystrokes, or any other input.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              Motivv does not integrate with any third-party analytics,
              advertising, or tracking services. The app does not make any
              network requests except those required for iCloud sync (if
              enabled) and Mac App Store license validation.
            </p>
          </section>

          <section>
            <h2>Data Export &amp; Deletion</h2>
            <p>
              You can export your session data as a CSV file at any time from
              within the app. To delete all data, simply delete the app from
              your Mac. If you use iCloud sync, you can remove synced data
              through your iCloud storage settings.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Motivv is not directed at children under 13 and does not knowingly
              collect any information from children.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a href="mailto:hello@motivv.app">hello@motivv.app</a>.
            </p>
          </section>
        </div>
      </main>

      <footer>
        <div className="left">
          <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="13" stroke="#5B4FFF" strokeOpacity="0.45" strokeWidth="2.2" />
            <path d="M 7 20 A 13 13 0 0 1 33 20" stroke="#5B4FFF" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="33" cy="20" r="3.4" fill="#00D4A8" />
          </svg>
          <span>Motivv &middot; v1.0 &middot; &copy; 2026 Tade</span>
        </div>
        <div className="right">Made with care &middot; Shipped with patience</div>
      </footer>
    </>
  );
}
