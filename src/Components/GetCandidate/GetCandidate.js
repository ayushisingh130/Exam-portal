import React, { useState, useEffect } from "react";
import Axios from "axios";

const GetCandidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [reloading, setreloading] = useState(true);

  useEffect( async () => {
    
    if(reloading){
      let candidatestemp = [];
      const {data} = await Axios.get("https://radiant-scrubland-91561.herokuapp.com/api/candidates/all")
      for(const candidate of data){
          const {data:details} = await Axios.get(
              `https://radiant-scrubland-91561.herokuapp.com/api/users/${candidate}`)
              candidatestemp.push(details);
      }
      setCandidates(candidatestemp);
      console.log(candidatestemp);
      setreloading(false);
      console.log(data);
    } 
}, [reloading]);

const deletecandidate = (id) => {
  console.log(id);
  Axios.delete(`https://radiant-scrubland-91561.herokuapp.com/api/users/${id}`).then(res => {
   setreloading(true);
   console.log("deleted");
 });
}
     /* if(isloading){
        Axios.get(
            " https://radiant-scrubland-91561.herokuapp.com/api/candidates/all"
          )
            .then((response) => {
                let candidatestemp = [];
              response.data.forEach((candidate) => {
                  Axios.get(
                    `https://radiant-scrubland-91561.herokuapp.com/api/users/${candidate}`).then((details) => {
                      //console.log(details.data); 
                   candidatestemp.push("Ayushi");
                    });
                  });
                  setCandidates(candidatestemp);
                  console.log(candidatestemp);
            }
      
              )
            .catch((error) => console.log(error))
      }
  */  
 


    return(
        
        <>
            <h1>GetCandidate</h1>
            {console.log(candidates)}
            {
                candidates.map((candidate) => (
               <div>
                  <p> Name :{candidate.name} </p>
                  <p> Student Number:{candidate.studentNumber} </p>
                  <p> Roll Number :{candidate.rollNumber} </p>
                  <p> E-mail :{candidate.email} </p>
                  <p> Mobile Number :{candidate.phoneNumber} </p>
                  <p> Branch :{candidate.branch} </p>
                  <p> IsHostler :{candidate.ishostler} </p>
                  <p> Attended the Exam :{candidate.hasAppeared} </p>
                  <p> Time of Registration :{candidate.createdAt} </p>
                  <p> Exam :{candidate.loginAt} </p>
                  <button onClick={() => deletecandidate(candidate._id)} >Delete Candidate</button>
                  <br/>
               </div>
           ))
           } 
        </>
    );
}

export default GetCandidate;

