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
                    <li><button onClick={() => setOpenModal({open:true})} >Login</button></li>
                </ul>
            </header>
            {openModal.open &&<Modal closeModal={setOpenModal}/>}
        </>
    )
}