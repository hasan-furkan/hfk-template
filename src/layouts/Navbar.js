import { useDispatch } from 'react-redux';
import ReactCountryFlag from 'react-country-flag';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcons from '../svg-icons/SvgIcons';
import logo from '../assets/images/logo/karanlıklogo9728.png';
import naviHorizontal from '../navigation/horizontal';
import { setLogout } from '../redux/components/auth';

// eslint-disable-next-line react/prop-types
export default function Header({ setIsDarkMode, isDarkMode }) {
  const { i18n } = useTranslation();
  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setLogout(false));
  };

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
          <li role="presentation" key={i} className="px-1 py-2 hover:cursor-pointer dark:text-light-500">
            <SvgIcons icon={icon.icon} />
          </li>
        ))}
        <li
          role="presentation"
          className="px-1 py-2 hover:cursor-pointer dark:text-light-500"
          onClick={handleModeToggle}
        >
          <SvgIcons icon="sun" />
        </li>
        <li
          role="presentation"
          className="px-1 py-2 hover:cursor-pointer dark:text-light-500 relative z-10"
          onClick={handleLogout}
        >
          <SvgIcons icon="logOut" />
        </li>
      </ul>
    </nav>
  );
}
