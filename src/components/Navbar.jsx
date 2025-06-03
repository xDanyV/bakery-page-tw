import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md p-4">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="text-pink-700 font-bold text-3xl hover:scale-110 transition-all duration-500 ease-in-out leading-tight block">
                    Rosa Pastel
                    <span className="block text-base font-bold text-right">Alta Repostería</span>
                </a>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="/" className="text-pink-600 hover:text-pink-900 font-bold hover:underline">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/products" className="text-pink-700 hover:text-pink-900 font-bold hover:underline">
                            Productos
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-pink-700 hover:text-pink-900 font-bold hover:underline">
                            Sobre Nosotros
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-pink-700 hover:text-pink-900 font-bold hover:underline">
                            Contacto
                        </a>
                    </li>
                </ul>
                <button className="md:hidden text-pink-700">☰</button>
            </div>
        </nav>
    );
}
