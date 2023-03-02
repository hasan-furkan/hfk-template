import React, { useState } from 'react';

import Header from './Navbar';
import MySidebar from './Sidebar';

function AppLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? 'dark' : 'light';

  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className={appClass}>
      <Header setIsSidebar={setIsSidebar} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <MySidebar isSidebar={isSidebar} />
    </div>
  );
}
export default AppLayout;
