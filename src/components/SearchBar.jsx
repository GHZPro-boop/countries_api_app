import React, { useState } from "react";
import { CiSearch } from "react-icons/ci"

export const SearchBar = ({ isDarkMode, onSearch }) => {
    const [input, setInput] = useState('')
    const [error, setError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()

        if (input.trim() === "") {
            const setError = alert("Please enter a country name");
        } else {
            setError("");
            onSearch(input);
        }
        setInput('')
    };

    return (
        <form onSubmit={submitHandler} className={`${isDarkMode ? "bg-[white]" : "bg-[#202c36]"}`}>
            <div className={`flex gap-2 items-center shadow-lg mx-[5%] lg:px-[40%] lg:mx-[35%] lg:w-full lg:justify-center h-10 rounded-md ${isDarkMode ? "text-black bg-[white]" : "text-white bg-[#2b3844]"
                }`}
            >
                <span><CiSearch onClick={submitHandler} className="h-10 w-10 pl-5" /></span>
                <input
                    type="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={`${isDarkMode ? "bg-[white]" : "bg-[#2b3844]"} font-semibold border-0 h-10 w-60 pl-5`}
                    placeholder="Search for a country..."
                />
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </form>
    );
}