import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import MyRoutes from "../components/MyRoutes.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SignupModal from "../components/SignupModal.jsx";
// import Signup from "./Signup.jsx";

const App = () => {
  return (
    <div>
      <Router>
        {!localStorage.getItem("token") && <SignupModal />}
        <Header />
        <NavBar />
        <MyRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
