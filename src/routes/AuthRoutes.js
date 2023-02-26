import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';

const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login`, Component: <Login /> },
  { path: `${process.env.PUBLIC_URL}/register`, Component: <Register /> },
];

export default authRoutes;
