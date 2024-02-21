import React from 'react'
// import logo from "../assets/triologo.jpg";
import styles from "./Footer.module.css";
import logo from '../../assets/triologo.jpg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.text}><br/><br/><span>
        <h5>Copyright 2024 Trio Entertainment & Event Center Privacy Policy.</h5>
        <h5>Location: 2300 South Hamilton Road, Suite F, columbus, OH 43230
614.416.8188
Visit Hours Today: 9am to 5pm</h5>
Connect
</span></div>
    </div>
  );
};

export default Footer;