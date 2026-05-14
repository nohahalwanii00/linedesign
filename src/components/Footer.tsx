import {
  Mail, ArrowUp
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
    <footer className="border-t bg-stone-950 border-white/5">
      {/* Main footer */}
      <div className="px-6 pt-16 pb-10 mx-auto max-w-7xl lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logoo.png" alt="Line Design Logo" className="shrink-0" style={{ width: '80px', height: '60px' }} />
              <div className="leading-tight">
                <div className="text-white font-light tracking-[0.25em] text-sm uppercase">Line Design</div>
                <div className="text-stone-500 text-[9px] tracking-[0.3em] uppercase">Architect Abdelrahman Khaled</div>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-stone-500">
              A luxury architecture and interior design studio crafting timeless spaces in Tripoli, Lebanon.
            </p>
            <div className="flex items-center gap-3">
              {[
          
                { icon: Mail, href: 'mailto:Linedesign.lb@gmail.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center justify-center transition-all duration-300 border w-9 h-9 border-white/10 text-stone-500 hover:border-amber-400/50 hover:text-amber-400"
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
                    className="text-sm transition-colors duration-300 text-stone-500 hover:text-amber-400"
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
                <li key={s} className="text-sm text-stone-500">{s}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-6">Stay Informed</h4>
            <p className="mb-5 text-sm leading-relaxed text-stone-500">
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
        <div className="flex flex-col items-center justify-between gap-4 px-6 py-5 mx-auto max-w-7xl lg:px-10 sm:flex-row">
          <p className="text-xs text-stone-600">
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
