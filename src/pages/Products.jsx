import React, { useState } from "react";
import { motion } from "framer-motion";
import Dropdown from "../components/Dropdown";

import productsData from "../data/products"

export default function Products() {

  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
  };

  const filteredProducts =
    selectedCategory === "Todas"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

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

      <div className=" flex items-center justify-center">
        <Dropdown on onSelect={handleCategoryChange} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
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
              <p className="mt-2 text-pink-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  );
}