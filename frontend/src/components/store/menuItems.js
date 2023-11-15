import csrfFetch from "./csrf"

const RECEIVE_MENU_ITEMS = 'menuItems/RECEIVE_MENU_ITEMS'

const receiveMenuItems = menuItems =>({
    type: RECEIVE_MENU_ITEMS,
    menuItems
})

export const fetchMenuItems = restaurant_id => async dispatch => {
    const res = await csrfFetch(`/api/restaurants/${restaurant_id}/menu_items`)
    if(res.ok){
        const data = await res.json()
        dispatch(receiveMenuItems(data))
    }
}

const menuItemsReducer = (store = {}, action) => {
    switch(action.type){
        case RECEIVE_MENU_ITEMS:
            return action.menuItems
        default:
            return store
    }
}

export default menuItemsReducer;