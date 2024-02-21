import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")

    if(!token)  {
      navigate("/login")
    }
  }, [])
  return (
    <div className={{...styles.wrapper}}>
      <div>
        <h3>WELCOME TO THE TRIO EVENT CENTER than an event center</h3>
        <p>
          Trio is a dynamic space that offers a fresh approach to your next
          meeting, conference, fundraiser or social event. This captivating
          space brings desired amenities, functionality, and modern style to one
          of Columbus most vibrant areas for an experience unlike any other in
          Central Ohio.
        </p>
<img src="https://img.grouponcdn.com/deal/wXWacwxHVLKPVtXbhYn5/1R-700x420/v1/c700x420.jpg" alt="" />
       
      </div>
    </div>
  );
};

export default Home;

