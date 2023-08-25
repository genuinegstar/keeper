import React,{useState} from "react";

function CreateArea(props) {
  const[note,setNote]=useState({
    title:'',
    content:''
    });
const handleChange = (event)=>{
  const{value,name}=event.target;

  setNote(prev=>({
   ...prev,
   [name]:value
  }))
  

}
const handleSubmit=(event)=>{
  event.preventDefault();
  props.addNewNote(note);
  
  setNote(
    {
      title:'',
      content:''
    }
  )
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
