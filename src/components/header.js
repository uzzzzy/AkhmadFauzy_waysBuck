import { useState } from 'react'
import styles from './header.module.css'
import Logo from '../logo.svg'
import Modal from './modal'

export default function Header() {
    const [openModal, setOpenModal] = useState({
        open: false,
    })

    return (
        <>
            <header>
                <img src={Logo} href="#" className={styles.logo} alt="logo" />
                <ul>
                    <li><button onClick={() => setOpenModal({open:true,login:true})} >Login</button></li>
                    <li><button onClick={() => setOpenModal({open:true,login:false})} className={styles.register}>Register</button></li>
                </ul>
            </header>
            {openModal.open &&<Modal login={openModal.login} closeModal={setOpenModal}/>}
        </>
    )
}