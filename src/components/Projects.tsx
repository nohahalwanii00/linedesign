import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';
import type { Project, Category } from '../lib/types';

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'GREENERY WORLD',
    slug: 'graduation-project',
    description: 'INTERGATION BETWEEN THE NATURE AND HUMANS BY USING ARCHITECTURAL ELEMENTS OF ENVIRONMENTAL PSYCHOLOGY',
    location: 'Tripoli, Lebanon',
    year: 2025,
    category_id: null,
    hero_image: '/Screenshot 2026-05-12 133039.png',
    thumbnail: '/Screenshot 2026-05-12 133039.png',
    featured: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
    categories: { name: 'Residential', slug: 'residential' }
  },
  {
    id: '2',
    title: 'Al Nasiriyah Compound',
    slug: 'al-nasiriyah-compound',
    description: 'Designed and developed innovative execution drawings for a villa complex in Al Nasiriyah, Riyadh, ensuring precision, clarity, and constructability. Translated architectural concepts into detailed technical documentation, enhancing workflow efficiency and supporting seamless project implementation.',
    location: 'Al Nasiriyah - Saudi Arabia',
    year: 2024,
    category_id: null,
    hero_image: '/Screenshot 2026-05-12 133100.png',
    thumbnail: '/Screenshot 2026-05-12 133100.png',
    featured: false,
    sort_order: 2,
    created_at: new Date().toISOString(),
    categories: { name: 'Residential', slug: 'residential' }
  },
  {
    id: '3',
    title: 'Al Nasiriyah',
    slug: 'al-nasiriyah',
    description: 'Villa complex development in Al Nasiriyah, Riyadh',
    location: 'Al Nasiriyah - Saudi Arabia',
    year: 2024,
    category_id: null,
    hero_image: '/Screenshot 2026-05-12 133241.png',
    thumbnail: '/Screenshot 2026-05-12 133241.png',
    featured: false,
    sort_order: 3,
    created_at: new Date().toISOString(),
    categories: { name: 'Residential', slug: 'residential' }
  },
  {
    id: '4',
    title: 'Amber 3390',
    slug: 'amber-3390',
    description: 'The Amber Residential Building is a 10-floor development featuring two distinct architectural layouts, alternating between selected floors for variety and functional design.',
    location: 'Tripoli, Lebanon',
    year: 2025,
    category_id: null,
    hero_image: '/Screenshot 2026-05-12 133112.png',
    thumbnail: '/Screenshot 2026-05-12 133112.png',
    featured: false,
    sort_order: 4,
    created_at: new Date().toISOString(),
    categories: { name: 'Residential', slug: 'residential' }
  },
  {
    id: '5',
    title: 'W Hotel',
    slug: 'w-hotel',
    description: 'Led the technical drawings and documentation for the W Hotel project, ensuring accuracy, coordination, and constructability across all disciplines. Contributed to the early design phase by supporting conceptual development and translating design ideas into practical architectural solutions.',
    location: 'Al Riyadh - Saudi Arabia',
    year: 2023,
    category_id: null,
    hero_image: '/Screenshot 2026-05-12 133044.png',
    thumbnail: '/Screenshot 2026-05-12 133044.png',
    featured: false,
    sort_order: 5,
    created_at: new Date().toISOString(),
    categories: { name: 'Commercial', slug: 'commercial' }
  },
  {
    id: '6',
    title: 'Hilton Hotel',
    slug: 'hilton-hotel',
    description: 'Led the interior design technical and shop drawings for the Hilton Hotel project, ensuring precision, coordination, and constructability across all spaces. Oversaw the translation of design concepts into detailed interior documentation, supporting seamless execution and high quality outcomes.',
    location: 'Makkah - Saudi Arabia',
    year: 2022,
    category_id: null,
    hero_image: '/Screenshot 2026-05-12 133233.png',
    thumbnail: '/Screenshot 2026-05-12 133233.png',
    featured: false,
    sort_order: 6,
    created_at: new Date().toISOString(),
    categories: { name: 'Interior', slug: 'interior' }
  }
];

const SAMPLE_CATEGORIES: Category[] = [
  { id: '1', name: 'Residential', slug: 'residential', created_at: new Date().toISOString() },
  { id: '2', name: 'Commercial', slug: 'commercial', created_at: new Date().toISOString() },
  { id: '3', name: 'Interior', slug: 'interior', created_at: new Date().toISOString() }
];

export default function Projects() {
  const { ref, inView } = useInView();
  const [projects, setProjects] = useState<Project[]>(SAMPLE_PROJECTS);
  const [categories, setCategories] = useState<Category[]>(SAMPLE_CATEGORIES);
  const [activeSlug, setActiveSlug] = useState('all');
  const [hovered, setHovered] = useState<string | null>(null);

  // useEffect(() => {
  //   supabase
  //     .from('projects')
  //     .select('*, categories(name, slug)')
  //     .order('sort_order')
  //     .then(({ data, error }) => {
  // if (!error && data && data.length > 0) setProjects(data);
  // });

  //   supabase
  //     .from('categories')
  //     .select('*')
  //     .order('name')
  //     .then(({ data, error }) => {
  // if (!error && data && data.length > 0) setCategories(data);
  // });
  // }, []);

  const filtered = activeSlug === 'all'
    ? projects
    : projects.filter(p => p.categories?.slug === activeSlug);

  return (
    <section id="projects" className="py-28 lg:py-36 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">Our Work</p>
            <h2 className="text-white text-4xl lg:text-5xl font-light leading-tight">
              Selected Projects
            </h2>
            <div className="w-12 h-px bg-amber-400 mt-6" />
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {[{ name: 'All', slug: 'all' }, ...categories].map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveSlug(cat.slug)}
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeSlug === cat.slug
                    ? 'border-amber-400 text-amber-400 bg-amber-400/5'
                    : 'border-white/10 text-stone-500 hover:border-white/30 hover:text-stone-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="relative overflow-hidden group cursor-pointer bg-stone-900"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-72 lg:h-80 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hovered === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-stone-950/70 transition-opacity duration-500 ${
                  hovered === project.id ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Hover content */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                  hovered === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <p className="text-stone-300 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex items-center gap-2 text-amber-400 text-xs tracking-[0.2em] uppercase">
                    <span>View Project</span>
                    <ArrowRight size={12} />
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-amber-400 text-stone-950 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="p-5 bg-stone-900">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-light text-lg">{project.title}</h3>
                  <span className="text-amber-400 text-[10px] tracking-wider uppercase shrink-0 mt-1">
                    {project.categories?.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-stone-500 text-xs">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={10} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={10} />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
