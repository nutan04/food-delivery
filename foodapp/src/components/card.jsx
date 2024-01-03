import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function card(props) {
  let option =props.option;
  let optionkey=Object.keys(option)
  return (
    <>
        
    <div class=" col-lg-3 col-md-4 col-sm-12">

    
       
        <Card  style={{ width: '18rem' }} className='mb-4'>
        <Card.Img variant="top" src={props.imgsrc} style={{
            height:"250px", objectFit:"fill"
        }} />
        <Card.Body>
        <Card.Title>{props.foodName}</Card.Title>
        <Card.Title>Total Price : INR 200</Card.Title>
          
         
        </Card.Body>
        <div className="container w-100">
          <select className='m-2 h-100 w-50 ' name="" id="">
              {
                  Array.from(Array(6),(e,i)=>{
  return(<option value={i+1}>{i+1}</option>)
                  })
              }
              
          </select>
          <select className='m-2 h-100 w-50' name="" id="">
            {
              optionkey.map((data)=>{
                return (<>
                <option  key={data} value={data}>{data}</option>
                </>)
              })
            }
             
  
          </select>
       
        
         
        </div>
        <Card.Body>
        <Button variant="primary" className='w-100'>Buy Now</Button>
        </Card.Body>
        
      </Card>
      </div>
    
      </>
  )
}


