/**
 * Shared decorative background: animated aurora blobs + subtle grid.
 * Purely decorative, sits behind content (pointer-events-none, aria-hidden).
 */
function AuroraBackground({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-dark [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Aurora blobs */}
      <div className="aurora-blob animate-aurora absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-brand-600/25 blur-[100px]" />
      <div className="aurora-blob animate-aurora animation-delay-2000 absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-[100px]" />
      <div className="aurora-blob animate-aurora animation-delay-4000 absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[100px]" />
    </div>
  );
}

export default AuroraBackground;
