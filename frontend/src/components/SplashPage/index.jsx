import splashPageImage from '../../assets/images/new_landing_page.webp'
import './SplashPage.css'
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../store/session';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const SplashPage = props => {
    const userLoggedIn = useSelector(isLoggedIn);
    const history = useHistory();
    
    if(userLoggedIn){history.push('/home');}
    
    const handleFindRestaurants = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const backgroundStyle = {
        backgroundImage: `url(${splashPageImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <>
            <div className='splash-page-main main-section' style={backgroundStyle}>
                <h2>Full-Stack DoorDash Clone</h2>
            </div>
            <div className="splash-page-second main-section">
                <div className="main-section-text">
                    <h2>Everything you crave, delivered.</h2>
                    <h3>Your favorite local restaurants</h3>
                    <p>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.</p>
                    <button onClick={handleFindRestaurants}>Find Restaurants</button>
                </div>
                <img className="splash-page-second-img" src="https://spencerheywood.com/images/dash_door/splash-image-second.avif" alt="woman eating a tortilla on a picknick" />
            </div>
            <div className="splash-page-third main-section">
                <img className="splash-page-second-img" src="https://spencerheywood.com/images/dash_door/splash-image-third.avif" alt="woman eating a tortilla on a picknick" />
                <div className="main-section-text third-section-text">
                    <h2>DashPass is delivery for less</h2>
                    <p>Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.</p>
                    <button onClick={handleFindRestaurants}>Find Restaurants</button>
                </div>
            </div>
        </>
    )
};

export default SplashPage;
