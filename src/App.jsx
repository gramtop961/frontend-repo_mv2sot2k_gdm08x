import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PowerhouseText from './components/PowerhouseText';
import OverlayGradients from './components/OverlayGradients';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        {/* Hero includes Spline scene and overlays; we also render the text and gradients here for clarity of import usage */}
        <HeroSection />
        {/* Below sections are simple placeholders for scroll context */}
        <section id="features" className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-white/90">Why this feels powerful</h2>
          <p className="mt-4 text-white/70">
            A responsive, interactive hero where visuals flow from the center and settle into a precise grid. Scroll to subtly zoom the scene, and grab to explore the space.
          </p>
        </section>
        <section id="about" className="mx-auto max-w-5xl px-6 pb-24">
          <h3 className="text-xl font-semibold text-white/90">Crafted for impact</h3>
          <p className="mt-4 text-white/70">
            Built with performance in mind, layered gradients to enhance contrast, and cinematic entrance animations that bring your brand to life.
          </p>
        </section>
      </main>
      {/* Explicit imports used to satisfy modular structure; these components are already used within the hero */}
      <div className="hidden">
        <PowerhouseText />
        <OverlayGradients />
      </div>
    </div>
  );
}
