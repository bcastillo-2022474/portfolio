import imgBank from "../../../assets/stats-bank-app.png";
import imgBlog from "../../../assets/blog-kinal.png";
import imgYubi from "../../../assets/yubi.jpg";

type Project = {
  title: string;
  description: string;
  github?: string;
  img: string;
  link?: string;
  badges?: string[];
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Yubi",
      description:
        "Yubi es una aplicacion que busca ser la plataforma que conecte a guatemaltecos con emprendimientos locales. " +
        "Tiene la capacidad de crear y calendarizar eventos para promocionar negocios. Forme parte del equipo que" +
        "desarrollo esta aplicacion, mi rol fue de Full Stack Developer, aporte al backend y frontend de la aplicacion",
      link: "https://yubi.lat",
      img: imgYubi as string,
      badges: ["Next.js", "Express", "Hexagonal Architecture"],
    },
    {
      title: "Blog Kinal",
      description:
        "Este blog pensando para publicar acerca de proyectos hechos en kinal, se puede ver y comentar en mis " +
        "publicaciones. Esta es una pequeña tarea que me dejaron en " +
        "mi colegio técnico, Kinal. Planeo actualizarlo en un futuro",
      github: "https://github.com/bcastillo-2022474/blog-kinal-tareas",
      link: "https://joao-blog-kinal.netlify.app/",
      img: imgBlog as string,
      badges: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Banking App API",
      description:
        "API desarrollada por mi y compañeros de clase liderada por mi, esta pensada para un sistema bancario" +
        " que permite a los usuarios realizar transacciones, consultar su saldo y más. " +
        "Se creo con la intención de ser un backend empresarial robusto",
      github: "https://github.com/kinal-team-1/bank-app-backend",
      img: imgBank as string,
      badges: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="flex flex-col gap-3">
      <div className="flex justify-between pe-10 items-center">
        <a href="#projects" className="text-5xl flex gap-2 hover:text-white/50">
          <span className="text-gray-700">#</span>
          <span>Mis Proyectos</span>
        </a>
      </div>
      <ul className="flex flex-wrap gap-10">
        {projects.map((project) => (
          <li className="bg-main-dark/50 flex flex-col gap-2 md:w-[400px] cursor-pointer transition ease-in-out hover:scale-[102%]">
            <a
              target="_blank"
              href={project.link || project.github}
              className="flex flex-col gap-3 items-center rounded shadow-2xl p-6 h-full"
            >
              <img
                className="shrink-0 object-contain rounded h-[200px]"
                src={project.img}
                alt={project.title}
              />
              {/*<span className="border w-[200px] h-[150px] shrink-0"></span>*/}
              <p className="shrink">{project.description}</p>
              <div className="flex gap-2 w-full">
                {project.badges?.map((badge) => (
                  <span className="bg-violet-900/50 text-white px-2 py-1 rounded text-ellipsis">
                    {badge}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
