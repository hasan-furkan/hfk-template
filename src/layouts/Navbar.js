import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { ColorModeContext, tokens } from '../theme';

function Navbar() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" borderRadius="8px" border="1px solid">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <ReactCountryFlag
          countryCode="us"
          style={{
            marginTop: '8px',
            fontSize: '2em',
            cursor: 'pointer',
            marginRight: '2px',
          }}
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        />
        <ReactCountryFlag
          countryCode="tr"
          style={{
            marginTop: '8px',
            fontSize: '2em',
            cursor: 'pointer',
          }}
          onClick={() => {
            i18n.changeLanguage('tr');
          }}
        />
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Navbar;
