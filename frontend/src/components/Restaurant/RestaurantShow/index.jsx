import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './RestaurantShow.css'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedIn } from '../../store/session'
import MenuItemIndex from '../../MenuItem/MenuItemIndex'
import { fetchRestaurants } from '../../store/restaurant';
import { useEffect } from 'react'

const RestaurantShow = () => {
    const { id }= useParams()
    const userLoggedIn = useSelector(isLoggedIn)
    const history = useHistory();
    const dispatch = useDispatch();
    const restaurant = useSelector((state)=> state.restaurants[id])

    useEffect(() => {
        dispatch(fetchRestaurants());
    },[dispatch])
    
    if(!userLoggedIn) history.push('/')

    return (
        <div className="restaurant-show">
            <div className="image-placeholder" >
                <img src={restaurant?.imageUrl} className="image-placeholder" />
                <img src={restaurant?.iconImageUrl} className="restaurant-logo white-background" />
            </div>
            <h1>{restaurant?.name}</h1>
            <div className="store-info-container">
                <p>Store Info...</p>
                <p>Id: {id}</p>
                <p>Open Now...</p>
                <p>Ratings...</p>
            </div>
            <MenuItemIndex />
        </div>
    )
}

export default RestaurantShow