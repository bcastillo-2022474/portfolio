import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";

type Link = {
  name: string;
  url: string;
  isExternal?: boolean;
};

type NavbarProps = {
  isOpen: boolean;
  className: string;
};
export function Navbar({ isOpen, className }: NavbarProps) {
  const links: Link[] = [
    {
      name: "About Me",
      url: "/#about-me",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Habilidades",
      url: "/#skills",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
    {
      name: "CV",
      url: "/cv_joao_castillo_es.pdf",
      isExternal: true,
    },
  ];

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
    <nav
      data-is-open={isOpen || null}
      className={`transition ease-in-out transform -translate-x-full data-[is-open]:translate-x-0 sm:translate-x-0 p-5 sm:h-auto sm:static bg-main-dark w-[30ch] shrink-0 md:grow-0 ${className}`}
    >
      <ul className="flex flex-col gap-2 w-full text-xl">
        {links.map((link) => {
          if (link?.isExternal) {
            return (
              <a
                key={link.name}
                href={link.url}
                className="hover:bg-main-ultra-dark px-5 py-2 rounded"
              >
                {link.name}
              </a>
            );
          }

          return (
            <HashLink
              key={link.name}
              to={link.url}
              className="hover:bg-main-ultra-dark px-5 py-2 rounded"
            >
              {link.name}
            </HashLink>
          );
        })}
      </ul>
      <div className="flex text-xl">
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
      </div>
    </nav>
  );
}
