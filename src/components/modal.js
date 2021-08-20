import styles from './modal.module.css' 

export default function Login(props) {
    let login = props.login;
    
    return (
        <div className={styles.modalBg}>
            <div className={styles.modalOut} onClick={()=>{props.closeModal({open:false})}}></div>
                <div className={styles.modal}>
                    <h2>{login?"Login":"Register"}</h2>

                    <input type="text" className="form-control" placeholder="Username" />
                    
                    <input type="password" className="form-control" placeholder="Password" />

                    {login?"":<input type="text" className="form-control" placeholder="Full Name" />}

                    <button>{login?"Login":"Register"}</button>

                    <p>{login?"Dont't Have an account":"Already have an account"} ? Click <b style={{cursor: 'pointer'}} onClick={()=>props.closeModal({open:true,login:!login})}>Here</b></p>
                </div>
        </div>
    )
}