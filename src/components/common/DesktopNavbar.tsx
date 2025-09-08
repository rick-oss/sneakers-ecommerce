import { useState } from "react";

import styles from "./DesktopNavbar.module.css";

interface DesktopNavbarProps {
  menuLinks: string[];
}

function DesktopNavbar({ menuLinks }: DesktopNavbarProps) {
  const [linkActive, setLinkActive] = useState("Collections");
  return (
    <nav className={styles.desktop_navbar}>
      <ul>
        {menuLinks.map((link, index) => (
          <li key={index} className={`${styles.nav_link}`}>
            <a
              href="#"
              onClick={() => setLinkActive(link)}
              className={`${linkActive === link ? styles.link_active : ""}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavbar;
