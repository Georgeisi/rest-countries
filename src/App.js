import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./hooks/useFetch";
import CountriesInfo from "./components/CountriesInfo";




function App() {
  // https://restcountries.com

  

  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="detail/:name" element={<CountriesInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
