const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const fetchReviews = restaurant_id => async dispatch =>{
    const res = await fetch(`/api/restaurants/${restaurant_id}/reviews`)

    if(res.ok){
        const data = await res.json();
        dispatch(receiveReviews(data.reviews))
    }
}

const reviewsReducer = (state = {}, action) => {
    let newState = { ...state }
    switch(action.type){
        case RECEIVE_REVIEW:
            return {}
        case RECEIVE_REVIEWS:
            return { ...action.reviews}
        case REMOVE_REVIEW:
            delete {}
            return {}
        case UPDATE_REVIEW:
            return {}
        default:
            return newState
    }
}

export default reviewsReducer
