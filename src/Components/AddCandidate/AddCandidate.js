import React, { useState } from "react";


const AddCandidate = () => {

    const [fullData, setFullData] = useState({
        name: "",
        studentNumber: "",
        rollNumber: "",
        email: "",
        mobileNumber: "",
        branch: "",
        residency: "",
    })

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFullData((preValue) => {

            return {
                ...preValue,
                [name]: value
            }
        })

    };

    const onSubmit = (event) => {
        const user = { ...fullData };
        console.log(user)
        
        event.preventDefault();
    }

    return (
        <>
            <div className="form_main" >
            <h3> Register a Candidate </h3>
            <div className="form_center" >
                <form onSubmit={onSubmit}>
                    <input className="input" type="text" placeholder="Full Name" name="name" onChange={inputEvent} value={fullData.name} />
                    <input className="input" type="text" placeholder="Student Number" name="studentNumber" onChange={inputEvent} value={fullData.studentNumber} />
                    <input className="input" type="text" placeholder="Roll Number" name="rollNumber" onChange={inputEvent} value={fullData.rollNumber} />
                    <input className="input" type="email" placeholder="College Email" name="email" onChange={inputEvent} value={fullData.email} />
                    <input className="input" type="text" maxLength="10" minLength="10" placeholder="Whatsapp Number" name="mobileNumber" onChange={inputEvent} value={fullData.mobileNumber} />
                    <select className="input" name="branch" onChange={inputEvent} value={fullData.branch}>
                        <option value="BRANCH">Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="CS">CS</option>
                        <option value="CSE(DS)">CSE(DS)</option>
                        <option value="CSE(ML)">CSE(ML & AI)</option>
                        <option value="CSIT">CSIT</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                    </select>
                    <select className="input" name="residency" value={fullData.residency} onChange={inputEvent}>
                        <option value="" disabled selected >Residency</option>
                        <option value="HOSTELLER">HOSTELLER</option>
                        <option value="DAY-SCHOLAR">DAY-SCHOLAR</option>
                    </select>
                    <div id="btn">
                        <button type="submit" variant="contained" size="large"  id="submitbtn"> Register </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
export default AddCandidate;