import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
// import {FaRegComment, FaAlignJustify} from "react-icons/fa"
// import { BsEye} from "react-icons/bs"
// import { FiPaperclip} from "react-icons/fi"

const BidsHistory = () => {
    const [bidsHistory, setBidsHistory] = useState([])
    useEffect(async () => {
        const res = await axios.get("http://localhost:4000/getUserBids", {withCredentials: true})
        console.log(res.data.bidsHistory)
        setBidsHistory(res.data.bidsHistory)


    })
    return (
        <div className="m-50">
            <h3 className="font">Kiti Žiūrėjo</h3>
            <div className="d-flex m-7-0">
            <img className="sidebar-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbR4vq-6Y02OxLTHl04vFd6JVDRJV6xhgzBQ&usqp=CAU"/>
            <div className="text-box">
                <p className="text-blue">Pufas geltonas velvetas 60x40x44 - kojų kėdutė</p>
                <h1 className="size-16 font">€ 179.00</h1>
                <div className=" text-grey m-t-6">
                    <p>Statymai: 22</p>
                    <p>Liko laiko: 1:22:32</p>
                </div>
            </div>

        </div>

            <div className="d-flex m-7-0">
                <img className="sidebar-img" src="https://images2.imgix.net/p4dbimg/523/images/8721308-10x8-crop.jpg?fit=fill&trim=color&trimcolor=FFFFFF&trimtol=5&bg=FFFFFF&w=768&h=576&fm=pjpg&auto=format" alt=""/>
                <div className="text-box">
                    <p className="text-blue">Pufas pilkas/juodas/konjako velvetas 60x40x44 - kojų kėdutė</p>
                    <h1 className="size-16 font">€ 179.00</h1>
                    <div className=" text-grey m-t-6">
                        <p>Statymai: 22</p>
                        <p>Liko laiko: 1:22:32</p>
                    </div>
                </div>
            </div>
            <div className="d-flex m-7-0">
            <img className="sidebar-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLEuCmQ3ZRwhUr-OSIz4afbmJ0DcY6dUyhQ&usqp=CAU"/>
            <div className="text-box">
                <p className="text-blue">Pufas tiurkio/pilkas velvetas 60x40x44 - kojų kėdutė</p>
                <h1 className="size-16 font">€ 140.00</h1>
                <div className=" text-grey m-t-6">
                    <p>Statymai: 22</p>
                    <p>Liko laiko: 1:22:32</p>
                </div>
            </div>
        </div>
            <div className="d-flex m-7-0">
                <img className="sidebar-img" src="https://www.varle.lt/static/uploads/products/235x195/702/fen/feniks-meble-pufas-york-h-feniks-oda-anilina.jpg"/>
                <div className="text-box">
                    <p className="text-blue"> Pufas oranžinis velvetas 60x40x44 - Krėslas + kojų kėdutė</p>
                    <h1 className="size-16 font">€ 179.00</h1>
                    {/*onClick={}*/}
                    <div className=" text-grey m-t-6">
                        <p>Statymai: 22</p>
                        <p>Liko laiko: 1:22:32</p>
                    </div>
                </div>
            </div>


            <div className="d-flex m-7-0">
                <img className="sidebar-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YJlmiHQslKd9U9Fht1aGJ95hmgB0vULehA&usqp=CAU"/>
                <div className="text-box">
                    <p className="text-blue">Pufas pilkas/konjako velvetas 60x40x44 - kojų kėdutė</p>
                    <h1 className="size-16 font">€ 150.00</h1>
                    <div className=" text-grey m-t-6">
                        <p>Statymai: 22</p>
                        <p>Liko laiko: 1:22:32</p>
                    </div>
                </div>
            </div>
        </div>
        // <div className="d-flex column  justify-center align-center ">
        //     <h1 className="title m-50">Bids History</h1>
        //     <div className="boxOne d-flex column justify-center align-center w-300">
        //         <h1>Your Bids</h1>
        //         <div className="boxTwo min-400 column-reverse W-200 border ">
        //             {bidsHistory &&
        //             bidsHistory.map((x, i) => {
        //                 return <div className="d-flex ">
        //                     <p>{new Date(x.time).toLocaleTimeString()}</p>
        //                     <p>{x.title} bid:</p>
        //                     <p className="link">{x.bidValue}</p>
        //                        </div>})
        //             }
        //         </div>
        //     </div>
        // </div>
    );
};
export default BidsHistory;