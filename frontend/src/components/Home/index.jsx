import { useSelector } from 'react-redux';
import './Home.css'
import { isLoggedIn } from '../store/session';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RestaurantIndex from '../Restaurant/RestaurantIndex';

const Home = props => {
    const userLoggedIn = useSelector(isLoggedIn)
    const history = useHistory();

    if(!userLoggedIn){
        history.push('/')
    }

   return(
        <div className="home-main">
            <RestaurantIndex />
        </div>
   )
}

export default Home;