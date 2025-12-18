export function SketchPeopleHero() {
  return (
    <svg viewBox="0 0 720 360" className="h-full w-full" role="img" aria-label="Sketch people illustration">
      <defs>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* background blobs */}
      <path d="M92 264c-32-62-9-142 69-170 75-26 155 10 196 63 42 55 50 140-6 182-62 47-219 15-259-75z"
        fill="currentColor" opacity="0.08" />
      <path d="M458 74c70-37 167-7 196 69 28 74-17 166-88 191-79 28-152-27-182-78-29-49-9-141 74-182z"
        fill="currentColor" opacity="0.06" />

      {/* sketch people (simple line art) */}
      <g filter="url(#s)" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
        {/* person 1 */}
        <circle cx="240" cy="150" r="34" />
        <path d="M206 230c8-36 28-52 68-52s60 16 68 52" />
        <path d="M214 144c10 10 18 14 26 14 10 0 18-4 28-14" />
        {/* person 2 */}
        <circle cx="410" cy="132" r="28" />
        <path d="M382 216c7-30 23-44 56-44s49 14 56 44" />
        <path d="M394 128c8 8 14 12 20 12 8 0 14-4 22-12" />
        {/* doodles */}
        <path d="M118 112l18-8 8 18" />
        <path d="M560 246l20 6-6 20" />
        <path d="M336 82l10-14 14 10" />
      </g>

      {/* accent nodes */}
      <g fill="currentColor" opacity="0.25">
        <circle cx="132" cy="248" r="6" />
        <circle cx="598" cy="110" r="6" />
        <circle cx="520" cy="280" r="7" />
      </g>
    </svg>
  );
}
