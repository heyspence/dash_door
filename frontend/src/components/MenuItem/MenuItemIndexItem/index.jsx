import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Modal';
import MenuItemShow from '../MenuItemShow';
import './MenuItemIndexItem.css'
import { addToCart } from '../../store/cart';

const MenuItemIndexItem = ({id, name, price}) => {
    const [isShowOpen, setIsShowOpen] = useState();
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.session.user?.id)

    const toggleIsShowOpen = (e) =>{
        e.stopPropagation();
        setIsShowOpen(!isShowOpen)
    }

    const handleAddToCart = () => {
        let cart_item = {
            user_id: currentUserId,
            menu_item_id: id
        }
        dispatch(addToCart(cart_item))
    }

    return (
        <>
            <li className="menu-item-index-item">
                <div className="image-placeholder" onClick={toggleIsShowOpen}>
                    <button onClick={handleAddToCart}>Add</button>
                </div>
                <p className="menu-item-name">{name}</p>
                <p className="menu-item-price">${price}</p>
            </li>
            <Modal isOpen={isShowOpen} onClose={toggleIsShowOpen}>
                <MenuItemShow key={id} handleAddToCart={handleAddToCart} onClose={toggleIsShowOpen} name={name} price={price} />
            </Modal>
        </>
    )
}

export default React.memo(MenuItemIndexItem);