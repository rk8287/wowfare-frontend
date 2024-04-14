import React, { useEffect, useState } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import './Mytrip.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearErrors, clearMessage, login, register } from '../../Action/userAction';
import Loader from '../Loader';

const img = require('../../Assets/Images/fmt-cover.jpg');

const Mytrip = () => {
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [openCreateAccountModal, setOpenCreateAccountModal] = useState(false);

    const { error, loading, isAuthenticated } = useSelector(state => state.user);

    const handleSignInClick = () => {
        setOpenSignInModal(true);
    };

    const handleCreateAccountClick = () => {
        setOpenCreateAccountModal(true);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        dispatch(register(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            toast.success('Login Successful!');
            dispatch(clearMessage());
            navigate("/myTrip");
            setLoginEmail("");
            setLoginPassword("");
            setName("");
            setEmail("");
            setPassword("");
            setOpenSignInModal(false); 
            setOpenCreateAccountModal(false); 
        }

        if (isAuthenticated && email) {
            toast.success(`Registration successful ${email}!`);
            dispatch(clearMessage());
            navigate("/myTrip");
            setName("");
            setEmail("");
            setPassword("");
            setOpenCreateAccountModal(false); 
            setOpenSignInModal(false); 
        }
    }, [error, isAuthenticated, email, dispatch, navigate]);
    

    return (
       <>
       {loading ? <Loader/> : (
         <div className='mytrip-main-container'>
         <div className="mytrip-semi-main-container">
             <div className="mytrip-container">
                 <div className="mytrip-left-container">
                     <img className='mytrip-img' src={img} alt="" />
                 </div>
                 <div className="mytrip-right-container">
                     <div className="mytrip-header">
                         <h1>Find my Booking</h1>
                     </div>
                     <div className="mytrip-para">
                         <ul>
                             <li className='mytrip-li'>The Order ID can be found in your booking confirmation email or e-Ticket</li>
                             <li className='mytrip-li'>The last name should belong to one of the passengers from the booking.</li>
                         </ul>
                     </div>
                     <form className='mytrip-form' action="">
                         <div className="max-w-sm">
                             <div className="mb-2 block">
                                 <label htmlFor="orderId" className="custom-label block text-gray-700 text-sm font-bold mb-2">Order Id</label>
                             </div>
                             <input id="orderId" className="custom-width-input py-4 px-3 text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Wxxxxxx" required />
                         </div>
                         <div className="max-w-sm">
                             <div className="mb-2 block">
                                 <label htmlFor="orderId" className="custom-label block text-gray-700 text-sm font-bold mb-2">Passenger`s last name</label>
                             </div>
                             <input id="orderId" className="custom-width-input py-4 px-3 text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Last Name" required />
                         </div>
                         <div className="max-w-sm">
                             <div className="mb-2 block">
                                 <label htmlFor="orderId" className="custom-label block text-gray-700 text-sm font-bold mb-2">Contact Email</label>
                             </div>
                             <input id="orderId" className="custom-width-input py-4 px-3 text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Email" required />
                         </div>
                         <button className='my-trip-btn'>Continue</button>
                     </form>
                     {isAuthenticated ? "" : <p className='mytrip-p'>Have an account? <button onClick={handleSignInClick} className='mytrip-link'>Sign In</button></p>}
                 </div>
                 <div className="flowbit-main-model">
                     <Modal className='flowbite-modal' show={openSignInModal} size="sm" popup onClose={() => setOpenSignInModal(false)} >
                         <Modal.Header />
                         <Modal.Body className='fowbite-body'>
                             <form onSubmit={loginSubmit} className="space-y-6">
                                 <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign In</h3>

                                 <div className="newUser">
                                     New User?&nbsp;
                                     <button onClick={handleCreateAccountClick} className="createAccount-btn">
                                         Create account
                                     </button>
                                 </div>

                                 <div className="label">
                                     <div className='tag-label'>
                                         <Label htmlFor="email" value="Email" />
                                     </div>
                                     <TextInput id="email" width={'60%'} placeholder="name@company.com" required value={loginEmail}
                                         onChange={(e) => setLoginEmail(e.target.value)} />
                                 </div>
                                 <div className="label">
                                     <div className='tag-label'>
                                         <Label htmlFor="password" value="Password" />
                                     </div>
                                     <TextInput id="password" type="password" placeholder="Password" required value={loginPassword}
                                         onChange={(e) => setLoginPassword(e.target.value)} />
                                 </div>
                                 <div className="">

                                     <Link className="forget-password">
                                         Forget Password?
                                     </Link>
                                 </div>
                                 <div className="w-full">
                                     <Button className='my-trip-model-btn' type='submit'>Continue</Button>
                                 </div>

                             </form>

                             <div className="model-paragraph">
                                 <p className='model-p'>By creating new account I accept the <Link className='mytrip-link'>Terms and Conditions</Link>and the <Link className='mytrip-link'> Privacy Policy</Link></p>
                             </div>
                         </Modal.Body>
                     </Modal>
                 </div>

                 <Modal className='flowbite-modal' show={openCreateAccountModal} size="sm" popup onClose={() => setOpenCreateAccountModal(false)} >
                     <Modal.Header />
                     <Modal.Body className='fowbite-body'>
                         <form encType="multipart/form-data"
                             onSubmit={registerSubmit}
                             className="space-y-6">
                             <h3 className="register-header">Register new user</h3>

                             <div className="already-text">
                                 Already have an account?&nbsp;
                                 <button onClick={() => setOpenCreateAccountModal(false)} className="createAccount-btn">
                                     Sign In
                                 </button>
                             </div>



                             <div>
                                 <div className="second-label">
                                     <Label htmlFor="email" value="Email" />
                                 </div>
                                 <TextInput id="email" placeholder="name@company.com" required value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                 />
                             </div>
                             <div>
                                 <div className="second-label">
                                     <Label htmlFor="password" value="Password" />
                                 </div>
                                 <TextInput id="password" type="password" placeholder="Password" required value={password}
                                     onChange={(e) => setPassword(e.target.value)} />
                             </div>
                             <div className="flex justify-between">

                                 <div className="li-text">
                                     <ul className="second-model-ul" >
                                         <div className="first-li">
                                             <li className='model-li'>1 lowercase character</li>
                                             <li className='model-li'>1 number</li>
                                         </div>
                                         <div className="second-li">
                                             <li className='model-li'>1 uppercase character</li>
                                             <li className='model-li'>8 characters min.</li>
                                         </div>
                                     </ul>
                                 </div>
                             </div>
                             <div className="w-full">
                                 <Button className='my-trip-model-btn' type='submit'>Create Account</Button>
                             </div>

                         </form>

                         <div className="model-paragraph">
                             <p className='model-p'>By creating new account I accept the <Link className='mytrip-link'>Terms and Conditions</Link>and the <Link className='mytrip-link'> Privacy Policy</Link></p>
                         </div>
                     </Modal.Body>
                 </Modal>
             </div>
         </div>
     </div >
       )}
       </>
    );
};

export default Mytrip;
