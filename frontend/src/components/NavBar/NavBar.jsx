import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/home" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/EventCategory" className={styles.navLink}>
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


//-----------------------------------
// import React from 'react'
// import { Link } from 'react-router-dom';
// import * as userService from '../../utilities/users-services'

// function NavBar(props) {
//   // Add in functionality to log out
//   function handleLogOut () {
//     // Delegate to users-service
//     userService.logOut();
//     // update state will also cause a re-render
//     props.setUser(null);
//   }

//   return (
//     <nav>
//         <Link to='/orders'>Order History</Link>
//         &nbsp; | &nbsp;
//         <Link to='/orders/new'>New Orders</Link>
//         &nbsp; | &nbsp;
//         <span>Welcome, {props.user.name}</span>
//         &nbsp; | &nbsp;
//         <Link to="" onClick={handleLogOut}>Log Out</Link>
//     </nav>
//   )
// }

// export default NavBar