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
    ]
  }
]
