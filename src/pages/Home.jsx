import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}    // Al inicio
            animate={{ opacity: 1 }}    // Al mostrar
            exit={{ opacity: 0 }}       // Al salir
            transition={{ duration: 1.5 }}
            className="text-center py-10"
        >
            <h1 className="text-4xl font-bold text-pink-900">Bienvenido a Rosa Pastel</h1>
            <p className="mt-4 text-white font-bold">
                Repostería artesanal hecha con amor. ¡Descubre nuestros deliciosos productos!
            </p>
        </motion.div>
    );
}
