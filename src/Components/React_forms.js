import React, { useState } from 'react'

export default function React_form() {
    const [text , settext] = useState("");
    const [email , setemail] = useState("");


const form_submit=(e)=>{
     e.preventDefault();
    alert("submitted");
    
        document.getElementById("show_text").innerHTML= text;
        document.getElementById("show_email").innerHTML= email;

    
}
const textvalidate = (e)=>{
    const box = e.target.value;
    if(box.length > 5){
    document.getElementById("text_error").innerText=text; 
    settext(box);   
    }
}

const emailValidate = (e) =>{
  setemail(e.target.value);
}

  return (
    <div>
        <form onSubmit={form_submit}>

        <input type="text" onChange={(e)=>textvalidate(e)} className='my-3 mx-5' placeholder='Enter your name'/>
        <p id="text_error" style={{display:"none", color:"red" }}>please enter only 5 letter name</p>

        <input type="email" onChange={(e)=>emailValidate(e)} className=' my-3 mx-5' placeholder='Enter email id'/>
        <p id="email_error" style={{display:"none", color:"red" }}>please enter valid email id</p>

        <input type="password" className='my-3 mx-5' placeholder='Enter password'/>

        <button type='submit'   className='btn btn-primary mx-5'>Submit</button>

        </form>

<p id="show_text"></p>
<p id="show_email"></p>


        
    </div>
  )
}
