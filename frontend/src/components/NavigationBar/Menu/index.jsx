import { useDispatch } from 'react-redux';
import './Menu.css'
import { logout } from '../../store/session';

const Menu = ({isOpen, closeMenu}) => {
    const dispatch = useDispatch();
    if(!isOpen) return null;
    
    const handleSignOut = () => {
        closeMenu();
        dispatch(logout());
    }

    const handleMenuClick = (e) => {
        e.stopPropagation();
    }

    return(
        <div className="menu-backdrop" onClick={closeMenu}>
            <div className="menu-main" onClick={handleMenuClick}>
                <div className="menu-close">
                    <svg width="24" height="24" onClick={closeMenu} viewBox="0 0 24 24" 
                        fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 
                            18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 
                            19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 
                            10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 
                            4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 
                            5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071Z">
                        </path>
                    </svg>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Pickup</li>
                    <li>Offers</li>
                    <li>Orders</li>
                    <li>Account</li>
                    <li>Saved Stores</li>
                    <li>Payment</li>
                    <li>Gift Card</li>
                    <li>Manage Dash Pass</li>
                    <li>Help</li>
                    <li onClick={handleSignOut}>Sign Out</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;