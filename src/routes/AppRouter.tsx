import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/components/Auth/Login';
import SingleFileView from '../pages/SingleFileView/SingleFileView';
import Dashboard from '../pages/Dashboard/Dashboard';
import Signup from '@/components/Auth/Signup';
import ProfilePage from '../pages/Profile/Profile';
import CaseRegistrationPage from '../pages/CaseRegistrationPage/CaseRegistrationPage';
import IclDashboard from '../pages/IclDashboard/IclDashboard';
import ChildProgramPage from '../pages/ChildProgramPage/ChildProgramPage';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to='/login' />;
};

// const PublicRoute = ({ children }: { children: React.ReactNode }) => {
//   const token = localStorage.getItem('token');
//   return token ? <Navigate to='/' /> : children;
// };

const AppRouter = () => (
  <Routes>
    <Route
      path='/login'
      element={
          <Login />
      }
    />
    <Route
      path='/signup'
      element={
          <Signup />
      }
    />
    <Route
      path='/'
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
    <Route
      path='/profile'
      element={
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      }
    />
    <Route
      path='/icl-dashboard'
      element={
        <PrivateRoute>
          <IclDashboard />
        </PrivateRoute>
      }
    />
    <Route
      path='/child-progress'
      element={
        <PrivateRoute>
          <ChildProgramPage />
        </PrivateRoute>
      }
    />
     <Route
      path='/case-registration'
      element={
        <PrivateRoute>
          <CaseRegistrationPage />
        </PrivateRoute>
      }
    />
    <Route
      path='/file/:id'
      element={
        <PrivateRoute>
          <SingleFileView />
        </PrivateRoute>
      }
    />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);

export default AppRouter;
