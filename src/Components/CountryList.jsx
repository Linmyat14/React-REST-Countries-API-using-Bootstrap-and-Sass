import { useEffect, useState } from "react";
import Country from "./Country";
import SearchInput from "./SearchInput";
import FilterCountry from "./FilterCountry";
const apiURL = "https://restcountries.com/v3.1"


const CountryList = (props) => {
  
  const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        async function getCountries () {
            const response = await fetch(`${apiURL}/all/`)
            const data = await response.json();
            setCountries(data);
        }
        getCountries();
    },[])

    const getCountryByRegion = async(regionName) => {
      try {
        const response = await fetch(`${apiURL}/region/${regionName}`)
        const data = await response.json();
        console.log(data);
        setCountries(data);
      }catch(error){
        console.log(error);
      }
    }

    const getCountryByName = async (countryName) => {
        try {
            const response = await fetch(`${apiURL}/name/${countryName}`)
            const data = await response.json();
            console.log(data)
            setCountries(data);
        } catch(error){
            console.log(error);
        }
    }

  return (
    <div className={!props.darkMode ? "bg-light pb-5": " country-list-dark bg-dark pb-5"}>
      <div className="search-and-filter mx-5">
        <div className={!props.darkMode ? "search text-center mb-5" : " search-dark text-center mb-5"}>
        <SearchInput onSearch={getCountryByName}/>
        </div>
        <div className={!props.darkMode ? "select-region d-inline-block" : "select-region-dark d-inline-block"}>
          <FilterCountry onSelect={getCountryByRegion} />
        </div>
      </div>
      <div className={!props.darkMode ? "mx-5": "country-dark mx-5"}>
        <div className="d-inline-flex justify-content-evenly flex-wrap">
            {countries.map((country) => {
                return <Country key={country.name.common} {...country}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default CountryList
