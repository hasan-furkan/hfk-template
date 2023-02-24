import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <HomeRoundedIcon size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'analyticsDash',
        title: 'Analytics',
        icon: <HomeRoundedIcon size={12} />,
        navLink: '/',
        permission: ["admin", "manager", "user"]
      },
      {
        id: 'analyticsDash2',
        title: 'Analytics2',
        icon: <HomeRoundedIcon size={12} />,
        navLink: '/',
        permission: ["admin", "manager", "user"]
      },
      {
        id: 'analyticsDash3',
        title: 'Analytics3',
        icon: <HomeRoundedIcon size={12} />,
        navLink: '/',
        permission: ["admin", "manager", "user"]
      },
    ]
  }
]
