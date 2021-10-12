import React from 'react'
import { withRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import "./Admin.css"

function Admin() {
    return (
        <>
          <Navbar/>
        </>
    )
}

export default withRouter(Admin);