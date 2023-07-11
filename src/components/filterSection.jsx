import React from "react";

export const FilterSection = ({ isDarkMode, onSelect }) => {
    const selectHandler = (e) => {
        const regionName = e.target.value
        onSelect(regionName);
    };

    return (
        <div className={`${isDarkMode ? "bg-[white]" : "bg-[#202c36]"} mx-[5%] lg:mx-[10%]`}>

            <select
                id="countries_multiple"
                onChange={selectHandler}
                className={`${isDarkMode ? "bg-[white] shadow-lg" : "bg-[#2b3844]"} space-y-8 h-10 w-40 font-medium rounded-md text-sm`}>
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">Americas</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}