import { Award, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const values = [
  { icon: Award, title: 'Quality First', desc: 'Every project meets international standards with rigorous QA at every stage.' },
  { icon: ShieldCheck, title: 'Safety Driven', desc: 'Zero-compromise on site safety with certified practices and trained personnel.' },
  { icon: Users, title: 'Client Centric', desc: 'Transparent communication and dedicated project managers for each client.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Adopting modern construction methods, BIM technology, and sustainable practices.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Construction work"
                className="rounded-xl w-full h-72 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Architecture"
                className="rounded-xl w-full h-72 object-cover mt-10"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-8 py-4 rounded-xl shadow-xl text-center min-w-48">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm text-amber-100 mt-0.5">Years of Building Trust</p>
            </div>
          </div>

          <div className="pt-8 lg:pt-0">
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Who We Are</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Building India's Future, <br />
              One Structure at a Time
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Skandapurvaja Build Tech Private Limited is a premier civil construction company with over two decades of experience delivering landmark residential complexes, commercial towers, industrial facilities, and critical infrastructure across India.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our legacy is built on an unwavering commitment to engineering excellence, sustainable construction practices, and delivering projects on time within budget — every single time.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/50 transition-colors group">
                  <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-200 transition-colors">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
