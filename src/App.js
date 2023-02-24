import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MySidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar"
import {useState} from "react";
import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/dashboards/DefaultDashbord"
import Example from "./pages/Example"
import "./i18n"

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <MySidebar isSidebar={isSidebar} />
            <main className="content">
              <Navbar setIsSidebar={setIsSidebar} />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/example" element={<Example />} />
            </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
