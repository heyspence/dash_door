import './MenuItemShow.css'

const MenuItemShow = ({name, price}) => {
    return (
        <div className="menu-item-show">
            <div className="menu-item-show-main-container">
                <h2>{name}</h2>
                <p>This is an example description. This food is so good and tasty.</p>
                <div className="menu-item-show-image-placeholder"></div>
                <h3>Option 1</h3>
            </div>
            <div className="menu-item-show-footer">
                <button>Add to cart - ${price}</button>
            </div>
        </div>
    )
}

export default MenuItemShow;