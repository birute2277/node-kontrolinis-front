import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = ({toolbar, setToolbar, userinfo}) => {
    console.log(userinfo)
    return (
        <div className="d-flex toolbar  align-center just-evenly">
            {!toolbar && <>
                <Link to="/">Register</Link>
                <Link to="/login">Login</Link>
            </>
            }
            {toolbar && <>
                <div className="d-flex column bold">
                    <span className="bold">Name: {userinfo.name} </span>
                    <span className="bold">Money:  {userinfo.money}</span>
                </div>

                <Link to="/createAuction">Create Auction</Link>
                <Link to="/userAuctions">My Auctions</Link>

                <Link to="/allAuctions">All Auctions</Link>
                <Link to="/bidsHistory">Bids History</Link>

                <button  onClick={()=>setToolbar(false)}>Logout</button>
            </>
            }
        </div>
    );
};
export default Toolbar;