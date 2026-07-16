import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  { id: 1, title: 'Commercial Building', category: 'Commercial', image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 2, title: 'Residential Complex', category: 'Residential', image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 3, title: 'Industrial Facility', category: 'Industrial', image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 4, title: 'Infrastructure Work', category: 'Infrastructure', image: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 5, title: 'Site Construction', category: 'Commercial', image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 6, title: 'Building Foundation', category: 'Residential', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 7, title: 'Steel Structure', category: 'Industrial', image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 8, title: 'Road Construction', category: 'Infrastructure', image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
  { id: 9, title: 'Modern Architecture', category: 'Commercial', image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<typeof photos[0] | null>(null);

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: '#F5B800' }}>Our Work</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Project Gallery</h2>
          <p className="text-gray-500 text-base leading-relaxed">A glimpse of our landmark projects across residential, commercial, industrial, and infrastructure sectors.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className="px-5 py-2 rounded-full text-sm font-semibold transition-all" style={active === cat ? { backgroundColor: '#1B3A6B', color: '#fff' } : { backgroundColor: '#f3f4f6', color: '#4b5563' }}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video" onClick={() => setSelected(photo)}>
              <img src={photo.image} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3" style={{ background: 'linear-gradient(to top, rgba(27,58,107,0.9), rgba(27,58,107,0.5))' }}>
                <ZoomIn className="w-8 h-8 text-white" />
                <p className="text-white font-bold text-sm">{photo.title}</p>
                <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: '#F5B800', color: '#1B3A6B' }}>{photo.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl border" style={{ backgroundColor: '#f0f4ff', borderColor: '#1B3A6B20' }}>
          <p className="text-gray-600 text-sm">📸 <strong>More photos coming soon.</strong> Real project photos will be added shortly. Contact us at <a href="mailto:info@skandapurvajagroup.com" className="font-semibold" style={{ color: '#1B3A6B' }}>info@skandapurvajagroup.com</a></p>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }} onClick={() => setSelected(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute -top-10 right-0 text-white hover:text-yellow-400"><X className="w-8 h-8" /></button>
            <img src={selected.image} alt={selected.title} className="w-full rounded-2xl shadow-2xl" />
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-lg">{selected.title}</p>
              <span className="text-xs px-3 py-1 rounded-full font-semibold mt-2 inline-block" style={{ backgroundColor: '#F5B800', color: '#1B3A6B' }}>{selected.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}