import LoginNav from "./LoginNav";
import HomeNav from "./HomeNav";
import Menu from "./Menu";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../store/session";
import { useState } from "react";

const NavigationBar = () => {
    const userLoggedIn = useSelector(isLoggedIn)
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [isCartOpen, setIsCartOpen] = useState();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleCart =() => {
        setIsCartOpen(!isCartOpen)
    }

    return(
        <>
            <LoginNav display={!userLoggedIn} />
            <HomeNav display={userLoggedIn} toggleMenu={toggleMenu} toggleCart={toggleCart} />
            <Menu isMenuOpen={isMenuOpen} closeMenu={()=>{setIsMenuOpen(false)}}/>
            <Cart isCartOpen={isCartOpen} closeCart={()=>{setIsCartOpen(false)}}/>
        </>
    )
}

export default NavigationBar;