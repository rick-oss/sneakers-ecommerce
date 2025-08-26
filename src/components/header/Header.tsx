import { useState, useEffect } from "react";
import type { CartProduct } from "../../context/cartProduct";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import styles from "./Header.module.css";

import DrawerMenu from "../common/DrawerMenu";
import CartDropDown from "../common/CartDropDown";
import DesktopNavbar from "../common/DesktopNavbar";

import logo from "../../assets/images/logo.svg";
import iconMenu from "../../assets/images/icon-menu.svg";
import imageAvatar from "../../assets/images/image-avatar.png";

interface HeaderProps {
  cartItems: CartProduct[];
  removeItem: (id: number) => void;
}

function Header({ cartItems, removeItem }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"; // Previne o scroll da página quando o drawer está aberto
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const renderMenu = () => {
    if (isDesktop) return <DesktopNavbar menuLinks={["Collections", "Men", "Women", "About", "Contact"]} />;
    return (
      isDrawerOpen && (
        <DrawerMenu onclose={closeDrawer} menuLinks={["Collections", "Men", "Women", "About", "Contact"]} />
      )
    );
  };

  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header_left}>
        {!isDesktop && (
          <button aria-label="Menu" onClick={openDrawer}>
            <img src={iconMenu} alt="" />
          </button>
        )}
        <img className={styles.image_logo} src={logo} alt="sneakers logo" />
        {renderMenu()}
      </div>
      <div className={styles.header_right}>
        <button
          aria-label="Cart"
          onClick={toggleCart}
          className={isCartOpen || cartItems[0]?.productQuantity > 0 ? styles.has_items : ""}
        >
          <svg width="22" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fill-rule="nonzero"
            />
          </svg>
          {cartItems.length > 0 && <span>{cartItems[0].productQuantity}</span>}
        </button>
        <img className={styles.image_profile} src={imageAvatar} alt="profile image" />
      </div>

      {isDrawerOpen && (
        <DrawerMenu onclose={closeDrawer} menuLinks={["Collections", "Men", "Women", "About", "Contact"]} />
      )}

      {isCartOpen && <CartDropDown isOpen={isCartOpen} cartItems={cartItems} onRemove={removeItem} />}
    </header>
  );
}

export default Header;
