import React, { FC, useEffect, useState } from "react";
import { loadUserDetails } from "../../api/feed";
import styles from './style.module.css'
export const NavBar:FC<{token: string, setToken:(token:string)=> void}>= ({token, setToken}) => {
    const [user, setUser] = useState<string>('')
    const logOut = () => { 
        localStorage.removeItem('token')
        setToken('')
    }

    const loadUser = async () => { 
        const user = await loadUserDetails(token)
        setUser(user)
    }

    useEffect(()=> { 
        loadUser()
    }, [])

    if(!user) { 
        return null
    }

    return(
        <ul  className={styles.list}>
            <li className={styles.category}><a href="#">{user}</a></li>
            <li className={styles.category}><a href="#home">Home</a></li>
            <li className={`${styles.category} ${styles.last}`} onClick={logOut}><a href="#home">logOut</a></li>
        </ul>
    )
} 
