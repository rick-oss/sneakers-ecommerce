import styles from "./DesktopNavbar.module.css";

interface DesktopNavbarProps {
  menuLinks: string[];
}

function DesktopNavbar({ menuLinks }: DesktopNavbarProps) {
  return (
    <nav className={styles.desktop_navbar}>
      <ul>
        {menuLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavbar;
