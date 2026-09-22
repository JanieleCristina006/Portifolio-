import { useEffect, useState } from "react";
import { FiBriefcase, FiGrid, FiMail, FiUser } from "react-icons/fi";

const sideNavItems = [
  { id: "sobre", label: "Sobre", icon: <FiUser aria-hidden="true" /> },
  { id: "experiencia", label: "Experiência", icon: <FiBriefcase aria-hidden="true" /> },
  { id: "projetos", label: "Projetos", icon: <FiGrid aria-hidden="true" /> },
  { id: "contato", label: "Contato", icon: <FiMail aria-hidden="true" /> },
];

export const FloatingSideNav = () => {
  const [activeSection, setActiveSection] = useState("sobre");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateNavigation = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.42;
      setIsVisible(window.scrollY > window.innerHeight * 0.45);

      let currentSection = null;

      for (let index = sideNavItems.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(sideNavItems[index].id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sideNavItems[index];
          break;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  return (
    <nav
      className={`floating-side-nav${isVisible ? " visible" : ""}`}
      aria-label="Navegação lateral"
    >
      {sideNavItems.map((item) => (
        <a
          className={activeSection === item.id ? "active" : ""}
          href={`#${item.id}`}
          key={item.id}
          aria-label={item.label}
        >
          <span className="floating-tooltip">{item.label}</span>
          <span className="floating-icon">{item.icon}</span>
        </a>
      ))}
      <span className="floating-side-line" aria-hidden="true" />
    </nav>
  );
};
