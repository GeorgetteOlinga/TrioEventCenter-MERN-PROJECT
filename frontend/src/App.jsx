import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Event from "./components/Event/Event.jsx"
// import MyRoutes from "./components/routes/Routes.jsx";
import Header from "./components/header/Header";
import 'react-toastify/dist/ReactToastify.css'
import Login from "./components/LoginForm/Login";
import Register from "./pages/Register/Register";
import Footer from './components/footer/Footer';
import Services from "./pages/services/Services";
import Gallery from "./pages/Gallery/Gallery";
import EventCategory from './pages/EventCategory/EventCategory';

import Home from './pages/home/Home'

// import Signup from "./Signup.jsx";

const App = () => {
  return (
    <Router>
    <div>
        <Header />
        <NavBar />
        {/* {!localStorage.getItem("token") && <SignupModal />} */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/event" element={<Event />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/eventCategory" element={<EventCategory />} />

        
        
      </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
//==================================================
// import dependencies
// import { useState } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom';

// // import my functionality that I've added
// import { getUser } from '../../utilities/users-services';

// // css
// // import './App.css'
// import styles from './App.module.css'

// // import pages
// import AuthPage from './AuthPage';

// // import components
// import NavBar from '../../components/NavBar/NavBar';

// function App() {
//   const [user, setUser] = useState(getUser());
//   // useState({
//   //   name: "John Smith",
//   //   email: "emailAddress@something"
//   // })

//   // in here
//   // use the useState hook to define a state variable called user
//   // initialize that to null
//   // the setter function should be named according to convention
//   return (
//     <main className={styles.App}>
//       {
//         user
//           ?
//           <>
//             <NavBar user={user} setUser={setUser} />
//             < Routes >
//             <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser}/>} />
//             <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
//               {/*<Route path='/orders/new' element={<NewOrderPage />} />
//               <Route path='/orders' element={<OrderHistoryPage />} />*/}
//               {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
//               <Route path="/*" element={<Navigate to="/orders/new" />} />
//             </Routes>
//           </>
//           :
//           < AuthPage setUser={setUser} />
//       }
//     </ main>
//   )
// }

 //export default App