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
                        className="w-full h-64 lg:h-auto object-cover hover:scale-105 transition-transform duration-300"
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
                    src="/images/interior/interior_1.jpg"
                    alt="Equipo de trabajo"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Nuestro equipo */}
            <div className="mt-20 max-w-6xl w-full text-center">
                <h2 className="text-4xl font-bold text-pink-900 mb-12">Nuestro Equipo</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Miembro 1 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <img src="/images/employees/employee.jpg" alt="Chef Ana" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                        <h3 className="text-xl font-semibold text-pink-800">Ana Ramírez</h3>
                        <p className="text-pink-700">Chef Pastelera</p>
                        <p className="text-sm text-gray-500 mt-2">Especialista en decoración y sabores únicos que hacen cada pastel inolvidable.</p>
                    </div>

                    {/* Miembro 2 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <img src="/images/employees/employee_1.jpg" alt="Carlos López" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                        <h3 className="text-xl font-semibold text-pink-800">Carlos López</h3>
                        <p className="text-pink-700">Encargado de Producción</p>
                        <p className="text-sm text-gray-500 mt-2">Asegura que cada producto mantenga nuestros estándares de calidad y frescura.</p>
                    </div>

                    {/* Miembro 3 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <img src="/images/employees/employee_2.jpg" alt="Laura Méndez" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                        <h3 className="text-xl font-semibold text-pink-800">Laura Méndez</h3>
                        <p className="text-pink-700">Atención al Cliente</p>
                        <p className="text-sm text-gray-500 mt-2">Siempre lista para ayudarte a elegir el postre perfecto para cada ocasión.</p>
                    </div>
                </div>
            </div>

            {/* Video representativo */}
            <div className="mt-20 max-w-6xl w-full text-center px-4">
                <h2 className="text-4xl font-bold text-pink-900 mb-8">Así trabajamos en Rosa Pastel</h2>

                <div className="rounded-lg overflow-hidden shadow-lg">
                    <video
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                    >
                        <source src="/videos/cookies.mp4" type="video/mp4" />
                        Tu navegador no soporta el video.
                    </video>
                </div>
            </div>

            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10 pt-10">

                {/* Texto */}
                <div className="w-full lg:w-1/2 text-pink-800 text-lg leading-relaxed font-medium">
                    <h1 className=" text-5xl font-bold text-pink-900 mb-8 text-left">Sobre Nosotros</h1>
                    <p className="mb-6">
                        En <span className="font-bold text-pink-900">Rosa Pastel</span>, no solo horneamos postres, también cultivamos comunidad. Nuestro local es un espacio
                        donde cada cliente es bienvenido como parte de la familia.
                    </p>
                    <p>
                        Apoyar nuestro negocio local significa mucho más que disfrutar un pastel: es apostar por el talento, el esfuerzo y la pasión de quienes trabajamos con amor
                        para endulzar tus días. ¡Gracias por visitarnos y ser parte de esta historia dulce!
                    </p>
                </div>

                {/* Imagen derecha */}
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="/images/interior/interior_2.jpg"
                        alt="Interior de la pastelería"
                        className="w-full h-64 lg:h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

            </div>


        </motion.div>
    );
}
