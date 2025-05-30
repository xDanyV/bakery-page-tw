
import React, { useState } from 'react';
import { HiMiniSquares2X2, HiMiniCake } from "react-icons/hi2";
import { TbCookieFilled } from "react-icons/tb";
import { RiDrinks2Fill, RiCake3Line } from "react-icons/ri";

const Dropdown = ({ onSelect }) => {

    const categoryIcons = {
        "Todas": HiMiniSquares2X2,
        "Tartas": HiMiniCake,
        "Personalizado": HiMiniCake,
        "Cupcake": RiCake3Line,
        "Galleta": TbCookieFilled,
        "Crepa": HiMiniSquares2X2,
        "Bebidas": RiDrinks2Fill,
    };

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

    const SelectedIcon = categoryIcons[selectedCategory];

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex items-center justify-center w-full rounded-md 
    border border-pink-300 shadow-sm px-4 py-2 bg-white 
    text-sm font-medium text-pink-700 hover:bg-pink-50 
    focus:outline-none mb-10 hover:cursor-pointer"
            >
                {SelectedIcon && <SelectedIcon className="mr-2 h-5 w-5" />}
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
                //La linea siguiente me ayuda a posicionar el menu Dropdown
                <div className="absolute top-full  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {["Todas", "Tartas", "Personalizado", "Cupcake", "Galleta", "Crepa", "Bebidas"].map((cat) => (
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
