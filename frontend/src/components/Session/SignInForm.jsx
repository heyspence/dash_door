import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignInForm.css'
import { signIn, isLoggedIn } from '../store/session';
import { useHistory } from 'react-router-dom'

const SignInForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLoggedIn = useSelector(isLoggedIn)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        console.log(userLoggedIn)
        if(userLoggedIn) {
            onClose()
            history.push('/home')
        }
    },[userLoggedIn])

    const submitHandler = (e) => {
        e.preventDefault();
        let user = {
            email,
            password
        }
        dispatch(signIn(user))
    }
    return (
        <div className='sign-in-form'>
            <button onClick={onClose}>X</button>
            <h2>Sign In </h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email </label>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="new-password">Password </label>
                <input id="new-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <input type="submit" value="Sign In" className='button' />
                <p>By continuing with the sign in process, we may send you 
                    a one-time verification code via text message to the phone 
                    number associated with your account. Message and data rates may apply.</p>
            </form>
        </div>
    )
}

export default SignInForm;