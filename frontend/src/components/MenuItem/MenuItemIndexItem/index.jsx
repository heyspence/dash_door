import React, { useState } from 'react';
import Modal from '../../Modal';
import MenuItemShow from '../MenuItemShow';
import './MenuItemIndexItem.css'

const MenuItemIndexItem = ({name, price}) => {
    const [isShowOpen, setIsShowOpen] = useState();

    const toggleIsShowOpen = (e) =>{
        e.stopPropagation();
        setIsShowOpen(!isShowOpen)
    }

    return (
        <li className="menu-item-index-item">
            <div className="image-placeholder" onClick={toggleIsShowOpen}>
                <button>Add</button>
            </div>
            <p className="menu-item-name">{name}</p>
            <p className="menu-item-price">${price}</p>
            <Modal isOpen={isShowOpen} onClose={toggleIsShowOpen}>
                <MenuItemShow name={name} price={price} />
            </Modal>
        </li>
    )
}

export default React.memo(MenuItemIndexItem);