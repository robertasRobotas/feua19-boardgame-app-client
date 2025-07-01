import styles from "./styles.module.css";
import Link from "next/link";
import burgerBtnImg from "../../assets/images/burger-menu-svgrepo-com (1).svg";
import { useState } from "react";

const Header = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <nav>
          <ul>
            <li>
              <Link href="/">Main</Link>
            </li>
            <li>
              <Link href="/insert">Insert</Link>
            </li>
          </ul>
        </nav>

        <button
          className={styles.burgerBtn}
          onClick={() => setShowMobileMenu((prevState) => !prevState)}
        >
          <img src={burgerBtnImg.src} />
        </button>
      </div>

      {isShowMobileMenu && <div className={styles.overlay}></div>}
    </>
  );
};

export default Header;
