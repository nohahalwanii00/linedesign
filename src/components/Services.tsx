import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Home, Layers, Map, Trees, Monitor, ClipboardList } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import type { Service } from '../lib/types';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Layers,
  Map,
  Trees,
  Monitor,
  ClipboardList,
};

const SAMPLE_SERVICES: Service[] = [
  { id: '1', title: 'Residential Architecture', description: 'Crafting interior spaces that reflect your personality', icon: 'Home', sort_order: 1, created_at: new Date().toISOString() },
  { id: '2', title: 'Commercial Design', description: 'Creating inspiring workspaces that elevate productivity', icon: 'Layers', sort_order: 2, created_at: new Date().toISOString() },
  { id: '3', title: 'Interior Design', description: 'Crafting interior spaces that reflect your personality', icon: 'Monitor', sort_order: 3, created_at: new Date().toISOString() },
  { id: '4', title: 'Urban Planning', description: 'Designing sustainable communities for tomorrow', icon: 'Map', sort_order: 4, created_at: new Date().toISOString() },
  { id: '5', title: 'Landscape Design', description: 'Blending architecture with nature', icon: 'Trees', sort_order: 5, created_at: new Date().toISOString() },
  { id: '6', title: 'Project Management', description: 'End-to-end project delivery with precision', icon: 'ClipboardList', sort_order: 6, created_at: new Date().toISOString() }
];

export default function Services() {
  const { ref, inView } = useInView();
  const [services] = useState<Service[]>(SAMPLE_SERVICES);
  return (
    <section id="services" className="py-28 lg:py-36 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">What We Offer</p>
          <h2 className="text-white text-4xl lg:text-5xl font-light leading-tight">
            Our Services
          </h2>
          <div className="w-12 h-px bg-amber-400 mt-6" />
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Home;
            return (
              <div
                key={service.id}
                className="bg-stone-900 p-8 lg:p-10 group hover:bg-stone-800 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center mb-6 group-hover:border-amber-400 group-hover:bg-amber-400/5 transition-all duration-300">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <h3 className="text-white text-lg font-light mb-3 tracking-wide">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-6 w-0 h-px bg-amber-400 group-hover:w-8 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
