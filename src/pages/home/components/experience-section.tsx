export function ExperienceSection() {
  const works = [
    {
      title: "Full Stack Web Developer",
      subtitle: "Darapti | Guatemala | Abril 2024 - Actualidad",
      description:
        "En Darapti, Estoy completando mis practicas  de nivel medio, " +
        " desarrollo tanto en el backend como en el frontend. He tenido la experiencia de" +
        " poder trabajar con NextJS, PostgreSQL, y una arquitectura hexagonal",
    },
    {
      title: "Developer Junior Flutter",
      subtitle: "Logistika | Guatemala | Diciembre 2023 - Marzo-2024",
      description:
        "Trabajo en una empresa que ofrece servicios de contabilidad y manejo de bodegas. Resuelvo" +
        " transacciones SQL y verifico la integridad de la data. Colaboro en el desarrollo de soluciones" +
        " tecnológicas para mejorar los procesos internos.",
    },
    {
      title: "Junior Web Developer",
      subtitle: "Nabenik | Guatemala | Marzo 2023 - Octubre 2022",
      description:
        "Implementé diseños UI/UX para transformar esquemas y mockups en páginas web funcionales." +
        " Colaboré en la construcción de componentes reutilizables en Angular para mejorar la eficiencia" +
        " del código y acelerar el desarrollo. Demostré habilidades en Typescript, utilizando su tipado" +
        " estático para escribir un código Front-end sólido y fácil de mantener.",
    },
  ];

  const educations = [
    {
      title: "Perito en Informatica",
      subtitle:
        "Centro Educativo Tecnico Laboral KINAL | Guatemala Zona 7 | Enero 2022 - Presente",
      description:
        "Carrera técnica orientada a la práctica y preparación para el campo laboral. Especialización en programación en Java y SQL, con enfoque en aplicaciones de escritorio utilizando JavaFX y Java Swing.",
    },
    {
      title: "Frontend Masters Courses",
      subtitle: "Frontend Masters | Noviembre 2021 - Presente",
      description:
        "Multiples Cursos de desarrollo web en Frontend Masters. Aprendizaje de tecnologías modernas como React, NodeJS" +
        "RxJs, etc. Aprendizaje de funcionamiento de Node Event Loop, Closures, Promises, Async/Await, Generators, etc." +
        " Conceptos de programación funcional, Desarrollo Accesible, etc.",
    },
    {
      title: "The Complete Javascript Course (70 horas)",
      subtitle: "Udemy | Octubre 2021 - Agosto 2022",
      description:
        "Curso completo de Javascript con 70 horas de contenido. Adquisición de habilidades prácticas en el desarrollo web.",
    },
  ];

  return (
    <section id="experience" className="py-5 flex flex-col gap-5">
      <a href="#experience" className="text-5xl flex gap-2 hover:text-white/50">
        <span className="text-gray-700">#</span>
        <span>Experience</span>
      </a>
      <div className="flex flex-col px-5 md:px-0 md:grid grid-cols-2 gap-5 md:gap-10 justify-center">
        <article className="flex flex-col gap-10">
          <h3 className="text-3xl underline text-violet-400">Work</h3>
          <ul className="flex flex-col gap-2 list-disc [&_>_li]:marker:text-violet-700">
            {works.map((job) => {
              return (
                <li>
                  <div>
                    <strong className="text-xl">{job.title}</strong>
                  </div>
                  <span>{job.subtitle}</span>
                  <div className="flex flex-col gap-1 pl-6 text-sm py-3">
                    <p>{job.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="flex flex-col gap-10">
          <h3 className="text-3xl underline text-violet-400">Education</h3>
          <ul className="lex flex-col gap-2 list-disc [&_>_li]:marker:text-violet-700">
            {educations.map((education) => {
              return (
                <li>
                  <div>
                    <strong className="text-xl">{education.title}</strong>
                  </div>
                  <span>{education.subtitle}</span>
                  <div className="flex flex-col gap-1 pl-6 text-sm py-3">
                    <p>{education.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}
