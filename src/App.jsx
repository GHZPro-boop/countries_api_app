import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { CountriesSection } from "./components/countriesSection";
import { FilterSection } from "./components/filterSection";
import { Header } from "./components/header";
import "./index.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "text-black" : "text-white"} h-screen w-screen`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className={` ${isDarkMode ? "bg-[white]" : "bg-[#202c36]"}`}>
        <div className={`${isDarkMode ? "bg-[white]" : "bg-[#202c36]"} flex flex-col gap-5 lg:flex-row pt-9 justify-between`}>
          <SearchBar isDarkMode={isDarkMode} />
          <FilterSection isDarkMode={isDarkMode} />
        </div>
        <CountriesSection isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;