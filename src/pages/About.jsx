import React from "react";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="bg-pink-50 min-h-screen py-16 px-6 flex flex-col items-center"
        >
            
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
                {/* Imagen izquierda */}
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="/images/products/tarta_1.jpg"
                        alt="Interior de la pastelería"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Texto */}
                <div className="w-full lg:w-1/2 text-pink-800 text-lg leading-relaxed font-medium">
                <h1 className=" text-5xl font-bold text-pink-900 mb-8 text-left">Sobre Nosotros</h1>
                    <p className="mb-6">
                        En <span className="font-bold text-pink-900">Rosa Pastel</span>, nos dedicamos a crear delicias artesanales con amor y dedicación.
                        Cada uno de nuestros productos es elaborado cuidadosamente para brindar una experiencia única en cada bocado.
                    </p>
                    <p>
                        Nuestra misión es endulzar tus momentos especiales con pasteles y postres que combinan tradición, calidad y un toque de creatividad.
                        ¡Gracias por confiar en nosotros!
                    </p>
                </div>
            </div>

            {/* Imagen inferior opcional */}
            <div className="mt-12 max-w-4xl w-full rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/images/products/galleta_7_1.jpg"
                    alt="Equipo de trabajo"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
        </motion.div>
    );
}
