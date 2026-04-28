import { Building2, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

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
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-amber-600 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">SKANDAPURVAJA</p>
                <p className="text-amber-500 text-xs">Build Tech Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Building India's future with precision, passion, and purpose. Your trusted civil construction partner since 2000.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <a
                  key={Icon.displayName}
                  href={href}
                  className="w-9 h-9 bg-white/5 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">{category}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-6 items-center justify-center md:justify-start">
          {['ISO 9001:2015', 'ISO 14001:2015', 'OHSAS 18001', 'RERA Registered', 'CREDAI Member'].map((cert) => (
            <span key={cert} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Skandapurvaja Build Tech Private Limited. All rights reserved.</p>
        <p>CIN: U45200KA2000PTC026000 &nbsp;|&nbsp; GSTIN: 29XXXXX1234Z1</p>
      </div>
    </footer>
  );
}
