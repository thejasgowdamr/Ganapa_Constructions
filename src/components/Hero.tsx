import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const highlights = [
  'Decade of Trusted Excellence',
  'MSME Registered',
  'GST & RERA Compliant',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0">
        <img src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" alt="Construction site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/75 to-gray-900/30" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#F5B800' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">

          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded mb-6 border" style={{ backgroundColor: 'rgba(245,184,0,0.15)', borderColor: 'rgba(245,184,0,0.4)', color: '#F5B800' }}>
            One Stop Solution For All Construction Needs
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Building on a <br />
            <span style={{ color: '#F5B800' }}>Legacy</span> of Trust,<br />
            Reliability & Performance
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            Skandapurvaja Buildtech Private Limited — evolved from over a decade of success as Ganapa Construction Company. We deliver landmark residential, commercial, industrial, and infrastructure projects across Bangalore and beyond.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#F5B800' }} />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:opacity-90" style={{ backgroundColor: '#1B3A6B' }}>
              View Our Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+919945968200" className="inline-flex items-center gap-2 border border-white/40 hover:border-white/80 text-white font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:bg-white/10">
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>

        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
          {[
            { value: '10+', label: 'Years of Experience' },
            { value: '100+', label: 'Projects Delivered' },
            { value: '4', label: 'Expert Directors' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="bg-black/40 backdrop-blur-sm px-6 py-5 text-center hover:bg-black/60 transition-colors">
              <p className="text-3xl font-bold" style={{ color: '#F5B800' }}>{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-yellow-400 animate-pulse" />
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </div>

    </section>
  );
}