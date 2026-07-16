import { Linkedin, Mail, Phone } from 'lucide-react';

const team = [
  {
    name: 'Mr. Hariprasad K S',
    role: 'Director',
    qualification: 'D.E.E',
    experience: '20+ Years',
    desc: 'Expert in construction, property development, and facility management across residential and commercial developments.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    phone: '+91 99002 28200',
    email: 'info@skandapurvajagroup.com',
  },
  {
    name: 'Smt. D. Mamatha Reddy',
    role: 'Director',
    qualification: 'B.E (Civil)',
    experience: '18+ Years',
    desc: 'Founding partner with expertise in large-scale hospitality, industrial, and commercial project planning and delivery.',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    phone: '+91 99807 30533',
    email: 'info@skandapurvajagroup.com',
  },
  {
    name: 'Smt. Ashwini',
    role: 'Director — Finance',
    qualification: 'M.Com',
    experience: '12+ Years',
    desc: 'Deep expertise in financial planning, budgeting, accounting operations, and regulatory compliance management.',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    phone: '+91 98862 28200',
    email: 'info@skandapurvajagroup.com',
  },
  {
    name: 'Mr. Basavaraj Goudar',
    role: 'Managing Partner',
    qualification: 'B.E (Civil)',
    experience: '16+ Years',
    desc: 'Founding partner at Manyatha Constructions. Expert in residential and commercial project planning and execution.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    phone: '+91 99723 46528',
    email: 'info@skandapurvajagroup.com',
  },
  {
    name: 'Ravi Kumar',
    role: 'Senior Site Engineer',
    qualification: 'B.E (Civil)',
    experience: '8+ Years',
    desc: 'Responsible for on-site execution, quality control, and coordination of civil works across all active project sites.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    phone: '+91 99459 68200',
    email: 'info@skandapurvajagroup.com',
  },
  {
    name: 'Priya Sharma',
    role: 'Quantity Surveyor',
    qualification: 'B.E (Civil)',
    experience: '6+ Years',
    desc: 'Handles project cost estimation, BOQ preparation, material procurement planning, and billing for all projects.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    phone: '+91 99459 68200',
    email: 'info@skandapurvajagroup.com',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#F5B800' }}>
            Our People
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Meet the Leadership Team
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Behind every successful project is a team of dedicated professionals committed to delivering excellence. Meet the people who make it happen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
                  style={{ background: 'linear-gradient(to top, rgba(27,58,107,0.95) 0%, rgba(27,58,107,0.6) 60%, transparent 100%)' }}>

                  <p className="text-white text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {member.desc}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#F5B800' }}>
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-9 h-9 bg-white/20 hover:bg-white/40 rounded-lg flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a href={`tel:${member.phone}`} className="w-9 h-9 bg-white/20 hover:bg-white/40 rounded-lg flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#F5B800' }}>
                  {member.experience}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 border-t border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: '#1B3A6B' }}>{member.role}</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded-lg mt-1">
                    {member.qualification}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 h-0.5 w-8 group-hover:w-full transition-all duration-500 rounded-full" style={{ backgroundColor: '#F5B800' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center p-8 rounded-2xl border" style={{ backgroundColor: '#f0f4ff', borderColor: '#1B3A6B20' }}>
          <p className="text-gray-600 text-sm">
            📸 <strong>Team photos will be updated soon.</strong> Placeholder images are used currently.
            Contact us at{' '}
            <a href="mailto:info@skandapurvajagroup.com" className="font-semibold" style={{ color: '#1B3A6B' }}>
              info@skandapurvajagroup.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}