// components/Dropdown.jsx

import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">

            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md 
                    border border-pink-300 shadow-sm px-4 py-2 bg-white 
                    text-sm font-medium text-pink-700 hover:bg-pink-50 
                    focus:outline-none
                    mb-10"
                >
                    Todos
                    <svg
                        className="ml-1 -mr-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-56 bottom-full mb-2
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none "
                    role="menu"
                >
                    <div className="py-1" role="none">
                        <a
                            href="/products"
                            className="block px-4 py-2 text-sm text-pink-700 
                            hover:bg-pink-100"
                            role="menuitem"
                        >
                            Pasteles
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-pink-700
                            hover:bg-pink-100"
                            role="menuitem"
                        >
                            Cupcakes
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-pink-700
                            hover:bg-pink-100"
                            role="menuitem"
                        >
                            Bebidas
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;