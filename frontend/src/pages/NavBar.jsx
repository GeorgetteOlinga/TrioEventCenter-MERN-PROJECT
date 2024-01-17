import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/event_category" className={styles.navLink}>
              Event Category
            </Link>
          </li>
          <li>
            <Link to="/services" className={styles.navLink}>
              services
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={styles.navLink}>
              Gallery
            </Link>
          </li>
          {/* <li>
            <Link to="/logout" className={styles.navLink}>
              Logout
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
