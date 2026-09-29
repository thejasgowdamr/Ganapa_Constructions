import { Facebook, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const links = {
  Company: ['About Us', 'Leadership', 'Careers', 'CSR Initiatives', 'Investor Relations'],
  Services: ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Green Buildings'],
  Projects: ['Ongoing Projects', 'Completed Projects', 'Upcoming Projects', 'Case Studies'],
  Support: ['Contact Us', 'Site Office Locator', 'Media & Press', 'Privacy Policy', 'Terms of Use'],
};

const socials = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Ganapa Construction Company" className="h-12 w-auto" />
              <div>
                <p className="font-bold text-white text-sm leading-tight">GANAPA CONSTRUCTION</p>
                <p className="text-xs" style={{ color: '#F5B800' }}>Engineers & Contractors</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Building on a legacy of trust, reliability & performance. Over a decade of excellence delivering landmark construction projects across Bangalore and Karnataka.
            </p>
            <p className="text-xs text-gray-600 mb-6">
              📍 No. 135/7, 14th A Cross, Vyalikaval, Bengaluru — 560003
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center transition-colors duration-200 hover:opacity-80" onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1B3A6B'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.05)'}>
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">{category}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-colors flex items-center gap-1.5 group hover:text-yellow-400">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#F5B800' }} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-4 items-center justify-center md:justify-start">
          {[
            'PAN: AAMFG8142P',
            'GST: 29AAMFG8142P1ZK',
            'MSME: UDYAM-KR-03-0130199',
            'ESIC: 53000358850001009',
            'PF: BG/BNG/80064',
          ].map((cert) => (
            <span key={cert} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Ganapa Construction Company. All rights reserved.</p>
        <p>ganapaconstructionblr@gmail.com &nbsp;|&nbsp; +91 99807 30533</p>
      </div>
    </footer>
  );
}