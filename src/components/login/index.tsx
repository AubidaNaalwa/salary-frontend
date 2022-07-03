import React, { FC, useState } from "react";


type Props ={ 
    signIn: (user: string, pass: string)=>void
}
export const Login:FC<Props>= ({signIn}) => {
    const [username, setUsername] =  useState<string>('')
    const [password, setPassword] =  useState<string>('')
    return(
        <div >
            <span>login </span>
                <span>username : </span>
                <input type="text" value={username} onChange= {({target}) => setUsername(target.value)}/>
                <span>password : </span>
                <input type="password" value={password} onChange= {({target}) => setPassword(target.value)}/>
                <button onClick={()=>{signIn(username, password)}}> login</button>
        </div>
    )
} 
