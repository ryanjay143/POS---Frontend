
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminProtectedRoute from './protector/AdminProtectedRoute';

function Admin() {
  return (
    <AdminProtectedRoute />
  );
}

export default Admin;