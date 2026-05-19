import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../config';

export const PasswordResetPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Erreur serveur');
      setSuccess('Un code a été envoyé à votre email.');
      setStep(2);
    } catch (err) {
      setError(err.message || 'Erreur lors de la requête.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Code invalide');
      setSuccess('Mot de passe mis à jour. Redirection...');
      setTimeout(() => navigate('/connexion'), 2000);
    } catch (err) {
      setError(err.message || 'Erreur lors de la réinitialisation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary-container/10 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-on-surface mb-2">Récupération</h1>
            <p className="text-on-surface-variant">
              {step === 1 ? 'Recevez un code par email' : 'Code OTP et nouveau mot de passe'}
            </p>
          </div>
          {success && <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 text-center">{success}</div>}
          {error && <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700 text-center">{error}</div>}
          {step === 1 ? (
            <form onSubmit={handleForgot} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 border border-outline rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-lg disabled:opacity-50">
                {loading ? 'Envoi...' : 'Envoyer le code'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleReset} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Code OTP</label>
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required maxLength={6} className="w-full px-4 py-3 border border-outline rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">Nouveau mot de passe</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required minLength={6} className="w-full px-4 py-3 border border-outline rounded-lg" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-lg disabled:opacity-50">
                {loading ? 'Mise à jour...' : 'Réinitialiser'}
              </button>
            </form>
          )}
          <div className="mt-8 text-center">
            <Link to="/connexion" className="text-primary font-bold hover:underline">Retour à la connexion</Link>
          </div>
        </div>
      </div>
    </div>
  );
};