import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Signup from "../signUpForm/Signup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import SignupModal from "../../components/Authpage/SignUpPopup";

const SignupModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom_signup_class">
          <Signup />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignupModal;


// // import React, { Component } from 'react'

// //  NB---  NO STYLE FILE CSS FOR THE SIGN UP COMPONENT
// // import the SignUp method 
// import { signUp } from '../../allComponents/';

// export class SignUpForm extends Component {
//     state = {
//         firstName:'',
//         lastName:'',
//         email:'',
//         password:'',
//         confirm:'',
//         error:''
//     };

//     // The object passed to setState is merged with the current state object
//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.firstName]: evt.target.value,
//             error: ''
//         });
//     };
//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.lastName]: evt.target.value,
//             error: ''
//         });
//     };
        
//     handleSubmit = async (evt) => {
//         evt.preventDefault();
//         // alert(JSON.stringify(this.state));
//         try {
//             // We don't want to send the 'error' or 'confirm' property,
//             // so let's make a copy of the state object, then delete them
//             const formData = { ...this.state} // makes a copy of the state variable
//             delete formData.error;
//             delete formData.confirm;
//             // The promise returned by the signUp service method
//             // will resolve to the uder object included in the 
//             // payload of the JSON Web Token (JWT)
//             const user = await signUp(formData);
//             // Baby Step!
//             // console.log(user);
//             this.props.setUser(user);

//         } catch {
//             // An error occured
//             this.setState({error: 'Sign Up Failed - Try Again'});
//         }
//     }

//   render() {
//     const disable = this.state.password !== this.state.confirm;

//     return (
//                       <div>
//             <div className='form=container'>
//                 <form autoComplete='off' onSubmit={this.handleSubmit}>
//                 <label>First Name</label>
//                 <input type="text" name="fisrtName.
//                 " value={this.state.firstName} onChange={this.handleChange} required />

//                 <label>Last Name</label>
//                 <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
//                 <label>Email</label>
//                 <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//                 <label>Password</label>
//                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//                 <label>Confirm</label>
//                 <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//                 <button type='submit' disabled={disable}>SIGN UP</button>
//                 </form>
//             </div>
//             <p className="error-message">&nbsp;{this.state.error}</p>
//         </div>
//     )
//   }
//  }

// export default SignUpForm