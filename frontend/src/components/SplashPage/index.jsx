import { useState } from 'react';
import splashPageImage from '../../assets/images/splash-main.webp'
import './SplashPage.css'

const backgroundStyle = {
    backgroundImage: `url(${splashPageImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
};

const SplashPage = props => {

    return (
        <div className='splash-page-main' style={backgroundStyle}>
            <h2>Discover restaurants and more near you.</h2>
        </div>
    )
};

export default SplashPage;