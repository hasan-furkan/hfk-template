import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import ForgotPassword from '../pages/authentication/ForgotPassword';

const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login`, Component: <Login /> },
  { path: `${process.env.PUBLIC_URL}/register`, Component: <Register /> },
  { path: `${process.env.PUBLIC_URL}/forgot-password`, Component: <ForgotPassword /> },
  { path: `${process.env.PUBLIC_URL}/register`, Component: <Register /> },
];

export default authRoutes;
