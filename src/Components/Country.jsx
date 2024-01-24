import { Link } from "react-router-dom"

const Country = (props) => {
  return (
      <div className="country-card ms-5 mt-3 mb-5">
        <Link to={`/country/${props.name.common}`} className="country-card-link">
      <img src={props.flags.png} className="w-100 country-img" alt="" />
      <div className="country-info ps-3">
        <h5 className="mt-3 fw-bold">{props.name.common}</h5>
        <div className="country-card-info mt-4">
        <p className="info-text">Population: <span>{new Intl.NumberFormat().format(props.population)}</span></p>
        <p className="info-text">Region: <span>{props.region}</span></p>
        <p className="info-text">Capital: <span>{props.capital}</span></p>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Country
