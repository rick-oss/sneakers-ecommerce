import ReactDom from "react-dom";
import { useState } from "react";
import { FaX } from "react-icons/fa6";

import styles from "./DrawerMenu.module.css";

interface DrawerMenuProps {
  onclose: () => void;
  menuLinks: string[];
}

function DrawerMenu({ onclose, menuLinks }: DrawerMenuProps) {
  const drawerMenu = document.getElementById("drawer-root");
  const [active, setActive] = useState("Collections");

  if (!drawerMenu) return null;

  return ReactDom.createPortal(
    <aside className={styles.drawer_menu}>
      <nav>
        <button onClick={onclose} aria-label="Close Menu">
          <FaX className={styles.icon_button} />
        </button>
        <ul>
          {menuLinks.map((link, index) => (
            <li key={index} className={`${styles.nav_link} ${active === link ? styles.active : ""}`}>
              <a href="#" onClick={() => setActive(link)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>,
    drawerMenu
  );
}

export default DrawerMenu;
