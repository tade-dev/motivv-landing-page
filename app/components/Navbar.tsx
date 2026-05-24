"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav className={`top${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="logo">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          <circle
            cx="20"
            cy="20"
            r="13"
            stroke="#5B4FFF"
            strokeOpacity="0.45"
            strokeWidth="1.8"
          />
          <path
            d="M 7 20 A 13 13 0 0 1 33 20"
            stroke="#5B4FFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="33" cy="20" r="3.4" fill="#00D4A8" />
        </svg>
        <span>Motivv</span>
      </Link>
      <div className="links">
        <a href="#how" onClick={(e) => handleAnchorClick(e, "#how")}>
          How it works
        </a>
        <a href="#pricing" onClick={(e) => handleAnchorClick(e, "#pricing")}>
          Pricing
        </a>
        <a href="#privacy" onClick={(e) => handleAnchorClick(e, "#privacy")}>
          Privacy
        </a>
        <a href="https://apps.apple.com/gb/app/motivv/id6763412889?mt=12" className="cta">
          Get on Mac App Store
        </a>
      </div>
    </nav>
  );
}
