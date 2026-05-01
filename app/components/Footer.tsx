export default function Footer() {
  return (
    <footer>
      <div className="left">
        <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
          <circle
            cx="20"
            cy="20"
            r="13"
            stroke="#5B4FFF"
            strokeOpacity="0.45"
            strokeWidth="2.2"
          />
          <path
            d="M 7 20 A 13 13 0 0 1 33 20"
            stroke="#5B4FFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="33" cy="20" r="3.4" fill="#00D4A8" />
        </svg>
        <span>Motivv &middot; v1.0 &middot; &copy; 2026 Tade</span>
      </div>
      <div className="right">Made with care &middot; Shipped with patience</div>
    </footer>
  );
}
