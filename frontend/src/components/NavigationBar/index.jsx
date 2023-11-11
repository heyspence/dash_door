import { useState } from "react";
import Modal from "../Modal";
import SessionModalForm from "../SessionModalForm";
import './NavigationBar.css'

const NavigationBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);

    return (

        <div className='main-nav-bar'>
            <h1 className='main-nav-logo'>DASHDOOR</h1>
            <div className='main-nav-links'>
                <button className='main-sign-in-button button' onClick={handleOpen}>Sign In</button>
                <button className='main-sign-up-button button'onClick={handleOpen}>Sign Up</button>
                <Modal isOpen={isModalOpen} onClose={handleClose}>
                    <SessionModalForm />
                </Modal>
            </div>
        </div>
    )

}

export default NavigationBar