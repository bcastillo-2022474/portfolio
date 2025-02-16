export function AbilitiesSection() {
  const cards = [
    {
      title: "Frontend",
      skills: ["React", "Angular", "Next.js", "TailwindCSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Java", "Spring Boot", "Django"],
    },
    {
      title: "Bases de Datos",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "Otras",
      skills: ["Git", "GitHub", "Docker", "Heroku"],
    },
  ];
  return (
    <section id="skills" className="flex flex-col gap-4">
      <a href="#skills" className="text-5xl flex gap-2 hover:text-white/50">
        <span className="text-gray-700">#</span>
        <span>Habilidades</span>
      </a>
      <div className="flex gap-5 flex-wrap">
        {cards.map(({ title, skills }) => {
          return (
            <div className="shadow-2xl w-[350px] shrink-0 rounded-lg p-7 bg-main-dark flex flex-col gap-3">
              <h2 className="text-2xl">{title}</h2>
              <ul className="flex gap-2 flex-wrap">
                {skills.map((badge) => {
                  return (
                    <li className="bg-main text-white px-2 py-1 rounded">
                      {badge}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
