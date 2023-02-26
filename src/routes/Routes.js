import Dashboard from '../pages/dashboards/DefaultDashbord';
import Example from '../pages/Example';

export const routes = [
  // dashboard
  { path: `${process.env.PUBLIC_URL}/dashboard`, Component: <Dashboard /> },
  { path: `${process.env.PUBLIC_URL}/example`, Component: <Example /> },
];
