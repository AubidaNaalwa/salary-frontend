import React, { FC, useState } from "react";
import { Loader } from "../loader";
import style from './index.module.css'

type Props ={ 
    signIn: (user: string, pass: string)=>void
}
export const Login:FC<Props>= ({signIn}) => {
    const [username, setUsername] =  useState<string>('')
    const [password, setPassword] =  useState<string>('')
    const [loading,  setLoading] = useState<boolean>(false);
    if(loading) { 
        return <Loader />
    }
    return(
        <div className={style.signIn}>
            <span>login </span>
            <div>
            <span>username : </span>
                <input type="text" value={username} onChange= {({target}) => setUsername(target.value)}/>
            </div>
            <div>
                <span>password : </span>
                <input type="password" value={password} onChange= {({target}) => setPassword(target.value)}/>
            </div>
            <button onClick={()=>{signIn(username, password); setLoading(true)}}> login</button>
        </div>
    )
} 
