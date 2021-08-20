import styles from './modal.module.css' 

export default function Login(props) {
    
    return (
        <div className={styles.modalBg}>
            <div className={styles.modalOut} onClick={()=>{props.closeModal({open:false})}}></div>
                <div className={styles.modal}>
                    <h2>Login</h2>

                    <input type="text" className="form-control" placeholder="Username" />
                    
                    <input type="password" className="form-control" placeholder="Password" />


                    <button>Login</button>

                    <p>Already have an account? Click <b>Here</b></p>
                </div>
        </div>
    )
}