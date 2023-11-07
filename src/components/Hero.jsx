import Card from "./Card";
import { useState, useEffect, useCallback } from "react";
import { useContext } from "react";
import CountriesContext from "../store/countries-context";
import ShowDetail from "./ShowDetail";

const Hero = () => {
  const {
    region,
    setRegion,
    showDetail,
    setShowDetail,
    isDarkMode,
    keyword,
    setKeyWord,
  } = useContext(CountriesContext);

  const [countriesList, setCountrisList] = useState([]);
  const [itemData, setItemData] = useState({});
  const [error, setError] = useState(false);

  const mode = isDarkMode ? "darkelement" : "lightelement";

  function getRandomItems(list, number) {
    const shuffled = list.sort(() => 0.5 - Math.random()); // Shuffle the list
    return shuffled.slice(0, number); // Get the first 20 items
  }

  const getCountries = useCallback(async function getCountries() {
    try {
      const countries = await fetch("https://restcountries.com/v3.1/all").then(
        (res) => res.json()
      );
      const randomItems = getRandomItems(countries, 12);
      setCountrisList(randomItems);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, []);


  const getSearchCountries = useCallback(
    async function getSearchCountries() {
      let countries;
      try {
        if (region && region !== "") {
          countries = await fetch(`https://restcountries.com/v3.1/region/${region}`).then((res) => res.json());
        }
        if (keyword && keyword.trim() !== "") {
          countries = await fetch(`https://restcountries.com/v3.1/name/${keyword}`).then((res) => res.json());
        }
       
        // if (countries.length > 12) {
        //   const randomItems = getRandomItems(countries, 12);
        //   setCountrisList(randomItems);

        // }
        // if (countries.length > 0 && countries.length <= 12) {
        //   setCountrisList(countries);
        // }
        if (countries) {
          setCountrisList(countries);
          setKeyWord(''); // Reset the keyword only if data is fetched
          setRegion(''); // Reset the region as well
        }

      } catch (error) {
        console.log(error);
        setError(true);
       
      }
    },
    [region, keyword]
  );

  useEffect(() => {
    if (region !== "" || keyword !== "") {
      getSearchCountries();
      return;
    }
    getCountries();
  }, [getCountries, region, getSearchCountries, keyword]);


  function chooseItemHandler(data) {
    // console.log(data);
    setShowDetail(true);
    setItemData(data);
  }

  if (showDetail) {
    return <ShowDetail data={itemData} mode={mode} />;
  }
  if (!countriesList || countriesList.length === 0) {
    return <h2>Sorry, no countris been found. Please try again.</h2>;
  }
  return (
    <>
      {error && (
        <p className="error">
          {`Oops, Counldnt find related countries with word - ${keyword}, please
          try different keywords.`}
        </p>
      )}
      <ul className="hero-ul">
        {countriesList.length > 0 &&
          countriesList.map((data, index) => (
            <Card key={index}>
              <li onClick={() => chooseItemHandler(data)}>
                <img
                  src={data.flags.png}
                  alt={`flag-img ${data.name.common}`}
                  className="card-img"
                />
                <div className="card-text">
                  <h3>{data.name.common}</h3>
                  <h4>
                    Population: <span>{data.population}</span>
                  </h4>
                  <h4>
                    Region: <span>{data.region}</span>
                  </h4>
                  <h4>
                    Capital:{" "}
                    <span>
                      {data.capital && data.capital[0]
                        ? data.capital[0]
                        : "unknown"}
                    </span>
                  </h4>
                </div>
              </li>
            </Card>
          ))}
      </ul>
    </>
  );
};

export default Hero;
