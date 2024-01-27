import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/dashboards/DefaultDashbord'));
const Example = lazy(() => import('../pages/Example'));
const RoleManagement = lazy(() => import('../pages/roleManagement'));
const Settings = lazy(() => import('../pages/settings/userManagement'));
export const routes = [
  // dashboard
  { path: `/dashboard`, Component: <Dashboard /> },
  { path: `/example`, Component: <Example /> },
  { path: `/roleManagement`, Component: <RoleManagement /> },
  { path: `/settings`, Component: <Settings /> },
];
