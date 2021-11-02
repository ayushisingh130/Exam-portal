import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
        <div className="topbarContainer">
         <div className="topbarLeft">
             <span className="logo">CSI</span>
         </div>
         <div className="topbarCenter">  
             <div className="topbarTitle">
                 Admin-Page
             </div> 
         </div>
         <div className="topbarHeadings">
                    <div className="get_dropdown">
                        <button className="get_btn"> GET </button>
                        <div class="get_content">
                            <Link to="/admin/GetQuestion" > GET QUESTIONS </Link>
                            <Link to="/admin/GetCandidate" > GET CANDIDATE </Link>
                            <Link to="/admin/GetFeedback" > GET FEEDBACK QUESTIONS</Link>
                        </div>
                    </div>
                    <div className="add_dropdown">
                        <button className="add_btn"> ADD </button>
                        <div class="add_content">
                            <Link to="/admin/AddQuestion" > ADD QUESTIONS </Link>
                            <Link to="/admin/AddCandidate" > ADD CANDIDATE </Link>
                            <Link to="/admin/AddFeedback" > ADD FEEDBACK QUESTIONS</Link>
                        </div>
                    </div>
                   
                    <button className="leaderboard_btn"> LEADERBOARD </button>
                        
            </div>
         <div className="topbarRight">
             <div>
        
             </div>
             <button>Log Out</button>
         </div> 
        </div> 
        </>
    )
}
