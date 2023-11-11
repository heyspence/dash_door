const SET_CURRENT_USER = 'session/SET_CURRENT_USER'
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER'

const storeCurrentUser = user => {
    if(user)sessionStorage.setItem('currentUser', JSON.stringify(user))
    else sessionReducer.removeItem('currentUser')
}

export const signUp = user => async dispatch =>{
    const res = await fetch(`/api/users`,{
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({user: user})
    })
    if(res.ok){
        let data = await res.json()
        dispatch({type: SET_CURRENT_USER, user: data.user})
        storeCurrentUser()
    }else{
        let errors = await res.json();
        console.log(errors)
    }
}

const initailState = () =>{
    user: JSON.parse(sessionStorage.getItem('currentUser'))
}

const sessionReducer = (state = initailState, action) => {
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