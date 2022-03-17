import React, {useEffect, useContext} from 'react';
import MainContext from "../context/MainContext";
import axios from "axios";

import SingleCard from "../components/SingleCard";
import http from "../plugins/http";
import {useParams} from "react-router-dom";


const UserAuctionPage = () => {

    let{Items, setItems}= useContext(MainContext)

    const {id} = useParams()
    // const [auctions, setAuctions] = useState(null)

    useEffect(async () => {
        try {
            const res = await axios.get("http//localhost:4000/getuserAuctions", {withCredentials: true})
            setItems(res.data)
        } catch (e) {
            console.log(e)
        }

        // console.log(id)
        // // http.get("getSingleAuction/" + id).then(res => {
        //     http.get("getUserAuction/" + id).then(res => {
        //     console.log(res)
        //
        //     if (res.success) {
        //          setAuctions(res.auctions)
        //     }

        // })

    }, [])


    return (
        <div>
            <h1>My Auctions</h1>

            {Items && Items.map((x, i) => {
                return <SingleCard key = {i} Item = {x}/>
            })}
            // })

            {/*{auctions && <div>*/}
            {/*    <SingleCard item={auctions}/>*/}
            {/*    <div className="p-20">*/}
            {/*        /!*{auctions && <CreteComment setAuctions={setAuctions} id={auctions._id}/>}*!/*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        {auctions.comments.map((x, i) => <SingleCard item={x} key={i}/>)}*/}
            {/*    </div>*/}

            {/*</div> }*/}



        </div>
    );
};

export default UserAuctionPage;