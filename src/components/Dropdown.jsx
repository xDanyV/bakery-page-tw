
import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
        console.log("Categoría seleccionada:", category);
        if (onSelect) {
            onSelect(category);
        }
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md 
                border border-pink-300 shadow-sm px-4 py-2 bg-white 
                text-sm font-medium text-pink-700 hover:bg-pink-50 
                focus:outline-none mb-10"
            >
                {selectedCategory}
                <svg
                    className="ml-1 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bottom-full mb-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {["Todas","Tartas", "Cupcake", "Galleta"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleSelect(cat)}
                                className="w-full text-left block px-4 py-2 text-sm text-pink-700 hover:bg-pink-100"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
