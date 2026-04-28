import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Industrial'];

const projects = [
  {
    title: 'Greenfield Township — Phase I',
    category: 'Residential',
    location: 'Bengaluru, Karnataka',
    year: '2023',
    area: '42 Acres',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    tag: 'Completed',
  },
  {
    title: 'Metro Rail Viaduct — Corridor 4',
    category: 'Infrastructure',
    location: 'Hyderabad, Telangana',
    year: '2024',
    area: '8.2 km',
    image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    tag: 'Completed',
  },
  {
    title: 'Tech Park — Tower A & B',
    category: 'Commercial',
    location: 'Pune, Maharashtra',
    year: '2024',
    area: '3.8 Lakh sq.ft.',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    tag: 'Ongoing',
  },
  {
    title: 'Pharma Manufacturing Facility',
    category: 'Industrial',
    location: 'Ahmedabad, Gujarat',
    year: '2022',
    area: '12 Acres',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    tag: 'Completed',
  },
  {
    title: 'Skyline Residences — 32 Floors',
    category: 'Residential',
    location: 'Chennai, Tamil Nadu',
    year: '2025',
    area: '2.1 Lakh sq.ft.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    tag: 'Ongoing',
  },
  {
    title: 'National Highway Expansion — NH-44',
    category: 'Infrastructure',
    location: 'Nagpur, Maharashtra',
    year: '2023',
    area: '24 km',
    image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    tag: 'Completed',
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Our Portfolio</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Landmark Projects</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-amber-600 text-white shadow'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                    project.tag === 'Completed'
                      ? 'bg-green-600 text-white'
                      : 'bg-amber-500 text-white'
                  }`}
                >
                  {project.tag}
                </span>
                <span className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{project.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-400">Area: {project.area}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
