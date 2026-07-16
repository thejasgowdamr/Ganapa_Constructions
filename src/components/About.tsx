import { Award, Users, ShieldCheck, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const values = [
  { icon: Award, title: 'Quality First', desc: 'Every project meets international standards with rigorous quality assurance at every stage.' },
  { icon: ShieldCheck, title: 'Safety Driven', desc: 'Zero-compromise on site safety with certified practices and trained personnel.' },
  { icon: Users, title: 'Client Centric', desc: 'Transparent communication and dedicated project managers for each client.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Adopting modern corporate governance, marketing reach, and sustainable construction practices.' },
];

const timeline = [
  { year: '2015', event: 'Founded as Ganapa Construction Company — began delivering residential and commercial projects across Bangalore.' },
  { year: '2020', event: '50+ Projects Delivered — earned trust of major clients including NTT Global Data Centers and KIMS Hospital.' },
  { year: '2025', event: 'Incorporated as Skandapurvaja Buildtech Private Limited — new chapter of growth and innovation.' },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden relative">

      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: '#1B3A6B15' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ backgroundColor: '#F5B80015' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-5" style={{ backgroundColor: '#f0f4ff', borderColor: '#1B3A6B20' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F5B800' }} />
            <span className="font-semibold text-xs tracking-widest uppercase" style={{ color: '#1B3A6B' }}>Our Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
            Building on a Legacy of <br />
            <span style={{ color: '#1B3A6B' }}>Trust</span> & <span style={{ color: '#F5B800' }}>Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A decade of proven expertise, hundreds of satisfied clients, and an unwavering commitment to delivering exceptional construction solutions across Karnataka.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">

          {/* Left Images */}
          <div className="lg:col-span-2 group">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-64">
                <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop" alt="Construction work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-64 mt-8">
                <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop" alt="Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats Badge */}
            <div className="rounded-2xl p-6 text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #1B3A6B, #0f2244)' }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#F5B800' }}>10+</p>
                  <p className="text-xs text-blue-200 mt-1">Years</p>
                </div>
                <div className="w-px bg-white/20 mx-auto" />
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#F5B800' }}>100+</p>
                  <p className="text-xs text-blue-200 mt-1">Projects</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <p className="text-sm font-medium text-blue-100">Trusted by NTT, KIMS & more</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">From Vision to Reality</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                What began as <strong>Ganapa Construction Company</strong> has evolved into a powerhouse of construction excellence. Over a decade, we've built more than just structures — we've built lasting relationships and a reputation for uncompromising quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In <strong>April 2025</strong>, we incorporated as <strong>Skandapurvaja Buildtech Private Limited</strong> — enabling us to scale operations, embrace modern governance, and tackle increasingly complex projects with greater efficiency.
              </p>
            </div>

            {/* Key points */}
            <div className="p-6 rounded-2xl border" style={{ background: 'linear-gradient(135deg, #f0f4ff, #fffbeb)', borderColor: '#1B3A6B15' }}>
              <p className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: '#1B3A6B' }}>What We Deliver</p>
              <div className="space-y-3">
                {[
                  'Landmark residential, commercial & industrial projects across Karnataka',
                  'Fully GST, MSME, PF, ESIC & Shop Act compliant — all statutory registrations active',
                  '98% client satisfaction rate with strong repeat business',
                  'Integrated project management from conception to handover',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#F5B800' }}>
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Registrations */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: '#1B3A6B' }}>Statutory Credentials</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'CIN', value: 'U41001KA2025PTC201312' },
                  { label: 'GST', value: '29ABPCS9350J1ZH' },
                  { label: 'UDYAM', value: 'UDYAM-KR-03-0563791' },
                  { label: 'PAN', value: 'ABPCS9350J' },
                ].map((cred) => (
                  <div key={cred.label} className="text-xs">
                    <p className="text-gray-400 font-semibold">{cred.label}</p>
                    <p className="text-gray-800 font-mono text-xs mt-0.5">{cred.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="pt-20 border-t-2 border-gray-100">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-gray-900">Our Core Values</h3>
            <p className="text-gray-500 mt-3">Principles that drive every decision, every project, every interaction</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 bg-white cursor-default">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#f0f4ff' }}>
                  <Icon className="w-6 h-6 transition-colors" style={{ color: '#1B3A6B' }} />
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 h-0.5 w-8 group-hover:w-full transition-all duration-300 rounded-full" style={{ backgroundColor: '#F5B800' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="pt-20 mt-20 border-t-2 border-gray-100">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
            <p className="text-gray-500 mt-3">Milestones that shaped Skandapurvaja Buildtech</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative p-6 rounded-2xl border-2 border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: i === 2 ? '#F5B800' : '#1B3A6B' }} />
                  <p className="text-2xl font-bold" style={{ color: '#1B3A6B' }}>{item.year}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.event}</p>
                <div className="mt-4 h-0.5 w-8 group-hover:w-full transition-all duration-300 rounded-full" style={{ backgroundColor: '#F5B800' }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 rounded-3xl p-12 text-white text-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2d5da6 50%, #F5B800 100%)' }}>
          <h3 className="text-3xl font-bold mb-3">Ready to Build With Us?</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Join our growing list of satisfied clients — NTT Global Data Centers, KIMS Hospital, Shreno Ltd and more. Let's create something extraordinary together.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-xl hover:bg-yellow-50 transition-colors shadow-lg" style={{ color: '#1B3A6B' }}>
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}