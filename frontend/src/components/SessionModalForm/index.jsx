import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './SessionModalFrom.css'
import { signUp } from '../store/session';

const SessionModalForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

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
    return (
        <div className='session-modal-form'>
            <button onClick={onClose}>X</button>
            <h2>Sign In or Sign Up</h2>
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

                <label htmlFor="password">Password </label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <input type="submit" value="Sign Up" className='button' />
            </form>
        </div>
    )
}

export default SessionModalForm