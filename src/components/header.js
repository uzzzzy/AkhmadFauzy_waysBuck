import { useState } from 'react'
import Modal from './modal'

import styles from './header.module.css'
import Logo from '../logo.svg'


export default function Header() {
    const [openModal, setOpenModal] = useState({
        open: false,
    })

    const isSignIn = JSON.parse(localStorage.getItem('isSignIn'))

    const logout = () =>{
        localStorage.removeItem("user"); 
        localStorage.removeItem("isSignIn");
    }

    return (        
        <>
            <header>
                <img src={Logo} href="#" className={styles.logo} alt="logo" />
                <ul>
                    {isSignIn?
                    <>           
                        <li><div className={styles.cart} alt="Cart"><p className={styles.cartNumber}>1</p></div></li>
                        <li><img src='https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg' onClick={logout} className={styles.userRound} /></li>
                    </>
                    :(
                        <li><button onClick={() => setOpenModal({open:true})} >Login</button></li>
                    )}
                    
                </ul>
            </header>
            {openModal.open &&<Modal closeModal={setOpenModal}/>}
        </>
    )
}