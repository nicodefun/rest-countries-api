
import styles from "./Nav.module.css";
import { useContext} from "react";
import CountriesContext from "../store/countries-context";

const Nav = () => {
  const { isDarkMode, setRegion, setKeyWord, keyword} = useContext(CountriesContext);
  const mode = isDarkMode ? "darkelement" : "lightelement";

  let regions = ['Americas', 'Europe', 'Oceania', 'Asia', 'Africa'];

  function getRegionHandler(e){
    if(keyword!==''){
      setKeyWord('');
    }
    setRegion(e.target.innerText);
  }

  return (
    <nav className={styles.nav}>
      <label htmlFor="touch">
        <span className={`${styles.span} ${mode}`}>Filter by Region</span>
      </label>
      <input type="checkbox" id="touch" className={styles.touch} />

      <ul className={`${styles.slide} ${mode}`}>
        {regions.map((region)=>(
           <li key={region} className={mode} onClick={getRegionHandler}>
           {region}
         </li>
        )
        )}
      </ul>
    </nav>
  );
};

export default Nav;
