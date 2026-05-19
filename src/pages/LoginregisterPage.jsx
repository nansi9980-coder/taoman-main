import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { API_URL, ADMIN_URL } from "../config";

// ============ LOGIN PAGE ============

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur de connexion');
      }
      
      const role = String(data.user?.role || '').toLowerCase();
      if (role.includes('admin')) {
        setError(`Les administrateurs doivent utiliser l'espace admin : ${ADMIN_URL}`);
        return;
      }

      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      setError(err.message || 'Erreur de connexion. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <main className="flex-grow px-6 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-outline-variant/20 animate-fade-in">
            <h1 className="text-3xl font-bold text-on-surface text-center mb-2">Connexion</h1>
            <p className="text-center text-on-surface-variant mb-8">Accédez à votre compte TAOMAN Groupe Investissement</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-bold">
                  {error}
                </div>
              )}

              {/* Email */}
              <div className="animate-fade-in-up">
                <label htmlFor="email" className="block text-on-surface font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Password */}
              <div className="animate-fade-in-up" style={{ animationDelay: '50ms' }}>
                <label htmlFor="password" className="block text-on-surface font-bold mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 accent-primary rounded"
                  />
                  <span className="text-sm text-on-surface-variant">Se souvenir de moi</span>
                </label>
                <Link to="#" className="text-primary font-bold text-sm hover:underline">
                  Mot de passe oublié?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Connexion en cours...' : 'Se connecter'}
              </button>

              {/* Register Link */}
              <p className="text-center text-on-surface-variant">
                Pas de compte?{' '}
                <Link to="/inscription" className="text-primary font-bold hover:underline">
                  S'inscrire
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// ============ REGISTER PAGE ============

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!formData.acceptTerms) {
      setError('Vous devez accepter les conditions d\'utilisation');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        })
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erreur lors de l\'inscription');
      }
      
      setTimeout(() => {
        navigate('/connexion');
      }, 1000);
    } catch (err) {
      setError(err.message || 'Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <main className="flex-grow px-6 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-outline-variant/20 animate-fade-in">
            <h1 className="text-3xl font-bold text-on-surface text-center mb-2">S'inscrire</h1>
            <p className="text-center text-on-surface-variant mb-8">Créez votre compte TAOMAN Groupe Investissement</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-bold text-sm">
                  {error}
                </div>
              )}

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="animate-fade-in-up">
                  <label htmlFor="firstName" className="block text-on-surface font-bold mb-2 text-sm">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Jean"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '50ms' }}>
                  <label htmlFor="lastName" className="block text-on-surface font-bold mb-2 text-sm">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label htmlFor="email" className="block text-on-surface font-bold mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Phone */}
              <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <label htmlFor="phone" className="block text-on-surface font-bold mb-2 text-sm">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="+228 XX XX XX XX"
                />
              </div>

              {/* Password */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <label htmlFor="password" className="block text-on-surface font-bold mb-2 text-sm">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {/* Confirm Password */}
              <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                <label htmlFor="confirmPassword" className="block text-on-surface font-bold mb-2 text-sm">
                  Confirmer mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 accent-primary rounded mt-1"
                  />
                  <span className="text-sm text-on-surface-variant">
                    J'accepte les <Link to="/mentions-legales" className="text-primary font-bold hover:underline">conditions d'utilisation</Link> et la <Link to="/confidentialite" className="text-primary font-bold hover:underline">politique de confidentialité</Link>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {loading ? 'Inscription en cours...' : 'S\'inscrire'}
              </button>

              {/* Login Link */}
              <p className="text-center text-on-surface-variant text-sm">
                Déjà inscrit?{' '}
                <Link to="/connexion" className="text-primary font-bold hover:underline">
                  Se connecter
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};