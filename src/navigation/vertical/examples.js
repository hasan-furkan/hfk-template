import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


export default [
  {
    id: 'example',
    title: 'Example',
    icon: <HomeRoundedIcon size={20} />,
    children: [
      {
        id: 'dtBasic',
        title: 'Basic',
        icon: <HomeRoundedIcon size={12} />,
        navLink: '/example',
        permission: ["admin", "manager", "user"]
      },
    ]
  }
]
