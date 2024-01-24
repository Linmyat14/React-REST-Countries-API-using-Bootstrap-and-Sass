import { formatList } from "../../node_modules/astro/dist/runtime/server/render/util";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Loading from "../Components/Loading";
const apiURL = "https://restcountries.com/v3.1"


const SingleCountryPage = (props) => {
    const { countryName } = useParams();
    const [ countryInfo, setCountryInfo] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getCountryInfo = async () => {
            try {
              const response = await fetch(`${apiURL}/name/${countryName}?fullText=true`)
              const data = await response.json();
              console.log(data);
              setCountryInfo(data);
            }catch(error){
              console.log(error);
            }
          }
          getCountryInfo();
          setLoading(false);
    }, [countryName])
    if(loading) {
      console.log("loading state...");
      <Loading />
    }

    return (
    <div className={!props.darkMode ? "country-info pt-5 container mt-5" : "country-info-dark pt-5 container mt-5"}>
      <Link to={"/"}>
        <button className="back-btn shadow-sm">
          <i className="bi bi-arrow-left me-3 back"></i>Back
        </button>
      </Link>
      
      {countryInfo && countryInfo.map((country, index) => (
      <div className="country-info-page mt-5 text-dark" key={index}>
         <div className="img-section">
            <img src={country.flags.png} alt="country-png" className="country-info-img" />
         </div>
         <div className="info-section mt-4">
            <h2 className="mb-4 fw-bold">{country.name.common}</h2>
            <div className="info-details mb-4">
              <div className="first-col me-5">
                  <p>Population: <span className="info-data">{ new Intl.NumberFormat().format(country.population)}</span> </p>
                  <p>Region: <span className="info-data">{country.region}</span></p>
                  <p>Sub Region: <span className="info-data">{country.subregion}</span></p>
                  <p>Capital: <span className="info-data">{country.capital}</span> </p>
              </div>
              <div className="second-col">
                <p>Top Level Domain: <span className="info-data">{country.tld}</span> </p>
                <p>Currencies: <span className="info-data">{formatList(
                (Object.values(country.currencies).map((currency) => currency.name)))} </span></p>
                <p>Languages:  <span className="info-data">{formatList(Object.values(country.languages))}</span> </p>
              </div>
            </div>
            <div className="">
              <p className="">Border Countries: <span className="info-data">{country.borders.map((border,index) => {
                return border ? <span key={index} className="border-countries ms-2 shadow-sm px-3 py-1 rounded">{border}</span> : null
              })}</span>
                </p>
            </div>
         </div>

      </div> 
       ))}
    </div>
  )
}

export default SingleCountryPage

