import './HomeNav.css'
import logo from '../../../assets/images/doordash-logo-red.png'
import { ReactComponent as CartIcon } from './CartIcon.svg'
import { ReactComponent as HamburgerMenu } from './HamburgerMenu.svg'

const HomeNav = ({ display, toggleMenu, toggleCart }) => {
    if(!display) return null

    return (
        <div className="home-nav">
            <div className="home-nav-left">
                <HamburgerMenu onClick={toggleMenu}/>
                <div className="home-nav-left-inner-container">
                    <div className="logo-container">
                        <img src={logo} />
                        <h1>DASHDOOR</h1>
                    </div>
                    <button className="delivery-btn">Delivery</button>
                </div>
            </div>
            <div className="home-nav-right">
                <CartIcon onClick={toggleCart} />
            </div>
        </div>
    )
}

export default HomeNav