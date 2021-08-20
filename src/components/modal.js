import { useState } from 'react'
import styles from './modal.module.css'

export default function Login(props) {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const data = require('../data/user.json')

    const handleOnChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        //print state value with console.log here
        if(state.email.length > 0) {
            let user = data.filter(el => el.email === state.email && el.password === state.password)
            if(user.length === 1) {
                localStorage.setItem('isSignIn',true)
                localStorage.setItem('user', JSON.stringify(user))
            }
            props.closeModal({open:false})
        }
      }

    return (
        <div className={styles.modalBg}>
            <div className={styles.modalOut} onClick={()=>{props.closeModal({open:false})}}></div>
            <form className={styles.modal}>
            <h2>Login</h2>

                <input name="email" type="email" pattern="[^ @]*@[^ @]*" onChange={handleOnChange} placeholder="Username" required/>
                    
                <input name="password" type="password" onChange={handleOnChange} placeholder="Password" />

                <button onClick={handleOnSubmit}>Login</button>

                <p>Already have an account? Click <b>Here</b></p>
            </form>
        </div>
    )
}