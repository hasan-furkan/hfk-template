import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './i18n';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import Routers from './routes';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  // eslint-disable-next-line no-unused-vars
  const [isSidebar, setIsSidebar] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HelmetProvider>
          <Routers isLoggedIn={isLoggedIn} />
        </HelmetProvider>
      </ThemeProvider>
      <ToastContainer />
    </ColorModeContext.Provider>
  );
}

export default App;
