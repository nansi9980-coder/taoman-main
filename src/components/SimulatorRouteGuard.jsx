import { Navigate } from 'react-router-dom';
import { useSiteFeatures } from '../hooks/useSiteFeatures';

/** Accès public au simulateur uniquement si activé dans le CMS ; sinon connexion requise. */
export function SimulatorRouteGuard({ children }) {
  const { simulatorPublicVisible } = useSiteFeatures();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (simulatorPublicVisible || token) {
    return children;
  }

  return <Navigate to="/connexion" replace state={{ from: '/investissement/simulateur' }} />;
}
