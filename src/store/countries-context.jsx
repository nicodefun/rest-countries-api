import { createContext, useState } from "react";

const CountriesContext = createContext({
  isDarkMode: false,
  setIsDarkMode: () => {},
  region: "",
  setRegion: () => {},
  showDetail: false, 
  setShowDetail: ()=>{},
  keyword: '', 
  setKeyWord: ()=>{}
});

export const CountriesProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [region, setRegion] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [keyword, setKeyWord] = useState('');
  const contextValue = {
    isDarkMode,
    setIsDarkMode,
    region,
    setRegion,
    showDetail, 
    setShowDetail,
    keyword,
    setKeyWord
  };
  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
