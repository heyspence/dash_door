import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItems } from "../../store/menuItems";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MenuItemIndexItem from "../MenuItemIndexItem";
import './MenuItemIndex.css'

const MenuItemIndex = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const menuItems = useSelector((state)=> 
        state.menuItems ? Object.values(state.menuItems) : []
    );

    useEffect(()=> {
        dispatch(fetchMenuItems(id))
    },[dispatch, id])


    return(
        <ul className="menu-items-index">
            {menuItems && menuItems.map(menuItem => {
                return (
                    <MenuItemIndexItem 
                        key={menuItem.id}
                        name={menuItem.name} 
                        price={menuItem.price} 
                    />
                )
            })}
        </ul>
    )
}

export default MenuItemIndex;