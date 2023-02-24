import React, {useState} from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import navigation from "../navigation/vertical/index"
import {tokens} from "../theme";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <Box
            sx={{
                "& .pro-inner-item:before": {
                    backgroundColor: "white !important",
                },
                "& .pro-sidebar-inner": {
                    background: `${theme.palette.mode === 'dark' ? colors.black[500] : colors.light[500]} !important`,
                    border: 'none'
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "red !important",
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
                            <SubMenu title={nav.title} icon={nav.icon} key={nav.id}>
                                {nav.children.map((child) => (
                                    <MenuItem key={child.id}>{child.title}</MenuItem>
                                ))}
                            </SubMenu>
                        ) : (
                            <MenuItem key={nav.title} icon={nav.icon}>
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
