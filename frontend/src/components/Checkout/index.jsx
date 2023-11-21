import './Checkout.css'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from '../Cart';

const Checkout = () => {
    const history = useHistory();
    const user = useSelector(state => state?.session ? state.session.user : null)

    if(!user) history.push('/home')
    return (
        <div className="checkout">
            <div className="checkout-info-container">
                <div className="checkout-account-details">
                    <h3>1. Account Details</h3>
                    <p>{user.email}</p>
                </div>
                <div className="checkout-shipping-details">
                    <h3>2. Shipping Details</h3>
                </div>
                <div className="checkout-payment-details checkout-account-details">
                    <h3>3. Payment Details</h3>
                </div>
                <div className="checkout-cart-details">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Checkout;