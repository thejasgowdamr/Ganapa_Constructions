import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '9980730533';
  const message = encodeURIComponent('Hello Ganapa Constructions! I am interested in your construction services. Please get in touch with me.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3">
        {showTooltip && (
          <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-100">
            <button onClick={() => setShowTooltip(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
            <p className="text-gray-800 font-semibold text-sm mb-1">Chat with us!</p>
            <p className="text-gray-500 text-xs leading-relaxed">Hi! Click below to start a WhatsApp conversation. We typically reply within minutes.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 w-full flex items-center justify-center gap-2 text-white text-sm font-semibold py-2 px-4 rounded-xl hover:opacity-90" style={{ backgroundColor: '#25D366' }}>
              <MessageCircle className="w-4 h-4" />
              Start Chat
            </a>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
          </div>
        )}

        <div className="relative">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setShowTooltip(true)} className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110" style={{ backgroundColor: '#25D366' }}>
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.11 1.522 5.837L.044 23.25a.75.75 0 00.916.916l5.413-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.497-5.24-1.368l-.374-.214-3.878 1.058 1.058-3.878-.214-.374A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
          <span className="absolute inset-0 w-16 h-16 rounded-full animate-ping opacity-20 pointer-events-none" style={{ backgroundColor: '#25D366' }} />
        </div>
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col">
        {[
          { label: 'LINKEDIN', href: '#' },
          { label: 'TWITTER', href: '#' },
          { label: 'FACEBOOK', href: '#' },
        ].map((social) => (
          <a key={social.label} href={social.href} className="text-white text-xs font-bold tracking-widest py-3 px-2 transition-all duration-200 hover:pl-4" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', backgroundColor: '#1B3A6B', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {social.label}
          </a>
        ))}
      </div>
    </>
  );
}