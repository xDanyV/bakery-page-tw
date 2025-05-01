import React from "react";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}    // Al inicio
            animate={{ opacity: 1 }}    // Al mostrar
            exit={{ opacity: 0 }}       // Al salir
            transition={{ duration: 1.5 }}
            className="text-center py-10">

            <h1 className="text-4xl font-bold text-pink-900">Sobre Nosotros</h1>
            <p className="mt-4 text-white font-bold">
                En Rosa Pastel, nos dedicamos a crear delicias artesanales con amor y pasión.
                Cada bocado es una experiencia única que refleja nuestra dedicación a la calidad.
            </p>

        </motion.div>
    );
}