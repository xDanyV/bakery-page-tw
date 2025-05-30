import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}    // Al inicio
            animate={{ opacity: 1 }}    // Al mostrar
            exit={{ opacity: 0 }}       // Al salir
            transition={{ duration: 1.5 }}
            className="text-center py-10 px-4 bg-pink-50 min-h-screen">

            <h1 className="text-4xl font-bold text-pink-900">Contáctanos</h1>
            <p className="mt-4 text-pink-700 font-bold">
                Si tienes alguna pregunta o deseas realizar un pedido, no dudes en contactarnos.
                Estamos aquí para ayudarte.
            </p>

            <div className="flex flex-col md:flex-row mt-10">
                <div className="md:w-1/3 bg-pink-100 p-4 m-2 rounded-lg shadow-lg">
                    <img
                        src="/images/products/tarta_6.jpg"
                        alt="Tartitas"
                        className="w-full h-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="md:w-2/3 bg-pink-100 p-6 m-2 rounded-lg shadow-lg text-left">
                    <h2 className="text-2xl font-bold text-pink-800 mb-6 border-b border-pink-300 pb-2">
                        Nuestros medios de contacto
                    </h2>
                    <ul className="text-1xl space-y-4 text-lg text-pink-800 font-medium">
                        <li>
                            <span className="font-bold">🕒 Horario:</span> Lunes a Sábado de 9:00 AM a 10:00 PM
                        </li>
                        <li className="flex items-center gap-2">
                            <FaWhatsapp className="text-pink-800" />
                            <span className="font-bold"> WhatsApp:</span>{" "}
                            <a
                                href="https://wa.me/529641131396"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 underline hover:text-pink-800"
                            >
                                +52 964 113 1396
                            </a>
                            /
                            <a
                                href="https://wa.me/529641375792"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 underline hover:text-pink-800"
                            >
                                +52 964 137 5792
                            </a>

                        </li>
                        <li className="flex items-center gap-2">
                        
                            <span className="font-bold"> 📞 Teléfono:</span>{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 underline hover:text-pink-800"
                            >
                                +52 964 690 4973
                            </a>
                        </li>
                        <li className="cursor-pointer hover:text-pink-600 transition" onClick={() => {
                            navigator.clipboard.writeText("kitman128088@gmail.com");
                            toast.success("Correo copiado al portapapeles", {
                                style: {
                                    border: '1px solid #e81a85',
                                    padding: '16px',
                                    color: '#e81a85',
                                },
                                iconTheme: {
                                    primary: '#d195a1',
                                    secondary: '#FFFAEE',
                                },
                            });
                        }}>
                            <span className="font-bold">📧 Correo:</span> kitman128088@gmail.com
                        </li>
                        <li>
                            <span className="font-bold">📍 Dirección:</span> Central Sur 27, entre calle Allende y Belizario Domínguez, Fonhapo, 30640 Huixtla, Chis.
                        </li>
                        <li className="flex items-center gap-2">
                            <FaFacebook className="text-pink-800" />
                            <span className="font-bold"> Facebook:</span>{" "}
                            <a
                                href="https://www.facebook.com/AdrianaDominguez24/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 underline hover:text-pink-800"
                            >
                                Rosa Pastel
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-pink-800 mb-4">Ubicación</h2>
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-pink-200">
                    <iframe
                        title="Ubicación Pastelería"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.4046780155454!2d-92.4697586242279!3d15.136104463740617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8592074b1960cb6f%3A0x20f6678dfc5379da!2sROSA%20PASTEL%20pasteleria%20y%20cafeter%C3%ADa!5e0!3m2!1ses-419!2smx!4v1746642232272!5m2!1ses-419!2smx"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </motion.div>
    );
}
