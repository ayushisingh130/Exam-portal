import React,{useState,useEffect} from "react";
import Axios from "axios";

const GetCandidate = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get(" https://radiant-scrubland-91561.herokuapp.com/api/candidates/all")
        .then(response => console.log(response.data))
        .then(error => console.log(error))
       
    },[]);
    

    return(
        
        <>
            <h1>GetCandidate</h1>
            <button >get</button>
            <div>
            { users.map((user) => 
                
                <>
                    <div>
                    <h1>{user.id}</h1>
                    <h2>hey</h2>
                    <h1>{user.name}</h1>

                    </div>
                </>
                
            )}
            </div>
        </>
    );
}

export default GetCandidate;