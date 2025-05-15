import React from "react";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-700 h-15 text-center p-4">
      <p>&copy; {new Date().getFullYear()} Rosa Pastel. Todos los derechos reservados.</p>
    </footer>
  );
}