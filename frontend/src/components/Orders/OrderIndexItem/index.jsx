import { useDispatch, useSelector } from 'react-redux';
import './OrderIndexItem.css'
import { fetchRestaurant } from '../../store/restaurant';
import { useEffect } from 'react';

const OrderIndexItem = ({ order }) =>{
    const restaurantId = order.restaurantId;
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state?.restaurants ? state.restaurants[restaurantId]?.name : null);

    const formatDate = data => {
        const options = {  weekday: 'short', month: 'short', day: 'numeric' };
        const date = new Date(data);
        return date.toLocaleDateString('en-US', options);
    }
    const formattedDate = formatDate(order.createdAt);

    useEffect(()=>{
        if(!restaurant){
            dispatch(fetchRestaurant(restaurantId))
        }
    },[dispatch, restaurantId])

    return (
        <div className="order-index-item">
            <p>#{order.id}</p>
            <p>{formattedDate}</p>
            <p>{restaurant}</p>
        </div>
    )
}

export default OrderIndexItem;