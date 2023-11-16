import './Cart.css'
import { ReactComponent as CloseIcon } from '../../assets/svg/Close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart } from '../store/cart'
import CartItem from './CartItem'
import { findRestaurantByMenuItem } from '../store/restaurant'

const Cart = ({ closeCart, isCartOpen }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart?.cartItems ? Object.values(state.cart.cartItems) : [])
    const totalPrice = useSelector(state => state.cart ? state.cart.totalPrice : 0)
    const currentUserId = useSelector(state => state.session.user?.id)
    const cartRestaurant = useSelector(state => findRestaurantByMenuItem(state, cartItems[0]?.id))

    const handleCartClick = (e) => {
        e.stopPropagation();
    }
    
    useEffect(()=>{
        if(isCartOpen){
            dispatch(getCart(currentUserId))
        }
    },[isCartOpen, currentUserId, dispatch])
    
    if(!isCartOpen) return null;

    return(
        <div className="cart-backdrop" onClick={closeCart}>
            <div className="cart-main" onClick={handleCartClick}>
                <div className="cart-close">
                    <CloseIcon onClick={closeCart} />
                </div>
                <p>Your cart from</p>
                <h3>{cartRestaurant.name}</h3>
                <ul className="cart-list">
                    {cartItems && cartItems.map((cartItem)=>{
                            return <CartItem key={cartItem.id} cartItem={cartItem} />
                    })}
                </ul>
                <p>Total Price: ${totalPrice}</p>
            </div>
        </div>
    )
}


export default Cart;