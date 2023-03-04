import { useDispatch } from 'react-redux';
import ReactCountryFlag from 'react-country-flag';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import SvgIcons from '../svg-icons/SvgIcons';
import logo from '../assets/images/logo/karanlıklogo9728.png';
import naviHorizontal from '../navigation/horizontal';
import { setLogout } from '../redux/components/auth';
import { setTheme } from '../redux/components/theme';

// eslint-disable-next-line react/prop-types
export default function Header({ setIsDarkMode, isDarkMode }) {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(setTheme(isDarkMode ? 'dark' : 'light'));
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(setLogout(false));
  };

  useEffect(() => {}, [isDarkMode]);
  return (
    <nav className="w-full bg-light-300 dark:bg-black-300 flex p-4 items-center justify-between">
      <div className="inline-flex space-x-2">
        <div className="h-8 w-auto">
          <img src={logo} alt="" className="ml-14 mt-3" />
        </div>
      </div>
      <ul className="hidden md:flex space-x-4 dark:text-slate-100 text-slate-900">
        <li role="presentation" className="px-1 py-1 hover:cursor-pointer dark:text-light-500">
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
        <li role="presentation" className="py-1 hover:cursor-pointer dark:text-light-500">
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
        {naviHorizontal.map((icon, i) => (
          <li role="presentation" key={i} className="py-2 hover:cursor-pointer dark:text-light-500">
            <SvgIcons icon={icon.icon} />
          </li>
        ))}
        <li role="presentation" className="py-2 hover:cursor-pointer dark:text-light-500" onClick={handleModeToggle}>
          <SvgIcons icon="sun" />
        </li>
        <li role="presentation" className="dark:text-light-500">
          {/* eslint-disable-next-line react/button-has-type,jsx-a11y/no-interactive-element-to-noninteractive-role */}
          <button className="border rounded-2xl p-2">
            admin <br /> hsnfrkn32@gmail.com{' '}
          </button>
          {/* eslint-disable-next-line react/button-has-type,jsx-a11y/no-interactive-element-to-noninteractive-role */}
        </li>
        <li
          role="presentation"
          className="py-2 hover:cursor-pointer dark:text-light-500 relative z-10"
          onClick={handleLogout}
        >
          <SvgIcons icon="logOut" />
        </li>
      </ul>
    </nav>
  );
}
