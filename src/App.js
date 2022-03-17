import './App.css'
import React from "react"
import {useState} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import Toolbar from "./components/Toolbar";
import CreateAuction from "./pages/CreateAuction";
import AllAuctionsPage from "./pages/AllAuctionsPage";
import UserAuctionPage from "./pages/UserAuctionPage";
import BidHistory from "./pages/BidHistory";
import SingleAuction from "./components/SingleAuction";


function App() {
    const [toolbar, setToolbar] = useState(false)
    const [userinfo, setUserinfo] = useState({name:"", money:0})



    return (
        <div>
            <BrowserRouter>
               <Toolbar toolbar={toolbar} setToolbar={setToolbar} userinfo={userinfo}/>

                <Routes>


                    <Route path="/" element={<RegisterPage setUserinfo={setUserinfo}/>}/>
                    <Route path="/login" element={<LoginPage setUserinfo={setUserinfo} setToolbar={setToolbar}/>}/>

                    <Route path="/userAuctions" element={<UserAuctionPage/>}/>
                    <Route path="/createAuction" element={<CreateAuction/>}/>
                    <Route path="/allAuctions" element={<AllAuctionsPage setUserinfo={setUserinfo}/>}/>
                    <Route path="/bidHistory" element={<BidHistory/>}/>
                    <Route path="/allAuctions/singleAuction/:id" element={<SingleAuction/>}/>
                    {/*<Route path="/post/:id" element={<UserAuctionPage/>}/>*/}


                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
