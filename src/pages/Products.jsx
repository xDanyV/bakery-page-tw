import React from "react";
import { motion } from "framer-motion";

export default function Products() {
    return (
        <motion.div
            initial={{ opacity: 0 }}    // Al inicio
            animate={{ opacity: 1 }}    // Al mostrar
            exit={{ opacity: 0 }}       // Al salir
            transition={{ duration: 1.5 }}
            className="text-center py-10">

            <h1 className="text-4xl font-bold text-pink-900">Nuestros Productos</h1>
            <p className="mt-4 text-white font-bold">
                En Rosa Pastel, ofrecemos una variedad de productos artesanales,
                desde pasteles hasta galletas, todos hechos con ingredientes frescos y de alta calidad.
                Cada producto es una obra maestra que refleja nuestra pasión por la repostería.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-pink-900">Pastel de Chocolate</h2>
                    <p className="mt-2 text-gray-700">Un delicioso pastel de chocolate, perfecto para cualquier ocasión.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-pink-900">Galletas de Vainilla</h2>
                    <p className="mt-2 text-gray-700">Galletas suaves y esponjosas con un toque de vainilla.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-pink-900">Tarta de Frutas</h2>
                    <p className="mt-2 text-gray-700">Una tarta fresca y colorida, llena de frutas de temporada.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-pink-900">Cupcakes de Limón</h2>
                    <p className="mt-2 text-gray-700">Deliciosos cupcakes de limón, perfectos para un dulce capricho.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-pink-900">Brownies de Nueces</h2>
                    <p className="mt-2 text-gray-700">Brownies ricos
                        y húmedos, con trozos de nueces crujientes.</p>
                </div>
            </div>
        </motion.div>
    );
}