import React from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const SingleCard = ({item}) => {

    const nav = useNavigate()
    const {id} = useParams()

        const gotoSingle = (id) => {
        console.log("click", id)
        nav('/allAuctions/singleAuction/' + id)
    }
    console.log(item)
    return (
        <div className="d-flex auction">
            <div className="image-box">
                <img className="auction-image" src={item.photo} onClick={() => gotoSingle(item._id)} alt=""/>
            </div>

            <div className="info-1 d-flex grow2 wrap just-evenly align-center">
                <h2>{item.title}</h2>

                <div className="info d-flex grow3 wrap just-evenly align-center">
                    <h2>{item.currentPrice} €</h2>
                    <h2>{item.name}</h2>
                    <h2>{item.timeCreated}</h2>
                </div>

            </div>
        </div>
    );
};
export default SingleCard;
