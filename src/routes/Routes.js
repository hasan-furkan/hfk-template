import Dashboard from '../pages/dashboards/DefaultDashbord';
import Example from '../pages/Example';

export const routes = [
  // dashboard
  { path: `/dashboard`, Component: <Dashboard /> },
  { path: `/example`, Component: <Example /> },
];
