import React from "react";

const CountryCard = ({ isDarkMode }) => {

    return (
        <div className={`grid grid-col lg:grid-col-4 rounded-md shadow-lg mx-[10%] lg:mx-[60%] my-8 ${isDarkMode ? "bg-[white], text-black" : "bg-[#2b3844], text-white"}`}>
            <img src="" alt="" className="w-full h-40 object-cover rounded-t-md" />
            <div className={`p-6 ${isDarkMode ? "text-black" : "text-white"}`}>
                <h3 className="text-lg font-semibold mb-4">Country</h3>
                <p><strong>Population:</strong></p>
                <p><strong>Region:</strong></p>
                <p><strong>Capital:</strong></p>
            </div>
        </div>
    );
};

export default CountryCard;
