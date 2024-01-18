import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/Header.module.css";
import EventModal from "./EventModal";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo_image}>
        <img src={triologo} alt="Logo" />
      </div>
      <div className={styles.header_right}>
        <button>
          <Link style={{ color: "white" }} to="event">
            <EventModal />
          </Link>
        </button>
        <Link to="contact">Contact</Link>
        <Link to="blog">Blog and News</Link>
      </div>
    </div>
  );
};

export default Header;
