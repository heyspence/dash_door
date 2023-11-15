import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './RestaurantShow.css'
import { useSelector } from 'react-redux'
import { isLoggedIn } from '../../store/session'

const RestaurantShow = () => {
    const { id }= useParams()
    const userLoggedIn = useSelector(isLoggedIn)
    const history = useHistory();
    const restaurant = useSelector((state)=> state.restaurants[id])
    console.log(restaurant)
    if(!userLoggedIn) history.push('/')

    return (
        <div className="restaurant-show">
            <div className="image-placeholder" >
                <div className="restaurant-logo" ></div>
            </div>
            <h1>{restaurant.name}</h1>
            <p>{id}</p>
        </div>
    )
}

export default RestaurantShow