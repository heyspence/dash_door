import { useState } from "react";
import Modal from "../../Modal";
import './LoginNav.css'
import SignUpForm from "../../Session/SignUpForm";
import SignInForm from '../../Session/SignInForm'
import logo from '../../../assets/images/modified-icon.png'
import { removeErrors } from "../../store/errors";
import { useDispatch } from "react-redux";

const LoginNav = ({ display }) => {
    const dispatch = useDispatch();
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    
    if(!display) return null
    
    const handleSignUpOpen = () => {
        document.body.classList.add('no-scroll')
        setIsSignUpOpen(true);
    }
    const handleSignUpClose = () => {
        document.body.classList.remove('no-scroll')
        dispatch(removeErrors());
        setIsSignUpOpen(false);
    }
    const handleSignInOpen = () => {
        document.body.classList.add('no-scroll')
        setIsSignInOpen(true);
    }
    const handleSignInClose = () => {
        document.body.classList.remove('no-scroll')
        dispatch(removeErrors());
        setIsSignInOpen(false);
    }

    return (
        <div className='main-nav-bar'>
            <img src={logo} alt="main logo for dashdoor" className='main-nav-icon' />

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