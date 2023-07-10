import React from "react";

export const FilterSection = ({ isDarkMode }) => {

    return (
        <div className={`${isDarkMode ? "bg-[white]" : "bg-[#202c36]"} mx-[5%] lg:mx-[10%]`}>

            <select id="countries_multiple" className={`${isDarkMode ? "bg-[white]" : "bg-[#2b3844]"} h-10 w-40 font-medium rounded-md text-sm`}>
                <option selected>Filter by Region</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    );
}