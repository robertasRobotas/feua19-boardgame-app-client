import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
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
    </div>
  );
};

export default Header;
