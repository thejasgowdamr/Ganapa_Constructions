import { Home, Building, Factory, Wrench, Layers, TreePine } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    desc: 'Luxury villas, affordable housing, gated townships, and high-rise apartments built to last generations.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Building,
    title: 'Commercial Buildings',
    desc: 'Corporate offices, IT parks, malls, hotels, and mixed-use developments designed for modern businesses.',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Factory,
    title: 'Industrial Projects',
    desc: 'Factories, warehouses, pharmaceutical plants, and large-scale manufacturing facilities.',
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Layers,
    title: 'Infrastructure Works',
    desc: 'Roads, bridges, flyovers, metro stations, and critical public infrastructure for governments and PSUs.',
    image: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: Wrench,
    title: 'Renovation & Retrofit',
    desc: 'Structural strengthening, MEP upgrades, facade renovation, and complete interior fit-outs.',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
  {
    icon: TreePine,
    title: 'Green Buildings',
    desc: 'LEED and IGBC certified sustainable structures that reduce energy consumption and environmental impact.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive Construction Services
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From concept to completion, we deliver end-to-end construction solutions across every sector — backed by our deep engineering expertise and cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, desc, image }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <button className="mt-4 text-amber-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
