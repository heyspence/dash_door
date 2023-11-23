import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Orders.css'
import { fetchOrders } from '../store/orders';
import OrderIndexItem from './OrderIndexItem';

const Orders = () => {
    const userId = useSelector(state => state?.session? state.session.user?.id : null)
    const orders = useSelector(state => state?.orders ? Object.values(state.orders) : [])
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchOrders(userId))
    },[userId, dispatch])

    return (
        <div className="orders">
            <div className="orders-main-container">
                <div className="orders-index">
                    <h2>Orders</h2>
                    { orders && orders.map(order => {
                        return <OrderIndexItem key={order.id} order={order}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Orders;