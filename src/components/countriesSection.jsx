import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CountriesSection = ({ isDarkMode, countries, isLoading, error, input }) => {

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-4 gap-6 h-full mx-[10%] lg:mx-[5%] my-8 ${isDarkMode ? "bg-[white]" : "bg-[#202c36]"
            }`}
        >
            {isLoading && !error && <h4>Loading........</h4>}
            {error && !isLoading && <h4>{error}</h4>}
            {countries.filter((country) => {
                return input.toLowerCase() === "" ? country : country.name.common.toLowerCase().includes(input);
            }).map((country) => (
                <Link to={`/country/${country.name.common}`} key={country.name.common}>
                    <div className={`shadow-lg ${isDarkMode ? "text-black" : "text-white"}`}>
                        <div>
                            <img src={country.flags.png} alt="" className="w-full h-40 object-cover rounded-t-md" />
                        </div>
                        <div className={`p-10 rounded-b-md ${isDarkMode ? "bg-[white] text-black" : "text-white bg-[#2b3844]"}`}
                        >
                            <h3 className="font-bold mb-6">{country.name.common}</h3>
                            <p>
                                <span className="font-semibold">Population: </span>
                                <span className="text-sm"> {new Intl.NumberFormat().format(country.population)}</span>
                            </p>
                            <p>
                                <span className="font-semibold">  Region: </span>
                                <span className="text-sm"> {country.region}</span>
                            </p>
                            <p >
                                <span className="font-semibold">  Capital: </span>
                                <span className="text-sm"> {country.capital}</span>
                            </p>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    );
}