import { useSelector } from 'react-redux';
import './Home.css'
import { isLoggedIn } from '../store/session';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = props => {
    const userLoggedIn = useSelector(isLoggedIn)
    const history = useHistory();

    if(!userLoggedIn){
        history.push('/')
    }
   return(
        <div className="home-main">
            <h1>Hello From Home</h1>
        </div>
   )
}

export default Home;