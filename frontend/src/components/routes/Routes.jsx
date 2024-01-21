import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../LoginForm/Login";
// import Logout from "../pages/Logout";
import Signup from "../pages/SignUpForm/Signup";
import Home from "../pages/home/Home";
import Event from "../pages/Event";
import EventCategory from "../pages/EventCategory/EventCategory";
import Services from "../pages/services/Services";
import Gallery from "../pages/Gallery/Gallery";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event_category" element={<EventCategory />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;