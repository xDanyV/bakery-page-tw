import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { href: '/', label: 'Inicio' },
        { href: '/products', label: 'Productos' },
        { href: '/about', label: 'Sobre Nosotros' },
        { href: '/contact', label: 'Contacto' },
    ];

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
                {/* Botón hamburguesa para pantallas pequeñas */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menú"
                    className="md:hidden rounded-lg bg-pink-600 py-2 px-4 text-sm text-white shadow hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                    ☰
                </button>
            </div>

            {/* Menú desplegable solo visible en pantallas pequeñas */}
            {isMenuOpen && (
                <ul className="md:hidden mt-4 space-y-2 px-4">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <a
                                href={link.href}
                                className="block rounded-md bg-pink-100 px-4 py-2 text-pink-800 font-medium shadow hover:bg-pink-500 hover:text-white transition"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

        </nav >
    );
}
