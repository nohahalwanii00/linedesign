import {
  Camera,Mail, ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Residential Architecture',
    'Interior Design',
    'Urban Planning',
    'Landscape Design',
    '3D Visualization',
    'Project Management',
  ];

  return (
    <footer className="bg-stone-950 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg width="36" height="36" viewBox="0 0 60 60" fill="none">
                <polygon points="30,4 56,18 56,42 30,56 4,42 4,18" stroke="#d4af7a" strokeWidth="1.5" fill="none"/>
                <rect x="20" y="14" width="8" height="32" stroke="#d4af7a" strokeWidth="1.5" fill="none"/>
                <rect x="32" y="14" width="8" height="32" stroke="#d4af7a" strokeWidth="1.5" fill="none"/>
                <rect x="23" y="18" width="2" height="24" fill="#d4af7a" opacity="0.6"/>
                <rect x="35" y="18" width="2" height="24" fill="#d4af7a" opacity="0.6"/>
              </svg>
              <div className="leading-tight">
                <div className="text-white font-light tracking-[0.25em] text-sm uppercase">Line Design</div>
                <div className="text-stone-500 text-[9px] tracking-[0.3em] uppercase">Architect Abdelrahman Khaled</div>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              A luxury architecture and interior design studio crafting timeless spaces in Tripoli, Lebanon.
            </p>
            <div className="flex items-center gap-3">
              {[
              { icon: Camera, href: '#' },
              
               
                { icon: Mail, href: 'mailto:ArchitectAbdelRahmanKhaled@gmail.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-stone-500 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-500 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s} className="text-stone-500 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-6">Stay Informed</h4>
            <p className="text-stone-500 text-sm leading-relaxed mb-5">
              Subscribe to receive updates on new projects, design insights and studio news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-stone-900 border border-white/10 text-white text-sm px-4 py-2.5 focus:outline-none focus:border-amber-400/60 transition-colors duration-300 placeholder:text-stone-600"
              />
              <button className="bg-amber-400 text-stone-950 px-4 py-2.5 hover:bg-amber-300 transition-colors duration-300">
                <ArrowUp size={14} className="rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            &copy; {new Date().getFullYear()} Line Design &mdash; Architect Abdelrahman Khaled. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-stone-500 hover:text-amber-400 transition-colors duration-300 text-xs tracking-[0.2em] uppercase"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
