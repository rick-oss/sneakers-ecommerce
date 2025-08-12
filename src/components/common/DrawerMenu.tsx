import ReactDom from "react-dom";
import { FaX } from "react-icons/fa6";

import styles from "./DrawerMenu.module.css";

function DrawerMenu({ onclose }: { onclose: () => void }) {
  const drawerMenu = document.getElementById("drawer-root");

  if (!drawerMenu) return null;

  return ReactDom.createPortal(
    <aside className={styles.drawer_menu} role="dialog" aria-label="Drawer">
      <nav>
        <button onClick={onclose} aria-label="Close Menu">
          <FaX className={styles.icon_button} />
        </button>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </aside>,
    drawerMenu
  );
}

export default DrawerMenu;
