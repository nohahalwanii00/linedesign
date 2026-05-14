import { useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import type { Project, Category } from '../lib/types';

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Greneery world',
    slug: 'graduation-project',
    description: 'Greenery world is nature therapy center that aims to provide a better psychological life for citizens by using architectural elements of environmental psychology.',
    location: 'Tripoli, Lebanon',
    year: 2025,
    category_id: null,
    hero_image: '/photo3.jpeg',
    thumbnail: '/photo3.jpeg',
    featured: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
    categories: { name: 'Residential', slug: 'residential' }
  },
  {
    id: '2',
    title: 'Al Nasiriyah Compound',
    slug: 'al-nasiriyah-compound',
    description: 'Designed and developed innovative execution drawings for a villa complex in Al Nasiriyah, Riyadh.',
    location: 'Al Nasiriyah - Saudi Arabia',
    year: 2025,
    category_id: null,
    hero_image: '/jj.png',
    thumbnail: '/jj.png',
    featured: false,
    sort_order: 2,
    created_at: new Date().toISOString(),
    categories: { name: 'Residential', slug: 'residential' }
  },
  {
    id: '3',
    title: 'Aurora cultural center',
    slug: 'AURORA CULTURAL CENTER',
    description: 'The design seamlessly balances a high-end, modern aesthetic with warm interior lighting and thoughtfully integrated landscape architecture.',
    location: 'Tripoli, Lebanon',
    year: 2025,
    category_id: null,
    hero_image: '/photo2.jpeg',
    thumbnail: '/photo2.jpeg',
    featured: false,
    sort_order: 3,
    created_at: new Date().toISOString(),
    categories: { name: 'commercial', slug: 'commercial' }
  },
  {
    id: '4',
    title: 'Amber 3390',
    slug: 'amber-3390',
    description: 'developed detailed execution drawings for the amber residentialbuilding.',
    location: 'Tripoli, Lebanon',
    year: 2026,
    category_id: null,
    hero_image: '/b.jpeg',
    thumbnail: '/b.jpeg',
    featured: false,
    sort_order: 4,
    created_at: new Date().toISOString(),
    categories: { name: 'Residential', slug: 'residential' }
  },
  {
    id: '5',
    title: 'W Hotel',
    slug: 'w-hotel',
    description: 'led the technical drawings and documentation for the w hotel project.',
    location: 'Al Riyadh - Saudi Arabia',
    year: 2026,
    category_id: null,
    hero_image: '/h.png',
    thumbnail: '/h.png',
    featured: false,
    sort_order: 5,
    created_at: new Date().toISOString(),
    categories: { name: 'Commercial', slug: 'commercial' }
  },
  {
    id: '6',
    title: 'Hilton Hotel',
    slug: 'hilton-hotel',
    description: 'Led the interior design technical and shop drawings for the Hilton Hotel project.',
    location: 'Makkah - Saudi Arabia',
    year: 2026,
    category_id: null,
    hero_image: '/n.png',
    thumbnail: '/n.png',
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
  const [projects] = useState<Project[]>(SAMPLE_PROJECTS);
  const [categories] = useState<Category[]>(SAMPLE_CATEGORIES);
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
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 mb-12 sm:flex-row sm:items-end lg:mb-16">
          <div className="max-w-xl">
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">Our Work</p>
            <h2 className="text-4xl font-light leading-tight text-white lg:text-5xl">
              Selected Projects
            </h2>
            <div className="w-12 h-px mt-6 bg-amber-400" />
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
              className="relative overflow-hidden cursor-pointer group bg-stone-900"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72 lg:h-80">
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
                  <p className="mb-4 text-sm leading-relaxed text-stone-300 line-clamp-3">{project.description}</p>
                  <div className="flex items-center gap-2 text-amber-400 text-xs tracking-[0.2em] uppercase">
                    <span></span>
                    <ArrowRight size={1} />
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
                  <h3 className="text-lg font-light text-white">{project.title}</h3>
                  <span className="text-amber-400 text-[10px] tracking-wider uppercase shrink-0 mt-1">
                    {project.categories?.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-stone-500">
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
