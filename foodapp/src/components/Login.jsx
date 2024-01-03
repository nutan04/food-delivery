import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {

    const [values, setValues] = useState({
       
        email: "",
        password: ""
      });
    let navigate=useNavigate()
      const handleInputChange = (event) => {
        /* event.persist(); NO LONGER USED IN v.17*/
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
    
      
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/loginuser",{
        method:"post",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            email:values.email,
           
            password:values.password,
        })

    })

  const json=await response.json();
    
        console.log(json);
        if(!json.success){
alert("enter valid credential")
        }
        if(json.success){
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken "));
           navigate("/")
                    }
      };
  return (
   <>
  <Navbar/>
    <section className="container-fluid mt-5">
    <div className="row justify-content-md-center">
        <form className="col-md-6 col-sm-12 bg-white p-5 rounded shadow" onSubmit={handleSubmit}>
            <div className="col-12 text-center">
                <h3 className="text-primary"><strong>Login Now</strong></h3>
            </div>
            
            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' value={values.email} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"  name='password' value={values.password} onChange={handleInputChange}/>
            </div>
           
           
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary btn-rounded w-75">Register Now</button>
            </div>
            <div className="mb-3 text-center text-secondary mt-3">
             <Link to="/signup">I'm new user</Link>  
            </div>
           
        </form>
    </div>
</section>
   </>
  )
}
