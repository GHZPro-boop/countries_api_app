import React, { useState } from "react";
import CountryCard from "./countryCard";

export const CountriesSection = ({ isDarkMode }) => {

    return (
        <div className={`h-screen ${isDarkMode ? "bg-[white]" : "bg-[#202c36]"}`}>
            <CountryCard />
        </div>
    );
}