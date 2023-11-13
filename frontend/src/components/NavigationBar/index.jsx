import LoginNav from "./LoginNav";
import HomeNav from "./HomeNav";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../store/session";
import { useState } from "react";

const NavigationBar = () => {
    const userLoggedIn = useSelector(isLoggedIn)
    const [isMenuOpen, setIsMenuOpen] = useState();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <>
            <LoginNav display={!userLoggedIn} />
            <HomeNav display={userLoggedIn} toggleMenu={toggleMenu}/>
            <Menu isOpen={isMenuOpen} closeMenu={()=>{setIsMenuOpen(false)}}/>
        </>
    )
}

export default NavigationBar;