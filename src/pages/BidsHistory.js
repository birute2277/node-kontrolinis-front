import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";

const BidsHistory = () => {
    const [bidsHistory, setBidsHistory] = useState([])
    useEffect(async () => {
        const res = await axios.get("http://localhost:4000/getUserBids", {withCredentials: true})
        console.log(res.data.bidsHistory)
        setBidsHistory(res.data.bidsHistory)
    })
    return (
        <div className="d-flex column  justify-center align-center ">
            <h1 className="title m-50">Bids History</h1>
            <div className="boxOne d-flex column justify-center align-center w-300">
                <h1>Your Bids</h1>
                <div className="boxTwo min-400 column-reverse W-200 border ">
                    {bidsHistory &&
                    bidsHistory.map((x, i) => {
                        return <div className="d-flex ">
                            <p>{new Date(x.time).toLocaleTimeString()}</p>
                            <p>{x.title} bid:</p>
                            <p className="link">{x.bidValue}</p>
                               </div>})
                    }
                </div>
            </div>
        </div>
    );
};
export default BidsHistory;