import React, {useState} from 'react';
import {useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const SingleCard = ({item}) => {

    const nav = useNavigate()
    const {id} =useParams()
    // const {x} = useParams()
    //console.log('mano', id)
    const gotoSingle = (id)=> {
        console.log("click", id)
        nav('/allAuctions/singleAuction/' + id)
    }
    console.log(item)
    return (
        <div className="d-flex auction">

            <img  className="auction-image" src={item.photo} onClick={()=>gotoSingle(item._id)}alt="" />
            <div className="info d-flex grow2 wrap just-evenly align-center">
                <h2>{item.title}</h2>

                <div className="info d-flex grow3 wrap just-evenly align-center" >
                    <h2>{item.currentPrice}</h2>
                    <h2>{item.name}</h2>
                    <h2>{item.timeCreated}</h2>
                    <h2>{}</h2>
                </div>
            </div>

            {/*<div className="d-flex auction " key={i}>*/}
            {/*    <img  className="auction-image" src={photo} alt="" />*/}
            {/*    <div className="info d-flex grow2 wrap just-evenly align-center">*/}
            {/*        <h2>{title}</h2>*/}

            {/*        <div className="info d-flex grow3 wrap just-evenly align-center" >*/}
            {/*            <h2>{currentPrice}</h2>*/}
            {/*            <h2>{name}</h2>*/}
            {/*            <h2>{timeCreated}</h2>*/}
            {/*            <h2>{}</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>)}*/}
            {/*<Link to={`/post/${item._id}`}>*/}
            {/*    <img src={item.photo} alt=""/>*/}
            {/*</Link>*/}
            {/*<h2>{item.user}</h2>*/}
            {/*<h3>{item.title}</h3>*/}
            {/*<h3>{new Date(Number(item.timeCreated)).toLocaleString('lt-LT')}</h3>*/}
        </div>
    );
};

export default SingleCard;