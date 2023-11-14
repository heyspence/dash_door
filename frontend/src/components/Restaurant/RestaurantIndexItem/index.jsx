import './RestaurantIndexItem.css'

const RestaurantIndexItem = ({ name }) => {
    return(
        <div className="restaurant-index-item">
            <div className="image-placeholder">

            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default RestaurantIndexItem