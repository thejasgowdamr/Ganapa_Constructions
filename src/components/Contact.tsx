import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const ACCESS_KEY = 'f894f206-0151-4bb5-85f5-1c6a555b151f';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          subject: `New Enquiry from ${form.name} — Ganapa Construction Website`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
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

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">

          <div className="lg:col-span-2">
            <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#F5B800' }}>Contact Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">Let's Build Something Great Together</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">Whether you have a project in mind or just want to explore possibilities, our team is ready to discuss your construction needs.</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0f4ff', border: '1px solid #1B3A6B20' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#1B3A6B' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Registered Address</p>
                  <p className="text-gray-700 text-sm mt-0.5">No. 135/7, 14th A Cross, Vyalikaval, Bengaluru — 560003</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0f4ff', border: '1px solid #1B3A6B20' }}>
                  <Phone className="w-5 h-5" style={{ color: '#1B3A6B' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Phone Numbers</p>
                  <p className="text-gray-700 text-sm mt-0.5">+91 99807 30533 (D. Mamatha Reddy)</p>
                  {/* <p className="text-gray-700 text-sm">+91 99002 28200 (Hariprasad K S)</p> */}
                  <p className="text-gray-700 text-sm">+91 99027 59324 (Abhishek K M)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f0f4ff', border: '1px solid #1B3A6B20' }}>
                  <Mail className="w-5 h-5" style={{ color: '#1B3A6B' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-gray-700 text-sm mt-0.5">info@ganapaconstructions.com</p>
                  <p className="text-gray-500 text-xs mt-0.5">www.ganapaconstructions.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-3">Office Hours</p>
              <div className="space-y-1 text-sm text-gray-500">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="text-gray-700 font-medium">9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-gray-700 font-medium">9:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-gray-400">Closed</span></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-500 text-sm max-w-sm">Your message has been received. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }} className="mt-6 font-semibold text-sm hover:underline" style={{ color: '#1B3A6B' }}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
                  <p className="text-gray-500 text-sm mb-2">Fill in the details and we'll contact you shortly.</p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none transition" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone *</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none transition" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none transition" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none transition">
                      <option value="">Select a service</option>
                      <option>Residential Construction</option>
                      <option>Commercial Buildings</option>
                      <option>Industrial Projects</option>
                      <option>Infrastructure Works</option>
                      <option>Renovation & Retrofit</option>
                      <option>Green Buildings</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none transition resize-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#1B3A6B' }}>
                    <Send className="w-4 h-4" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}