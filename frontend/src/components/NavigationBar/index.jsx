import { useState } from "react";
import Modal from "../Modal";
import './NavigationBar.css'
import SignUpForm from "../Session/SignUpForm";
import SignInForm from '../Session/SignInForm'

const NavigationBar = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const handleSignUpOpen = () => setIsSignUpOpen(true);
    const handleSignUpClose = () => setIsSignUpOpen(false);
    const handleSignInOpen = () => setIsSignInOpen(true);
    const handleSignInClose = () => setIsSignInOpen(false);

    return (

        <div className='main-nav-bar'>
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

export default NavigationBar