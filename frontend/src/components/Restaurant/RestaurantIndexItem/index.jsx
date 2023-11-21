import './RestaurantIndexItem.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as StarSvg } from '../../../assets/svg/reviewStar.svg'
import { useEffect, useState } from 'react';
import csrfFetch from '../../store/csrf';

const RestaurantIndexItem = ({ id, name, imageUrl = '' }) => {
    const history = useHistory();
    const [reviews, setReviews] = useState([]);

    const restaurantRedirect = (e) => {
        e.stopPropagation();
        history.push(`/restaurants/${id}`)
    }

    const fetchRestaurantReviews = async id => {
        const res = await csrfFetch(`/api/restaurants/${id}/reviews`);
        if(res.ok){
            const data = await res.json();
            setReviews(Object.values(data.reviews))
        }else{
            setReviews([])
        }
    }

    useEffect(()=>{
        fetchRestaurantReviews(id)
    }, [id])

    let reviewCount = reviews.length
    let total = reviews.reduce((acc, review) => acc + review.score, 0)
    let average = reviewCount > 0 ? (total / reviewCount).toFixed(1) : null

    return(
        <div className="restaurant-index-item" onClick={restaurantRedirect}>
            <div className="restaurant-index-image-container">
                <img src={imageUrl} />
            </div>
            <h3>{name}</h3>
            <span className="macro-review-container">
                <p>{average}</p>
                <StarSvg className="review-star-svg" />
                <p>({reviewCount})</p>
            </span>
        </div>
    )
}

export default RestaurantIndexItem