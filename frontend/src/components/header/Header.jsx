import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../store/auth/authSlice';

//--------------------

import logo from "../../assets/triologo.jpg";
import styles from "./Header.module.css";
// import EventModal from "./EventModal";
import SignupModal from "../../pages/signUpForm/Signup";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
      dispatch(logout());
      dispatch(reset());
      navigate('/');
  }
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
        <button className='btn' onClick={onLogout}>          <FaSignOutAlt />Logout</button>
        <Link to="contact">Contact</Link>
        <Link to="blog">Blog and News</Link>
        <Link to='/login'><FaSignInAlt />Login</Link>
                <Link to="/Register"><FaUser />Register</Link>
      </div>
    </div>
  );
};

export default Header;