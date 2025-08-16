import { useState, useEffect } from "react";
import styles from "./Header.module.css";

import DrawerMenu from "../common/DrawerMenu";
import CartDropDown from "../common/CartDropDown";

import logo from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import iconMenu from "../../assets/images/icon-menu.svg";
import imageAvatar from "../../assets/images/image-avatar.png";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"; // Previne o scroll da página quando o drawer está aberto
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);

  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header_left}>
        <button aria-label="Menu" onClick={openDrawer}>
          <img src={iconMenu} alt="" />
        </button>
        <img className={styles.image_logo} src={logo} alt="sneakers logo" />
      </div>
      <div className={styles.header_right}>
        <button aria-label="Cart">
          <img src={iconCart} alt="" />
        </button>
        <img className={styles.image_profile} src={imageAvatar} alt="imagem de perfil" />
      </div>

      {isDrawerOpen && (
        <DrawerMenu onclose={closeDrawer} menuLinks={["Collections", "Men", "Woman", "About", "Contact"]} />
      )}
    </header>
  );
}

export default Header;
