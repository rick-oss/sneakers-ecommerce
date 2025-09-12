import { useState } from "react";

import styles from "./Navbar.module.css";

interface NavbarProps {
  menuLinks: string[];
}

function Navbar({ menuLinks }: NavbarProps) {
  const [linkActive, setLinkActive] = useState(menuLinks[0]);
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

export default Navbar;
