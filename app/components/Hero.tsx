"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger hero fade-rise animations
    requestAnimationFrame(() => {
      sectionRef.current
        ?.querySelectorAll(".fade-rise")
        .forEach((el) => el.classList.add("in"));
    });

    // Parallax glow effect on mouse move
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const glow1 = section.querySelector<HTMLElement>(".glow-1");
    const glow3 = section.querySelector<HTMLElement>(".glow-3");

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (glow1)
        glow1.style.transform = `translate(calc(-50% + ${x * 24}px), ${y * 18}px)`;
      if (glow3)
        glow3.style.transform = `translate(${x * -16}px, ${y * 12}px)`;
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero" ref={sectionRef}>
      <div className="glow-1" />
      <div className="glow-2" />
      <div className="glow-3" />
      <div className="grid-bg" />

      <div className="inner">
        <div className="badge fade-rise">
          <div className="dot" />
          <span>Now on the Mac App Store &middot; v1.0</span>
        </div>

        <h1 className="fade-rise">
          Know your
          <br />
          work rhythm.
        </h1>

        <p className="lede fade-rise">
          Most timers count your minutes.
          <br />
          Motivv tells you what they were worth.
        </p>

        <div className="ctas fade-rise">
          <a href="#" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05,11.97 C17.0271,9.5 19.0786,8.292 19.1726,8.232 C18.0089,6.5346 16.2071,6.293 15.5572,6.272 C13.9929,6.105 12.4827,7.219 11.6906,7.219 C10.8804,7.219 9.6486,6.291 8.3326,6.318 C6.6195,6.343 5.0334,7.339 4.1656,8.901 C2.376,12.07 3.7104,16.731 5.4324,19.282 C6.2925,20.529 7.3018,21.929 8.6238,21.879 C9.9136,21.825 10.4011,21.038 11.9594,21.038 C13.5057,21.038 13.9651,21.879 15.3091,21.846 C16.6925,21.825 17.5642,20.585 18.3936,19.328 C19.39,17.892 19.7895,16.476 19.8056,16.405 C19.7752,16.394 17.0772,15.384 17.05,11.97 Z M14.5366,4.629 C15.2391,3.766 15.715,2.582 15.5839,1.385 C14.5683,1.43 13.3266,2.072 12.6021,2.916 C11.954,3.661 11.3826,4.876 11.5354,6.034 C12.6664,6.119 13.8128,5.479 14.5366,4.629 Z" />
            </svg>
            Download on Mac App Store
          </a>
          <a
            href="#how"
            className="btn-secondary"
            onClick={(e) => handleAnchorClick(e, "#how")}
          >
            See how it works
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="product fade-rise">
          <div className="product-glow" />
          <div className="mac-window">
            <div className="mac-chrome">
              <span />
              <span />
              <span />
            </div>
            <Image
              src="/hero.png"
              alt="Motivv live timer with real-time work rate"
              width={920}
              height={580}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
