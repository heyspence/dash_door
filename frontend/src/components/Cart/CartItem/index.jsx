import './CartItem.css'

const CartItem = ({ cartItem }) => {
    const { menuItemId } = cartItem

    return (
        <div className="cart-item">
            <li>Menu Item Id: {menuItemId}</li>
        </div>
    )
}

export default CartItem;