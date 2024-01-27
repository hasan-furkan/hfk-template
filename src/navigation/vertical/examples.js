import SvgIcons from '../../svg-icons/SvgIcons';

export default [
  {
    id: 'settings',
    title: 'sideMenu.settings',
    icon: <SvgIcons icon="home" size={20} />,
    children: [
      {
        id: 'dtBasic',
        title: 'sideMenu.userManagement',
        icon: <SvgIcons icon="home" size={20} />,
        navLink: '/settings',
        permission: ['admin', 'manager', 'user'],
      },
    ],
  },
];
