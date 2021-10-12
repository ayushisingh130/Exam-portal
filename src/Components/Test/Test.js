import React from 'react'
import { withRouter } from 'react-router-dom';
import Questions from '../Question/Questions'
import QNumbers from '../QuestionNumbers/QNumbers'
import Topbar from '../Topbar/Topbar'
import "./Test.css"

function Test() {
    return (
        <>
         <Topbar/>
         <div className="testContainer">
           <div className="qnumContainer">
             <QNumbers/>
           </div>
           <div className="questionsContainer">
             <Questions/>  
           </div>
         </div> 
        </>
    )
}

export default withRouter(Test);