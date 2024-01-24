import { Link } from "react-router-dom"

const Error = ({ darkMode }) => {
  return (
    <div className={!darkMode ? "error-page" : "error-page-dark"}>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Link to={"/"}>
          <button className="back-btn shadow-sm mb-4">
            <i className="bi bi-arrow-left me-3 back"></i>Back
          </button>
        </Link>
        <img src="./images/error-404.svg" className="w-50" alt="" />
      </div>
    </div>

  )
}

export default Error
