import { AngularLogo } from "../../../components/icons/angular-logo.tsx";
import { ReactLogo } from "../../../components/icons/react-logo.tsx";
import { GithubLogo } from "../../../components/icons/github-logo.tsx";
import { JavaLogo } from "../../../components/icons/java-logo.tsx";
import { MongodbLogo } from "../../../components/icons/mongodb-logo.tsx";
import { NodejsLogo } from "../../../components/icons/nodejs-logo.tsx";
import { GitLogo } from "../../../components/icons/git-logo.tsx";
import { PostgresqlLogo } from "../../../components/icons/postgresql-logo.tsx";

export function HabilitiesSection() {
  const logos = [
    <AngularLogo />,
    <ReactLogo />,
    <NodejsLogo />,
    <JavaLogo />,
    <MongodbLogo />,
    <PostgresqlLogo />,
    <GitLogo />,
    <GithubLogo />,
  ];

  return (
    <section id="skills" className="flex flex-col gap-4">
      <a href="#skills" className="text-5xl flex gap-2 hover:text-white/50">
        <span className="text-gray-700">#</span>
        <span>Habilidades</span>
      </a>
      <p>
        Cuento con experiencia en desarrollo frontend y backend, trabajando con tecnologías como Java, Java Swing,
        JavaFX, JSPs, SQL, JavaScript, React, Express y Flutter. Me especializo en la creación de interfaces funcionales
        y responsivas, optimización de bases de datos y resolución de problemas en SQL. He trabajado en la conversión de
        mockups a UI interactivas y en el desarrollo de soluciones eficientes y escalables. Además, tengo experiencia
        laboral como desarrollador junior y freelancer, lo que me ha permitido fortalecer mis habilidades y adaptarme a
        diferentes proyectos y entornos de trabajo. Siempre estoy en búsqueda de aprender nuevas tecnologías y mejorar
        mis capacidades técnicas.
      </p>
      <ul className="flex gap-3 flex-wrap justify-center py-5">
        {logos.map((icon) => {
          return <i className="text-4xl">{icon}</i>;
        })}
      </ul>
    </section>
  );
}
