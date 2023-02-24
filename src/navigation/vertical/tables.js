import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


export default [
  {
    id: 'tablesReactstrap',
    title: 'Table',
    icon: <HomeRoundedIcon size={20} />,
    navLink: '/tables/reactstrap',
  },
  {
    id: 'dataTable',
    title: 'DataTable',
    icon: <HomeRoundedIcon size={20} />,
    children: [
      {
        id: 'dtBasic',
        title: 'Basic',
        icon: <HomeRoundedIcon size={12} />,
        navLink: '/datatables/basic',
        permission: ["admin", "manager", "user"]
      },
      {
        id: 'dtAdvance',
        title: 'Advanced',
        icon: <HomeRoundedIcon size={12} />,
        navLink: '/datatables/advance',
        permission: ["admin", "manager", "user"]
      }
    ]
  }
]
