import React from 'react';

const MenuItemIndexItem = ({name, price}) => {
    return (
        <li>
            <p>{name}</p>
            <p>{price}</p>
        </li>
    )
}

export default React.memo(MenuItemIndexItem);