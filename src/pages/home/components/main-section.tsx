import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export function MainSection() {
  const socialMediaLinks = [
    {
      name: "GitHub",
      url: "https://github.com/bcastillo-2022474/",
      icon: faGithub
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joao-castillo-789a77262",
      icon: faLinkedin
    },
    {
      name: "CodePen",
      url: "https://codepen.io/JoaoCst21",
      icon: faCodepen
    }
  ];

  return (
    <section id="about-me" className="py-5 flex flex-col gap-5">
      <article className="flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <p className="">Hola 👋</p>
          <span className="text-xs bg-orange-400/30 border-orange-500 border-2 text-orange-500 py-1 px-2 rounded-full flex items-center justify-center">
            Aun en desarrollo!
          </span>
        </div>
        <h1 className="text-7xl font-bold">Joao Castillo</h1>
        <p className="text-2xl">Full Stack Developer</p>
        <p>
          Soy Joao Castillo, Desarrollador Full Stack, con +2 años de experiencia
          en desarrollo web. Me especializo en Frontend, con experiencia en tecnologías
          como Next.js, Express, Python (Django) y SQL. Formado en Kinal, donde
          completé una carrera intensiva en desarrollo de software, actualmente
          estudio en UVG.
        </p>
        <p>
          He trabajado en entornos empresariales y como freelancer, desarrollando soluciones
          eficientes y escalables. Busco seguir creciendo profesionalmente y aportar mis
          habilidades en proyectos innovadores.
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
