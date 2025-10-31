import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PowerhouseText from './components/PowerhouseText';
import OverlayGradients from './components/OverlayGradients';

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-24 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{title}</h2>
        <div className="text-white/80 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="relative">
        <HeroSection />
        <PowerhouseText />
        <OverlayGradients />
      </div>

      <Section id="features" title="Features">
        • Explore a high-fidelity 3D scene powered by Spline.
        <br />• Smooth scroll-based zoom and tasteful motion.
        <br />• Responsive overlays that never block interaction.
      </Section>

      <Section id="work" title="Selected Work">
        A curated showcase of interactive canvases and immersive hero sections. Tailored animations, performant rendering, and thoughtful micro-interactions.
      </Section>

      <Section id="contact" title="Contact">
        Ready to build something striking? Reach out and let’s craft an experience that stands out.
      </Section>

      <footer className="py-10 text-center text-white/60 bg-black">
        © {new Date().getFullYear()} Powerhouse. All rights reserved.
      </footer>
    </div>
  );
}
