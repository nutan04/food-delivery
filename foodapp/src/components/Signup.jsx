import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';
import Navbar from './Navbar';
// import '../components/signup.css'
export default function Signup() {
    const [values, setValues] = useState({
        name: "",
        geolocation: "",
        email: "",
        password: ""
      });
    
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
        const response= await fetch("http://localhost:5000/api/createuser",{
        method:"post",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({name:values.name,
            email:values.email,
            location:values.geolocation,
            password:values.password,
        })

    })

  const json=await response.json();
    
        console.log(json);
        if(!json.success){
alert("enter valid credential")
        }
      };
    
  return (
    <>
    <Navbar/>
    <section className="container-fluid mt-5">
    <div className="row justify-content-md-center">
        <form className="col-md-6 col-sm-12 bg-white p-5 rounded shadow" onSubmit={handleSubmit}>
            <div className="col-12 text-center">
                <h3 className="text-primary"><strong>Register Now</strong></h3>
            </div>
            
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' value={values.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Address</label>
                <input type="text" className="form-control" id="location"  name='geolocation' value={values.geolocation} onChange={handleInputChange} />
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
             <Link to="/login">Already register user</Link>  
            </div>
           
        </form>
    </div>
</section>
</>
  )
}
