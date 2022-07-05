import React, { FC } from "react";
import styles from './style.module.css'
export const NavBar:FC= ({}) => {
    const logOut =() => { 
        localStorage.removeItem('token')
    }
    return(
        <ul  className={styles.list}>
            <li className={styles.category}><a href="#home">Home</a></li>
            <li className={`${styles.category} ${styles.last}`} onClick={logOut}><a href="#home">logOut</a></li>
        </ul>
    )
} 
