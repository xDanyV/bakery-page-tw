import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "../components/Dropdown";
import productsData from "../data/products"



export default function Products() {

  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts =
    selectedCategory === "Todas"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="text-center py-10 px-4 bg-pink-50 min-h-screen"
    >
      <h1 className="text-4xl font-bold text-pink-900 mb-4 ">Nuestros Productos</h1>
      <p className="mb-10 text-pink-700 font-semibold max-w-3xl mx-auto">
        En Rosa Pastel, ofrecemos una variedad de productos artesanales: pasteles, galletas y mucho más.
        Cada creación es única, hecha con ingredientes frescos y mucho amor.
      </p>

      <div className=" flex items-center justify-center">
        <Dropdown on onSelect={ handleCategoryChange } />
      </div>

      <motion.div
        key={filteredProducts + currentPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {paginatedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.05]"
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

      </motion.div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-full ${currentPage === index + 1
                ? "bg-pink-500 text-white"
                : "bg-pink-200 text-pink-600"
                } hover:bg-pink-500 hover:text-white hover:cursor-pointer`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

    </motion.div>
  );
}