import styles from "@/styles/Login.module.css";
import HeadDefault from "./head";

const Login = () => {
    return(
        <div className={styles.container}>
            <HeadDefault />
            <input className={styles.input} placeholder="Name" />  
            <input className={styles.input} placeholder="E-mail" />  
            <input className={styles.input} placeholder="Phone" />  
        </div>
    )
}

export default Login;