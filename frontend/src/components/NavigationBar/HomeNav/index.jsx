import { useDispatch } from 'react-redux'
import { logout } from '../../store/session'
import './HomeNav.css'

const HomeNav = ({ display }) => {
    const dispatch = useDispatch();
    
    if(!display) return null

    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <div className="home-nav">
            <h1>Hello from Home Nav</h1>
            <button onClick={handleClick}>Logout </button>
        </div>
    )
}

export default HomeNav