import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Parallax background */}
      <div
        ref={videoRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img
          src="/Screenshot 2026-05-13 125550.png"
          alt="Architecture"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-transparent" />

      {/* Decorative lines */}
      <div className={`absolute left-10 top-1/4 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent transition-all duration-1000 delay-700 ${loaded ? 'h-32 opacity-100' : 'h-0 opacity-0'}`} />
      <div className={`absolute right-10 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent transition-all duration-1000 delay-700 ${loaded ? 'h-32 opacity-100' : 'h-0 opacity-0'}`} />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <svg width="180" height="180" viewBox="0 0 400 400" fill="none" className="mb-8">
            <path d="M100 100 L100 300 L130 330 L330 330 L330 130 L300 100 L100 100 Z" stroke="#d4af7a" strokeWidth="8" fill="none"/>
            <path d="M160 140 L160 260 L190 290 L220 290 L220 170 L190 140 L160 140 Z" stroke="#d4af7a" strokeWidth="8" fill="none"/>
            <path d="M220 170 L220 290 L250 290 L250 170 Z" fill="#d4af7a" stroke="#d4af7a" strokeWidth="4"/>
            <path d="M270 120 L270 320 L300 330 L300 130 Z" fill="#d4af7a" stroke="#d4af7a" strokeWidth="4"/>
            <path d="M270 120 L300 130 L300 210 L270 200 L270 120 Z" stroke="#d4af7a" strokeWidth="8" fill="none"/>
          </svg>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-white font-light leading-[1.05]">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">Where Lines</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-amber-100 mt-1">Become</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mt-1">
              <span className="italic font-extralight text-amber-400">Architecture.</span>
            </span>
          </h1>
        </div>

        <div className={`mt-8 max-w-lg transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-stone-300 text-base font-light leading-relaxed tracking-wide">
            Luxury architecture and interior design studio crafting timeless spaces that blend precision, materiality, and human experience.
          </p>
        </div>

        <div className={`mt-10 flex items-center gap-5 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-400 text-stone-950 text-xs tracking-[0.2em] uppercase px-8 py-4 font-medium hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 font-light hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className={`mt-16 flex gap-10 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { number: '10+', label: 'Projects Delivered' },
            { number: '1', label: 'Years Experience' },
            { number: '1', label: 'Design Awards' },
          ].map(({ number, label }) => (
            <div key={label}>
              <div className="text-2xl font-light text-amber-400">{number}</div>
              <div className="text-stone-400 text-xs tracking-[0.15em] uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
