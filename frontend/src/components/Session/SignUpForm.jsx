import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignUpForm.css'
import { isLoggedIn, signIn, signUp } from '../store/session';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Errors from './Errors';

const SignUpForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const userLoggedIn = useState(isLoggedIn);
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(!userLoggedIn){
            onClose();
            history.push('/home')
        }
    },[userLoggedIn])

    const submitHandler = (e) => {
        e.preventDefault();
        let user = {
            firstName,
            lastName,
            email,
            country,
            phoneNumber,
            password
        }
        dispatch(signUp(user))
    }

    const signInDemoUser = () =>{
        let user = {
            email: "spencer@gmail.com",
            password: "password"
        }
        dispatch(signIn(user))
    }

    return (
        <div className='sign-up-form'>
            <button onClick={onClose}>X</button>
            <h2>Sign Up </h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="first-name">First Name </label>
                <input id="first-name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

                <label htmlFor="last-name">Last Name </label>
                <input id="last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

                <label htmlFor="email">Email </label>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

                {/* <label htmlFor="country">Country </label>
                <input id="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)}/> */}

                <label htmlFor="phone-number">Phone Number </label>
                <input id="phone-number" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

                <label htmlFor="new-password">Password </label>
                <input id="new-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <a onClick={signInDemoUser}>Sign in as demo user</a>
                <Errors />
                <p>By tapping “Sign Up” or “Continue with Google, Facebook, or Apple,” you agree
                    to DoorDash’s Terms and Conditions and Privacy Policy.</p>
                <input type="submit" value="Sign Up" className='button' />
            </form>
        </div>
    )
}

export default SignUpForm;