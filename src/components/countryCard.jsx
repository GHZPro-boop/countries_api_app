import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { apiUrl } from "../api/api";

export const CountryCard = ({ isDarkMode }) => {

    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const { countryName } = useParams();

    useEffect(() => {
        const getCountryByName = async () => {
            try {
                const res = await fetch(`${apiUrl}/name/${countryName}`);

                if (!res.ok) {
                    throw new Error('Country not found');
                }

                const data = await res.json();
                setCountry(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };

        getCountryByName();
    }, [countryName]);

    return (
        <div className={`h-screen ${isDarkMode ? "bg-[white]" : "bg-[#202c36]"}`}>
            <div className={`${isDarkMode ? "bg-[white]" : "bg-[#202c36]"}`}>
                <button className={`ml-[15%] mt-7 font-bold text-lg ${isDarkMode ? "bg-[white]" : "bg-[#202c36]"}`}>
                    <Link to='/'>Back</Link>
                </button>
            </div>
            {isLoading && !error && <h4>Loading........</h4>}

            {error && isLoading && <h4>{error}</h4>}

            <div className={`mx-[10%] mt-6 rounded-md ${isDarkMode ? "bg-[white] shadow-lg" : "bg-[#202c36]"}`}>
                {
                    country.map((countryItem, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:items-center">
                            <div>
                                <img src={countryItem.flags.png} alt="" className="rounded-md w-full lg:w-[90%] h-52 lg:h-72" />
                            </div>
                            <div className="lg:justify-center">
                                <h3 className="font-bold my-5 text-base">{countryItem.name.common}</h3>
                                <div className="my-3">
                                    <h5>
                                        <span className="font-semibold">Native Name: </span>
                                        <span className="text-sm">{countryItem.name.official}</span>
                                    </h5>
                                    <h5>
                                        <span className="font-semibold">Population: </span>
                                        <span className="text-sm">{new Intl.NumberFormat().format(countryItem.population)}</span>
                                    </h5>
                                    <h5>
                                        <span className="font-semibold">Region: </span>
                                        <span className="text-sm">{countryItem.region}</span>
                                    </h5>
                                    <h5>
                                        <span className="font-semibold">Sub Region: </span>
                                        <span className="text-sm">{countryItem.subregion}</span>
                                    </h5>
                                    <h5>
                                        <span className="font-semibold">Capital: </span>
                                        <span className="text-sm">{countryItem.capital}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};