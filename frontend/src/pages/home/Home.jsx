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
       <p>Impressive 4,000 square foot ballroom flooded with warm, natural light
Additional social areas and open spaces for smaller meetings, breakout sessions, brainstorming, or networking
Keep the conversation going in our relaxing outdoor courtyard with fire pit
Professional audio/visual equipment, abundant outlets, and complimentary Wi-Fi access
Event planner ensures a seamless and successful experience
Full-service catering or customizable farm-fresh menus from our Executive Chef
Overnight accommodations in adjacent hotels: Courtyard by Marriott and Hyatt Place
Complimentary parking in adjacent 500-space garage
Close proximity to the Greater Columbus Convention Center, downtown Columbus, and easy highway access</p>
      </div>
    </div>
  );
};

export default Home;

