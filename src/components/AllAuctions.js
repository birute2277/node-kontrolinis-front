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
                // setToolbar(false)
                nav('/allAuctions')
            }   else {
                setAuctions(res.data.message)
            }

        } catch (e) {
            console.log(e)
        }

    }, [])

    // const gotoSingle = (id)=> {
    //     console.log("click", id)
    //     nav('/allAuctions/singleAuction/' + id)
    // }

    return (
        <div className="d-flex column justify-center align-center ">

            <h1 className="title m-50">All Auctions</h1>
            <div className="a-header d-flex ">
                <h2 className="width">Auction item</h2>
                <div className="d-flex a-header-info wrap just-evenly">
                    <h2>Title</h2>
                    <h2>Last price</h2>
                    <h2>User</h2>
                    <h2>Create Time</h2>
                    <h2>Time Left</h2>

                </div>

            </div>
            <div className="auction-1">
                {auctions && auctions.map((x, i ) =>
                    <div className="d-flex auction" key={i}>
                        <SingleCard item={x} />
                        {/*<img onClick={()=>gotoSingle(x._id)} className="auction-image" src={x.photo} alt="" />*/}
                        {/*<div className="info d-flex grow2 wrap just-evenly align-center">*/}
                        {/*    <h2>{x.title}</h2>*/}

                        {/*    <div className="info d-flex grow3 wrap just-evenly align-center" >*/}
                        {/*        <h2>{x.currentPrice}</h2>*/}
                        {/*        <h2>{x.name}</h2>*/}
                        {/*        <h2>{x.timeCreated}</h2>*/}
                        {/*        <h2>{}</h2>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>)}
                {/*<h2>{userinfo.name}</h2>*/}

            </div>

            {/*{auctions.map((x, i) => <UserAuctionPage item={x} key={i}/>)}*/}
        </div>
    );
};

export default AllAuctions;