import React from 'react'
import Questions from '../Question/Questions'
import QNumbers from '../QuestionNumbers/QNumbers'
import Topbar from '../Topbar/Topbar'
import "./Test.css"

export default function Test() {
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
