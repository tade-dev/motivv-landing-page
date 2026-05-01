import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function BuiltBy() {
  return (
    <section className="builtby">
      <ScrollReveal>
        <div className="inner">
          <p className="eyebrow">BUILT BY</p>
          <div className="author">
            <div className="avatar">
              <Image
                src="/tade-avatar.png"
                alt="Tade"
                width={48}
                height={48}
                style={{ borderRadius: "50%", objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="info">
              <div className="name">Tade</div>
              <div className="role">
                Mobile dev &middot; Manchester, UK &middot; Building in public
              </div>
            </div>
          </div>
          <p>
            Motivv is a one-person operation. If it helps you work better,
            I&apos;d love to hear about it. If it doesn&apos;t, I&apos;d love to
            hear that too.
          </p>
          <div className="builtby-actions">
            <a href="https://x.com/tadeDev_" target="_blank" rel="noopener noreferrer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </a>
            <a href="mailto:tadedev22@gmail.com">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22 6 12 13 2 6" />
              </svg>
              Send feedback
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
