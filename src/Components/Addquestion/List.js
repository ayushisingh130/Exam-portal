import React,{useState} from "react";

const List = (props) => {

    const [checked, setchecked] = useState(false);

    const ischecked = () => {

        if(checked == true)
        setchecked(false);
        
        else
        setchecked(true);
        console.log(!checked);
        props.markAsCorrect(props.item.title);
    }
    
  return(
        <>
        <div className = "todo_style">
            <button className= "delete"
             onClick = {() => {
                 props.ondelete(props.item.title);
             }}>
            <i className="fas fa-backspace" 
            aria-hidden = "true"
            />x</button>
             <input checked={checked}
             onChange = {ischecked} 
             type="checkbox" 
             id="list" 
             value="list"/> <li> {props.item.title} </li>
        </div>
         
        </>
    )
};

export default List;