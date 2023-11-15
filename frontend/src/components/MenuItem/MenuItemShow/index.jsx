import './MenuItemShow.css'

const MenuItemShow = ({name, price}) => {
    return (
        <div className="menu-item-show">
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )
}

export default MenuItemShow;