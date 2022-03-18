import {useRef, useState} from 'react';
import http from "../plugins/http"
import {useNavigate} from "react-router-dom"
import axios from "axios";


const RegisterPage = (setUserInfo) => {
    const nameRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()

    const [message, setMessage] = useState("")
    const nav = useNavigate()

    async function registerUser() {
        const user = {
            name: nameRef.current.value,
            password: pass1Ref.current.value,
            passwordTwo: pass2Ref.current.value
        }

        console.log(user)
        try {
            const res = await axios.post("http://localhost:4000/register", user ,{withCredentials: true})
            console.log(res.data)
            if(res.data.success) {
                setUserInfo(res.data.userExists)
                nav('/login')
            }   else {
                setMessage(res.data.message)
            }
        } catch (e) {


        }
        http.post(user, "register").then(res => {
            if (res.success) {
                nav('/login')
            }
        })
    }

    return (
        <div className="d-flex column align-center m-50">
            <h1>Register</h1>
            <input type="text" ref={nameRef} placeholder="Name"/>
            <input type="text" ref={pass1Ref} placeholder="Password one"/>
            <input type="text" ref={pass2Ref} placeholder="Password two"/>

            <button onClick={registerUser}>Register</button>
            <h3>{message}</h3>
        </div>
    );
};

export default RegisterPage