import { useDispatch } from 'react-redux';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { options } from './component/MenuItemDataComponent';
import MenuItemComponent from './component/MenuItemComponent';
import SvgIcons from '../svg-icons/SvgIcons';
import logo from '../assets/images/logo/karanlıklogo9728.png';
import { setLogout } from '../redux/components/auth';
import { setTheme } from '../redux/components/theme';
import avatar from '../assets/images/avatars/avatar.jpg';
import { succesToastMessage } from '../components/toasts';

// eslint-disable-next-line react/prop-types
export default function Header({ setIsDarkMode, isDarkMode }) {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(setTheme(isDarkMode ? 'dark' : 'light'));
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(setLogout(false));
    succesToastMessage('basarili bir sekilde cikis yapildi', 1000);
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
        <li role="presentation" className="py-2 hover:cursor-pointer dark:text-light-500">
          <SvgIcons icon="home" />
        </li>
        <li role="presentation" className="py-2 hover:cursor-pointer dark:text-light-500" onClick={handleModeToggle}>
          <SvgIcons icon="sun" />
        </li>
        <li role="presentation" className="relative">
          {/* eslint-disable-next-line react/button-has-type,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span className="text-black-300 dark:text-light-500" onClick={handleToggle}>
            <img src={avatar} className="inline-block h-9 w-9 rounded-full ring-2 ring-purple-400" alt="" />
          </span>
          {isOpen && (
            <div className="bg-light-300 text-black-500 absolute top-full right-1 w-56 mt-2 dark:bg-black-300 dark:text-light-500 rounded-lg shadow-lg">
              <ul className="py-4 px-2">
                <li className="flex gap-2 m-2">
                  <img src={avatar} className="inline-block h-9 w-9 rounded-full ring-2 ring-purple-400" alt="" />
                  <div className="flex flex-col">
                    <span className="text-sm ">hsnfrkn32@gmail.com</span>
                    <span className="text-sm text-grey-500">Admin</span>
                  </div>
                </li>
                <hr />
                {options.map((option, index) => {
                  return index % 3 === 2 ? (
                    <div key={index}>
                      <MenuItemComponent icon={option.icon} onClick={option.onClick} label={option.label} />
                      <hr />
                    </div>
                  ) : (
                    <MenuItemComponent key={index} icon={option.icon} onClick={option.onClick} label={option.label} />
                  );
                })}
                <hr />
                <li
                  className="flex gap-2 m-2 hover:bg-grey-200 p-1 cursor-pointer"
                  role="presentation"
                  onClick={handleLogout}
                >
                  <SvgIcons icon="logOut" />
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
