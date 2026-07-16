import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { LogOut, Plus, Trash2, Edit2, Upload, X, Save, Building, Image, Briefcase } from 'lucide-react';
import logo from '../assets/logo.png';

type Project = { id: string; title: string; category: string; location: string; year: string; area: string; status: string; image_url: string; };
type GalleryItem = { id: string; title: string; category: string; image_url: string; };
type Career = { id: string; title: string; department: string; location: string; experience: string; type: string; description: string; is_active: boolean; };

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'projects' | 'gallery' | 'careers'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const [projectForm, setProjectForm] = useState({ title: '', category: 'Residential', location: '', year: '', area: '', status: 'Ongoing', image_url: '' });
  const [galleryForm, setGalleryForm] = useState({ title: '', category: 'Residential', image_url: '' });
  const [careerForm, setCareerForm] = useState({ title: '', department: '', location: 'Bangalore, Karnataka', experience: '', type: 'Full Time', description: '', is_active: true });

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = async () => {
    setLoading(true);
    const [p, g, c] = await Promise.all([
      supabase.from('projects').select('*').order('created_at', { ascending: false }),
      supabase.from('gallery').select('*').order('created_at', { ascending: false }),
      supabase.from('careers').select('*').order('created_at', { ascending: false }),
    ]);
    if (p.data) setProjects(p.data);
    if (g.data) setGallery(g.data);
    if (c.data) setCareers(c.data);
    setLoading(false);
  };

  const uploadImage = async (file: File): Promise<string> => {
    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from('images').upload(fileName, file);
    if (error) { setUploading(false); throw error; }
    const { data } = supabase.storage.from('images').getPublicUrl(fileName);
    setUploading(false);
    return data.publicUrl;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, formType: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadImage(file);
      if (formType === 'project') setProjectForm(f => ({ ...f, image_url: url }));
      if (formType === 'gallery') setGalleryForm(f => ({ ...f, image_url: url }));
    } catch { alert('Image upload failed.'); }
  };

  const saveProject = async () => {
    if (editItem) {
      await supabase.from('projects').update(projectForm).eq('id', editItem.id);
    } else {
      await supabase.from('projects').insert([projectForm]);
    }
    setShowModal(false);
    setEditItem(null);
    setProjectForm({ title: '', category: 'Residential', location: '', year: '', area: '', status: 'Ongoing', image_url: '' });
    fetchAll();
  };

  const saveGallery = async () => {
    if (editItem) {
      await supabase.from('gallery').update(galleryForm).eq('id', editItem.id);
    } else {
      await supabase.from('gallery').insert([galleryForm]);
    }
    setShowModal(false);
    setEditItem(null);
    setGalleryForm({ title: '', category: 'Residential', image_url: '' });
    fetchAll();
  };

  const saveCareer = async () => {
    if (editItem) {
      await supabase.from('careers').update(careerForm).eq('id', editItem.id);
    } else {
      await supabase.from('careers').insert([careerForm]);
    }
    setShowModal(false);
    setEditItem(null);
    setCareerForm({ title: '', department: '', location: 'Bangalore, Karnataka', experience: '', type: 'Full Time', description: '', is_active: true });
    fetchAll();
  };

  const deleteItem = async (table: string, id: string) => {
    if (!confirm('Are you sure you want to delete this?')) return;
    await supabase.from(table).delete().eq('id', id);
    fetchAll();
  };

  const openEdit = (item: any) => {
    setEditItem(item);
    if (activeTab === 'projects') setProjectForm(item);
    if (activeTab === 'gallery') setGalleryForm(item);
    if (activeTab === 'careers') setCareerForm(item);
    setShowModal(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-gray-900 text-sm">SKANDAPURVAJA</p>
              <p className="text-xs" style={{ color: '#F5B800' }}>Admin Dashboard</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-500 transition">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Projects', count: projects.length, icon: Building, color: '#1B3A6B' },
            { label: 'Gallery Photos', count: gallery.length, icon: Image, color: '#F5B800' },
            { label: 'Job Listings', count: careers.length, icon: Briefcase, color: '#16a34a' },
          ].map(({ label, count, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{count}</p>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['projects', 'gallery', 'careers'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition" style={activeTab === tab ? { backgroundColor: '#1B3A6B', color: '#fff' } : { backgroundColor: '#f3f4f6', color: '#4b5563' }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900 text-lg capitalize">Manage {activeTab}</h2>
            <button onClick={() => { setEditItem(null); setShowModal(true); }} className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-xl transition hover:opacity-90" style={{ backgroundColor: '#1B3A6B' }}>
              <Plus className="w-4 h-4" />
              Add New
            </button>
          </div>

          {loading ? (
            <div className="p-12 text-center text-gray-400">Loading...</div>
          ) : (
            <div className="divide-y divide-gray-50">

              {/* Projects List */}
              {activeTab === 'projects' && projects.map(project => (
                <div key={project.id} className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">
                  {project.image_url && <img src={project.image_url} alt={project.title} className="w-16 h-12 rounded-lg object-cover flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{project.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{project.category} • {project.location} • {project.year}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{project.status}</span>
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(project)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-blue-50 transition" style={{ color: '#1B3A6B' }}><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => deleteItem('projects', project.id)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-50 text-red-500 transition"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}

              {/* Gallery List */}
              {activeTab === 'gallery' && gallery.map(item => (
                <div key={item.id} className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">
                  <img src={item.image_url} alt={item.title} className="w-16 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(item)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-blue-50 transition" style={{ color: '#1B3A6B' }}><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => deleteItem('gallery', item.id)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-50 text-red-500 transition"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}

              {/* Careers List */}
              {activeTab === 'careers' && careers.map(career => (
                <div key={career.id} className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{career.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{career.department} • {career.experience}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${career.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{career.is_active ? 'Active' : 'Inactive'}</span>
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(career)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-blue-50 transition" style={{ color: '#1B3A6B' }}><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => deleteItem('careers', career.id)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-50 text-red-500 transition"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}

              {/* Empty state */}
              {activeTab === 'projects' && projects.length === 0 && <div className="p-12 text-center text-gray-400 text-sm">No projects yet. Click "Add New" to get started.</div>}
              {activeTab === 'gallery' && gallery.length === 0 && <div className="p-12 text-center text-gray-400 text-sm">No photos yet. Click "Add New" to get started.</div>}
              {activeTab === 'careers' && careers.length === 0 && <div className="p-12 text-center text-gray-400 text-sm">No careers yet. Click "Add New" to get started.</div>}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative max-h-screen overflow-y-auto">
            <button onClick={() => { setShowModal(false); setEditItem(null); }} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>

            <h3 className="text-xl font-bold text-gray-900 mb-6">{editItem ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}</h3>

            {/* Project Form */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Project Title *</label>
                  <input type="text" value={projectForm.title} onChange={e => setProjectForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. Apollo Care Hospital" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Category</label>
                    <select value={projectForm.category} onChange={e => setProjectForm(f => ({ ...f, category: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Infrastructure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Status</label>
                    <select value={projectForm.status} onChange={e => setProjectForm(f => ({ ...f, status: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none">
                      <option>Ongoing</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Location</label>
                  <input type="text" value={projectForm.location} onChange={e => setProjectForm(f => ({ ...f, location: e.target.value }))} placeholder="e.g. Bangalore, Karnataka" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Year</label>
                    <input type="text" value={projectForm.year} onChange={e => setProjectForm(f => ({ ...f, year: e.target.value }))} placeholder="e.g. 2024" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Area</label>
                    <input type="text" value={projectForm.area} onChange={e => setProjectForm(f => ({ ...f, area: e.target.value }))} placeholder="e.g. 12 Acres" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Project Image</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center">
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(e, 'project')} className="hidden" id="project-img" />
                    <label htmlFor="project-img" className="cursor-pointer flex flex-col items-center gap-2">
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-sm text-gray-500">{uploading ? 'Uploading...' : 'Click to upload image'}</span>
                    </label>
                    {projectForm.image_url && <img src={projectForm.image_url} alt="Preview" className="mt-3 h-24 rounded-lg object-cover mx-auto" />}
                  </div>
                </div>
                <button onClick={saveProject} className="w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90" style={{ backgroundColor: '#1B3A6B' }}>
                  <Save className="w-4 h-4" />
                  {editItem ? 'Update Project' : 'Save Project'}
                </button>
              </div>
            )}

            {/* Gallery Form */}
            {activeTab === 'gallery' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Photo Title *</label>
                  <input type="text" value={galleryForm.title} onChange={e => setGalleryForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. Site Construction" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Category</label>
                  <select value={galleryForm.category} onChange={e => setGalleryForm(f => ({ ...f, category: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Infrastructure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Photo</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center">
                    <input type="file" accept="image/*" onChange={e => handleImageUpload(e, 'gallery')} className="hidden" id="gallery-img" />
                    <label htmlFor="gallery-img" className="cursor-pointer flex flex-col items-center gap-2">
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-sm text-gray-500">{uploading ? 'Uploading...' : 'Click to upload photo'}</span>
                    </label>
                    {galleryForm.image_url && <img src={galleryForm.image_url} alt="Preview" className="mt-3 h-24 rounded-lg object-cover mx-auto" />}
                  </div>
                </div>
                <button onClick={saveGallery} className="w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90" style={{ backgroundColor: '#1B3A6B' }}>
                  <Save className="w-4 h-4" />
                  {editItem ? 'Update Photo' : 'Save Photo'}
                </button>
              </div>
            )}

            {/* Career Form */}
            {activeTab === 'careers' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Job Title *</label>
                  <input type="text" value={careerForm.title} onChange={e => setCareerForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. Senior Site Engineer" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Department</label>
                    <input type="text" value={careerForm.department} onChange={e => setCareerForm(f => ({ ...f, department: e.target.value }))} placeholder="e.g. Civil Engineering" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Experience</label>
                    <input type="text" value={careerForm.experience} onChange={e => setCareerForm(f => ({ ...f, experience: e.target.value }))} placeholder="e.g. 3-5 Years" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Description</label>
                  <textarea rows={3} value={careerForm.description} onChange={e => setCareerForm(f => ({ ...f, description: e.target.value }))} placeholder="Job responsibilities and requirements..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none resize-none" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="is_active" checked={careerForm.is_active} onChange={e => setCareerForm(f => ({ ...f, is_active: e.target.checked }))} className="w-4 h-4" />
                  <label htmlFor="is_active" className="text-sm text-gray-600">Active (show on website)</label>
                </div>
                <button onClick={saveCareer} className="w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90" style={{ backgroundColor: '#1B3A6B' }}>
                  <Save className="w-4 h-4" />
                  {editItem ? 'Update Job' : 'Save Job'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}