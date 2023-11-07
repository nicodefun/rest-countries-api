import React from "react";
import { useContext } from "react";
import CountriesContext from "../store/countries-context";

const Card = ({ children }) => {
  const { isDarkMode } = useContext(CountriesContext);
  const mode = isDarkMode ? "darkelement" : "lightelement";
  return <div className={`card ${mode}`}>{children}</div>;
};

export default Card;
