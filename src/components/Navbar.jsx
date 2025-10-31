import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">Powerhouse</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="px-3 py-1.5 rounded-md bg-white text-black font-medium hover:opacity-90 transition">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
