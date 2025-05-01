import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const slides = [
    {
        id: 0,
        image: "/images/products/galleta_6.jpg",
        title: "Galletas Personalizadas",
        description: "Galletas decoradas para cualquier ocasión.",
        buttonText: "Ver productos",
        link: "/products"
    },
    {
        id: 1,
        image: "/images/products/tarta_5.jpg",
        title: "Tarta de fresa",
        description: "Una deliciosa tarta de fresa con crema fresca.",
        buttonText: "Explorar",
        link: "/contact"
    },
    {
        id: 2,
        image: "/images/products/tarta_10.jpg",
        title: "Tartas de Temporada",
        description: "Disfruta sabores frescos según la época del año.",
        buttonText: "Conócenos",
        link: "/about"
    }
];



export default function Home() {
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(null);

    const resetTimer = () => {
        if (timer) {
            clearInterval(timer);
        }
        const newTimer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 8000);
        setTimer(newTimer);
    };

    useEffect(() => {
        resetTimer(); // Inicia el temporizador al cargar el componente
        return () => clearInterval(timer); // Limpia el temporizador al desmontar el componente
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
        resetTimer(); // Reinicia el temporizador al interactuar
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
        resetTimer(); // Reinicia el temporizador al interactuar
    };

    const goToSlide = (i) => {
        setIndex(i);
        resetTimer(); // Reinicia el temporizador al interactuar
    };

    const slide = slides[index];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Imagen con transición */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Contenido flotante */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-6">{slide.description}</p>
                <a
                    href={slide.link}
                    className="bg-pink-600 hover:bg-pink-800 hover:scale-110 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
                >
                    {slide.buttonText}
                </a>
            </div>

            {/* Botones de navegación */}
            <button
                onClick={prevSlide}
                className="absolute hover:cursor-pointer hover:bg-white/30 top-1/2 left-0 h-full rounded-r-full transform -translate-y-1/2 bg-white/10 text-pink-700 p-3 shadow-lg z-20"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute hover:cursor-pointer hover:bg-white/30 top-1/2 right-0 h-full rounded-l-full transform -translate-y-1/2 bg-white/10 text-pink-700 p-3 shadow-lg z-20"
            >
                ❯
            </button>

            {/* Dots de navegación */}
            <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`hover:cursor-pointer w-3 h-3 rounded-full transition ${i === index ? 'bg-pink-600 scale-125' : 'bg-white/70'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
