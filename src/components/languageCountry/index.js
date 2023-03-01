import ReactCountryFlag from 'react-country-flag';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageCountry() {
  const { i18n } = useTranslation();
  return (
    <Box display="flex" justifyContent="center">
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
    </Box>
  );
}
