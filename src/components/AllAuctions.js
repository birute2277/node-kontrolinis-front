import React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import SingleCard from "./SingleCard";

const AllAuctions = () => {
    const [auctions, setAuctions, setToolbar] = useState([])
    const nav = useNavigate()

    useEffect(async () => {

        try{
            const res = await axios.get("http://localhost:4000/allAuctions", {withCredentials: true})
            console.log(res.data)
            if(res.data.success) {
                console.log('aukcionai',res.data.posts)
                setAuctions(res.data.posts)
                setToolbar(false)
                nav('/allAuctions')
            }   else {
                setAuctions(res.data.message)
            }

        } catch (e) {
            console.log(e)
        }

    }, [])

    return (
        <div className="d-flex column justify-center align-center ">

            <h1 className="title m-50">All Auctions</h1>


            <div className="a-header d-flex ">
                <h1 className="width">Auction item</h1>
                <div className="d-flex a-header-info wrap align-center just-evenly">
                    <h1>Title</h1>
                    <h1>Last price</h1>
                    <h1>User</h1>
                    <h1>Time left</h1>
                </div>

            </div>
            <div className="auction-1">
                {auctions && auctions.map((x, i ) =>
                    <div className="d-flex auction" key={i}>
                        <SingleCard item={x} />

                    </div>)}
            </div>
        </div>
    );
};

export default AllAuctions;