/* eslint-disable react/prop-types */
const ShowDetail = ({ data, mode }) => {
  const nativeName = data.name.official
    ? data.name.official
    : "unknown";
  const captial = data.capital && data.capital[0] ? data.capital[0] : "unknown";
  const tld = data.tld[0] ? data.tld[0] : "unknown";
  const currency = Object.keys(data.currencies)[0];
  const languages = Object.values(data.languages);
  const borders = data.borders ? data.borders : "unknown";
  return (
    <div className="detail-box">
      <img src={data.flags.png} alt={data.name.common} />
      <div className="detail-text">
        <h3>{data.name.common}</h3>
        <div className="detail">
        <div className="first-part">
          <h4>
            Native Name: <span>{nativeName}</span>
          </h4>
          <h4>
            Population: <span>{data.population}</span>
          </h4>
          <h4>
            Region: <span>{data.region}</span>
          </h4>
          <h4>
            Sub Region: <span>{data.subregion}</span>
          </h4>
          <h4>
            Captial: <span>{captial}</span>
          </h4>
        </div>
        <div className="second-part">
          <h4>
            Top Level Domain: <span>{tld}</span>
          </h4>
          <h4>
            Currencies: <span>{currency}</span>
          </h4>
          <h4>
            Languages:{" "}
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
          </h4>
        </div>
        </div>
        {borders !== "unknown" && (
          <div>
            <h5>Border Countries: </h5>
            <div className="borders">
              {borders !== "unknown" &&
                borders.map((border) => (
                  <span className={`border ${mode}`} key={border}>
                    {border}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDetail;
