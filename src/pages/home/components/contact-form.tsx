import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY } from "../../../config.ts";

const serviceId = "service_y54jrim";
const templateId = "template_c6b3t2p";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  useEffect(() => {
    if (status === "success" || status === "error") {
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  }, [status]);

  useEffect(() => {
    if (status !== "success") return;

    // clean form
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }, [status === "success"]);

  return (
    <section id="contact" className="flex flex-col gap-4">
      <h2 className="text-5xl">Contacto</h2>
      <p className="flex flex-wrap gap-1">
        Puedes contactarme a través de mis redes sociales o enviandome un correo
        electronico a
        <Link to="" className="text-violet-500 cursor-pointer hover:underline">
          brandonjoaocastillo83@gmail.com
        </Link>
        o usando el siguiente formulario:
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (status !== "idle") return;
          setStatus("loading");
          try {
            await emailjs.send(serviceId, templateId, {
              name: form.name,
              subject: form.subject,
              message: form.message,
              email: form.email,
            });
            setStatus("success");
          } catch (error) {
            setStatus("error");
          }
        }}
        className="flex mt-5 flex-col gap-5"
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="outline-none focus:outline-violet-800 outline-offset-1 rounded bg-inherit placeholder-neutral-600 border border-neutral-300 rounded px-5 py-2 w-full"
            type="text"
            placeholder="Nombre"
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="outline-none focus:outline-violet-800 outline-offset-1 rounded bg-inherit placeholder-neutral-600 border border-neutral-300 px-5 py-2 w-full"
            type="text"
            placeholder="Email"
          />
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="outline-none focus:outline-violet-800 outline-offset-1 rounded bg-inherit col-span-2 placeholder-neutral-600 border border-neutral-300 px-5 py-2 w-full"
            type="text"
            placeholder="Asunto"
          />
        </div>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="outline-none focus:outline-violet-800 outline-offset-1 rounded bg-inherit border px-5 py-2 w-full placeholder-neutral-600"
          rows="10"
          placeholder="Mensaje"
        ></textarea>
        <button
          type="submit"
          className="mt-3 w-full bg-violet-950 cursor-pointer px-5 py-2 rounded outline-none hover:bg-violet-900"
        >
          {status === "idle" && <span>Enviar</span>}
          {status === "loading" && <span>Enviando</span>}
          {status === "success" && <span>Enviado</span>}
          {status === "error" && <span>Error</span>}
        </button>
      </form>
    </section>
  );
}
