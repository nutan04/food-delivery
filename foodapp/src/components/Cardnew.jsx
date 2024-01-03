import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatchCart,useCart } from './ContextReducer';
export default function Cardnew(props) {
  let dispatch=useDispatchCart();
  const priceRef=useRef(); 
  let option =props.option;
  let optionkey=Object.keys(option)
  let foodItems=props.foodItem;
  let data=useCart()
  const [Qyt,setQyt]=useState(1);
  const [Size,setSize]=useState("")

  

  const handleAddtoCart=async()=>{
await dispatch({type:"ADD",id:foodItems._id,name:foodItems.name,price:foodItems.finalPrice,qyt:Qyt,size:Size})
console.log(data);
  }
  let finalPrice=Qyt *parseInt(option[Size]);
  useEffect(()=>{
setSize(priceRef.current.value)
  })
  return (
    <>
        
    <div class=" col-lg-3 col-md-4 col-sm-12">

    
       
        <Card  style={{ width: '18rem' }} className='mb-4'>
        <Card.Img variant="top" src={foodItems.img} style={{
            height:"250px", objectFit:"fill"
        }} />
        <Card.Body>
        <Card.Title>{foodItems.name}</Card.Title>
        <Card.Title>₹ {finalPrice} /-</Card.Title>
          
        
        </Card.Body>
        <div className="container w-100">
          <select className='m-2 h-100 w-50 ' name="" id="" onChange={(e)=>setQyt(e.target.value)}>
              {
                  Array.from(Array(6),(e,i)=>{
  return(<option value={i+1}>{i+1}</option>)
                  })
              }
              
          </select>
          <select className='m-2 h-100 w-50' name="" id="" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
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
        <Button variant="primary" className='w-100' onClick={handleAddtoCart}>Order Now</Button>
        </Card.Body>
        
      </Card>
      </div>
    
      </>
  )
}
