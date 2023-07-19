import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { FilterSection } from "./components/filterSection";
import { CountriesSection } from "./components/countriesSection";
import { CountryCard } from "./components/countryCard"
import { Header } from "./components/header";
import "./index.css";
import { apiUrl } from "./api/api";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiUrl}/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      // Sort countries alphabetically by name
      const sortedCountries = data.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      setCountries(sortedCountries);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiUrl}/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${apiUrl}/region/${regionName}`);

      if (!res.ok) throw new Error("Failed!");

      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
    console.log(countries);
  }, []);

  return (
    <Router>
      <div className={`${isDarkMode ? "text-black" : "text-white"} h-screen w-screen`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className={` ${isDarkMode ? "bg-[white]" : "bg-[#202c36]"}`}>
          <div className={`flex flex-col gap-5 lg:flex-row pt-24 justify-between mx-[5%] lg:mx-[10%]`}>
            <SearchBar isDarkMode={isDarkMode} onSearch={getCountryByName} setInput={setInput} input={input} />
            <FilterSection isDarkMode={isDarkMode} onSelect={getCountryByRegion} />
          </div>
          <Routes>
            <Route
              path="/"
              element={<CountriesSection isDarkMode={isDarkMode} countries={countries} isLoading={isLoading} error={error} input={input} />} />
            <Route
              path="/country/:countryName"
              element={<CountryCard isDarkMode={isDarkMode} countries={countries} isLoading={isLoading} error={error} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;