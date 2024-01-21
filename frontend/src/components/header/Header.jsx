import { Link } from "react-router-dom";
import logo from "../../assets/triologo.jpg";
import styles from "./Header.module.css";
// import EventModal from "./EventModal";
import SignupModal from "../../pages/signUpForm/Signup";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo_image}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.header_right}>
        <button>
          {/* <EventModal /> */}
        </button>
        { <button>
          <SignupModal />
        </button> }
        <Link to="contact">Contact</Link>
        <Link to="blog">Blog and News</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">signup</Link>
      </div>
    </div>
  );
};

export default Header;