import LoginNav from "./LoginNav";
import HomeNav from "./HomeNav";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../store/session";

const NavigationBar = () => {
    const userLoggedIn = useSelector(isLoggedIn)


    return(
        <>
            <LoginNav display={!userLoggedIn} />
            <HomeNav display={userLoggedIn} />
        </>
    )
}

export default NavigationBar;