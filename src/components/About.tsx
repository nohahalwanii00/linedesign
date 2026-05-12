import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 lg:py-36 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Architecture studio"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
            </div>
            {/* Accent frame */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-amber-400/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-28 h-28 border border-stone-700/60 -z-10" />

            {/* Badge */}
            <div className="absolute bottom-8 left-8 bg-stone-950/90 backdrop-blur-sm border border-white/10 px-6 py-5">
              <div className="text-3xl font-light text-amber-400">2+</div>
              <div className="text-stone-300 text-xs tracking-[0.2em] uppercase mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">About the Studio</p>
            <h2 className="text-white text-4xl lg:text-5xl font-light leading-tight mb-8">
              Designing Spaces<br/>
              <span className="italic text-stone-300">That Endure</span>
            </h2>

            <div className="w-12 h-px bg-amber-400 mb-8" />

            <p className="text-stone-400 leading-relaxed mb-6">
              Line Design is a tripoli-based architecture and interior design studio founded by Architect Abdelrahman Khaled. We are driven by a deep belief that great architecture is not merely about form — it is about the quality of life it creates.
            </p>
            <p className="text-stone-400 leading-relaxed mb-10">
              Our approach fuses meticulous spatial thinking with a refined material sensibility. From bespoke private residences to landmark commercial towers, every project is an opportunity to craft something singular and lasting.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Vision-Led', desc: 'Every design begins with understanding your vision and translating it into spatial reality.' },
                { title: 'Detail-Obsessed', desc: 'We believe architecture lives in its details — proportions, junctions, materiality.' },
                { title: 'Collaborative', desc: 'We build close partnerships with clients, engineers and craftspeople throughout.' },
                { title: 'Enduring', desc: 'We design for longevity — aesthetically, structurally and environmentally.' },
              ].map(({ title, desc }) => (
                <div key={title} className="border-l-2 border-amber-400/40 pl-4">
                  <div className="text-white text-sm font-medium mb-1">{title}</div>
                  <div className="text-stone-500 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-amber-400/60 text-amber-400 text-xs tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-amber-400 hover:text-stone-950 transition-all duration-300"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
