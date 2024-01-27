import SvgIcons from '../../svg-icons/SvgIcons';

export default [
  {
    id: 'dashboards',
    title: 'sideMenu.management',
    icon: <SvgIcons icon="home" size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'analyticsDash',
        title: 'sideMenu.userManagement',
        icon: <SvgIcons icon="home" size={20} />,
        navLink: '/dashboard',
        permission: ['admin', 'manager', 'user'],
      },
      {
        id: 'analyticsDash2',
        title: 'sideMenu.roleManagement',
        icon: <SvgIcons icon="home" size={20} />,
        navLink: '/dashboard',
        permission: ['admin', 'manager', 'user'],
      },
    ],
  },
  {
    id: 'dashboards',
    title: 'sideMenu.permissionManagement',
    icon: <SvgIcons icon="home" size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    navLink: '/roleManagement',
    permission: ['admin', 'manager', 'user'],
  },
];
