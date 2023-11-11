import { useState } from 'react';
import splashPageImage from '../../assets/images/splash-main.webp'
import './SplashPage.css'
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../store/session';


const SplashPage = props => {
    const userLoggedIn = useSelector(isLoggedIn)

    if(userLoggedIn)return null;
    
    const backgroundStyle = {
        backgroundImage: `url(${splashPageImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className='splash-page-main' style={backgroundStyle}>
            <h2>Discover restaurants and more near you.</h2>
        </div>
    )
};

export default SplashPage;