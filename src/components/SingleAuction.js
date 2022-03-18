import React, {useRef} from 'react';
import { useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import http from "../plugins/http";
import {useNavigate} from "react-router-dom";


const SingleAuction = ({userinfo}) => {

    const {id} =useParams()
    const priceRef =useRef()
    const [singleAuctions, setSingleAuctions] = useState([])

    const nav = useNavigate()
    useEffect(() => {
        console.log(id)
        http.get("singleAuction/" + id).then(res => {
            console.log(res)
            if (res.success) {
                setSingleAuctions(res.auction)
            }
        })

    }, [])

    async function newCurrentPrice() {
        const user = {
            newPrice: priceRef.current.value,
        }
        http.post(user, "register").then(res => {
            if (res.success) {
                nav('/login')
            }
        })
    }
    return (
        <div className="d-flex column  justify-center align-center ">
        <h1 className="title m-50">Single Auction</h1>
        <div className="single-auction d-flex wrap space-around">
            <img className="auction-image" src={singleAuctions.photo} alt=""/>
            <div className="d-flex column justify-center">
                <h1>User Name: {singleAuctions.name}</h1>
                <h1> Money: {userinfo.money}</h1>
            </div>
            <div className="d-flex column justify-center">
                <h1>Current Price: {singleAuctions.currentPrice}</h1>
                <h1>Time created: {singleAuctions.timeCreated}</h1>
            </div>
            <div>
            <input type="text" ref={priceRef} placeholder="New Price €"/>
            <button onClick={newCurrentPrice}> Make Bid</button>
        </div>
        </div>

        </div>
    );
};

export default SingleAuction;