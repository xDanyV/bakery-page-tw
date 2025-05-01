import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}    // Al inicio
            animate={{ opacity: 1 }}    // Al mostrar
            exit={{ opacity: 0 }}       // Al salir
            transition={{ duration: 1.5 }}
            className="text-center py-10">

            <h1 className="text-4xl font-bold text-pink-900">Contáctanos</h1>
            <p className="mt-4 text-white font-bold">
                Si tienes alguna pregunta o deseas realizar un pedido, no dudes en contactarnos.
                Estamos aquí para ayudarte.
            </p>
        </motion.div>
    );
}
