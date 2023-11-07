import Header from "./components/Header.jsx";
import { useContext } from "react";
import CountriesContext from "./store/countries-context";
import Search from "./components/Search.jsx";
import Hero from './components/Hero.jsx'

function App() {
  const { isDarkMode } = useContext(CountriesContext);

  const classes = isDarkMode ? "dark" : "light";
  return (
    <main className={classes}>
      <Header />
      <Search />
      <Hero />
    </main>
  );
}

export default App;
