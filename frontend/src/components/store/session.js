const SET_CURRENT_USER = 'session/SET_CURRENT_USER'
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER'

const storeCurrentUser = user => {
    if(user)sessionStorage.setItem('currentUser', JSON.stringify(user.id));
    else sessionStorage.removeItem('currentUser');
}

const selectCurrentUser = state => state?.session ? state.session.user : null;
export const isLoggedIn = (state) => !!selectCurrentUser(state);

export const signUp = user => async dispatch =>{
    const res = await fetch(`/api/users`,{
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({user: user})
    })
    if(res.ok){
        let data = await res.json()
        dispatch({type: SET_CURRENT_USER, user: data.user})
        storeCurrentUser(data.user.id)
        console.log(data.user.id)
    }else{
        let errors = await res.json();
        console.log(errors)
    }
}

export const signIn = ({email, password}) => async dispatch =>{
    const res = await fetch(`/api/session`,{
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({email, password})
    })
    if(res.ok){
        let data = await res.json()
        dispatch({type: SET_CURRENT_USER, user: data.user})
        // storeCurrentUser(data.user.id)
    }else{
        let errors = await res.json();
        console.log(errors)
    }
}

export const logout = () => async dispatch => {
    const res = await fetch(`api/session`,{
        method: 'DELETE'
    })

    if(res.ok){
        dispatch({type: REMOVE_CURRENT_USER})
    }
}

const initialState  = {
    user: JSON.parse(sessionStorage.getItem('currentUser'))
}

const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {...state, user: action.user};
        case REMOVE_CURRENT_USER:
            return {...state, user: null};
        default:
            return state;
    }
}

export default sessionReducer;