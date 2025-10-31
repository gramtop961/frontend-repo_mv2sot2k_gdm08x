import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-semibold text-white/90">Powerhouse</span>
        </div>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/15">
          Get Started
        </button>
      </div>
    </header>
  );
}
