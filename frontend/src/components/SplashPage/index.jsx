import splashPageImage from '../../assets/images/new_landing_page.webp'
import './SplashPage.css'
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../store/session';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const SplashPage = props => {
    const userLoggedIn = useSelector(isLoggedIn);
    const history = useHistory();
    
    if(userLoggedIn){history.push('/home');}
    
    const backgroundStyle = {
        backgroundImage: `url(${splashPageImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className='splash-page-main' style={backgroundStyle}>
            <h2>Discover restaurants and more near you</h2>
        </div>
    )
};

export default SplashPage;