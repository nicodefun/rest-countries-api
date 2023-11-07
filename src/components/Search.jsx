import Nav from "./Nav";
import SearchGrey from "../assets/search-grey.svg";
import SearchWhite from "../assets/search-white.svg";
import { useContext, useRef } from "react";
import CountriesContext from "../store/countries-context";

const Search = () => {
  const { isDarkMode, showDetail, setShowDetail, setKeyWord,region, setRegion } =
    useContext(CountriesContext);
  const searchSvg = isDarkMode ? SearchWhite : SearchGrey;
  const mode = isDarkMode ? "darkelement" : "lightelement";

  const inputRef = useRef();


  const handleInput = () => {
    if(region !== ''){
      setRegion('');
    }
    const value = inputRef.current.value;
    setKeyWord(value.toLowerCase());
  };

  if (showDetail) {
    return (
      <button
        type="button"
        className={`button ${mode}`}
        onClick={() => setShowDetail(false)}
      >
        &#x2190; Back
      </button>
    );
  }
  return (
    <div className="search-box">
      <div className={`search ${mode}`}>
        <img src={searchSvg} alt="" />
        <input
          type="text"
          placeholder="Search for country..."
          className={mode}
          ref={inputRef}
        />
        <button onClick={handleInput}>V</button>
      </div>
      <Nav />
    </div>
  );
};

export default Search;
