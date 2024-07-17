import imgDaem from "../../../assets/stats-DAEM.png";
import imgBank from "../../../assets/stats-bank-app.png";
import imgBlog from "../../../assets/blog-kinal.png";

type Project = {
  title: string;
  description: string;
  github: string;
  img: string;
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Banking App API",
      description:
        "API desarrollada por mi y compañeros de clase liderada por mi, esta pensada para un sistema bancario" +
        " que permite a los usuarios realizar transacciones, consultar su saldo y más." +
        "Se creo con la intención de ser un backend robusto, contamos con tests",
      github: "https://github.com/kinal-team-1/bank-app-backend",
      img: imgBank as string,
    },
    {
      title: "DAEM API",
      description:
        "Este repo contiene una API de Denuncias de Explotación" +
        " Infantil. Proporciona una API robusta para gestionar informes de casos públicos y anónimos," +
        " autenticación de usuarios y adjuntos de archivos. La aplicación tiene como objetivo combatir" +
        " el abuso infantil al ofrecer una plataforma para denunciar incidentes, tanto públicamente como" +
        " de forma anónima, manteniendo la privacidad del usuario y la seguridad de los datos.",
      github: "https://github.com/kinal-team-1/DAEM-backend/",
      img: imgDaem as string,
    },
    {
      title: "Blog Kinal",
      description:
        "Este blog pensando para publicar acerca de proyectos hechos, se puede ver y comentar en mis " +
        "publicaciones. Por el momento, solo publico descripciones acerca de mis proyectos en Kinal" +
        ", que es mi colegio técnico de programación.El propósito principal de este blog es explicar mis proyectos" +
        "a fondo, planeo actualizarlo en un futuro",
      github: "https://github.com/bcastillo-2022474/blog-kinal-tareas",
      img: imgBlog as string,
    },
  ];

  return (
    <section id="projects" className="flex flex-col gap-3">
      <div className="flex justify-between pe-10 items-center">
        <a href="#projects" className="text-5xl flex gap-2 hover:text-white/50">
          <span className="text-gray-700">#</span>
          <span>Mis Proyectos</span>
        </a>
        <span className="text-xs bg-orange-400/30 border-orange-500 border-2 text-orange-500 py-1 px-2 rounded-full flex items-center justify-center">
          Aun en desarrollo!
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <li className="flex flex-col gap-2">
            <a
              href={project.github}
              className="flex flex-col sm:flex-row p-3 gap-3 items-center cursor-pointer transition ease-in-out hover:scale-[102%]"
            >
              <img
                className="border w-[200px] h-[150px] shrink-0"
                src={project.img}
                alt={project.title}
              />
              {/*<span className="border w-[200px] h-[150px] shrink-0"></span>*/}
              <p className="shrink">{project.description}</p>
            </a>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
}
