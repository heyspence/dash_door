import csrfFetch from "./csrf";

const RECEIVE_CART_ITEM = 'cart/RECEIVE_CART_ITEM'
const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM'
const RECEIVE_CART_ITEMS = 'cart/RECEIVE_CART_ITEMS'

const receiveCartItem = cart_item => ({
    type: RECEIVE_CART_ITEM,
    cart_item
})

const receiveCartItems = cart_items => ({
    type: RECEIVE_CART_ITEMS,
    cart_items
})

const removeCartItem = cart_item_id => ({
    type: REMOVE_CART_ITEM,
    cart_item_id
})

export const addToCart = cartItem => async dispatch =>{
    const res = await csrfFetch(`/api/cart_items`,
        {method: "POST",
        body: JSON.stringify(cartItem)})
        if(res.ok){
            const data = await res.json();
            dispatch(receiveCartItem(data.cartItem))
        }
}

export const getCart = user_id => async dispatch => {
    const res = await csrfFetch(`/api/user/${user_id}/cart_items`)

    if(res.ok){
        const data = await res.json();
        dispatch(receiveCartItems(data))
    }
}

const cartReducer = (state = {}, action) => {
    let newState = { ...state }
    switch(action.type){
        case(RECEIVE_CART_ITEM):
            newState[action.cart_item.id] = action.cart_item
            return newState;
        case(RECEIVE_CART_ITEMS):
            newState = { ...action.cart_items };
            return newState
        case(REMOVE_CART_ITEM):
            delete newState[action.cart_item_id]
            return newState
        default:
            return newState
    }
}

export default cartReducer;