import React, {useRef,} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CreateAuction = () => {

    const photoRef = useRef()
    const titleRef = useRef()
    const currentPriceRef = useRef()
    const timeCreatedRef = useRef()

    const nav = useNavigate()

    async function update() {

        const user = {
            photo: photoRef.current.value,
            title: titleRef.current.value,
            currentPrice: currentPriceRef.current.value,
            timeCreated: timeCreatedRef.current.value   //cia tvarkyti
        }
        try {
            const res = await axios.post("http://localhost:4000/createAuction", user, {withCredentials: true})
            console.log(res.data)

            nav('/allAuctions')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="d-flex column align-center m-50">
            <h1 className="title m-50 ">Create Auction</h1>

            <input type="text" ref={photoRef} placeholder="Photo Link"/>
            <input type="text" ref={titleRef} placeholder="Title"/>
            <input type="text" ref={currentPriceRef} placeholder="Start Price"/>
            <div className="d-flex input">
                <div>
                    <p>Auction time:</p>

                </div>

                <select ref={timeCreatedRef} defaultValue={60} className="time" id="input01">
                    <option value="60">1 minute</option>
                    <option value="600">10 minutes</option>
                    <option value="3600">1 hour</option>
                </select>
            </div>

            <button onClick={update}>Create Auction</button>

            {/*<h3>{new Date(Number(item.timeCreated)).toLocaleString('lt-LT')}</h3>*/}
        </div>
    );
};

export default CreateAuction;


