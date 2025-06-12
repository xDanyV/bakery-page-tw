import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbCake } from "react-icons/tb";
import { LuCakeSlice, LuCake } from 'react-icons/lu';
import { RiCake3Fill, RiCake3Line, RiCakeLine } from 'react-icons/ri';

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
        resetTimer();
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
        resetTimer();
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
        resetTimer();
    };

    const goToSlide = (i) => {
        setIndex(i);
        resetTimer();
    };

    const slide = slides[index];

    return (
        <motion.div
            initial={{ opacity: 0 }}    // Al inicio
            animate={{ opacity: 1 }}    // Al mostrar
            exit={{ opacity: 0 }}       // Al salir
            transition={{ duration: 1.5 }}
            className="text-center bg-pink-50 min-h-screen ">

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
                    className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                />

            </AnimatePresence>

            {/* Contenido flotante */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 sm:px-12 text-center">
                <div className='bg-black/10 rounded-4xl p-5'>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-lg md:text-2xl mb-6">{slide.description}</p>
                    <a
                        href={slide.link}
                        className="bg-pink-600 hover:bg-pink-800 hover:scale-110 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
                    >
                        {slide.buttonText}
                    </a>
                </div>

            </div>

            {/* Dots de navegación */}
            <div className="bottom-6 w-full flex flex-wrap justify-center gap-2 z-20 px-4">

                {slides.map((_, i) => (
                    <button
                        size='sm'
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`hover:cursor-pointer w-3 h-3 rounded-full transition ${i === index ? 'bg-pink-600 scale-125' : 'bg-white/70'
                            }`}
                    />
                ))}
            </div>

            <div className='text-center py-10 px-4 bg-pink-50'>
                <h1 className="text-4xl font-bold text-pink-900 mb-4">Sobre nosotros</h1>
                <p className="mb-10 text-pink-700 font-semibold max-w-3xl mx-auto">
                    Bienvenidos a Rosa Pastel, una pastelería artesanal dedicada a endulzar los momentos
                    más especiales de tu vida. Desde nuestros inicios, nos hemos comprometido con la calidad,
                    la creatividad y la pasión por la repostería, ofreciendo productos frescos, deliciosos y hechos con amor.
                </p>

                <div className='flex flex-col md:flex-row gap-6 bg-pink-100 rounded-lg p-4 md:p-6'>
                    <div className='md:w-2/3'>
                        <h2 className="text-2xl font-bold text-pink-800 mb-6 border-b border-pink-300 pb-2">
                            Nuestra Fundación
                        </h2>
                        <p className='mb-5 text-lg text-pink-700 font-semibold max-w-3xl mx-auto'>
                            Rosa Pastel fue fundada en el año 2015 por la chef pastelera María López,
                            con el sueño de llevar a cada hogar el sabor único de los postres tradicionales,
                            combinados con un toque moderno. Iniciamos como un pequeño taller familiar y,
                            gracias al cariño de nuestros clientes, hoy contamos con un equipo profesional y
                            una gran comunidad que confía en nosotros.
                        </p>

                    </div>
                    <div className="md:w-1/3  p-4 m-2 ">
                        <img
                            src="/images/products/tarta_6.jpg"
                            alt="Tartitas"
                            className="w-full h-52 sm:h-60 md:h-72 object-cover hover:scale-105 rounded-lg transition-transform duration-300"
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row mt-10 bg-pink-100 rounded-lg p-5'>
                    <div className="md:w-1/3  p-4 m-2 ">
                        <img
                            src="/images/products/tarta_3.jpg"
                            alt="Tartitas"
                            className="w-full h-52 sm:h-60 md:h-72 object-cover hover:scale-105 rounded-lg transition-transform duration-300"
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <h2 className="text-2xl font-bold text-pink-800 mb-6 border-b border-pink-300 pb-2">
                            Misión
                        </h2>
                        <p className='mb-5 text-lg text-pink-700 font-semibold max-w-3xl mx-auto'>
                            Nuestra misión es crear experiencias memorables a través de productos de repostería
                            de alta calidad, elaborados con ingredientes seleccionados y con un servicio cálido
                            y personalizado que refleje nuestra pasión por lo que hacemos.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-6 bg-pink-100 rounded-lg p-4 md:p-6'>
                    <div className='md:w-2/3'>
                        <h2 className="text-2xl font-bold text-pink-800 mb-6 border-b border-pink-300 pb-2">
                            Visión
                        </h2>
                        <p className='mb-5 text-lg text-pink-700 font-semibold max-w-3xl mx-auto'>
                            Ser reconocidos como una de las mejores pastelerías artesanales a nivel regional,
                            destacando por nuestra innovación, compromiso con la calidad y cercanía con nuestros clientes.
                        </p>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <img
                            src="/images/products/galleta_1.jpg"
                            alt="Tartitas"
                            className="w-full h-52 sm:h-60 md:h-72 object-cover hover:scale-105 rounded-lg transition-transform duration-300"
                        />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-pink-800  border-pink-300 pt-10">
                    Nuestros Valores
                </h2>

                <div className="flex justify-center bg-pink-100 py-10 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl w-full">
                        {[
                            { icon: <TbCake className="text-6xl mb-2" />, label: 'Calidad' },
                            { icon: <LuCakeSlice className="text-6xl mb-2" />, label: 'Pasión' },
                            { icon: <LuCake className="text-6xl mb-2" />, label: 'Creatividad' },
                            { icon: <RiCake3Fill className="text-6xl mb-2" />, label: 'Compromiso' },
                            { icon: <RiCake3Line className="text-6xl mb-2" />, label: 'Honestidad' },
                            { icon: <RiCakeLine className="text-6xl mb-2" />, label: 'Respeto' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-pink-200  pt-4 font-medium text-center hover:scale-105 transition-transform duration-300 rounded-2xl text-pink-800 flex flex-col items-center justify-center h-32  w-full shadow-md"
                            >
                                {item.icon}
                                <span className="pb-3">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </motion.div>

    );
}
