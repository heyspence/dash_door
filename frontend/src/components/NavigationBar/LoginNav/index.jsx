import { useState } from "react";
import Modal from "../../Modal";
import './LoginNav.css'
import SignUpForm from "../../Session/SignUpForm";
import SignInForm from '../../Session/SignInForm'
import logo from '../../../assets/images/modified-icon.png'

const LoginNav = ({ display }) => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    
    if(!display) return null
    
    const handleSignUpOpen = () => setIsSignUpOpen(true);
    const handleSignUpClose = () => setIsSignUpOpen(false);
    const handleSignInOpen = () => setIsSignInOpen(true);
    const handleSignInClose = () => setIsSignInOpen(false);

    return (
        <div className='main-nav-bar'>
            <img src={logo} className='main-nav-icon' />

            <h1 className='main-nav-logo'>DASHDOOR</h1>
            <div className='main-nav-links'>
                <button className='main-sign-in-button button' onClick={handleSignInOpen}>Sign In</button>
                <button className='main-sign-up-button button'onClick={handleSignUpOpen}>Sign Up</button>
                <Modal isOpen={isSignUpOpen} onClose={handleSignUpClose}>
                    <SignUpForm />
                </Modal>
                <Modal isOpen={isSignInOpen} onClose={handleSignInClose}>
                    <SignInForm />
                </Modal>
            </div>
        </div>
    )

}

export default LoginNav;