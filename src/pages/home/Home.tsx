import { MainSection } from "./components/main-section.tsx";
import { ExperienceSection } from "./components/experience-section.tsx";
import { HabilitiesSection } from "./components/habilities-section.tsx";
import { ProjectsSection } from "./components/project-section.tsx";
import { ContactForm } from "./components/contact-form.tsx";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Home() {
  return (
    <div className="flex flex-col gap-5 2xl:max-w-[80%]">
      <a
        href="#about-me"
        className="fixed bottom-10 group-data-[is-visible]:fixed  bg-violet-800 rounded-full size-[40px] self-end flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
      <MainSection />
      <ExperienceSection />
      <ProjectsSection />
      <HabilitiesSection />
      <ContactForm />
    </div>
  );
}
