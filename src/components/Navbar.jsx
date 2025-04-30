import React from "react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md p-4">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-pink-600">Rosa Pastel</div>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#" className="text-pink-600 hover:text-pink-900 font-bold hover:underline">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-pink-700 hover:text-pink-900 font-bold hover:underline">
                            Productos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-pink-700 hover:text-pink-900 font-bold hover:underline">
                            Sobre Nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-pink-700 hover:text-pink-900 font-bold hover:underline">
                            Contacto
                        </a>
                    </li>
                </ul>
                <button className="md:hidden text-pink-700">☰</button>
            </div>
        </nav>
    );
}
