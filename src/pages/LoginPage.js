import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
// import http from "../plugins/http";
import axios from "axios";
import {useState} from "react";

const LoginPage = ({setToolbar, setUserinfo}) => {
    const nameRef = useRef()
    const pass1Ref = useRef()

    const [message, setMessage] = useState("")
    const nav = useNavigate()

   async function loginUser() {
        const user = {
            name: nameRef.current.value,
            password: pass1Ref.current.value,

        }
            try {
                const res = await axios.post("http://localhost:4000/login", user ,{withCredentials: true})
                console.log(res.data)
                    if(res.data.success) {
                        setToolbar(true)
                        console.log(res.data.userExists.name)
                        setUserinfo(res.data.userExists)

                        nav('/allAuctions')
                    }   else {
                            setMessage(res.data.message)
                    }

            } catch (e) {
                }

                //
        // http.post(user, "login").then(res => {
        //     if(res.success) {
        //        nav('/info')
        //     }
        // })
    }

    return (

             <div className="d-flex column align-center m-50">
                 <h1>Login</h1>
            <input type="text" ref={nameRef} placeholder="name"/>
            <input type="text" ref={pass1Ref}  placeholder="password"/>


            <button onClick={loginUser}>Login</button>
                 <h3>{message}</h3>
        </div>
    );
};

export default LoginPage
