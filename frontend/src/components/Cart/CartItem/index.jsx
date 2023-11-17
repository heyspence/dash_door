import { removeFromCart } from '../../store/cart'
import './CartItem.css'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({ cartItem }) => {
    const { menuItemId, id } = cartItem;
    const menuItem = useSelector(state => state?.menuItems[menuItemId]);
    const dispatch = useDispatch();
    const price = menuItem?.price.toFixed(2)
    const name = menuItem?.name


    return (
        <div className="cart-item">
            <li><p>{name}</p>
                <p>${price}</p>
                <button onClick={()=> dispatch(removeFromCart(id)) }>Remove</button>
            </li>
        </div>
    )
}

export default CartItem;