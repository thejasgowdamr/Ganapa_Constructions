import { Clock, BadgeCheck, Cpu, HeartHandshake, Globe, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Milestone-based tracking and proactive risk management ensure 97% of our projects are delivered on or ahead of schedule.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Excellence',
    desc: 'ISO 9001, ISO 14001, OHSAS 18001 certified. We follow international quality management systems at every site.',
  },
  {
    icon: Cpu,
    title: 'Technology-Driven',
    desc: 'BIM modeling, drone surveying, ERP project management, and advanced structural analysis tools for precision builds.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Partnership',
    desc: 'A dedicated project manager and real-time portal access keeps clients informed at every stage of construction.',
  },
  {
    icon: Globe,
    title: 'Pan India Reach',
    desc: 'Active operations across 12 states with regional offices in Bengaluru, Mumbai, Hyderabad, and Delhi NCR.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    desc: 'Green building materials, waste reduction programs, and energy-efficient designs in every project we build.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            The Skandapurvaja Difference
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            What sets us apart is not just what we build — it's how we build. Our culture of accountability, innovation, and client focus drives everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-amber-600/10 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 group-hover:bg-amber-600 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 w-8 h-0.5 bg-amber-600/40 group-hover:w-16 group-hover:bg-amber-500 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
            <p className="text-amber-100 text-sm">Talk to our experts today for a free site assessment and detailed estimate.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-amber-700 font-bold px-8 py-3.5 rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
