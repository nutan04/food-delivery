import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export class card extends Component {
  render() {
    return (
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/random/100×100/?pizza" style={{
            height:"250px",width:"100%"
        }} />
        <Card.Body>
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
              <option value="Half">Half</option>
              <option value="Full">Full</option>
  
          </select>
       
        
         
        </div>
        <Card.Body>
        <Button variant="primary" className='w-100'>Buy Now</Button>
        </Card.Body>
        
      </Card>
    )
  }
}

export default card