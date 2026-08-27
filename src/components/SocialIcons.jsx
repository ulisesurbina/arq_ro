export function InstagramIcon({ size = 17, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 17, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M13.8 21v-6.8h2.2l.3-2.6h-2.5V9.9c0-.75.2-1.27 1.28-1.27h1.37V5.9c-.24-.03-1.05-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.9H8.9v2.6h2.27V21" />
    </svg>
  );
}