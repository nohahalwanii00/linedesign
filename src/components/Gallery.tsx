import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const IMAGES = [
  { url: '/images/Screenshot 2026-05-12 133039.png', span: 'col-span-2 row-span-2'},
  { url: '/images/Screenshot 2026-05-12 133251.png', span: '' },
  { url: '/images/Screenshot 2026-05-12 133241.png', span: '' },
  { url: '/images/Screenshot 2026-05-12 133233.png', span: '' },
  { url: '/images/Screenshot 2026-05-12 133257.png', span: 'col-span-2' },
  { url: '/images/Screenshot 2026-05-12 133138.png', span: '' },
 
];

export default function Gallery() {
  const { ref, inView } = useInView();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">Visual Portfolio</p>
          <h2 className="text-white text-4xl lg:text-5xl font-light leading-tight">Gallery</h2>
          <div className="w-12 h-px bg-amber-400 mt-6" />
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-[200px] lg:auto-rows-[220px] transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {IMAGES.map(({ url, span }, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${span}`}
              onClick={() => setLightbox(url)}
            >
              <img
                src={url}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/50 transition-all duration-400 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors duration-300"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt="Gallery fullscreen"
            className="max-w-full max-h-full object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
