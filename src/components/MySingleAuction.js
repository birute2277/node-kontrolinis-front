import React from 'react';
import { useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import http from "../plugins/http";

const MySingleAuction = ({userinfo}) => {
    const {id} =useParams()
    console.log('mano', id)

    const [mySingleAuctions, setMySingleAuctions] = useState([])

    useEffect(() => {
        console.log(id)
        http.get("mySingleAuction/" + id).then(res => {

            console.log(res)

            if (res.success) {
                setMySingleAuctions(res.auction)
            }
        })

    }, [])

    return (

        <div className="d-flex column  justify-center align-center ">
            <h1 className="title m-50">My Single Auction</h1>
            <div className="single-auction d-flex wrap space-around">
                <img className="auction-image" src={mySingleAuctions.photo} alt=""/>
                <div className="d-flex column justify-center">
                    <h1>User Name: {mySingleAuctions.name}</h1>
                    <h1> Money: {userinfo.money}</h1>
                </div>
                <div className="d-flex column justify-center">
                    <h1>Current Price: {mySingleAuctions.currentPrice}</h1>
                    <h1>Time created: {mySingleAuctions.timeCreated}</h1>
                </div>
            </div>
        </div>
    );
};
export default MySingleAuction;