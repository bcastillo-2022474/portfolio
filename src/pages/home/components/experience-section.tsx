export function ExperienceSection() {
  const works = [
    {
      title: "Full Stack Web Developer",
      subtitle: "Edoo | Guatemala | Agosto 2024 - Actualidad",
      description:
        "Lidero el desarrollo del frontend para el módulo de finanzas de Edoo, un sistema de gestión de aprendizaje (LMS). Colaboro estrechamente con el equipo backend para implementar nuevas funcionalidades, asegurando la integración. También apoyo en el desarrollo backend utilizando Django y aplicando principios de arquitectura hexagonal.",
    },
    {
      title: "Full Stack Web Developer",
      subtitle: "Darapti | Guatemala | Abril 2024 - Actualidad",
      description:
        "Desarrollo de endpoints backend robustos utilizando TypeScript en un monorepo con múltiples aplicaciones backend y frontend. Creo interfaces de usuario modernas con NextJS, siguiendo las mejores prácticas de desarrollo web. Participo activamente en la implementación de una arquitectura hexagonal para mejorar la estructura y mantenibilidad del código.",
    },
    {
      title: "Freelance Web Developer",
      subtitle: "E689 | Guatemala | Enero 2024 - Actualidad",
      description:
        "Desarrollo aplicaciones frontend y backend trabajando de cerca con un desarrollador senior. Implemento soluciones serverless utilizando AWS Lambda, DynamoDB y otros servicios de AWS, aplicando las mejores prácticas en desarrollo cloud y arquitecturas serverless.",
    },
    {
      title: "Junior Flutter and Backend Developer",
      subtitle: "Logistika 360 | Guatemala | Noviembre 2023 - Marzo 2024",
      description:
        "Contribuí en la migración de una aplicación de escritorio a móvil usando Flutter. Optimicé bases de datos mediante modificaciones en procedimientos almacenados y gestioné irregularidades en los datos. Además, participé en la conciliación de datos entre SAP y el sistema interno de la empresa.",
    },
    {
      title: "Junior Web Developer",
      subtitle: "Nabenik | Guatemala | Febrero 2023 - Octubre 2023",
      description:
        "Implementé diseños UI/UX transformando esquemas y mockups en páginas web funcionales. Desarrollé componentes reutilizables en Angular y colaboré en la optimización del rendimiento de aplicaciones web.",
    },
  ];

  const educations = [
    {
      title: "Perito en Informática",
      subtitle:
        "Centro Educativo Tecnico Laboral KINAL | Guatemala Zona 7 | Enero 2022 - Octubre 2024",
      description:
        "Carrera técnica orientada a la práctica y preparación para el campo laboral. Especialización en programación en Java y SQL, con enfoque en aplicaciones de escritorio utilizando JavaFX y Java Swing.",
    },
    {
      title: "Ingeniería en Ciencias de la Computación",
      subtitle:
        "Universidad del Valle de Guatemala | Guatemala Zona 16 | 2025 - 2030",
      description:
        "Licenciatura en Ciencias de la Computación y Tecnologías de la Información con enfoque en el desarrollo de software, sistemas y tecnologías emergentes.",
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
