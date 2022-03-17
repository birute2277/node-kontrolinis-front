import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
// import axios from "axios";
import http from "../plugins/http";


const SingleAuction = () => {
    const {id} =useParams()
    console.log('mano', id)

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


    // useEffect(async () => {
    //
    //     try{
    //         const res = await axios.get("http://localhost:4000/allAuctions/singleAuction/:id", {withCredentials: true})
    //         console.log(res.data)
    //         if(res.data.success) {
    //             setSingleAuctions(res.data.posts)
    //             nav('/singleAuction')
    //             // nav('/allAuctions/singleAuction/' + id)
    //         }   else {
    //             setSingleAuctions(res.data.message)
    //         }
    //
    //     } catch (e) {
    //         console.log(e)
    //     }
    //
    // }, [])

    return (
        <div>
            {id}
            <h1>{singleAuctions.name}</h1>
            {/*{singleAuctions}*/}
        </div>
    );
};

export default SingleAuction;