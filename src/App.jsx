import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './css/App.css'
import CountryList from './Components/CountryList'
import SingleCountryPage from './Pages/SingleCountryPage'
import Error from './Pages/Error'
import { useState } from 'react'

function App() {
  const [ darkMode, setDarkMode] = useState(false);
    console.log(darkMode)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode);
  }
  
  return (
    <div>
      <Navbar darkMode={darkMode}
              toggleDarkMode={toggleDarkMode} />
      <div className={!darkMode ? " bg-white vh-100 mt-5" : "bg-dark vh-100 mt-5"}>
      <Routes>
        <Route path={"/"} element={<CountryList darkMode={darkMode}/>}></Route>
        <Route path={"/country/:countryName"} element={<SingleCountryPage  darkMode={darkMode}/>}></Route>
        <Route path={"/*"} element={<Error darkMode={darkMode}/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
