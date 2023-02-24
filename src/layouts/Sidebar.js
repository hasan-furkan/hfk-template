import React, {useState} from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import navigation from "../navigation/vertical/index"
import {tokens} from "../theme";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {checkPermissions} from "../utils/checkPermission"

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const userRole = 'user'

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };
    return (
        <Box
            sx={{
                "& .pro-sidebar .pro-menu .pro-menu-item.active": {
                    backgroundColor:`${colors.purple[500]} !important`,
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                    color: colors.light[300],
                },
                "& .pro-sidebar .pro-menu > ul > .pro-sub-menu > .pro-inner-list-item ": {
                    backgroundColor: `${theme.palette.mode === 'dark' ? colors.black[300] : colors.light[300]} !important`,
                    padding: "-10px 0 0 10px"
                },
                "& .pro-sidebar-inner": {
                    background: `${theme.palette.mode === 'dark' ? colors.black[300] : colors.light[300]} !important`,
                    height: '100vh',
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 20px 5px 20px !important",
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                    marginBottom: "5px",
                    color: theme.palette.mode === "dark" ? colors.light[500] : colors.black[500]
                },
                "& .pro-inner-item:hover": {
                    color: colors.light[500],
                    backgroundColor:`${colors.purple[500]}`,

                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square" style={{
                    margin: "10px 0 20px 0",
                    color: colors.purple[500],
                    fontSize: 'bold'
                }}>
                    {navigation.map((nav) =>
                        nav.children ? (
                            <SubMenu title={nav.title}
                                     icon={nav.icon}
                                     key={nav.id}
                                     disabled={!checkPermissions(userRole, nav.permission)}
                            >
                                {nav.children &&
                                    nav.children.map((child) =>
                                        child.permission.includes(userRole) &&
                                        <MenuItem
                                            key={child.id}
                                            disabled={!checkPermissions(userRole, nav.permission)}
                                            active={activeMenuItem === child}
                                            onClick={() => handleMenuItemClick(child)}
                                        >
                                            {child.title}
                                        </MenuItem>
                                    )}
                            </SubMenu>
                        ) : (
                            <MenuItem
                                key={nav.title}
                                icon={nav.icon}
                                active={activeMenuItem === nav}
                                onClick={() => handleMenuItemClick(nav)}
                            >
                                {nav.title}
                            </MenuItem>
                        )
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
