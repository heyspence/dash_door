import { useDispatch, useSelector } from 'react-redux'
import './RestaurantIndex.css'
import { fetchRestaurants } from '../../store/restaurant';
import { useEffect } from 'react';
import RestaurantIndexItem from '../RestaurantIndexItem';

const RestaurantIndex = props => {
    const restaurants = useSelector(state => state?.restaurants)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRestaurants());
    },[dispatch])
    
    return(
        <>
            <div className="restaurant-index">
                <h2>Convenience & drugstores</h2>
                <ul>
                    {Object.values(restaurants).map((restaurant => {
                        return <RestaurantIndexItem name={restaurant.name} id={restaurant.id} key={restaurant.id} />
                    }))}
                </ul>
            </div>

            <div className="restaurant-index">
                <h2>Quick Essentials Nearby</h2>
                <ul>
                    {Object.values(restaurants).map((restaurant => {
                        return <RestaurantIndexItem name={restaurant.name} id={restaurant.id} key={restaurant.id} />
                    }))}
                </ul>
            </div>

            <div className="restaurant-index">
                <h2>Fastest Near You</h2>
                <ul>
                    {Object.values(restaurants).map((restaurant => {
                        return <RestaurantIndexItem name={restaurant.name} id={restaurant.id} key={restaurant.id} />
                    }))}
                </ul>
            </div>

            <div className="restaurant-index">
                <h2>Fastest Near You</h2>
                <ul>
                    {Object.values(restaurants).map((restaurant => {
                        return <RestaurantIndexItem name={restaurant.name} id={restaurant.id} key={restaurant.id} />
                    }))}
                </ul>
            </div>

            <div className="restaurant-index">
                <h2>Fastest Near You</h2>
                <ul>
                    {Object.values(restaurants).map((restaurant => {
                        return <RestaurantIndexItem name={restaurant.name} id={restaurant.id} key={restaurant.id} />
                    }))}
                </ul>
            </div>
        </>
    )
}

export default RestaurantIndex;