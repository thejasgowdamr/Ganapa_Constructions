import { useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from '../assets/logo.png';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#0f1f3d' }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <div>
            <p className="font-bold text-gray-900 text-sm">SKANDAPURVAJA</p>
            <p className="text-xs" style={{ color: '#F5B800' }}>Admin Panel</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-sm text-center mb-8">Sign in to manage your website content</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@skandapurvajagroup.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none transition" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none transition" onFocus={e => e.target.style.borderColor='#1B3A6B'} onBlur={e => e.target.style.borderColor='#e5e7eb'} />
          </div>
          <button type="submit" disabled={loading} className="w-full text-white font-semibold py-3.5 rounded-xl transition hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#1B3A6B' }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Restricted access — authorized personnel only
        </p>
      </div>
    </div>
  );
}