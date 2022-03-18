import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import SingleCard from "../components/SingleCard";


const UserAuctionPage = () => {

    const [auctions, setAuctions] = useState()
    const nav = useNavigate()
    const {id} = useParams()

    useEffect(async () => {
        try {
            const res = await axios.get("http://localhost:4000/userAuctions", {withCredentials: true})
            console.log(res)
            setAuctions(res.data.posts)
        } catch (e) {
            console.log(e)
        }

    }, [])


    return (
        <div className="d-flex column justify-center align-center">
            <h1 className="title m-50">My Auctions</h1>

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
export default UserAuctionPage;