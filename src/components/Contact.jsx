import React, { useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmailJS = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_gqvac5p", // Tu Service ID
        "template_lmf99rw", // Tu Template ID (reemplaza esto)
        {
          from_name: form.nombre,
          from_email: form.correo,
          message: form.mensaje,
        },
        "UIexwsvoLp_9hdiLI" // Tu Public Key (reemplaza esto)
      )
      .then(() => {
        setSuccess(true);
        setForm({ nombre: "", correo: "", mensaje: "" });
      })
      .catch(() => {
        setSuccess(false);
      });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 "
      id="contacto"
    >
      <p className="font-inter-bold text-4xl text-center ">CONTACTO</p>
      <p className="text-2xl text-center m-10">
        No dude en ponerse en contacto conmigo enviando el formulario a
        continuación.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleEmailJS}>
          <label className="block font-bold mb-2">Nombre</label>
          <input
            className="w-full mb-4 p-3 rounded bg-gray-200"
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <label className="block font-bold mb-2">Correo electrónico</label>
          <input
            className="w-full mb-4 p-3 rounded bg-gray-200"
            type="email"
            name="correo"
            placeholder="Ingrese su correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <label className="block font-bold mb-2">Mensaje</label>
          <textarea
            className="w-full mb-4 p-3 rounded bg-gray-200"
            name="mensaje"
            placeholder="Ingrese su mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={4}
          />
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition w-full"
            type="submit"
          >
            Enviar
          </button>
          {success && (
            <p className="text-green-600 mt-4 text-center">
              ¡Mensaje enviado correctamente!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
