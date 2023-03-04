import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import Header from './Navbar';
import MySidebar from './Sidebar';

function AppLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = useSelector((state) => state.theme.theme);

  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className={appClass}>
      <Header setIsSidebar={setIsSidebar} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <MySidebar isSidebar={isSidebar} />
    </div>
  );
}
export default AppLayout;
