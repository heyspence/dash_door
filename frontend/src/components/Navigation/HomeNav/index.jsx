import './HomeNav.css'
import logo from '../../../assets/images/doordash-logo-red.png'
import { ReactComponent as CartIcon } from './CartIcon.svg'
import { ReactComponent as HamburgerMenu } from './HamburgerMenu.svg'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'


const HomeNav = ({ display, toggleMenu, toggleCart }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    if(!display) return null

    const handleClickToHome = () => {
        history.push('/')
    }

    const handleToggleCart = () =>{
            dispatch(toggleCart())
    }

    return (
        <div className="home-nav">
            <div className="home-nav-left">
                <HamburgerMenu onClick={toggleMenu}/>
                <div className="home-nav-left-inner-container">
                    <div className="logo-container" onClick={handleClickToHome}>
                        <img alt="DashDoor main logo" src={logo} />
                        <h1>DASHDOOR</h1>
                    </div>
                    <button className="delivery-btn">Delivery</button>
                </div>
            </div>
            <div className="home-nav-right">
                {location.pathname !== '/checkout' && <CartIcon onClick={handleToggleCart} />}
            </div>
        </div>
    )
}

export default HomeNav