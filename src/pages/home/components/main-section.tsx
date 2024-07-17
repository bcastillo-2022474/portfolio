import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function MainSection() {
  const socialMediaLinks = [
    {
      name: "GitHub",
      url: "https://github.com/bcastillo-2022474/",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joao-castillo-789a77262",
      icon: faLinkedin,
    },
    {
      name: "CodePen",
      url: "https://codepen.io/JoaoCst21",
      icon: faCodepen,
    },
  ];

  return (
    <section id="about-me" className="py-5 flex flex-col gap-5">
      <article className="flex flex-col gap-3">
        <p className="">Hola 👋</p>
        <h1 className="text-7xl font-bold">Joao Castillo</h1>
        <p className="text-2xl">Web Developer</p>
        <p>
          Soy Joao Castillo, un desarrollador web de 18 años con 1.5 años de
          experiencia. Especializado en Frontend con Angular, React y Next.
          También sé de SQL y tengo conocimientos en backend con Express y
          Prisma. Aunque domino Java, mi fuerte es el desarrollo web.
        </p>
      </article>
      <article className="flex overflow-x-scroll gap-5">
        <a
          href="#contact"
          className="bg-main-dark cursor-pointer hover:bg-main-ultra-dark px-5 py-2 rounded"
        >
          Contacto
        </a>
        {socialMediaLinks.map((social) => {
          return (
            <Link
              to={social.url}
              className="bg-main-dark cursor-pointer hover:bg-main-ultra-dark px-5 py-2 rounded"
            >
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          );
        })}
      </article>
    </section>
  );
}
