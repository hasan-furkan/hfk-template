import Dashboard from '../pages/dashboards/DefaultDashbord';
import Example from '../pages/Example';
import NotFound from '../pages/NotFound.JS';

export const routes = [
  // dashboard
  { path: `/dashboard`, Component: <Dashboard /> },
  { path: `/example`, Component: <Example /> },
  { path: `*`, Component: <NotFound /> },
];
