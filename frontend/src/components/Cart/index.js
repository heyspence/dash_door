import './Cart.css'
import { ReactComponent as CloseIcon } from '../../assets/svg/Close.svg'

const Cart = ({ closeCart, isCartOpen }) => {
    if(!isCartOpen) return null;

    const handleCartClick = (e) => {
        e.stopPropagation();
    }

    return(
        <div className="cart-backdrop" onClick={closeCart}>
            <div className="cart-main" onClick={handleCartClick}>
                <div className="cart-close">
                   <CloseIcon onClick={closeCart} />
                </div>
            </div>
        </div>
    )
}

export default Cart;