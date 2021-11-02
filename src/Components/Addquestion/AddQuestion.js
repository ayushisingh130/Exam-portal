import React,{useState} from"react";
import "./AddQuestion.css";
import List from "./List";

const AddQuestion = () => {

    const[category,setCategory] = useState("");
    const[inputList,setInputList] = useState("");
    const[inputQuestion,setInputQuestion] = useState("");
    const[Items,setItems] = useState([]);

  const inputEvent = (event) => {
     setInputList(event.target.value);
  };
  const newQuestion = (event) => {
    setInputQuestion(event.target.value);
 };

 

  const listOfItems = () => {
      console.log('feature cal;led')
      if(inputList != ""){
          const optionItem = {
              title: inputList,
              isCorrect: false
          }
          console.log(optionItem)
        setItems((oldItems) => {
            return[...oldItems,optionItem]
          })
          setInputList("");
      }
   
  };
  const deleteItems = (tobeDeletedTitle) => {

    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return arrElem.title !== tobeDeletedTitle;
      })
    })
}

const sendData = () => {
    const OptionArray = Items.map(item => {
        console.log(item);
        return {
            title:  item.title,
            IsCorrect: item.isCorrect
        }
    })
    const newQues = {
        Question: {
            title: inputQuestion,
            category: category,
        },
       Options: OptionArray
    }
    console.log(newQues);
    
};

const markItemAsCorrect = (optionText) => {
    console.log(optionText)
    Items.forEach(item => {
        if(item.title === optionText) {
            item.isCorrect = !item.isCorrect
        }
    })
    console.log(Items);
}
  
    return(
        <div className="add_questions">
            <h2> Add a Question </h2>
            <div>
                <select id="cars" onChange={(event) => {setCategory(event.target.value);}}>
                <option value=""  disabled selected> Category</option> 
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="java">JAVA</option>
                    <option value="python">PYTHON</option>
                    <option value="c++">C++</option>
                    <option value="c">C</option>
                    <option value="aptitude">Aptitude</option>
                    <option value="sql">SQL</option>
                </select>
            </div>
            <div className="question_input">
                <label> Question </label>
                <input className="question_text"  type="text" value={inputQuestion} placeholder="Write your question here." onChange={newQuestion} />
            </div>
            <div className="answer_input">
                <label> Answer </label>
                <input type="text" 
                className="answer_text"
                value = {inputList} 
                placeholder="Write your Answer here" 
                onChange ={inputEvent}  />
                <button className="add" onClick = {listOfItems} > ADD </button>
                <ol>
                    {Items.map((item) => {
                        return <List
                        
                        key = {item.title}
                        item = {item}
                        ondelete = {deleteItems}
                        markAsCorrect = {markItemAsCorrect}
                        />
                    })}
                </ol>
                
            </div>
            <button className="submit_btn" onClick={sendData} >Submit Question</button>
        </div>
    );
}

export default AddQuestion;