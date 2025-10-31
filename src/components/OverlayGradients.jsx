export default function OverlayGradients() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      {/* Left gradient */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-black/40 to-transparent" />
      {/* Right gradient */}
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black/40 to-transparent" />
      {/* Center radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
    </div>
  );
}
