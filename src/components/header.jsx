import React from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

export const Header = ({ isDarkMode, toggleDarkMode }) => {

    return (
        <div className={`${isDarkMode ? "bg-[white]" : "bg-[#2b3844]"} flex justify-between shadow-lg h-20 items-center`}>
            <h3 className="ml-4 lg:mx-[10%] lg:text-lg font-bold">Where in the World?</h3>
            <div className="flex mr-4 lg:mx-[10%] gap-3 text-sm items-center cursor-pointer" onClick={toggleDarkMode}>
                {isDarkMode ? <BsSun /> : <BsMoonFill />}
                <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
            </div>
        </div>
    );
}