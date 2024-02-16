import React, {useState} from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../store/auth/authSlice';
import Event from '../../components/Event/Event'
//--------------------

import logo from "../../assets/triologo.jpg";
import styles from "./Header.module.css";
// import EventModal from "./EventModal";
import SignupModal from "../../pages/signUpForm/Signup";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
      dispatch(logout());
      dispatch(reset());
      navigate('/');
  }

  const handleShowModal = () => {
    /**
     * if previous value is false then make true
     * else if previous value is true make it false
     * true => !true => not true = false
     * false => !false => not false = true
     */
    setShow(prev => !prev)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo_image}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.header_right}>        
        <button className='btn' onClick={onLogout}>          
        <FaSignOutAlt />Logout</button>
        <Link to="contact">Contact</Link>
        <div
        onClick={handleShowModal}
        >Book Event</div>
       { /** <Link to="/event">Book Event</Link> */ }
        <Link to='/login'><FaSignInAlt />Login</Link>
        <Link to="/"><FaUser />Register</Link>
      </div>
      <div id="modal" 
      
      style={{
        position: "absolute",
        width: "400px",
       
        backgroundColor: "brown",
        top: "70%",
        left: "50%",                
        transform: "translate(-50%, -50%)",
        display: show ? "block" : "none"
      }}>
        
       <Event />
      </div>
     
    </div>
  );
};

export default Header;