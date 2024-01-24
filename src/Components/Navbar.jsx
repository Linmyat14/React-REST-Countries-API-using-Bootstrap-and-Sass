
const Navbar = (props) => {

  return (
    <nav className={!props.darkMode ? "bg-white p-3 fixed-top": " dark bg-info text-white p-3 fixed-top"}>
     <div className="container d-flex align-items-center">
        <h4 className=" fw-bold">Where in the world?</h4>
        <button className="dark-mode ms-auto d-flex btn fw-bold align-items-center fs-6"
                onClick={props.toggleDarkMode}>
            <i className="bi bi-moon align-items-center me-2"></i>
            Dark Mode
        </button>
     </div>
    </nav>
  )
}

export default Navbar
