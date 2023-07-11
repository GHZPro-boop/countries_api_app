import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

export const Header = ({ isDarkMode, toggleDarkMode }) => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 ${isDarkMode ? "bg-white" : "bg-[#2b3844]"} z-10`}>
            <div className="flex justify-between h-20 items-center ml-4 lg:mx-[10%]">
                <h3 className="lg:text-lg font-bold">Where in the World?</h3>
                {showScrollToTop && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleScrollToTop}>
                        Scroll to Top
                    </button>
                )}
                <div className="flex mr-4 lg:mx-[10%] gap-3 text-sm items-center cursor-pointer" onClick={toggleDarkMode}>
                    {isDarkMode ? <BsSun /> : <BsMoonFill />}
                    <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
                </div>
            </div>
        </div>
    );
}