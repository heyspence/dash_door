import { useDispatch, useSelector } from 'react-redux'
import './RestaurantIndex.css'
import { fetchRestaurants } from '../../store/restaurant';
import { useEffect } from 'react';
import RestaurantIndexItem from '../RestaurantIndexItem';

const RestaurantIndex = () => {
    const restaurants = useSelector(state => state?.restaurants)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRestaurants());
    },[dispatch])

    return(
        <>
            <div className="restaurant-index-container">
                <h2>Featured Restaurants</h2>
                <div className="restaurant-index">
                    <ul>
                        {Object.values(restaurants).map((restaurant => {
                            return <RestaurantIndexItem 
                                name={restaurant.name} 
                                imageUrl={restaurant.imageUrl} 
                                id={restaurant.id} 
                                key={restaurant.id} />
                        }))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantIndex;