import './RestaurantIndexItem.css'
import { useHistory } from 'react-router-dom'

const RestaurantIndexItem = ({ id, name }) => {
    const history = useHistory();

    const restaurantRedirect = (e) => {
        e.stopPropagation();
        history.push(`/restaurants/${id}`)
    }

    return(
        <div className="restaurant-index-item" onClick={restaurantRedirect}>
            <div className="image-placeholder">

            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default RestaurantIndexItem