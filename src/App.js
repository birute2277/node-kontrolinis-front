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
import BidsHistory from "./pages/BidsHistory";
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

                    <Route path="/createAuction" element={<CreateAuction/>}/>
                    <Route path="/allAuctions" element={<AllAuctionsPage setUserinfo={setUserinfo}/>}/>
                    <Route path="/bidsHistory" element={<BidsHistory/>}/>
                    <Route path="/allAuctions/singleAuction/:id" element={<SingleAuction userinfo={userinfo}/>}/>
                    <Route path="/userAuctions" element={<UserAuctionPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
