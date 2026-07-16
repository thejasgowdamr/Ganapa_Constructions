import { Clock, BadgeCheck, Cpu, HeartHandshake, MapPin, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Milestone-based project tracking and proactive risk management ensure our projects are delivered on or ahead of schedule — every time.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified & Compliant',
    desc: 'GST registered, MSME certified (UDYAM-KR-03-0563791), Shop & Establishment registered, PF & ESIC compliant — fully statutory.',
  },
  {
    icon: Cpu,
    title: 'Modern Construction',
    desc: 'We adopt modern corporate governance, latest construction techniques, skilled personnel, and high-quality materials for every project.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Partnership',
    desc: 'Transparent communication, dedicated project managers, and ethical conduct in all business activities — your trust is our foundation.',
  },
  {
    icon: MapPin,
    title: 'Bangalore Based',
    desc: 'Headquartered at Murugesh Palya, Bangalore. Serving residential, commercial, industrial, and hospitality sectors across Karnataka.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    desc: 'Committed to minimizing environmental impact — responsible waste management, efficient resource use, and eco-friendly construction practices.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24" style={{ backgroundColor: '#0f1f3d' }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#F5B800' }}>
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            The Skandapurvaja Difference
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            What sets us apart is not just what we build — it's how we build. Our culture of accountability, integrity, and client focus drives everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(27,58,107,0.4)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,184,0,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300" style={{ backgroundColor: 'rgba(245,184,0,0.2)' }}>
                <Icon className="w-6 h-6" style={{ color: '#F5B800' }} />
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 h-0.5 w-8 group-hover:w-16 transition-all duration-300" style={{ backgroundColor: '#F5B800' }} />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: '#1B3A6B' }}>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
            <p className="text-sm" style={{ color: '#F5B800' }}>Call us: +91 99459 68200 / +91 99002 28200 — Free site assessment and detailed estimate.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg hover:opacity-90" style={{ backgroundColor: '#F5B800', color: '#1B3A6B' }}>Contact Us Now</a>
        </div>

      </div>
    </section>
  );
}