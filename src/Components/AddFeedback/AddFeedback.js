import React,{useState} from "react";

const AddFeedback = () => {
    
    const [feed, setfeed] = useState("");
    
    const addFeedback = () => {
        console.log(feed);
        setfeed("");
    }
    return(
        <>
            <div className="feedback_main">
                <h3> Write a Feedback Question </h3>
                    <input type="text" placeholder="Write Feedback" value={feed} onChange={(event) => {setfeed(event.target.value)}} />
                    <div id="btn">
                        <button type="submit" onClick={addFeedback}  id="submitbtn"> Submit </button>
                    </div>
            </div>
        </>    );
}

export default AddFeedback;