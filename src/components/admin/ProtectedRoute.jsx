import { Navigate } from 'react-router-dom';
import { useAuth } from '../../lib/useAuth';

export default function ProtectedRoute({ children }) {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <main id="top">
        <div className="wrap"><p>Loading…</p></div>
      </main>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
