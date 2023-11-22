import csrfFetch from "./csrf";

const RECEIVE_RESTAURANTS = 'restaurants/RECEIVE_RESTAURANTS'

const recieveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const fetchRestaurants = () => async dispatch => {
    const res = await csrfFetch('/api/restaurants');
    if(res.ok){
        const data = await res.json()
        dispatch(recieveRestaurants(data))
    }
}

export const findRestaurantByMenuItem = (state, menuItemId) =>{
    if(!menuItemId) return ''
    const restaurants = Object.values(state.restaurants);

    for(const restaurant of restaurants){
        if(restaurant.menuItems.some(menuItem => menuItem === menuItemId)){
            return restaurant
        }
    }
    return ''
}

const restaurantsReducer = (state = {}, action) => {
    let newState = { ...state }
    switch(action.type){
        case RECEIVE_RESTAURANTS:
            const restaurants = action.restaurants;
            return { ...newState, ...restaurants};
        default: 
            return state;
    }
}

export default restaurantsReducer;