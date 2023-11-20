import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Modal';
import MenuItemShow from '../MenuItemShow';
import './MenuItemIndexItem.css'
import { addToCart, toggleCart } from '../../store/cart';

const MenuItemIndexItem = ({id, name, imageUrl, price}) => {
    const [isShowOpen, setIsShowOpen] = useState();
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.session.user?.id)

    const toggleIsShowOpen = () =>{
        setIsShowOpen(!isShowOpen)
    }

    const handleAddToCart = () => {
        let cart_item = {
            user_id: currentUserId,
            menu_item_id: id
        }
        toggleIsShowOpen()
        dispatch(addToCart(cart_item)).then(()=>{
            dispatch(toggleCart())
        })
    }

    return (
        <>
            <li className="menu-item-index-item">
                <img src={imageUrl} onClick={toggleIsShowOpen} />
                    <button onClick={toggleIsShowOpen}>Add</button>
                <p className="menu-item-name">{name}</p>
                <p className="menu-item-price">${price.toFixed(2)}</p>
            </li>
            <Modal isOpen={isShowOpen} onClose={toggleIsShowOpen}>
                <MenuItemShow key={id} handleAddToCart={handleAddToCart} imageUrl={imageUrl} onClose={toggleIsShowOpen} name={name} price={price} />
            </Modal>
        </>
    )
}

export default React.memo(MenuItemIndexItem);