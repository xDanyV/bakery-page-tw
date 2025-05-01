import React from "react";
import { motion } from "framer-motion";

export default function Products() {
    const products = [
        {
          name: "Tarta de Vainilla",
          description: "Un delicioso pastel de vainilla con crema de mantequilla.",
          image: "/images/products/tarta_12.jpg",
        },
        {
          name: "Tartitas con frutas",
          description: "Tartitas individuales con una variedad de frutas frescas.",
          image: "/images/products/tarta_6.jpg",
        },
        {
          name: "Tarta de Frambuesa",
          description: "Una tarta suave y cremosa, con un toque de frambuesa.",
          image: "/images/products/tarta_13.jpg",
        },
        {
          name: "Cupcakes de Chocolate",
          description: "Deliciosos cupcakes de chocolate, perfectos para cualquier ocasión.",
          image: "/images/products/cupcake_1.jpg",
        },
        {
          name: "Tarta de Fresa",
          description: "Tarta de fresa fresca y suave, ideal para los amantes de las fresas.",
          image: "/images/products/tarta_7.jpg",
        },
        {
          name: "Galleta de Chocolate",
          description: "Galletas de chocolate crujientes por fuera y suaves por dentro|.",
          image: "/images/products/galleta_1.jpg",
        },
      ];
    
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center py-10 px-4 bg-pink-50 min-h-screen"
        >
          <h1 className="text-4xl font-bold text-pink-900 mb-4">Nuestros Productos</h1>
          <p className="mb-10 text-pink-700 font-semibold max-w-3xl mx-auto">
            En Rosa Pastel, ofrecemos una variedad de productos artesanales: pasteles, galletas y mucho más.
            Cada creación es única, hecha con ingredientes frescos y mucho amor.
          </p>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-pink-800">{product.name}</h2>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      );
}