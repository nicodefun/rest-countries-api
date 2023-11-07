import moonImg from "../assets/moon.svg";
import sunImg from "../assets/sun.svg";
import { useContext } from "react";
import CountriesContext from "../store/countries-context";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(CountriesContext);

  const img = isDarkMode ? sunImg : moonImg;
  const toggleTheme = () => {
    setIsDarkMode((prevmode) => !prevmode);
  };
  const headClass = isDarkMode ? 'darkheader' : 'lightheader'
  return (
    <header className={`header ${headClass}`}>
      <h2 className="logo">Where in the world?</h2>
      <div className='mode' onClick={toggleTheme}>
        <img src={img} alt="mode-img" />
        <h3>Dark Mode</h3>
      </div>
    </header>
  );
};

export default Header;
