import React, { useState } from "react";
import './index.css';


const App=()=>{


  const Validation=()=>{
    if (Fullname.fname.length === 0) {
      alert('Invalid Form, First Name can not be empty')
      return 
    }
    if (Fullname.lname.length === 0) {
      alert('Invalid Form, Last Name can not be empty')
      return
    }
    if (Fullname.Email.length ===0) {
      alert('Invalid Form, Email can not be empty')
      return
    }
    if (Fullname.password.length === 0) {
      alert('Invalid Form, password can not be empty')
      return
    }        
  };


const[Fullname,setFullname]=useState({
  fname:'',
  lname:'',
  Email:'',
  password:''
});

const InputEvent=(event)=>{
  const {value,name}=event.target;
  setFullname((prevalu)=>{
    return{
      ...prevalu,
      [name]:value
     
    }
  })
};
const onSubmit=(event)=>{
  // event.preventDefault();
  // alert("form is submited"); 
  
}


  return(
    <>
    <h1 className="main_heading">Pleas fill this form</h1>
    <div className="container">
    <h1>Hii this is Form Validation</h1>
    <form onClick={onSubmit}>
    <label>First Name</label>
      <input type="text" 
      placeholder="Enter your First name" 
        name="fname"
        value={Fullname.fname}
        onChange={InputEvent}
        autoComplete="off"
      />
      <label>Last Name</label>
      <input type="text" 
      placeholder="Enter your  Last name" 
        name="lname"
        value={Fullname.lname}
        onChange={InputEvent}
        autoComplete="off"
      />
      <label>Email</label>
      <input type="text" 
      placeholder="Enter your Email" 
        name="Email"
        value={Fullname.Email}
        onChange={InputEvent}
        autoComplete="off"
      />
      <label>Password</label>
      <input type="password" 
      placeholder="Enter your password" 
        name="password"
        value={Fullname.password}
        onChange={InputEvent}
        autoComplete="off"
      />
      <button onClick={Validation}>Submit</button>
      
    </form>
    </div>
    </>
  );
}

export default App;