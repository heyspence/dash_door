import { useDispatch, useSelector } from 'react-redux';
import './ReviewForm.css'
import { useState } from 'react';
import { createReview } from '../../../store/reviews';

const ReviewForm = ({ restaurantName, restaurantId }) => {
    const user = useSelector(state => state.session?.user)
    const dispatch = useDispatch();
    const [reviewBody, setReviewBody] = useState('');
    const [score, setScore] = useState(1);

    const handleInputChange = e => {
        setReviewBody(e.target.value)
    }

    const handleScoreChange = e => {
        setScore(e.target.value)
    }

    const submitReviewForm = (e) => {
        e.preventDefault();
        let review = {
            review: {
                userId: user.id,
                body: reviewBody,
                score 
            }
        }
        dispatch(createReview(restaurantId, review))
    }

    return (
        <div className="review-form">
            <h2>Write a Public Review</h2>
            <h3>{ restaurantName }</h3>
            <p>{ user?.firstName } { user?.lastName[0]?.toUpperCase()}.</p>
            <p>Public Review</p>
            <p>Min characters: 10</p>
            <form>
                <select onChange={handleScoreChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <input id="review-body" type="textarea" value={reviewBody} onChange={handleInputChange}/>
            </form>
            <div className="review-form-footer">
                <button onClick={submitReviewForm}>Submit</button>
            </div>
        </div>
    )
}

export default ReviewForm;