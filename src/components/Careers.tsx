import { useState } from 'react';
import { MapPin, Clock, Briefcase, ChevronRight, X, Send, CheckCircle } from 'lucide-react';

const ACCESS_KEY = 'db52a783-0f2d-4f64-bce8-29fe0e842b74';

const jobs = [
  { title: 'Senior Site Engineer', department: 'Civil Engineering', location: 'Bangalore, Karnataka', type: 'Full Time', experience: '5-8 Years', desc: 'Lead on-site civil construction activities, supervise teams, ensure quality standards, and coordinate with project managers for timely delivery.' },
  { title: 'Quantity Surveyor', department: 'Project Management', location: 'Bangalore, Karnataka', type: 'Full Time', experience: '3-5 Years', desc: 'Handle BOQ preparation, cost estimation, material procurement planning, and billing for ongoing construction projects.' },
  { title: 'AutoCAD Draftsman', department: 'Design & Planning', location: 'Bangalore, Karnataka', type: 'Full Time', experience: '2-4 Years', desc: 'Prepare detailed architectural and structural drawings, coordinate with site engineers, and maintain drawing registers.' },
  { title: 'Accounts Executive', department: 'Finance', location: 'Bangalore, Karnataka', type: 'Full Time', experience: '2-3 Years', desc: 'Handle day-to-day accounting, GST filing, TDS compliance, vendor payments, and monthly financial reporting.' },
  { title: 'Project Coordinator', department: 'Operations', location: 'Bangalore, Karnataka', type: 'Full Time', experience: '2-5 Years', desc: 'Coordinate between site teams, vendors, and management. Track project milestones and prepare progress reports.' },
  { title: 'Civil Engineer — Fresher', department: 'Civil Engineering', location: 'Bangalore, Karnataka', type: 'Full Time', experience: '0-1 Years', desc: 'Fresh B.E Civil graduates welcome. Will be trained on live construction projects under senior engineers.' },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Job Application — ${selectedJob} — Skandapurvaja`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          experience: form.experience,
          position: selectedJob,
          message: form.message,
        }),
      });
      if (res.ok) setSubmitted(true);
      else alert('Something went wrong. Please try again.');
    } catch {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', experience: '', message: '' });
  };

  return (
    <section id="careers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#F5B800' }}>Join Our Team</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Careers at Skandapurvaja</h2>
          <p className="text-gray-500 text-base leading-relaxed">We are always looking for talented, passionate people to join our growing team. Build your career while building India's future.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { emoji: '🏗️', title: 'Real Projects', desc: 'Work on live large-scale construction projects from day one.' },
            { emoji: '📈', title: 'Growth Focused', desc: 'Clear career path with regular appraisals and skill development.' },
            { emoji: '🤝', title: 'Great Culture', desc: 'A team that values integrity, quality, and mutual respect.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8">Current Openings</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div key={job.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{job.title}</h4>
                  <p className="text-sm font-medium mt-0.5" style={{ color: '#1B3A6B' }}>{job.department}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#F5B800' }}>{job.type}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{job.desc}</p>
              <div className="flex flex-wrap gap-4 mb-5 text-xs text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" style={{ color: '#1B3A6B' }} />{job.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" style={{ color: '#1B3A6B' }} />{job.experience}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" style={{ color: '#1B3A6B' }} />{job.department}</span>
              </div>
              <button onClick={() => setSelectedJob(job.title)} className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl text-white transition hover:opacity-90" style={{ backgroundColor: '#1B3A6B' }}>
                Apply Now <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl p-10 text-center" style={{ backgroundColor: '#1B3A6B' }}>
          <h3 className="text-2xl font-bold text-white mb-3">Don't see a suitable role?</h3>
          <p className="text-gray-300 text-sm mb-6">Send us your resume and we will keep you in mind for future openings.</p>
          <button onClick={() => setSelectedJob('General Application')} className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-xl transition hover:opacity-90" style={{ backgroundColor: '#F5B800', color: '#1B3A6B' }}>
            Send Your Resume <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-green-600" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Sent!</h3>
                <p className="text-gray-500 text-sm mb-6">Thank you for applying for <strong>{selectedJob}</strong>. We will review and get back to you soon.</p>
                <button onClick={closeModal} className="font-semibold text-sm px-6 py-2.5 rounded-xl text-white" style={{ backgroundColor: '#1B3A6B' }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apply for Position</h3>
                  <p className="text-sm font-medium mt-1" style={{ color: '#1B3A6B' }}>{selectedJob}</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Experience</label>
                    <input type="text" name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. 3 years" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Cover Note</label>
                  <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us why you are a good fit..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none resize-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <button type="submit" disabled={loading} className="w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#1B3A6B' }}>
                  <Send className="w-4 h-4" />
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}