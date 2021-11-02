import React from 'react'
import {Switch,Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Register from '../Register/Register';
import AddQuestion from '../Addquestion/AddQuestion';
import "./Admin.css"
import AddCandidate from '../AddCandidate/AddCandidate';
import AddFeedback from '../AddFeedback/AddFeedback';
import GetQuestion from '../GetQuestion/GetQuestion';
import GetCandidate from '../GetCandidate/GetCandidate';
import GetFeedback from '../GetFeedback/GetFeedback';

const Admin = () => {

  

    return (
        <>
          <Navbar/>
          <Switch>
            <Route exact path = "/admin/AddCandidate"  component={AddCandidate} />
            <Route exact path = "/admin/AddQuestion"   component={AddQuestion} />
            <Route exact path = "/admin/AddFeedback"  component={AddFeedback} />
            </Switch>
            <Switch>
            <Route exact path = "/admin/GetQuestion"  component={GetQuestion} />
            <Route exact path = "/admin/GetCandidate"  component={GetCandidate} />
            <Route exact path = "/admin/GetFeedback"  component={GetFeedback} />
          
            </Switch>
            
        </>
    )
}

export default Admin;