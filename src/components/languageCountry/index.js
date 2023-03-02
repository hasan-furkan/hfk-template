import ReactCountryFlag from 'react-country-flag';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageCountry() {
  const { i18n } = useTranslation();
  return (
    <>
      <li className=" py-1 hover:cursor-pointer dark:text-light-500">
        <ReactCountryFlag
          countryCode="us"
          style={{
            fontSize: '2em',
            cursor: 'pointer',
          }}
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        />
      </li>

      <li className=" py-1 hover:cursor-pointer dark:text-light-500">
        <ReactCountryFlag
          countryCode="tr"
          style={{
            fontSize: '2em',
            cursor: 'pointer',
          }}
          onClick={() => {
            i18n.changeLanguage('tr');
          }}
        />
      </li>
    </>
  );
}
