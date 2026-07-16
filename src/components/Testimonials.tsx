import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'NTT Global Data Centers',
    role: 'Client — Commercial Project, Bangalore',
    quote: 'Skandapurvaja Buildtech delivered our project with exceptional quality and professionalism. Their commitment to timelines and attention to detail sets them apart from other contractors.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    name: 'KIMS Hospital Bangalore',
    role: 'Client — Hospitality & Commercial Project',
    quote: 'Working with Skandapurvaja was a seamless experience. Their team demonstrated deep expertise in large-scale construction with zero compromise on safety and quality standards.',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    name: 'Shreno Ltd — Alembic City',
    role: 'Client — Industrial Project',
    quote: 'From foundation to finish, every detail was handled with precision. The Skandapurvaja team kept us informed at every stage. Highly recommended for complex construction projects.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#F5B800' }}>
            Client Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map(({ name, role, quote, avatar }) => (
            <div key={name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
              <Quote className="w-8 h-8 mb-5" style={{ color: '#F5B800' }} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{quote}"</p>
              <div className="flex items-center gap-4 mt-7 pt-6 border-t border-gray-100">
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm" style={{ color: '#1B3A6B' }}>{name}</p>
                  <p className="text-gray-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Clients */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">Our Valued Clients</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {[
              'NTT Global Data Centers',
              'KIMS Hospital Bangalore',
              'Shreno Ltd',
              'Alembic City',
            ].map((name) => (
              <span key={name} className="font-bold text-base tracking-wider" style={{ color: '#1B3A6B' }}>
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}