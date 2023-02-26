import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default [
  {
    id: 'dashboards',
    title: 'sideMenu.management',
    icon: <HomeRoundedIcon size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'analyticsDash2',
        title: 'sideMenu.userManagement',
        icon: <HomeRoundedIcon size={12} />,
        navLink: '/dashboard',
        permission: ['admin', 'manager', 'user'],
      },
    ],
  },
];
