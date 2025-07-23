import logo from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import iconMenu from "../../assets/images/icon-menu.svg";
import imageAvatar from "../../assets/images/image-avatar.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header_left}>
        <button>
          <img src={iconMenu} alt="Menu" />
        </button>
        <img className={styles.image_logo} src={logo} alt="sneakers logo" />
      </div>
      <div className={styles.header_right}>
        <button>
          <img src={iconCart} alt="carrinho" />
        </button>
        <img className={styles.image_profile} src={imageAvatar} alt="imagem de perfil" />
      </div>
    </header>
  );
}

export default Header;
