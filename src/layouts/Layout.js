import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import MySidebar from "./Sidebar";
const AppLayout = ({ children, classNames, ...rest }) => {
    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <div className="app">
            <MySidebar isSidebar={isSidebar} />
            <main className="content">
                <Navbar setIsSidebar={setIsSidebar} />
                <Outlet />
            </main>
        </div>
    );
};
export default AppLayout;
