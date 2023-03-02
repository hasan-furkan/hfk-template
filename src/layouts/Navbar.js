import SvgIcons from '../svg-icons/SvgIcons';
import logo from '../assets/images/logo/karanlıklogo9728.png';
import naviHorizontal from '../navigation/horizontal';
import LanguageCountry from '../components/languageCountry';

// eslint-disable-next-line react/prop-types
export default function Header({ setIsDarkMode, isDarkMode }) {
  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="w-full bg-light-300 dark:bg-black-300 flex p-4  items-center justify-between">
      <div className="inline-flex space-x-2 ">
        <div className="h-8 w-auto">
          <img src={logo} alt="" className="ml-14 mt-3" />
        </div>
      </div>
      <ul className="hidden md:flex space-x-4 dark:text-slate-100 text-slate-900">
        <LanguageCountry />
        {naviHorizontal.map((icon, i) => (
          <li
            role="presentation"
            key={i}
            className="px-1 py-2 hover:cursor-pointer dark:text-light-500"
            onClick={icon.icon === 'sun' ? handleModeToggle : ''}
          >
            <SvgIcons icon={icon.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
