import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-stone-950/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
          <svg width="50" height="50" viewBox="0 0 200 200" fill="none" className="shrink-0">
            <path d="M40 20 L40 180 L60 180 L60 40 L100 40 L100 60 L80 60 L80 160 L160 160 L160 80 L140 80 L140 100 L120 100 L120 140 L100 140 L100 120 L180 120 L180 20 L160 20 L160 100 L180 100 L180 60 L160 60 L160 40 Z" fill="#d4af7a" />
            <path d="M40 20 L40 180 L60 180 L60 40 L100 40 L100 60 L80 60 L80 160 L160 160 L160 80 L140 80 L140 100 L120 100 L120 140 L100 140 L100 120 L180 120 L180 20 L160 20 L160 100 L180 100 L180 60 L160 60 L160 40 Z" fill="#d4af7a" />
          </svg>
          <div className="leading-tight">
            <div className="text-white font-light tracking-[0.25em] text-sm uppercase">Line Design</div>
            <div className="text-stone-400 text-[9px] tracking-[0.35em] uppercase">Architect Abdelrahman Khaled</div>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative group ${
                  active === href.slice(1) ? 'text-amber-400' : 'text-stone-300 hover:text-white'
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300 ${
                  active === href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden lg:flex items-center gap-2 border border-amber-400/60 text-amber-400 text-xs tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-amber-400 hover:text-stone-950 transition-all duration-300"
        >
          Book Consultation
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-stone-950/98 backdrop-blur-sm border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-left text-stone-300 hover:text-amber-400 text-sm tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-2 border border-amber-400/60 text-amber-400 text-xs tracking-[0.2em] uppercase px-5 py-3 hover:bg-amber-400 hover:text-stone-950 transition-all duration-300 w-fit"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
