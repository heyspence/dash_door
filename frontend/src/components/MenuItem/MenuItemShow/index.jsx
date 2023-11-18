import './MenuItemShow.css';

const MenuItemShow = ({ onClose, imageUrl, handleAddToCart, name, price }) => {
    return (
        <div className="menu-item-show">
            <div className="menu-item-show-main-container">
                <h2>{name}</h2>
                <p>This is an example description. This food is so good and tasty.</p>

                <div className="menu-item-show-image-placeholder">
                    <img src={imageUrl} className="menu-item-show-image-placeholder" />
                </div>
            </div>
            <div className="menu-item-show-footer">
                <button onClick={(e) => {
                        handleAddToCart();
                        onClose(e);
                    }}>Add to cart - ${price.toFixed(2)}
                </button>
            </div>
        </div>
    )
}

export default MenuItemShow;